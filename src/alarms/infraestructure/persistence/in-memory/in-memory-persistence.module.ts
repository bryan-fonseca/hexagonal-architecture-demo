import { Module } from '@nestjs/common';
import { AlarmRepository } from 'src/alarms/application/ports/alarm.repository';
import { InMemoryAlarmRepository } from './repositories/alarm.repository';

@Module({
    imports: [],
    providers: [
        {
            provide: AlarmRepository, // Port
            useClass: InMemoryAlarmRepository, // Adapter
        },
    ],
    exports: [AlarmRepository],
})
export class InMemoryAlarmPersistenceModule {}
