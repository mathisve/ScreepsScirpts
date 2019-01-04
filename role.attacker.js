module.exports = {
	run: function(creep){
	
		var enemies = creep.room.find(FIND_HOSTILE_CREEPS);
		if(enemies.length > 0){
			creep.memory.resting = false;
		}else{
			creep.memory.resting = true;
		}

		if(creep.memory.resting == false){
			if(creep.attack(enemies[0]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(enemies[0]);
			}
		}else{
			creep.moveTo(Game.flags.Battleflag);
		}
	}
};