

function decideWorkout(clickedObj)  {


  let legs = ['lunge']
  let chest = []
  let biceps = []
  let shoulders = []

  let euipObject = {
     'smith' : {
      Legs: ['smith squat'],
      Chest: ['smith press'],
      Biceps: [],
      Shoulders:[]
    },
    'dumbell':  {
      Legs: ['lunges goblet squat'],
      Chest: ['standing fly'],
      Biceps: ['hammer curls'],
      Shoulders:['lateral raise, upright row ']
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
      Chest: ['dumbell bench press,  dumbell bench fly'],
      Biceps: ['incline bicep curl'],
      Shoulders:['seated shoulder press seated arnold press ']
    }
  }
  for (var x in clickedObj){
      chest.push(euipObject[x].Chest)
      legs.push(euipObject[x].Legs)
      biceps.push(euipObject[x].Biceps)
      shoulders.push(euipObject[x].Shoulders)
      shoulders.push(', ')
      biceps.push(', ')
      chest.push(', ')
      legs.push(', ')
      if(clickedObj['bench'] && clickedObj['dumbell']){
        chest.push(euipObject['benchAndDumbell'].Chest)
        legs.push(euipObject['benchAndDumbell'].Legs)
        biceps.push(euipObject['benchAndDumbell'].Biceps)
        shoulders.push(euipObject['benchAndDumbell'].Shoulders)
      }
      if(clickedObj['bench'] && clickedObj['smith']){
        chest.push('smith bench press')
        legs.push()
      }
  }

  return {Chest:chest, Legs:legs, Biceps:biceps, Shoulders:shoulders}
}

module.exports = decideWorkout
