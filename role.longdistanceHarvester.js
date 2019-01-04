module.exports = {
	run: function(creep) {

		
		if (creep.memory.working == true && creep.carry.energy == 0){
	    	creep.memory.working = false;
	    }
	    else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
	    	creep.memory.working = true;
	    }

	    var harvestInOtherRoom = Game.spawns.Spawn1.memory.harvestInOtherRoom;

		if(harvestInOtherRoom == undefined){
			if(creep.room.name == creep.memory.home){

				if(creep.memory.working == true) {
					var extensions = Game.spawns.Spawn1.room.find(FIND_MY_STRUCTURES, {
	 				filter: { structureType: STRUCTURE_EXTENSION }});
					var lowest = 50;
					var numExtension = 0;
					for (let extension in extensions){
						if(extensions[extension].energy < lowest){
							lowest = extensions[extension].energy;
							numExtension = extension;
						}
					}

			    	if(extensions[numExtension].energy != extensions[numExtension].energyCapacity){
			    		if(creep.transfer(extensions[numExtension], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				            creep.moveTo(extensions[numExtension]);
			    		}
			        }else{
			        	if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
			            	creep.moveTo(Game.spawns.Spawn1);
			        	}
		   			}			
			    }else {
					var source = creep.pos.findClosestByPath(FIND_SOURCES);
					if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
						creep.moveTo(source);
					}        
			    }
			}else{
				var exitDir = creep.room.findExitTo(creep.memory.home);
				exit = creep.pos.findClosestByPath(exitDir);
				creep.moveTo(exit);
			}
		}else{
			if(creep.memory.working != true){
				if(creep.room.name == harvestInOtherRoom){
					var source = creep.pos.findClosestByPath(FIND_SOURCES);
					if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
						creep.moveTo(source);
					}
				}else{
					var exitDir = creep.room.findExitTo(harvestInOtherRoom);
					exit = creep.pos.findClosestByPath(exitDir);
					creep.moveTo(exit);
				}	
			}else{
				if(creep.room.name == creep.memory.home){

					var extensions = Game.spawns.Spawn1.room.find(FIND_MY_STRUCTURES, {
	 				filter: { structureType: STRUCTURE_EXTENSION }});
					var lowest = 50;
					var numExtension = 0;
					for (let extension in extensions){
						if(extensions[extension].energy < lowest){
							lowest = extensions[extension].energy;
							numExtension = extension;
						}
					}

			    	if(extensions[numExtension].energy != extensions[numExtension].energyCapacity){
			    		if(creep.transfer(extensions[numExtension], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				            creep.moveTo(extensions[numExtension]);
			    		}
			        }else{
			        	if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
			            	creep.moveTo(Game.spawns.Spawn1);
			        	}
		   			}	
				}else{
					var exitDir = creep.room.findExitTo(creep.memory.home);
					exit = creep.pos.findClosestByPath(exitDir);
					creep.moveTo(exit);
				}
			}
		}
}
};