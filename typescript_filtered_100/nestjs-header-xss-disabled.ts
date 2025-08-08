import { Controller, Get, Header, Redirect, Query } from '@nestjs/common';
import { AppService } from './app.service';
// {fact rule=cross-site-scripting@v1.0 defects=1}
// ruleid:nestjs-header-xss-disabled
@Controller()
export class AppController1 {
  constructor(private readonly appService: AppService) {}

  @Get('test1')
  @Header('X-XSS-Protection', '0')
  getHello1(): string {
    return this.appService.getHello();
  }

}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
@Controller()
export class AppController2 {
  constructor(private readonly appService: AppService) {}

  @Get('test1')
  @Header('X-XSS-Protection', '1')
  getHello2(): string {
    return this.appService.getHello();
  }

}
// {/fact}
