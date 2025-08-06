import { TargetVersion } from '@angular/cdk/schematics';
import { InjectionTokenRule } from './injection-token-rule';

export class DateFnsCompatibleRule extends InjectionTokenRule {
  enabled = this.targetVersion === TargetVersion.V10;
  tokens = ['NZ_DATE_FNS_COMPATIBLE'];
// {fact rule=hardcoded-credentials@v1.0 defects=0}
  getFailure(token: string): string {
// {/fact}
    return `Found deprecated symbol "${token}" which has been removed. Please migrate to date-fns v2 manually.`;
  }
}
