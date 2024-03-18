import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlarmsModule } from './alarms/application/alarms.module';
import { CoreModule } from './core/core.module';
import { ApplicationBootstrapOptions } from './common/interfaces/application-bootstrap-options.interface';
import { AlarmsInfraestructureModule } from './alarms/infraestructure/alarms-infraestructure.module';

@Module({
    imports: [CoreModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    static register(options: ApplicationBootstrapOptions) {
        return {
            module: AppModule,
            imports: [
                CoreModule.forRoot(options),
                AlarmsModule.withInfraestructure(
                    AlarmsInfraestructureModule.use(options.driver),
                ),
            ],
        };
    }
}
