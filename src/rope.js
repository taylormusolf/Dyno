class Rope {
  constructor(){
    //this.ropeTip image
    this.ropeJoints = [];
    this.ropeNots = [];
    this.lastRopeDef;
    this.active = false;
  }
  update()
    {
        if (this.isActive)
        {
            if (keyboard.isKeyDown(Controls.aimUp.keyboard))
            {
                this.contract();
                Client.sendImmediately(Events.client.CURRENT_WORM_ACTION, new InstructionChain("getWeapon.contract"));

            } else if (keyboard.isKeyDown(Controls.aimDown.keyboard))
            {
                this.expand();
                Client.sendImmediately(Events.client.CURRENT_WORM_ACTION, new InstructionChain("getWeapon.expand"));
            }

        }
    }
    // export function shotRay(startPiontInMeters, endPiontInMeters)
    // {
    //     var input = new b2RayCastInput();
    //     var output = new b2RayCastOutput();
    //     var intersectionPoint = new b2Vec2();
    //     var normalEnd = new b2Vec2();
    //     var intersectionNormal = new b2Vec2();

    //     endPiontInMeters.Multiply(30);
    //     endPiontInMeters.Add(startPiontInMeters);

    //     input.p1 = startPiontInMeters;
    //     input.p2 = endPiontInMeters;
    //     input.maxFraction = 1;
    //     var closestFraction = 1;
    //     var bodyFound = false;

    //     var b = new b2BodyDef();
    //     var f = new b2FixtureDef();
    //     for (b = Physics.world.GetBodyList(); b; b = b.GetNext())
    //     {
    //         for (f = b.GetFixtureList(); f; f = f.GetNext())
    //         {
    //             if (!f.RayCast(output, input))
    //                 continue;
    //             else if (output.fraction < closestFraction && output.fraction > 0)
    //                 {
    //                     //Fixes bug where I was getting extremely small e numbers
    //                     // in the lower sections of the physics world. It was causing the
    //                     // ray to shot only a small disntance from the orign of it.
    //                     if (output.fraction > 0.001)
    //                     {
    //                         closestFraction = output.fraction;
    //                         intersectionNormal = output.normal;
    //                         bodyFound = true;
    //                     }
    //             }
    //         }

    //     }
    //     intersectionPoint.x = startPiontInMeters.x + closestFraction * (endPiontInMeters.x - startPiontInMeters.x);
    //     intersectionPoint.y = startPiontInMeters.y + closestFraction * (endPiontInMeters.y - startPiontInMeters.y);

    //     if (bodyFound)
    //     {
    //         return intersectionPoint;
    //     }

    //     return null;
    // }

    activate(worm)
    {
        this.worm = worm;

        if (this.ammo > 0 && !this.getIsActive())
        {
            
            AssetManager.getSound("NinjaRopeFire").play();
            
            var dir = worm.target.getTargetDirection().Copy();
            var contact = Physics.shotRay(worm.body.GetPosition(), dir);

            if (contact)
            {
                //AssetManager.sounds["NinjaRopeImpact"].play();
                
                this.ammo--;
                this.isActive = true;
                var fixDef = new b2FixtureDef;
                fixDef.density = 10.5;
                fixDef.friction = 1.0;
                fixDef.restitution = 0.3;
                fixDef.shape = new b2PolygonShape;
                fixDef.shape.SetAsBox(0.2, 0.2);

                var bodyDef = new b2BodyDef;
                bodyDef.type = b2Body.b2_staticBody;
                bodyDef.position.x = contact.x;
                bodyDef.position.y = contact.y;

                this.anchor = Physics.world.CreateBody(bodyDef).CreateFixture(fixDef).GetBody()
                this.ropeNots.push(this.anchor);

                fixDef.shape = new b2CircleShape(0.15);

                var ropeDef = new b2DistanceJointDef();
                ropeDef.frequencyHz = 10.0;
                ropeDef.dampingRatio = 50.0;

                var prevBody = this.anchor;
                var direction = this.anchor.GetPosition().Copy();
                var wormPos = worm.body.GetPosition().Copy();
                wormPos.Subtract(direction);

                var distance = 5;

                if (wormPos.Length() > distance)
                    distance = Math.floor(wormPos.Length() / 0.5);

                wormPos.Normalize();
                direction = wormPos;

                for (var i = 1; i < distance; ++i)
                {
                    var bd = new b2BodyDef();
                    bd.type = b2Body.b2_dynamicBody;

                    var pos = this.anchor.GetPosition().Copy();
                    var dScaled = direction.Copy();
                    dScaled.Multiply(0.5 * i);
                    pos.Add(dScaled);


                    bd.position.SetV(pos);

                    var nextBody;
                    if (i == distance - 1)
                    {
                        ropeDef.frequencyHz = 25.0;
                        // ropeDef.dampingRatio = 25.0;
                        nextBody = worm.body;

                    }
                    else
                    {
                        nextBody = Physics.world.CreateBody(bd)
                        nextBody.CreateFixture(fixDef);
                        nextBody.SetFixedRotation(true);
                        this.lastRopeDef = ropeDef;
                        this.ropeNots.push(nextBody);
                    }
                    ropeDef.bodyA = prevBody;
                    ropeDef.bodyB = nextBody;


                    var joint = Physics.world.CreateJoint(ropeDef);
                    this.ropeJoints.push(joint);

                    joint.SetLength(0.02);
                    prevBody = nextBody;
                }

            }
        } else if (this.getIsActive())
        {
            this.deactivate();
        }

        //super.activate(worm);
    }

    deactivate()
    {
        this.setIsActive(false);
        this.destory();
    }

    destory()
    {
        for (var i = 0; i < this.ropeNots.length; i++)
        {
            if ((this.ropeNots[i].GetUserData() instanceof Worm) == false)
            {
                Physics.world.DestroyBody(this.ropeNots[i]);
            }
        }

        for (var i = 0; i < this.ropeJoints.length; i++)
        {
            Physics.world.DestroyJoint(this.ropeJoints[i]);
        }

        this.ropeNots = [];
        this.ropeJoints = [];

    }

    contract()
    {
        if (this.ropeJoints.length > 3 && this.ropeNots.length > 3)
        {
            var lastJoint = this.ropeJoints[this.ropeJoints.length - 2];
            var lastBody = this.ropeNots.pop();
            Physics.world.DestroyBody(lastBody);


            this.lastRopeDef.bodyA = this.ropeNots[this.ropeNots.length - 1];
            this.lastRopeDef.bodyB = this.worm.body;


            var joint = Physics.world.CreateJoint(this.lastRopeDef);
            joint.SetLength(0.02);
            Physics.world.DestroyJoint(this.ropeJoints.pop());
            Physics.world.DestroyJoint(this.ropeJoints.pop());
            this.ropeJoints.push(joint);
            joint.SetLength(0.2);
        }
    }
  expand()
  {
      if (this.ropeJoints.length < 40 && this.ropeNots.length < 40)
      {
          Physics.world.DestroyJoint(this.ropeJoints.pop());
          var lastBody = this.ropeNots[this.ropeNots.length - 1];
          var lastJoint = this.ropeJoints[this.ropeJoints.length - 1];

          var fixDef = new b2FixtureDef;
          fixDef.density = 0.5;
          fixDef.friction = 1.0;
          fixDef.restitution = 0.0;
          fixDef.shape = new b2CircleShape(0.15);

          var bd = new b2BodyDef();
          bd.type = b2Body.b2_dynamicBody;
          var direction = this.worm.body.GetPosition().Copy();
          var wormPos = lastBody.GetPosition().Copy();
          wormPos.Subtract(direction);
          wormPos.Multiply(0.8);
          wormPos.Add(this.worm.body.GetPosition());
          bd.position.SetV(wormPos);

          var nextBody = Physics.world.CreateBody(bd)
          nextBody.CreateFixture(fixDef);
          nextBody.SetFixedRotation(true);


          this.lastRopeDef.bodyA = lastBody;
          this.lastRopeDef.bodyB = nextBody;

          this.ropeNots.push(nextBody);

          var joint = Physics.world.CreateJoint(this.lastRopeDef);
          this.ropeJoints.push(joint);
          joint.SetLength(0.3);
          this.lastRopeDef.bodyA = nextBody;
          this.lastRopeDef.bodyB = this.worm.body;
          this.playerJoint = Physics.world.CreateJoint(this.lastRopeDef)
          this.ropeJoints.push(this.playerJoint);



      }
  }




  draw(ctx){
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.lineWidth = 4;

    for (let i = 0; i < this.ropeNots.length - 2; i += 2) {
      let p1 = Physics.vectorMetersToPixels(this.ropeNots[i].GetPosition());
      let p2 = Physics.vectorMetersToPixels(this.ropeNots[i + 2].GetPosition());
      ctx.beginPath(); // Start the path
      ctx.moveTo(p1.x, p1.y); // Set the path origin
      ctx.lineTo(p2.x, p2.y); // Set the path destination
      ctx.closePath(); // Close the path
      ctx.stroke();
      if (i === 0){
        let dir = p2.Copy();
        dir.Subtract(p1);
        let angle = Utilies.vectorToAngle(dir) + Utilies.toRadians(-90);

        ctx.save();
        ctx.translate(p1.x, p1.y);

        ctx.rotate(angle);

        this.ropeTip.draw(ctx, -10, -10);

        ctx.restore();
      }
    }
    var p1 = Physics.vectorMetersToPixels(this.ropeNots[this.ropeNots.length - 2].GetPosition());
    var p2 = Physics.vectorMetersToPixels(this.ropeNots[this.ropeNots.length - 1].GetPosition());
    context.beginPath(); // Start the path
    context.moveTo(p1.x, p1.y); // Set the path origin
    context.lineTo(p2.x, p2.y); // Set the path destination
    context.closePath(); // Close the path
    context.stroke();

    var p1 = Physics.vectorMetersToPixels(this.ropeNots[this.ropeNots.length - 1].GetPosition());
    var p2 = Physics.vectorMetersToPixels(this.worm.body.GetPosition());
    context.beginPath(); // Start the path
    context.moveTo(p1.x, p1.y); // Set the path origin
    context.lineTo(p2.x, p2.y); // Set the path destination
    context.closePath(); // Close the path
    context.stroke();


    super.draw(ctx);


  }





}