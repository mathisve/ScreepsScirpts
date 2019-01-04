var roleLongdistanceHarvester = require('role.longdistanceHarvester');
module.exports = {
	run: function(creep) {

		if (creep.memory.working == true && creep.carry.energy == 0){
	    	creep.memory.working = false;
	    }
	    else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
	    	creep.memory.working = true;
	    }


	    const targets = creep.room.find(FIND_STRUCTURES, {filter: object => object.hits < object.hitsMax});
	    targets.sort((a,b) => a.hits - b.hits);

	    if (creep.memory.working == true) {
	    	if(creep.room.name == Game.spawns.Spawn1.memory.harvestInOtherRoom){
		    	if(targets.length > 0) 
	    			if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
	        			creep.moveTo(targets[0]);
	   			}		
	    	}else{
	    		var exitDir = creep.room.findExitTo(creep.memory.home);
				exit = creep.pos.findClosestByPath(exitDir);
				creep.moveTo(exit);
	    	}
	   		}
		}
	    else {
			var source = creep.pos.findClosestByPath(FIND_SOURCES);
			if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
				creep.moveTo(source);
			}        
	    }
	}
};