// License: LGPL-3.0 License (c) find-sec-bugs
package random

import scala.util.Random

object Some {
    def generateSecretToken() {
        // {fact rule=weak-random-number-generation@v1.0 defects=1}
        // ruleid: scala_random_rule-PseudoRandom
        print(Random.nextBoolean())
        // {/fact}



        // {fact rule=weak-random-number-generation@v1.0 defects=1}
        // ruleid: scala_random_rule-PseudoRandom
        print(Random.nextDouble())
        // {/fact}

        
        
        // {fact rule=weak-random-number-generation@v1.0 defects=1}
        // ruleid: scala_random_rule-PseudoRandom
        print(Random.nextFloat())
        // {/fact}


        // {fact rule=weak-random-number-generation@v1.0 defects=1}
        // ruleid: scala_random_rule-PseudoRandom
        print(Random.nextGaussian())
        // {/fact}



        // {fact rule=weak-random-number-generation@v1.0 defects=1}
        // ruleid: scala_random_rule-PseudoRandom
        print(Random.nextInt())
        // {/fact}


        // {fact rule=weak-random-number-generation@v1.0 defects=1}
        // ruleid: scala_random_rule-PseudoRandom
        print(Random.nextLong())
        // {/fact}


        // {fact rule=weak-random-number-generation@v1.0 defects=1}
        // ruleid: scala_random_rule-PseudoRandom
        print(Random.nextPrintableChar())
        // {/fact}


        // {fact rule=weak-random-number-generation@v1.0 defects=1}
        // ruleid: scala_random_rule-PseudoRandom
        print(Random.nextString(10))
        // {/fact}
    }
}
