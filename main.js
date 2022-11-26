// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
console.log(returnRandBase(), mockUpStrand());


const pAequorFactory = (specimenNum, arr) => {
  console.log(returnRandBase());
  return {
    specimenNum: specimenNum,
    arr: arr,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.arr.length)
      let newBase = returnRandBase()
      while (this.arr[randomIndex] === newBase) {
        newBase = returnRandBase()
      }
      this.arr[randomIndex] = newBase
      return this.arr
    },
    compareDNA(pAequor) {
      let acc = 0
      for (let i = 0; i < this.arr.length; i++) {
        for (let j = 0; j < pAequor.length; j++) {
          if (arr[i] === pAequor.dna[j]) {
            acc += 1
          } else acc = acc
        }
      }
      const percentOfDNAshared = (acc / this.arr.length) * 100
      const percentTo2Deci = percentOfDNAshared.toFixed(2)
      console.log(
        `${this.specimenNum} and ${pAequor.specimenNum} have ${percentTo2Deci} DNA in common.`,
      )
    },
    willLikelySurvive() {
      const cOrG = this.arr.filter((base) => base === 'C' || base === 'G')
      return cOrG.length / 100 >= 0.6
    },
  }
}

const survivingSpecimen = [];
let instanceCount = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(instanceCount, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  instanceCount++;
};

console.log(survivingSpecimen.length)
console.log(returnRandBase())
