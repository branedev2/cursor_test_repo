// Copyright 2021 Praetorian Security, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package path_traversal

// Expect 7 vulnerabilities found

import (
	"bufio"
	"io/ioutil"
	"os"
	"path"
	"path/filepath"
)
func DirTraversal1(filename string, folderPath string) {
	// {fact rule=path-traversal@v1.0 defects=1}
	os.Create(folderPath + filename)
	// {/fact}
	// {fact rule=path-traversal@v1.0 defects=1}
	os.Open(folderPath + filename)
	// {/fact}
	// {fact rule=path-traversal@v1.0 defects=1}
	os.OpenFile(folderPath+filename, os.O_RDONLY, 0775)
	// {/fact}
	// {fact rule=path-traversal@v1.0 defects=1}
	ioutil.ReadFile(folderPath + filename)
	// {/fact}
	// {fact rule=path-traversal@v1.0 defects=1}
	ioutil.WriteFile(folderPath+filename, []byte("Hello, Gophers!"), 0775)
	// {/fact}
	// {fact rule=path-traversal@v1.0 defects=1}
	path.Join(folderPath, filename)
	// {/fact}
	// {fact rule=path-traversal@v1.0 defects=1}
	filepath.Join(folderPath, filename)
	// {/fact}
}

func tempTest() {
	reader := bufio.NewReader(os.Stdin)
	hiddenMessage, _ := reader.ReadString('\n')
	hiddenMessage2 := "hidden2"
	DirTraversal1(hiddenMessage, hiddenMessage2)
}