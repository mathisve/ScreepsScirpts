var roleHarvester = require('role.harvester');

module.exports = {
	run: function(creep) {

		if (creep.memory.working == true && creep.carry.energy == 0){
	    	creep.memory.working = false;
	    }
	    else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
	    	creep.memory.working = true;
	    }

		var workInOtherRoom = Game.spawns.Spawn1.memory.workInOtherRoom;

		if(workInOtherRoom == undefined){
			if(creep.room.name == creep.memory.home){
				if (creep.memory.working == true) {
					var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
			        if(constructionSite != undefined) {
				        if(creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
				        	creep.moveTo(constructionSite);
				        }			        
				    }
				}else{
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
			if(creep.memory.working == true){
				if(creep.room.name != workInOtherRoom){
					var exitDir = creep.room.findExitTo(workInOtherRoom);
					exit = creep.pos.findClosestByPath(exitDir);
					creep.moveTo(exit);
				}else{
					var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
			        if(constructionSite != undefined) {
				        if(creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
				        	creep.moveTo(constructionSite);
				        }			        
				    }
				}
			}else{
				if(creep.room.name != creep.memory.home){
					var exitDir = creep.room.findExitTo(creep.memory.home);
					exit = creep.pos.findClosestByPath(exitDir);
					creep.moveTo(exit);
				}else{
					var source = creep.pos.findClosestByPath(FIND_SOURCES);
					if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
						creep.moveTo(source);
					} 
				} 
			}
	}
}
};