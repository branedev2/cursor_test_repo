import { DomSanitizer, SecurityContext } from '@angular/platform-browser'
import DOMPurify from 'dompurify'

class SomeClass {
    constructor(private sanitizer: DomSanitizer){}

    bypass(value: string){
        // {fact rule=cross-site-scripting@v1.0 defects=1}
        // ruleid:angular-bypasssecuritytrust
        let html = this.sanitizer.bypassSecurityTrustHtml(value);
        // {/fact}

        // {fact rule=cross-site-scripting@v1.0 defects=1}
        // ruleid:angular-bypasssecuritytrust
        let style = this.sanitizer.bypassSecurityTrustStyle(value);
        // {/fact}

        // {fact rule=cross-site-scripting@v1.0 defects=1}
        // ruleid:angular-bypasssecuritytrust
        let script = this.sanitizer.bypassSecurityTrustScript(value);
        // {/fact}

        // {fact rule=cross-site-scripting@v1.0 defects=1}
        // ruleid:angular-bypasssecuritytrust
        let resource_url = this.sanitizer.bypassSecurityTrustResourceUrl(value);
        // {/fact}

        // {fact rule=cross-site-scripting@v1.0 defects=1}
        // ruleid:angular-bypasssecuritytrust
        let url = this.sanitizer.bypassSecurityTrustUrl(value);
        // {/fact}

        // {fact rule=cross-site-scripting@v1.0 defects=0}
        // ok:angular-bypasssecuritytrust
        let url1 = this.sanitizer.bypassSecurityTrustUrl("a");
        // {/fact}

        // {fact rule=cross-site-scripting@v1.0 defects=0}
        // ok:angular-bypasssecuritytrust
        let html1 = this.sanitizer.bypassSecurityTrustHtml("value");
        // {/fact}

        // {fact rule=cross-site-scripting@v1.0 defects=0}
        // ok:angular-bypasssecuritytrust
        let html2 = this.sanitizer.bypassSecurityTrustHtml(DOMPurify.sanitize("value"))
        // {/fact}  
    }
}
