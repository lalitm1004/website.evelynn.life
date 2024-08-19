type DayOfWeek = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
type prototypeComponent = 'lec' | 'tut' | 'pra';
type component = 'lecture' | 'tutorial' | 'practical'

const getDateForDay = (day: DayOfWeek): Date => {
    const currentDate = new Date();
    const currentDayIndex = currentDate.getUTCDay();
    const dayIndexes: { [key in DayOfWeek]: number } = {
        sunday: 0,
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6
    };
    const targetDayIndex = dayIndexes[day];
    const offset = (targetDayIndex - currentDayIndex + 7) % 7;
    currentDate.setUTCDate(currentDate.getUTCDate() + offset);
    return currentDate;
}

const parseTimeRange = (timeRange: string, day: DayOfWeek): { startTime: string, endTime: string } => {
    const [start, end] = timeRange.split('-').map(time => {
        const hours = parseInt(time.slice(0, 2), 10);
        const minutes = parseInt(time.slice(2, 4), 10);
        const date = getDateForDay(day);
        date.setUTCHours(hours, minutes, 0, 0);
        return date.toISOString();
    });

    return {
        startTime: start,
        endTime: end,
    };
}

const mapComponentType = (comp: prototypeComponent): component => {
    const mapping = {
        lec: 'lecture',
        tut: 'tutorial',
        pra: 'practical',
    };
    return mapping[comp] as component;
}

function convertScheduleItem(item: PrototypeScheduleItem, day: DayOfWeek): ScheduleItem {
    const { startTime, endTime } = parseTimeRange(item.timings, day);
    return {
        courseCode: item.code,
        componentType: mapComponentType(item.comp as prototypeComponent),
        startTime,
        endTime,
        venue: item.venue
    };
}

const parseSchedule = (prototypeSchedule: PrototypeWeeklySchedule): WeeklySchedule => {
    const convertDay = (items: PrototypeScheduleItem[], day: DayOfWeek): ScheduleItem[] => {
        return items.map(item => convertScheduleItem(item, day));
    }

    return {
        monday: convertDay(prototypeSchedule.mon, 'monday'),
        tuesday: convertDay(prototypeSchedule.tue, 'tuesday'),
        wednesday: convertDay(prototypeSchedule.wed, 'wednesday'),
        thursday: convertDay(prototypeSchedule.thu, 'thursday'),
        friday: convertDay(prototypeSchedule.fri, 'friday'),
        saturday: convertDay(prototypeSchedule.sat, 'saturday'),
        sunday: convertDay(prototypeSchedule.sun, 'sunday')
    };
}

export default parseSchedule;