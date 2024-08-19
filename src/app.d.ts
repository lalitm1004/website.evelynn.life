// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface PrototypeScheduleItem {
		code: string;
		comp: 'lec' | 'tut' | 'pra';
		timings: string;
		venue: string;
	}

	interface PrototypeWeeklySchedule {
		mon: PrototypeScheduleItem[];
		tue: PrototypeScheduleItem[];
		wed: PrototypeScheduleItem[];
		thu: PrototypeScheduleItem[];
		fri: PrototypeScheduleItem[];
		sat: PrototypeScheduleItem[];
		sun: PrototypeScheduleItem[];
	}
	const prototypeSchedule: PrototypeWeeklySchedule;

	interface ScheduleItem {
		courseCode: string;
		componentType: 'lecture' | 'tutorial' | 'practical';
		startTime: string;
		endTime: string;
		venue: string;
	}
	interface WeeklySchedule {
		monday: ScheduleItem[];
		tuesday: ScheduleItem[];
		wednesday: ScheduleItem[];
		thursday: ScheduleItem[];
		friday: ScheduleItem[];
		saturday: ScheduleItem[];
		sunday: ScheduleItem[];
	}
	const schedule: WeeklySchedule;
}

export {};
