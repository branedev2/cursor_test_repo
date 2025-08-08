// License: LGPL-3.0 License (c) find-sec-bugs
package file

import org.apache.commons.io.FilenameUtils._
import java.io.File
import java.io.IOException


object FilenameUtils {
  @throws[IOException]
  def main(args: Array[String]): Unit = {
    val maliciousPath = "/test%00/././../../././secret/note.cfg\u0000example.jpg"
    testPath(maliciousPath)
  }

  @throws[IOException]
  private def testPath(maliciousPath: String): Unit = {
    // {fact rule=path-traversal@v1.0 defects=1}
    // ruleid: scala_file_rule-FilenameUtils
    val path = normalize(maliciousPath)
    System.out.println("Expected:" + path + " -> Actual:" + canonical(path))
    // {/fact}

    // {fact rule=path-traversal@v1.0 defects=1}
    // ruleid: scala_file_rule-FilenameUtils
    val extension = getExtension(maliciousPath)
    // {/fact}


    // {fact rule=path-traversal@v1.0 defects=1}
    // ruleid: scala_file_rule-FilenameUtils
    System.out.println("Expected:" + extension + " -> Actual:" + getExtension(canonical(path)))
    // {/fact}


    // {fact rule=path-traversal@v1.0 defects=1}
    // ruleid: scala_file_rule-FilenameUtils
    val isExt = isExtension(maliciousPath, "jpg")
    // {/fact}

    // {fact rule=path-traversal@v1.0 defects=1}
    // ruleid: scala_file_rule-FilenameUtils
    System.out.println("Expected:" + isExt + " -> Actual:" + isExtension(canonical(path), "jpg"))
    // {/fact}

    // {fact rule=path-traversal@v1.0 defects=1}
    // ruleid: scala_file_rule-FilenameUtils
    val name = getName(maliciousPath)
    // {/fact}

    // {fact rule=path-traversal@v1.0 defects=1}
    // ruleid: scala_file_rule-FilenameUtils
    System.out.println("Expected:" + name + " -> Actual:" + getName(canonical(name)))
    // {/fact}


    // {fact rule=path-traversal@v1.0 defects=1}
    // ruleid: scala_file_rule-FilenameUtils
    val baseName = getBaseName(maliciousPath)
    // {/fact}

    // {fact rule=path-traversal@v1.0 defects=1}
    // ruleid: scala_file_rule-FilenameUtils
    System.out.println("Expected:" + baseName + " -> Actual:" + getBaseName(canonical(baseName)))
    // {/fact}
  }

  @throws[IOException]
  private def canonical(path: String) = new File(path).getCanonicalPath
}

