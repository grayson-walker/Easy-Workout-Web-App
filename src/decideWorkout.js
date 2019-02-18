

function decideWorkout(clickedObj) {


  let legs = [];
  let chest = [];
  let biceps = [];
  let shoulders = [];

  let euipObject = {
     'smith' : {
      Legs: ['smith squat'],
      Chest: ['smith press'],
      Biceps: [],
      Shoulders:[]
    },
    'dumbell':  {
      Legs: ['goblet squat','lunge'],
      Chest: ['standing fly'],
      Biceps: ['hammer curls'],
      Shoulders:['lateral raise', 'upright row']
    },
    'bench' : {
      Legs: ['calf raise'],
      Chest: [],
      Biceps: [],
      Shoulders:[]
    },
    'kettlebell' : {
      Legs: ['kettlebell squats'],
      Chest: ['Kettlebell pushups'],
      Biceps: [],
      Shoulders:[]
    },
    'bands':{
      Legs: ['resistance band squat'],
      Chest: ['resistance band fly'],
      Biceps: ['resistance band curls'],
      Shoulders:['shoulder band fly ']
    },
    'medicineBall':{
      Legs: ['medicine ball squat'],
      Chest: [],
      Biceps: [],
      Shoulders:[]
    },
    'benchAndDumbell': {
      Legs: ['split squat'],
      Chest: ['dumbell bench press','dumbell bench fly'],
      Biceps: ['incline bicep curl'],
      Shoulders:['seated shoulder press', 'seated arnold press']
    }
  };
  for (var x in clickedObj){
    for(var y=0; y<euipObject[x].Chest.length; y++){
      chest.push(euipObject[x].Chest[y])
    }
    for(var y=0; y<euipObject[x].Legs.length; y++){
      legs.push(euipObject[x].Legs[y])
    }
    for(var y=0; y<euipObject[x].Biceps.length; y++){
      biceps.push(euipObject[x].Biceps[y])
    }
    for(var y=0; y<euipObject[x].Shoulders.length; y++){
      shoulders.push(euipObject[x].Shoulders[y])
    }
  };
  if(clickedObj['bench'] && clickedObj['dumbell']){
    for(var y=0; y<euipObject['benchAndDumbell'].Chest.length; y++){
      chest.push(euipObject['benchAndDumbell'].Chest[y])
    }
    for(var y=0; y<euipObject['benchAndDumbell'].Legs.length; y++){
      legs.push(euipObject['benchAndDumbell'].Legs[y])
    }
    for(var y=0; y<euipObject['benchAndDumbell'].Biceps.length; y++){
      biceps.push(euipObject['benchAndDumbell'].Biceps[y])
    }
    for(var y=0; y<euipObject['benchAndDumbell'].Shoulders.length; y++){
      shoulders.push(euipObject['benchAndDumbell'].Shoulders[y])
    }
  };
  if(clickedObj['bench'] && clickedObj['smith']){
    chest.push('smith bench press')
    legs.push()
  };

  return {Chest:chest, Legs:legs, Biceps:biceps, Shoulders:shoulders};
}

module.exports = decideWorkout
