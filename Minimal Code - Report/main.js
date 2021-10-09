(function(){
   
   class TownInfras {
      constructor(infrasName, yearOfBuild){
         this.infrasName = infrasName;
         this.yearOfBuild = yearOfBuild;
      }
   }

   class Parks extends TownInfras{
      constructor(infrasName, yearOfBuild, numberOfTrees, parkArea){
         super(infrasName, yearOfBuild);
         this.numberOfTrees = numberOfTrees;
         this.parkArea = parkArea;
      }

      calculateDensityOfTrees(){
         let densityOfTrees = Math.round(this.numberOfTrees/this.parkArea);
         console.log(`${this.infrasName} has a tree density of ${densityOfTrees} trees per square km.`)
      }
   }

   

   class Streets extends TownInfras{
      constructor(infrasName, yearOfBuild, lengthOfStreet, sizeOfStreet = 3){
         super(infrasName, yearOfBuild);
         this.lengthOfStreet = lengthOfStreet;
         this.sizeOfStreet = sizeOfStreet;
      }

       classifyStreet() {
         const classification = new Map();
         classification.set(1, 'tiny');
         classification.set(2, 'small');
         classification.set(3, 'normal');
         classification.set(4, 'big');
         classification.set(5, 'huge');
         console.log(`${this.infrasName}, build in ${this.yearOfBuild}, is a ${classification.get(this.sizeOfStreet)} street`)
      }

   }
   
const allParks = [new Parks('Codo park', 1995, 650, 0.4 ),  new Parks('Star park', 1960, 864, 0.3), new Parks('Love park', 1960, 1075, 0.5) ];
const allStreets = [new Streets('Oak avenue', 1991, 1.4, 4), new Streets('Ocean link', 1997, 2.8, 5), new Streets('Paradise close', 1985, 1.2, 2), new Streets('Eddie avenue', 1991, 2.1)];

function calc(arr){
   const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
   return [sum, Math.round(sum / arr.length)]; //destructuring
}

function reportParks(p){

   console.log('---------PARKS REPORT---------');
   //Tree Density
   p.forEach(el => el.calculateDensityOfTrees());

   //Average age
   const ages = p.map(el => new Date().getFullYear() - el.yearOfBuild);
   const [totalAges, avgAge] = calc(ages); //destructuring
   console.log(`Our ${p.length} parks have an average of ${avgAge} years.`)

   //which park has more than 1000 trees
   //.findIndex searches array for the index of the element we are interested
   const i = p.map(el => el.numberOfTrees).findIndex(el => el >= 1000);
   console.log(`${p[i].infrasName} has the most trees of ${p[i].numberOfTrees}`)

}

function reportStreets(s){

   console.log('---------STREETS REPORT-----------')
   //Total and Average length of the Town's streets
   const streetLength = s.map(el => el.lengthOfStreet);
   const[totalLength, avgLength] = calc(streetLength);
   console.log(`Our ${s.length} streets has a total length of ${totalLength} km, with an average of ${avgLength} km.`)

   //Size classification of all streets
   s.forEach (el => el.classifyStreet());
}

reportParks(allParks)
reportStreets(allStreets)


})();

/***********************************************
Credit to Jonas Schmedtman course code challenge.
************************************************/