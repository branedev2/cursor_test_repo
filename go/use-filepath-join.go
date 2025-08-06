package generic

import (
    "fmt"
    "path/filepath"
    "path"
    "net/url"
)

func getDir() string {
    return "/some/dir"
}

func firstFunction() {
    dir := getDir()
    _ = dir

    // {fact rule=best-practices@v1.0 defects=0}
    // ok: use-filepath-join
    var p = path.Join(getDir())
    fmt.Println(p)
    // {/fact}

    // {fact rule=best-practices@v1.0 defects=0}
    // ok: use-filepath-join
    var fpath = filepath.Join(getDir())
    fmt.Println(fpath)
    // {/fact}

    // {fact rule=best-practices@v1.0 defects=1}
    // ruleid: use-filepath-join
    joinedPath := path.Join("/", path.Base(p))
    fmt.Println(joinedPath)
    // {/fact}
}

func secondFunction() {
    parsedURL, err := url.Parse("http://foo:666/bar")
    if err != nil {
        panic(err)
    }

    // {fact rule=best-practices@v1.0 defects=0}
    // ok: use-filepath-join
    fmt.Println(path.Join(parsedURL.Path, "baz"))
    // {/fact}
}

func thirdFunction(p string) {
    // {fact rule=best-practices@v1.0 defects=1}
    // ruleid: use-filepath-join
    fmt.Println(path.Join(p, "baz"))
    // {/fact}

    // {fact rule=best-practices@v1.0 defects=0}
    // ok: use-filepath-join
    fmt.Println(path.Join("asdf", "baz"))
    // {/fact}

    // {fact rule=best-practices@v1.0 defects=0}
    // ok: use-filepath-join
    fmt.Println(filepath.Join(getDir(), "baz"))
    // {/fact}
}

func main() {
    firstFunction()
    secondFunction()
    thirdFunction("/example/path")
}