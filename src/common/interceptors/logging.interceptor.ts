import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from "@nestjs/common";
import {Observable} from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // TODO: handle logging here
    const req = context.switchToHttp().getRequest();
    console.log(req.url, req.method, req.params);
    return next.handle();
  }
}
