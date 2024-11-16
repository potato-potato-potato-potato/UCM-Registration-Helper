let alg = await import("./makeSchedule.mjs")
let gen = alg.solve([[10007,10636,10637,10692],[10898,10904,11167,11280]])
  for await (const solution of gen) {
    console.log(solution); // This will print each valid schedule
  }


