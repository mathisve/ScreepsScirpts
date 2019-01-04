var roleHarvester = require('role.harvester');

module.exports = {
	run: function(creep) {

		if(Game.spawns.Spawn1.memory.buildRoom != undefined){
			
		}


		if (creep.memory.working == true && creep.carry.energy == 0){
	    	creep.memory.working = false;
	    }
	    else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
	    	creep.memory.working = true;
	    }


	    if (creep.memory.working == true) {
	        var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
	        if(constructionSite != undefined) {
		        if(creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
		        	creep.moveTo(constructionSite);
		        }
		        
		    }else{
		    	roleHarvester.run(creep);
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