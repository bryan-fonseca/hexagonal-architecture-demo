import { Alarm } from 'src/alarms/domain/alarm';

// This is a port

// This uses a class rather than an interface because they can be used
// as injection tokens in NestJS whereas interfaces can't
export abstract class AlarmRepository {
    abstract findAll(): Promise<Alarm[]>;
    abstract save(alarm: Alarm): Promise<Alarm>;
}
