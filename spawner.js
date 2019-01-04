module.exports = {
	run: function(){

		var minimunNumberOfHarvesters = 10;
		var minimunNumberOfUpgraders = 10;
		var minimumNumberOfBuilders = 10;
		var minimumNumberOfRepairers = 4;
		var minimumNumberOfLDRepairers = 4;
		var minimumNumberOfAttackers = 5;

		var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
		var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
		var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
		var numberOfClaimers = _.sum(Game.creeps, (c) => c.memory.role == 'claimer');
		var numberOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');
		var numberOfAttackers = _.sum(Game.creeps, (c) => c.memory.role == 'attacker');
		var numberOfLDHAR = _.sum(Game.creeps, (c) => c.memory.role == 'longdistanceHarvester');

		var total = numberOfHarvesters + numberOfUpgraders + numberOfBuilders + numberOfRepairers + numberOfLDHAR;

		console.log("TOT: " + total + " HAR: " + numberOfHarvesters + " UPG: " + numberOfUpgraders + " BUI: " + numberOfBuilders + " CLA: " + numberOfClaimers + " REP: " + numberOfRepairers + " ATT: " + numberOfAttackers + " LDH: " + numberOfLDHAR);

		var name = undefined;

		//console.log(Game.spawns.Spawn1.memory.claimRoom);

		if(numberOfHarvesters < minimunNumberOfHarvesters){
			name = Game.spawns.Spawn1.createCreep([MOVE,MOVE, WORK ,WORK, CARRY , CARRY], undefined, 
				{ role:'harvester', working:false, home:'W8N3'});

		}else if (numberOfAttackers < minimumNumberOfAttackers){
			name = Game.spawns.Spawn1.createCreep([ATTACK, ATTACK, ATTACK, MOVE, MOVE], undefined, 
				{ role:'attacker', resting:false, home:'W8N3'});

		}else if (numberOfUpgraders < minimunNumberOfUpgraders){
			name = Game.spawns.Spawn1.createCreep([MOVE,MOVE, WORK ,WORK, CARRY , CARRY], undefined, 
				{ role:'upgrader', working:false, home:'W8N3'});

		}else if(numberOfBuilders < minimumNumberOfBuilders){
			name = Game.spawns.Spawn1.createCreep([MOVE,MOVE, WORK ,WORK, CARRY , CARRY], undefined, 
				{ role:'builder', working:false, home:'W8N3'});

		}else if(numberOfRepairers < minimumNumberOfRepairers){
			name = Game.spawns.Spawn1.createCreep([MOVE,MOVE, WORK ,WORK, CARRY , CARRY], undefined, 
				{ role:'repairer', working:false, home:'W8N3'});
		}else if(Game.spawns.Spawn1.memory.claimRoom != undefined){
			name = Game.spawns.Spawn1.createCreep([CLAIM, MOVE], undefined, {role:'claimer', working:false, claimRoom: Game.spawns.Spawn1.memory.claimRoom , home:'W8N3'});
			if (!(name < 0)) {		
				delete Game.spawns.Spawn1.memory.claimRoom;
			}
		}else{
			name = Game.spawns.Spawn1.createCreep([MOVE,MOVE, WORK ,WORK, CARRY , CARRY], undefined, 
				{ role:'longdistanceHarvester', working:false , home:'W8N3'});
		}

		//Game.spawns.Spawn1.createCreep([Game.ATTACK, Game.MOVE], undefined,
		//	{role:'attacker', resting:false});


		if (!(name < 0)) {
			console.log("Spawned new creep: " + name);
			//console.log("Creep role: " + Game.creeps.name.memory.role);
		}
	}

};