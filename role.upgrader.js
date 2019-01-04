module.exports = {
	run: function(creep) {

		if (creep.memory.working == true && creep.carry.energy == 0){
	    	creep.memory.working = false;
	    }
	    else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
	    	creep.memory.working = true;
	    }


	    if (creep.memory.working == true) {
	    	if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
	    		creep.moveTo(creep.room.controller);
	    	}
	       // if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
	        //    creep.moveTo(Game.spawns.Spawn1);}
	    }
	    else {
			var source = creep.pos.findClosestByPath(FIND_SOURCES);
			if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
				creep.moveTo(source);

			}        
	    }
	}
};