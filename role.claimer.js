module.exports = {
	run: function(creep) {

		if(creep.memory.claimRoom != undefined){
			var targetRoom = Game.spawns.Spawn1.claimRoom;
		}

		if (creep.room.target != targetRoom) {

			var exit = creep.room.findExitTo(creep.memory.target);

			creep.moveTo(creep.pos.findClosestByRange(exit));
		}else{
			if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE){
				creep.moveTo(creep.room.controller);
			}
		}
		
	}
};