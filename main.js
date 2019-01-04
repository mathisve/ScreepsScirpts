var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleClaimer = require('role.claimer');
var roleRepairer = require('role.repairer');
var roleAttacker = require('role.attacker');
var roleLongDistanceHarvester = require('role.longdistanceHarvester');
var spawner = require('spawner');

module.exports.loop = function () {

	for (let name in Memory.creeps){
		if (Game.creeps[name] == undefined) {
			delete Memory.creeps[name];
		}
	}

	for (let name in Game.creeps){

	    var creep = Game.creeps[name];

	    if(creep.memory.role == 'harvester') {
	    	roleHarvester.run(creep);
	    }else if (creep.memory.role == 'upgrader') {
	    	roleUpgrader.run(creep);
	    }else if (creep.memory.role == 'builder') {
	    	roleBuilder.run(creep);
	    }else if (creep.memory.role == 'claimer') {
	    	roleClaimer.run(creep);
	    }else if (creep.memory.role == 'repairer') {
	    	roleRepairer.run(creep);
	    }else if (creep.memory.role == 'attacker') {
	    	roleAttacker.run(creep);
	    }else if (creep.memory.role == 'longdistanceHarvester') {
	    	roleLongDistanceHarvester.run(creep);
	    }
	}
	
	//console.log(Game.spawns.Spawn1.room.energyAvailable);
	if(Game.spawns.Spawn1.room.energyAvailable >= 200){
		spawner.run();
	}
}