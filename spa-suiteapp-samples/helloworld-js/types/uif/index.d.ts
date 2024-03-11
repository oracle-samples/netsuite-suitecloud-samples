declare module '@uif-js/core/jsx-runtime' {}

declare module '@uif-js/core' {
	import * as Self from '@uif-js/core'
	import * as PackageComponent from '@uif-js/component'

	/**
	 * Accelerator
	 */
	export class Accelerator {
		/**
		 * Constructs Accelerator
		 */
		constructor(options: object);

		/**
		 * Register a shortcut, for example [['CTRL', 'SHIFT', 'A'], ['CTRL', 'B']]
		 */
		registerShortcut(keyStroke: globalThis.Array<KeyStroke.Source>, handler: KeyShortcut.ActionCallback): {unregister: () => void};

		/**
		 * Register shortcut
		 */
		add(shortcut: KeyShortcut): {remove: () => void};

		/**
		 * Unregister shortcut
		 */
		remove(shortcut: KeyShortcut): void;

		/**
		 * Processes message
		 */
		processMessage(next: RoutedMessage.Handler, message: RoutedMessage, result: RoutedMessage.Result): void;

	}

	export namespace Accelerator {
	}

	/**
	 * Ajax
	 */
	export class Ajax {
		/**
		 * Sends GET request to url
		 */
		static get(url: string, data?: (object | ArrayBuffer | Blob | FormData | Document | XMLDocument), options?: Ajax.Options): globalThis.Promise<any>;

		/**
		 * Sends POST request to url
		 */
		static post(url: string, data?: (object | ArrayBuffer | Blob | FormData | Document | XMLDocument), options?: Ajax.Options): globalThis.Promise<any>;

		/**
		 * Sends PUT request to url
		 */
		static put(url: string, data?: (object | ArrayBuffer | Blob | FormData | Document | XMLDocument), options?: Ajax.Options): globalThis.Promise<any>;

		/**
		 * Sends DELETE request to url
		 */
		static delete(url: string, data?: (object | ArrayBuffer | Blob | FormData | Document | XMLDocument), options?: Ajax.Options): globalThis.Promise<any>;

	}

	export namespace Ajax {
		interface Options {
			async?: boolean;

			cache?: boolean;

			dataType?: Ajax.DataType;

			responseType?: Ajax.ResponseType;

			user?: string;

			password?: string;

			withCredentials?: boolean;

			timeout?: number;

			attempts?: number;

			headers?: object;

			before?: () => void;

			after?: (value: any) => void;

			uploadProgress?: Ajax.ProgressCallback;

			downloadProgress?: Ajax.ProgressCallback;

			chunkReceived?: Ajax.ChunkReceivedCallback;

		}

		type ProgressCallback = (args: {total: number; length: number; lengthComputable: boolean}) => void;

		type ChunkReceivedCallback = (args: {total: number; length: number; lengthComputable: boolean; data: ArrayBuffer}) => void;

		/**
		 * Request data type
		 */
		enum DataType {
			POST,
			ARRAYBUFFER,
			BLOB,
			DOCUMENT,
			FORMDATA,
			JSON,
			XML,
		}

		/**
		 * Response data type
		 */
		enum ResponseType {
			AUTO,
			XML,
			TEXT,
			DOCUMENT,
			JSON,
		}

	}

	export class AjaxReporter extends LogReporter {
		/**
		 * Constructs AjaxReporter
		 */
		constructor();

		/**
		 * Url
		 */
		url: string;

		/**
		 * Notification url
		 */
		defaultNotificationUrl: string;

	}

	export namespace AjaxReporter {
	}

	/**
	 * Application context
	 */
	export class AppContext {
		/**
		 * Constructor
		 */
		constructor();

		/**
		 * Get/set application title
		 */
		title: string;

		/**
		 * Register before end callback
		 */
		registerBeforeEnd(handler: () => boolean): {remove: () => void};

	}

	export namespace AppContext {
	}

	/**
	 * Application
	 * @deprecated 
	 */
	class Application {
		/**
		 * Constructs Application
		 */
		constructor();

		/**
		 * Returns current state
		 */
		state: Application.State;

		/**
		 * The root context
		 */
		context: Context;

		/**
		 * The shell instance
		 */
		shell: PackageComponent.Shell;

		/**
		 * Executes the application
		 */
		run(): globalThis.Promise<void>;

		/**
		 * Disposes application
		 */
		dispose(): void;

	}

	namespace Application {
		enum State {
			NEW,
			INITIALIZING,
			READY,
			DISPOSED,
			ERROR,
		}

	}

	export enum AriaProperty {
		ACTIVE_DESCENDANT,
		ATOMIC,
		AUTOCOMPLETE,
		CONTROLS,
		DESCRIBED_BY,
		DROP_EFFECT,
		FLOW_TO,
		HAS_POPUP,
		LABEL,
		LABELLED_BY,
		LEVEL,
		LIVE,
		MODAL,
		MULTILINE,
		MULTISELECTABLE,
		ORIENTATION,
		OWNS,
		POS_IN_SET,
		READ_ONLY,
		RELEVANT,
		ROLE,
		KEY_SHORTCUTS,
		REQUIRED,
		SET_SIZE,
		SORT,
		VALUE_MAX,
		VALUE_MIN,
		VALUE_NOW,
		VALUE_TEXT,
	}

	export enum AriaRole {
		ALERT,
		ALERT_DIALOG,
		APPLICATION,
		ARTICLE,
		BANNER,
		BUTTON,
		CELL,
		CHECK_BOX,
		COLUMN_HEADER,
		COMBO_BOX,
		COMMAND,
		COMPLEMENTARY,
		COMPOSITE,
		CONTENT_INFO,
		DEFINITION,
		DIALOG,
		DIRECTORY,
		DOCUMENT,
		FEED,
		FIGURE,
		FORM,
		GRID,
		GRID_CELL,
		GROUP,
		HEADING,
		IMG,
		INPUT,
		LANDMARK,
		LINK,
		LIST,
		LIST_BOX,
		LIST_ITEM,
		LOG,
		MAIN,
		MARQUEE,
		MATH,
		MENU,
		MENU_BAR,
		MENU_ITEM,
		MENU_ITEM_CHECK_BOX,
		MENU_ITEM_RADIO,
		NAVIGATION,
		NONE,
		NOTE,
		OPTION,
		PRESENTATION,
		PROGRESS_BAR,
		RADIO,
		RADIO_GROUP,
		RANGE,
		REGION,
		ROLE_TYPE,
		ROW,
		ROW_GROUP,
		ROW_HEADER,
		SCROLLBAR,
		SEARCH,
		SEARCH_BOX,
		SECTION,
		SECTION_HEAD,
		SELECT,
		SEPARATOR,
		SLIDER,
		SPIN_BUTTON,
		STATUS,
		STRUCTURE,
		SWITCH,
		TAB,
		TABLE,
		TAB_LIST,
		TAB_PANEL,
		TERM,
		TEXT_BOX,
		TIMER,
		TOOLBAR,
		TOOLTIP,
		TREE,
		TREE_GRID,
		TREE_ITEM,
		WIDGET,
		WINDOW,
	}

	export enum AriaState {
		BUSY,
		CHECKED,
		DISABLED,
		EXPANDED,
		GRABBED,
		HIDDEN,
		INVALID,
		PRESSED,
		SELECTED,
		CURRENT,
	}

	export namespace AriaValue {
		enum AutoComplete {
			INLINE,
			LIST,
			BOTH,
			NONE,
		}

		enum Current {
			PAGE,
			STEP,
			LOCATION,
			DATE,
			TIME,
		}

		enum DropEffect {
			COPY,
			EXECUTE,
			LINK,
			MOVE,
			NONE,
			POPUP,
		}

		enum HasPopup {
			MENU,
			LIST_BOX,
			TREE,
			GRID,
			DIALOG,
		}

		enum Live {
			ASSERTIVE,
			OFF,
			POLITE,
		}

		enum Orientation {
			VERTICAL,
			HORIZONTAL,
		}

		enum Relevant {
			ADDITIONS,
			ADDITIONS_TEXT,
			ALL,
			REMOVALS,
			TEXT,
		}

		enum Sort {
			ASCENDING,
			DESCENDING,
			NONE,
			OTHER,
		}

	}

	/**
	 * Utility functions for arrays
	 */
	export namespace Array {
		/**
		 * Create a new array initialized using the given initializer function
		 */
		function generate(size: number, initializer: (index: number) => any): globalThis.Array<any>;

		/**
		 * Create a new 2D array initialized using the given initializer function
		 */
		function generateMatrix(width: number, height: number, initializer: (row: number, column: number) => any): globalThis.Array<globalThis.Array<any>>;

		/**
		 * Check if array is empty
		 */
		function isEmpty(array: globalThis.Array<any>): boolean;

		/**
		 * Check whether both arrays have equal content
		 */
		function equals(left: globalThis.Array<any>, right: globalThis.Array<any>, comparator?: (left: any, right: any) => boolean): boolean;

		/**
		 * Create an array from an array like or iterable object
		 */
		function from(arrayLike: any): globalThis.Array<any>;

		/**
		 * Converts a value to an array. If the value is already an array then it is returned as it is. If the value is undefined or null empty array is returned.
		 */
		function fromValue(value: any): globalThis.Array<any>;

		/**
		 * Converts a list of values to an array skipping null and undefined
		 */
		function fromValues(...list: globalThis.Array<any>): globalThis.Array<any>;

		/**
		 * Convert array-like object to a standard JS array. Array-like object is an object that has the length property and allows item access via the [] operator. Examples are the arguments objects or strings.
		 */
		function fromArrayLike(arg: object): globalThis.Array<any>;

		/**
		 * Construct array from ES6 iterable object
		 */
		function fromIterator(arg: any): globalThis.Array<any>;

		interface FindResult {
			found: boolean;

			item?: any;

			index?: number;

		}

		/**
		 * Find the first element in array using a predicate.
		 */
		function findFirst(array: globalThis.Array<any>, predicate: (item: any, index: number) => boolean): Array.FindResult;

		/**
		 * Find the last element in array using a predicate.
		 */
		function findLast(array: globalThis.Array<any>, predicate: (item: any, index: number) => boolean): Array.FindResult;

		/**
		 * Check whether array contains given value
		 */
		function contains(array: globalThis.Array<any>, value: any): boolean;

		/**
		 * Check whether the first array contains all values from the second array
		 */
		function containsAll(array1: globalThis.Array<any>, array2: globalThis.Array<any>): boolean;

		/**
		 * Check if the array contains a value matching the predicate
		 */
		function containsMatching(array: globalThis.Array<any>, predicate: (item: any, index: number) => boolean): boolean;

		/**
		 * Copy array
		 */
		function copy(array: globalThis.Array<any>): globalThis.Array<any>;

		/**
		 * Deep copy an array
		 */
		function deepCopy(array: globalThis.Array<any>): globalThis.Array<any>;

		/**
		 * Reverse array (out-of-place)
		 */
		function reverse(array: globalThis.Array<any>): globalThis.Array<any>;

		/**
		 * Insert item into an array. Modifies the input array.
		 */
		function insert(array: globalThis.Array<any>, index: number, item: any): globalThis.Array<any>;

		/**
		 * Insert items from a given array into another array. Modifies the input array.
		 */
		function insertAll(array: globalThis.Array<any>, index: number, items: globalThis.Array<any>): globalThis.Array<any>;

		/**
		 * Changes the position of selected items inplace
		 */
		function reorder(array: globalThis.Array<any>, sourceIndex: number, targetIndex: number, count?: number): globalThis.Array<any>;

		/**
		 * Returns an array that contains all items from the first array that are also in the second array
		 */
		function intersect(left: globalThis.Array<any>, right: globalThis.Array<any>): globalThis.Array<any>;

		/**
		 * Remove a specific item from an array. If the item appears multiple times in the array then only the first occurrence is removed.
		 */
		function remove(array: globalThis.Array<any>, item: any): boolean;

		/**
		 * Remove items at given index from array
		 */
		function removeAt(array: globalThis.Array<any>, index: number, count?: number): globalThis.Array<any>;

		/**
		 * Remove all items from an array. Only first occurence of each item is removed
		 */
		function removeAll(array: globalThis.Array<any>, items: globalThis.Array<any>): number;

		/**
		 * Keep all items matching the predicate
		 */
		function filter(array: globalThis.Array<any>, predicate: (item: any, index: number) => boolean): globalThis.Array<{index: number; item: any}>;

		/**
		 * Transform all array items
		 */
		function map(array: globalThis.Array<any>, transform: (item: any, index: number) => any): void;

		/**
		 * Concatenates two array in place. All items from the second array are appended to the first array which is also returned.
		 */
		function concat(left: globalThis.Array<any>, right: globalThis.Array<any>): void;

		/**
		 * Appends reversed second array to the first array
		 */
		function concatReversed(left: globalThis.Array<any>, right: globalThis.Array<any>): void;

		/**
		 * Convert array to object
		 */
		function toObject(array: globalThis.Array<any>, mapper?: (item: any, index: number) => ({key: string; value: any} | null)): object;

		/**
		 * Create array of {count} items increasing by step
		 */
		function range(from: number, count: number, step?: number): globalThis.Array<any>;

		/**
		 * Create an array of {count} items where all items will be initialized to a given value
		 */
		function repeat(value: any, count: number): globalThis.Array<any>;

		/**
		 * Get first item from array or null if array is empty
		 */
		function firstItem(array: globalThis.Array<any>): (any | null);

		/**
		 * Get first item from array or default value if array is empty
		 */
		function firstItemOrDefault(array: globalThis.Array<any>, defaultValue: any): any;

		/**
		 * Get last item from array or null if array is empty
		 */
		function lastItem(array: globalThis.Array<any>): (any | null);

		/**
		 * Get last item from array or default value if array is empty
		 */
		function lastItemOrDefault(array: globalThis.Array<any>, defaultValue: any): any;

		/**
		 * Returns a random item from the array
		 */
		function randomItem(array: globalThis.Array<any>): (null | any);

		/**
		 * Find item using binary search
		 */
		function binarySearch(array: globalThis.Array<any>, comparator: (left: any, right: any) => number): {found: boolean; index: number};

		/**
		 * Returns items in the left array that are not in the right one.
		 */
		function diff(left: globalThis.Array<any>, right: globalThis.Array<any>, comparator?: (left: any, right: any) => boolean): globalThis.Array<any>;

		/**
		 * Returns items in the left array that are not in the right one. Assumes both arrays are sorted using the comparator.
		 */
		function diffSorted(left: globalThis.Array<any>, right: globalThis.Array<any>, comparator?: (left: any, right: any) => boolean): globalThis.Array<any>;

		/**
		 * Returns items in the left array that are not in the right one. Faster than diff but needs a key providing function.
		 */
		function diffByKey(left: globalThis.Array<any>, right: globalThis.Array<any>, keyExtractor?: (item: any) => any): globalThis.Array<any>;

		/**
		 * Remove duplicates from an array
		 */
		function deduplicate(array: globalThis.Array<any>, comparator?: (left: any, right: any) => boolean): globalThis.Array<any>;

		/**
		 * Remove duplicates from a sorted array
		 */
		function deduplicateSorted(array: globalThis.Array<any>, comparator?: (left: any, right: any) => boolean): globalThis.Array<any>;

		/**
		 * Remove duplicates from an array. Faster than deduplicate but needs a key provider.
		 */
		function deduplicateByKey(array: globalThis.Array<any>, keyExtractor?: (item: any) => any): globalThis.Array<any>;

		/**
		 * Shuffles array in-place using the Fisher-Yates method
		 */
		function shuffle(array: globalThis.Array<any>): void;

		/**
		 * Find the length of the longest common prefix of two arrays
		 */
		function commonPrefixLength(left: globalThis.Array<any>, right: globalThis.Array<any>, comparator?: (left: any, right: any) => boolean): void;

		/**
		 * Find the length of the longest common suffix of two arrays
		 */
		function commonSuffixLength(left: globalThis.Array<any>, right: globalThis.Array<any>, comparator?: (left: any, right: any) => boolean): void;

		/**
		 * Empty array constant
		 */
		const EMPTY: globalThis.Array<any>;

	}

	/**
	 * Simple array based data source
	 */
	export class ArrayDataSource implements MutableDataSource, EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: EventSource.EventName, listener: EventSource.Listener): EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: EventSource.EventName): void;

		/**
		 * Constructs ArrayDataSource
		 */
		constructor(array?: globalThis.Array<any>);

		/**
		 * Number of items in the data source
		 */
		length: number;

		/**
		 * True if the data source is empty
		 */
		empty: boolean;

		/**
		 * Item iterator
		 */
		[Symbol.iterator](): any;

		/**
		 * First item in the data source or null if empty
		 */
		firstItem: (any | null);

		/**
		 * Last item in the data source or null if empty
		 */
		lastItem: (any | null);

		/**
		 * Query data source items
		 */
		query(args: DataSource.QueryArguments, onResult: (args: {items: globalThis.Array<any>}) => void, onError?: (error: any) => void): void;

		/**
		 * Adds items to the collection
		 */
		add(args: {item?: any; items?: globalThis.Array<any>; index?: number; reason?: string}): object;

		/**
		 * Remove items from the collection
		 */
		remove(args: {item?: any; items?: globalThis.Array<any>; index?: number; count?: number; reason?: string}): object;

		/**
		 * Remove all items from the data source
		 */
		clear(): void;

		/**
		 * Change order of elements in the collection. Moves a chunk of items from one position to another.
		 */
		move(args: {sourceIndex: number; targetIndex: number; count?: number; reason?: string}): object;

		/**
		 * Run callback for all items in the data source
		 */
		forEach(callback: (item: any, index: number) => void): void;

		/**
		 * Returns a new filtered data source
		 */
		filter(filter: (item: any, index: number) => boolean): ArrayDataSource;

		/**
		 * Returns a new transformed data source
		 */
		map(transform: (item: any, index: number) => any): ArrayDataSource;

		/**
		 * Returns a new sorted data source
		 */
		sort(comparator: (left: any, right: any) => number): ArrayDataSource;

		/**
		 * Return the item at a particular index
		 */
		itemAtIndex(index: number): any;

		/**
		 * Convert the data source to an array
		 */
		toArray(): globalThis.Array<any>;

		/**
		 * Find the index of a particular item
		 */
		indexOf(item: any): (number | null);

		/**
		 * Check if the data source contains a particular item
		 */
		contains(item: any): boolean;

		/**
		 * Check if the data source contains an item matching the predicate
		 */
		containsMatching(predicate: (item: any) => boolean): boolean;

		/**
		 * Find the first element matching a predicate.
		 */
		findFirst(predicate: (item: any) => boolean): {found: boolean; item: (any | null); index: (number | null)};

		/**
		 * Find the last element matching a predicate.
		 */
		findLast(predicate: (item: any) => boolean): {found: boolean; item: (any | null); index: (number | null)};

	}

	export namespace ArrayDataSource {
	}

	/**
	 * Assertions
	 */
	export namespace Assert {
		/**
		 * Verify that value is defined and is not null
		 */
		function checkNotNull(value: any, message?: string): void;

		/**
		 * Verify that argument value complies with a specific precondition
		 */
		function checkArgument(condition: boolean, message?: string): void;

		/**
		 * Verify that program state complies with a specific precondition
		 */
		function checkState(condition: boolean, message?: string): void;

		/**
		 * Verify that value is a valid index
		 */
		function checkIndex(index: number, size: number, message?: string): void;

		/**
		 * Verify that value is between start and end arguments
		 */
		function checkRange(value: number, start: number, end: number, message?: string): void;

		/**
		 * Verify that value is of given type(s)
		 */
		function checkType(value: any, type: Type.Matcher, message?: (string | (() => string))): void;

		/**
		 * Always throws error
		 */
		function fail(message?: string): void;

		/**
		 * Checks that property is of given type and automatically generates error message
		 */
		function checkProperty(value: any, type: Type.Matcher, name: string): void;

		/**
		 * Checks object properties for given property types
		 */
		function checkProperties(properties: object, types: Record<string, Type.Matcher>): void;

	}

	/**
	 * Async utility functions
	 */
	export namespace Async {
		/**
		 * Delay for a selected amount of milliseconds
		 */
		function delay(timeout: number): globalThis.Promise<any>;

	}

	export class BrowserConsoleReporter extends LogReporter {
		/**
		 * Constructs BrowserConsoleReporter
		 */
		constructor();

		/**
		 * Whether all types of logs should be displayed using console.trace() This is helpful when debugging in Chrome as it show a message with a clickable call stack. In Firefox and IE11 it also shows a call stack, but does not show the message itself (this is a reported bug).
		 */
		useTraceForAll: boolean;

	}

	export namespace BrowserConsoleReporter {
	}

	/**
	 * Bundle manager
	 */
	class BundleManager {
	}

	namespace BundleManager {
	}

	/**
	 * Cancellation token
	 */
	export class CancellationToken {
		/**
		 * Constructor
		 */
		constructor();

		/**
		 * True if the operation has been cancelled
		 */
		cancelled: boolean;

		/**
		 * Register a callback that will be called when the associated operation is cancelled. It the operation is already cancelled the callback will be executed immediately.
		 */
		onCancel(callback: (args: object) => void): void;

		/**
		 * Cancel the token
		 */
		private _cancel(args: object): void;

	}

	export namespace CancellationToken {
	}

	/**
	 * Cancellation token source
	 */
	export class CancellationTokenSource {
		/**
		 * Constructor
		 */
		constructor();

		/**
		 * Check if token is cancelled
		 */
		cancelled: boolean;

		/**
		 * Get token
		 */
		token: CancellationToken;

		/**
		 * Cancel token
		 */
		cancel(args: object): void;

	}

	export namespace CancellationTokenSource {
	}

	export namespace Class {
		/**
		 * Create a new class object according to the definition
		 */
		function create(definition: {initialize?: (...args: globalThis.Array<any>) => any; methods?: object; overrides?: object; properties?: object; events?: boolean; automationId?: string; mixin?: (Mixin | globalThis.Array<Mixin>); static?: object; extend?: object; implement?: (Interface | globalThis.Array<Interface>)}): (...args: globalThis.Array<any>) => any;

		/**
		 * Describe a native JS class. It is possible to specify implemented interfaces, add mixins and other features supported by Class.create.
		 */
		function describe(Class: (...args: globalThis.Array<any>) => any, options: {automationId?: string; methods?: object; overrides?: object; properties?: object; events?: boolean; mixin?: (Mixin | globalThis.Array<Mixin>); static?: object; implement?: (Interface | globalThis.Array<Interface>)}): ReflectionClassDescriptor;

		/**
		 * @deprecated 
		 */
		function hasProperty(): void;

		/**
		 * @deprecated 
		 */
		function getProperty(): void;

		/**
		 * @deprecated 
		 */
		function getProperties(): void;

	}

	/**
	 * Class descriptor
	 */
	class ClassDescriptor {
	}

	namespace ClassDescriptor {
	}

	export class ClipboardMessage extends RoutedMessage {
		/**
		 * Constructs ClipboardMessage
		 */
		constructor(options: ClipboardMessage.Options);

		element: EventTarget;

		/**
		 * DataTransfer object containing the data affected by the user-initiated cut, copy, or paste operation, along with its MIME type
		 */
		clipboardData: DataTransfer;

		/**
		 * Gets data of mime type
		 */
		getData(mimeType?: string): string;

		static fromEvent(event: ClipboardEvent): ClipboardMessage;

	}

	export namespace ClipboardMessage {
		interface Options extends RoutedMessage.Options {
			element: Element;

			clipboardData: DataTransfer;

		}

	}

	/**
	 * Utility class representing color with methods for conversions between different color models and color modifications
	 */
	export class Color {
		/**
		 * Constructs Color
		 */
		constructor(color: Color.Definition, type?: Color.Model);

		/**
		 * Gets color in HEX model
		 */
		hex: Color.HEXObject;

		/**
		 * Gets color in RGB model
		 */
		rgb: Color.RGBObject;

		/**
		 * Gets color in CMYK model
		 */
		cmyk: Color.CMYKObject;

		/**
		 * Gets color in HSL model
		 */
		hsl: object;

		/**
		 * Gets color in HSV model
		 */
		hsv: Color.HSVObject;

		/**
		 * Gets color in HWB model
		 */
		hwb: Color.HWBObject;

		/**
		 * Gets color in grayscale model
		 */
		grayscale: Color.GrayscaleObject;

		/**
		 * Gets color alpha channel
		 */
		alpha: object;

		/**
		 * Gets color's complement
		 */
		complement: Color;

		/**
		 * Gets color luminosity - https://www.w3.org/TR/WCAG20/#relativeluminancedef
		 */
		luminosity: number;

		/**
		 * Determines if the color is dark - https://24ways.org/2010/calculating-color-contrast/
		 */
		isDark: boolean;

		/**
		 * Determines if the color is light - https://24ways.org/2010/calculating-color-contrast/
		 */
		isLight: boolean;

		/**
		 * Sets color
		 */
		setColor(color: Color.Definition, type?: Color.Model): Color;

		/**
		 * Sets red channel
		 */
		setRed(red: number): Color;

		/**
		 * Sets green channel
		 */
		setGreen(green: number): Color;

		/**
		 * Sets blue channel
		 */
		setBlue(blue: number): Color;

		/**
		 * Sets cyan channel
		 */
		setCyan(cyan: number): Color;

		/**
		 * Sets magenta channel
		 */
		setMagenta(magenta: number): Color;

		/**
		 * Sets yellow channel
		 */
		setYellow(yellow: number): Color;

		/**
		 * Sets black channel
		 */
		setBlack(black: number): Color;

		/**
		 * Adjusts hue channel set as the current value
		 */
		adjustHue(degrees: number): Color;

		/**
		 * Decreases saturation channel by ratio - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		desaturate(ratio: number): Color;

		/**
		 * Decreases saturation channel by amount - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		desaturateByAmount(amount: number): Color;

		/**
		 * Increases saturation level by ratio - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		saturate(ratio: number): Color;

		/**
		 * Increases saturation level by amount - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		saturateByAmount(amount: number): Color;

		/**
		 * Decreases lightness channel by ratio - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		darken(ratio: number): Color;

		/**
		 * Decreases lightness channel by amount - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		darkenByAmount(amount: number): Color;

		/**
		 * Increases lightness channel by ratio - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		lighten(ratio: number): Color;

		/**
		 * Increases lightness channel by amount - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		lightenByAmount(amount: number): Color;

		/**
		 * Increases blackness channel by ratio - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		blacken(ratio: number): Color;

		/**
		 * Increases blackness channel by amount - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		blackenByAmount(amount: number): Color;

		/**
		 * Increases whiteness channel by ratio - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		whiten(ratio: number): Color;

		/**
		 * Increases whiteness channel by amount - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		whitenByAmount(amount: number): Color;

		/**
		 * Decreases alpha channel by ratio - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		fade(ratio: number): Color;

		/**
		 * Decreases alpha channel by amount - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		fadeByAmount(amount: number): Color;

		/**
		 * Increases alpha channel by ratio - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		opaquer(ratio: number): Color;

		/**
		 * Increases alpha channel by amount - if minimum/maximum (0/1) value for the channel is exceeded, that minimum/maximum value is set as the current value
		 */
		opaquerByAmount(amount: number): Color;

		/**
		 * Sets hue channel
		 */
		setHue(hue: number): Color;

		/**
		 * Sets saturation channel in HSL model
		 */
		setSaturationHsl(saturation: number): Color;

		/**
		 * Sets lightness channel
		 */
		setLightness(lightness: number): Color;

		/**
		 * Sets saturation channel in HSV model
		 */
		setSaturationHsv(saturation: number): Color;

		/**
		 * Sets value channel
		 */
		setValue(value: number): Color;

		/**
		 * Sets whiteness channel
		 */
		setWhiteness(whiteness: number): Color;

		/**
		 * Sets blackness channel
		 */
		setBlackness(blackness: number): Color;

		/**
		 * Sets alpha channel
		 */
		setAlpha(alpha: number): Color;

		/**
		 * Negates the color (turns it into the original color's complement)
		 */
		negate(): void;

		/**
		 * Returns true if color is equal to different color
		 */
		isEqual(color: Color): boolean;

		/**
		 * Mixes two colors by given weight
		 */
		mix(color: Color, weight?: number): void;

		/**
		 * Returns copy of the color
		 */
		copy(): Color;

		/**
		 * Convert the Color to a CSS string
		 */
		toString(): string;

		/**
		 * Transforms 0-255 range to percents
		 */
		private _eightBitChannelToPercent(channel: number): number;

		/**
		 * Transforms 0-1 range to percents
		 */
		private _zeroToOneChannelToPercent(channel: number): number;

		/**
		 * Converts RGB to HEX
		 */
		static rgbToHex(rgb: Color.RGB, withAlpha?: boolean): Color.HEX;

		/**
		 * Converts RGB to CMYK
		 */
		static rgbToCmyk(rgb: Color.RGB): Color.CMYK;

		/**
		 * Converts RGB to HSL
		 */
		static rgbToHsl(rgb: Color.RGB): Color.HSL;

		/**
		 * Converts RGB to HSV
		 */
		static rgbToHsv(rgb: Color.RGB): Color.HSV;

		/**
		 * Converts RGB to Greyscale with luminosity method
		 */
		static rgbToGrayscaleLuminosity(rgb: Color.RGB): number;

		/**
		 * Converts RGB to Greyscale with lightness method
		 */
		static rgbToGrayscaleLightness(rgb: Color.RGB): number;

		/**
		 * Converts RGB to Greyscale with average method
		 */
		static rgbToGrayscaleAverage(rgb: Color.RGB): number;

		/**
		 * Converts HEX to RGB
		 */
		static hexToRgb(hex: Color.HEX): Color.RGB;

		/**
		 * Transforms short hex notation (#fff/#ffff) to the long one (#ffffff/#ffffffff)
		 */
		static shortHexToLong(hex: Color.HEX): Color.HEX;

		/**
		 * Gets alpha value from the HEX notation
		 */
		static getAlphaFromHex(hex: Color.HEX): number;

		/**
		 * Strips the alpha value from the HEX notation (#ffff/#ffffffff -> #fff/#ffffff)
		 */
		static getHexWithoutAlpha(hex: Color.HEX): Color.HEX;

		/**
		 * Converts CMYK to RGB
		 */
		static cmykToRgb(cmyk: Color.CMYK): Color.RGB;

		/**
		 * Converts HSL to RGB
		 */
		static hslToRgb(hsl: Color.HSL): Color.RGB;

		/**
		 * Converts HSV to RGB
		 */
		static hsvToRgb(hsv: Color.HSV): Color.RGB;

		/**
		 * Converts HSV to HSL
		 */
		static hsvToHsl(hsv: Color.HSV): Color.HSL;

		/**
		 * Converts HSV to HWB
		 */
		static hsvToHwb(hsv: Color.HSV): Color.HWB;

		/**
		 * Converts HSL to HSV
		 */
		static hslToHsv(hsl: Color.HSL): Color.HSV;

		/**
		 * Converts HWB to HSV
		 */
		static hwbToHsv(hwb: Color.HWB): Color.HSV;

		/**
		 * Checks if the color is in valid HEX format
		 */
		static isHex(hex: Color.HEX): boolean;

		/**
		 * Checks if the color is in valid RGB format
		 */
		static isRgb(rgb: Color.RGB): boolean;

		/**
		 * Checks if the color is in valid CMYK format
		 */
		static isCmyk(cmyk: Color.CMYK): boolean;

		/**
		 * Checks if the color is in valid HSL format
		 */
		static isHsl(hsl: Color.HSL): boolean;

		/**
		 * Checks if the color is in valid HSV format
		 */
		static isHsv(hsv: Color.HSV): boolean;

		/**
		 * Checks if the color is in valid HWB format
		 */
		static isHwb(hwb: Color.HWB): boolean;

		/**
		 * Asserts HEX format
		 */
		static assertHex(hex: any): void;

		/**
		 * Asserts RGB format
		 */
		static assertRgb(rgb: any): void;

		/**
		 * Asserts CMYK format
		 */
		static assertCmyk(cmyk: any): void;

		/**
		 * Asserts HSL format
		 */
		static assertHsl(hsl: any): void;

		/**
		 * Asserts HSV format
		 */
		static assertHsv(hsv: any): void;

		/**
		 * Asserts HWB format
		 */
		static assertHwb(hwb: any): void;

		/**
		 * Factory method for creating color in HEX model
		 */
		static hex(hex: Color.HEX): Color;

		/**
		 * Factory method for creating color in RGB model
		 */
		static rgb(redOrColorObject: (number | Color.RGB), green?: number, blue?: number, alpha?: number): Color;

		/**
		 * Factory method for creating color in CMYK model
		 */
		static cmyk(cyanOrColorObject: (number | Color.CMYK), magenta?: number, yellow?: number, black?: number, alpha?: number): Color;

		/**
		 * Factory method for creating color in HSL model
		 */
		static hsl(hueOrColorObject: (number | Color.HSL), saturation?: number, lightness?: number, alpha?: number): Color;

		/**
		 * Factory method for creating color in HSV model
		 */
		static hsv(hueOrColorObject: (number | Color.HSV), saturation?: number, value?: number, alpha?: number): Color;

		/**
		 * Factory method for creating color in HWB model
		 */
		static hwb(hueOrColorObject: (number | Color.HWB), whiteness?: number, blackness?: number, alpha?: number): Color;

		/**
		 * Factory method for creating color in Grayscale model
		 */
		static grayscale(grayscaleOrColorObject: (number | {grayscale: number; alpha: number}), alpha?: number): Color;

		/**
		 * Computes contrast between two colors - https://www.w3.org/TR/WCAG20/#contrast-ratiodef
		 */
		static contrastRatio(color1: Color, color2: Color): number;

		/**
		 * Computes contrast level between two colors for normal text - https://www.w3.org/TR/WCAG/#contrast-minimum
		 */
		static contrastLevelNormalText(color1: Color, color2: Color): string;

		/**
		 * Computes contrast level between two colors for large text - https://www.w3.org/TR/WCAG/#contrast-minimum
		 */
		static contrastLevelLargeText(color1: Color, color2: Color): string;

		/**
		 * Returns true if the two provided colors are the same
		 */
		static isEqual(color1: (Color | Color.HEX | null), color2: (Color | Color.HEX | null)): boolean;

		/**
		 * Mixes two colors by given weight (https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209)
		 */
		static mix(color1: Color, color2: Color, weight?: number): void;

		/**
		 * Returns a copy of the given color
		 */
		static copy(color: Color): Color;

		/**
		 * Parses Color.HEX or instance of a Color to instance of a Color
		 */
		static parseColor(hexOrColor: (Color | Color.HEX)): (Color | null);

		/**
		 * Parses instance of a Color or Color.HEX to Color.HEX
		 */
		static formatColorToHex(hexOrColor: (Color | Color.HEX)): (Color.HEX | null);

		/**
		 * Creates a CSS linear gradient
		 */
		static linearGradient(colorStops: globalThis.Array<(Color | Color.HEX | globalThis.Array<(Color | Color.HEX | string)>)>, angleOrDirection?: string): string;

		/**
		 * Creates a CSS radial gradient
		 */
		static radialGradient(colorStops: globalThis.Array<(Color | Color.HEX | globalThis.Array<(Color | Color.HEX | string)>)>, position?: string): string;

		/**
		 * Precision of decimal numbers - 10^(preciseDecimalPoints) = PRECISION
		 */
		static PRECISION: number;

	}

	export namespace Color {
		type Definition = (Color.HEX | Color.RGB | Color.CMYK | Color.HSL | Color.HSV | Color.HWB | Color.GrayscaleObject);

		type HEX = string;

		interface RGB {
			r: number;

			g: number;

			b: number;

			a?: number;

		}

		interface CMYK {
			c: number;

			m: number;

			y: number;

			k: number;

			a?: number;

		}

		interface HSL {
			h: number;

			s: number;

			l: number;

			a?: number;

		}

		interface HSV {
			h: number;

			s: number;

			v: number;

			a?: number;

		}

		interface HWB {
			h: number;

			w: number;

			b: number;

			a?: number;

		}

		interface Greyscale {
			luminosity: number;

			average: number;

			lightness: number;

		}

		interface HEXObject {
			value: string;

		}

		interface RGBObject {
			object: {r: number; g: number; b: number; a: number};

			red: number;

			green: number;

			blue: number;

			cssString: string;

			cssStringPercent: string;

			cssStringWithAlpha: string;

			cssStringWithAlphaPercent: string;

			array: globalThis.Array<number>;

			arrayPercent: globalThis.Array<number>;

		}

		interface CMYKObject {
			object: {c: number; m: number; y: number; k: number; a: number};

			cyan: number;

			magenta: number;

			yellow: number;

			black: string;

			array: globalThis.Array<number>;

			arrayPercent: globalThis.Array<number>;

		}

		interface HSLObject {
			object: {h: number; s: number; l: number; a: number};

			hue: number;

			saturation: number;

			lightness: number;

			cssString: string;

			cssStringWithAlpha: string;

			array: globalThis.Array<number>;

			arrayPercent: globalThis.Array<number>;

		}

		interface HSVObject {
			object: {h: number; s: number; v: number; a: number};

			hue: number;

			saturation: number;

			value: number;

			array: globalThis.Array<number>;

			arrayPercent: globalThis.Array<number>;

		}

		interface HWBObject {
			object: {h: number; w: number; b: number; a: number};

			hue: number;

			whiteness: number;

			blackness: number;

			cssString: string;

			cssStringWithAlpha: string;

			array: globalThis.Array<number>;

			arrayPercent: globalThis.Array<number>;

		}

		interface GrayscaleObject {
			average: number;

			luminosity: number;

			lightness: number;

			cssStringAverage: string;

			cssStringLuminosity: string;

			cssStringLightness: string;

		}

		/**
		 * Color model
		 */
		enum Model {
			HEX,
			RGB,
			CMYK,
			HSL,
			HSV,
			HWB,
		}

		/**
		 * Hex color palette
		 */
		enum Palette {
			Basic,
			Rgb,
			Cmy,
		}

		/**
		 * Color Types
		 */
		enum Type {
			ByteColorChannel,
			FloatColorChannel,
			DegreesColorChannel,
			Instance,
			Hex,
			Value,
		}

		/**
		 * Standard colors instances
		 */
		enum Standard {
			BLACK,
			SILVER,
			GRAY,
			WHITE,
			MAROON,
			RED,
			PURPLE,
			FUCHSIA,
			GREEN,
			LIME,
			OLIVE,
			YELLOW,
			NAVY,
			BLUE,
			TEAL,
			AQUA,
			CYAN,
			MAGENTA,
		}

	}

	/**
	 * Comparator utilities
	 */
	export namespace Comparator {
		interface Direction {
			propertyName: string;

			comparator: Comparator.Function;

		}

		type Function = (left: any, right: any) => number;

		/**
		 * Create a comparator using the standard less than operator. Applicable to strings and numbers.
		 */
		function lessThan(ascending?: boolean, nullFirst?: boolean): Comparator.Function;

		/**
		 * Create a comparator for strings
		 */
		function string(ascending?: boolean, nullFirst?: boolean): Comparator.Function;

		/**
		 * Create a comparator for numbers
		 */
		function number(ascending?: boolean, nullFirst?: boolean): Comparator.Function;

		/**
		 * Create a comparator for date objects
		 */
		function date(ascending?: boolean, nullFirst?: boolean): Comparator.Function;

		/**
		 * Create a comparator for date time objects
		 */
		function dateTime(ascending?: boolean, nullFirst?: boolean): Comparator.Function;

		/**
		 * Create a comparator for time objects
		 */
		function time(ascending?: boolean, nullFirst?: boolean): Comparator.Function;

		/**
		 * Create a comparator for booleans
		 */
		function boolean(ascending?: boolean, nullFirst?: boolean): Comparator.Function;

		/**
		 * Create a comparator that compares a particular property of two objects
		 */
		function ofObjectProperty(propertyName: string, comparator: Comparator.Function): Comparator.Function;

		/**
		 * Create a comparator for multiple object properties
		 */
		function ofObjectProperties(directions: globalThis.Array<Comparator.Direction>): Comparator.Function;

	}

	/**
	 * Components are the basic building block of the entire framework. They are encapsulating and providing the functionality of specific UI objects such as controls or containers. To build a page using components you construct the corresponding component and attach it to the page or include it in a container such as StackPanel or TabPanel. This creates a hierarchical structure of components modelling your page.
	 * Interaction with components is done through their API - properties, methods, events and callbacks. This API is designed to work regardless of whether the components is attached to the page or not. The HTML and CSS produced by the component are considered implementation detail that should not be relied upon.
	 * Component also brings basic lifecycle such as render, erase and dispose. The lifecycle is driven mainly by its presence in the page. Components that are not visible to the user (i.e., are detached or hidden) do not need to maintain their DOM representation and can therefore greatly save resources and improve performance. Render is invoked when component or its parent component is attached to the main page and becomes visible for the user. Its main goal is to provide the HTML reflecting the internal state of the component. Erase happens when component is detached or becomes hidden. Disposal process is there to clean all managed resources. Once the component is disposed, it's unsafe to call any operation on it and all references to its instance should be invalidated. When using a component, you can listen to the lifecycle phases using the appropriate events.
	 * To implement a component you need to override the _onRender method and produce the DOM representation. Component can then respond to DOM events by overriding the appropriate methods and can alter its underlying DOM. Component should never modify any DOM which does not belong to its root element and which was not created by component's logic.
	 */
	export abstract class Component implements MessageHandler, EventSource, PropertyObservable {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: EventSource.EventName, listener: EventSource.Listener): EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: EventSource.EventName): void;

		/**
		 * Use this method to attach listeners to property changes
		 */
		onPropertyChanged(propertyName?: string, callback?: (args: PropertyObservable.EventArgs, sender: any) => void): any;

		/**
		 * Use this method to fire propertyChanged event
		 */
		protected _notifyPropertyChanged(propertyName: string, oldValue: any, newValue: any, reason?: (string | null)): void;

		/**
		 * Constructor
		 */
		protected constructor(options?: Component.Options);

		/**
		 * Automation id. This id can be set by the user of the component in the constructor and appears in the data-automation-id attribute on the root element. It is not directly used by the framework and does not have to be globally unique.
		 */
		automationId: (string | null);

		/**
		 * Globally unique component id. This is a generated id that is guaranteed to be unique. This id is used as the id attribute on the root element of the component.
		 */
		guid: string;

		/**
		 * The parent component
		 */
		parentComponent: (Component | null);

		/**
		 * The set of child components. This set is empty for components that are not rendered.
		 */
		childComponents: globalThis.Set<Component>;

		/**
		 * The internationalization context. Available only for rendering/rendered components.
		 */
		i18n: (I18n | null);

		/**
		 * True for right-to-left contexts. Value is available only for rendered/rendering components.
		 */
		rtl: (boolean | null);

		/**
		 * Component context, only available for rendered components
		 */
		context: object;

		/**
		 * Dynamic component styles, only available for rendered components
		 */
		style: object;

		/**
		 * Returns true in case that component is being initialized
		 */
		initializing: boolean;

		/**
		 * Returns true in case that component has been initialized
		 */
		initialized: boolean;

		/**
		 * Returns true in case that component is being disposed
		 */
		disposing: boolean;

		/**
		 * Returns true in case that component has been disposed
		 */
		disposed: boolean;

		/**
		 * Get the component size. Works only when the component is rendered
		 */
		computedSize: {width: number; height: number};

		/**
		 * Component visibility
		 */
		visible: boolean;

		/**
		 * Checks whether component is being attached
		 */
		attaching: boolean;

		/**
		 * Checks whether component is being detached
		 */
		detaching: boolean;

		/**
		 * Returns the current visual style
		 */
		visualStyle: any;

		/**
		 * Checks whether component is rendered
		 */
		rendered: boolean;

		/**
		 * Checks whether the component is currently being rendered
		 */
		rendering: boolean;

		/**
		 * Checks whether the component is currently being erased
		 */
		erasing: boolean;

		/**
		 * Returns root HTMLElement associated with this component. This works only if HTMLElement has already been created during attachment phase while calling {@link Component.attachTo}.
		 */
		rootElement: (HTMLElement | null);

		/**
		 * Root element attributes
		 */
		rootAttributes: HtmlAttributeList;

		/**
		 * Root element inline style
		 */
		rootStyle: HtmlStyleList;

		/**
		 * Css class list manager
		 */
		classList: HtmlClassList;

		/**
		 * Enables/disables all user interactions with this component. All programmatic access won't be affected by this. User won't be able to interact with disabled component.
		 */
		enabled: boolean;

		/**
		 * Checks whether component can be operated using normal user interactions. Component is effectively enabled when {@link Component.enabled} is true and {@link Component.enabled} of all of its parents is true. This value thus represents actual availability of user interactions on this component.
		 */
		effectiveEnabled: boolean;

		/**
		 * Component validity. This property is just a shorthand for status property. Component is valid if status is different from ERROR. For PENDING status the property returns null.
		 */
		valid: (boolean | null);

		/**
		 * Component status
		 */
		status: Component.Status;

		/**
		 * Status message
		 */
		statusMessage: (string | Translation | Component | JSX.Element | null);

		/**
		 * True if the component is focusable
		 */
		effectiveFocusable: boolean;

		/**
		 * True if the component can be focusable
		 */
		focusable: boolean;

		/**
		 * True if the component is accessible by the TAB key
		 */
		effectiveTabbable: boolean;

		/**
		 * True if the component can be accessible by the TAB key
		 */
		tabbable: boolean;

		/**
		 * Checks whether this component has focus.
		 */
		focused: boolean;

		/**
		 * Checks whether this component is active. Component is active if it or one of its children is focused. Active component is component that has some visual flag that notifies user that this component is somehow operating right now (like handling nested messages for its child components).
		 */
		active: boolean;

		/**
		 * Loader for the component
		 */
		loader: PackageComponent.Loader;

		/**
		 * Toggle loader visibility
		 */
		loaderVisible: boolean;

		/**
		 * Tooltip
		 */
		tooltip: (PackageComponent.Tooltip | null);

		/**
		 * Drag source
		 */
		dragSource: (DataExchange.DragSourceProvider | null);

		/**
		 * Drag target
		 */
		dragTarget: (DataExchange.DragTargetProvider | null);

		/**
		 * Reference to label component
		 */
		labelledBy: (Component | VDomRef | string | number | null);

		/**
		 * Reference to description component
		 */
		describedBy: (Component | VDomRef | string | number | null);

		/**
		 * Accessibility label
		 */
		ariaLabel: (string | Translation | null);

		/**
		 * Focus handler
		 */
		focusHandler: FocusHandler;

		/**
		 * Context provider
		 */
		contextProvider: (context: object) => object;

		/**
		 * Initializes component. If component is already initialized then no further initialization is performed. Initialization is performed only once during component's lifecycle. If not invoked explicitly the initialization happens just before the first render.
		 * @deprecated 
		 */
		initialize(): void;

		/**
		 * Disposes component ending its life.
		 * Once component is disposed it's unsafe to call any method on it. All references to this instance should be invalidated.
		 * @deprecated 
		 */
		dispose(): void;

		/**
		 * Check if the component contains another component
		 */
		containsComponent(component: Component, portal?: boolean): void;

		/**
		 * Find parent component matching a predicate
		 */
		findParentComponent(predicate: (parent: Component) => boolean, context?: Component): (Component | null);

		/**
		 * Returns the portal containing this component
		 */
		getPortal(): void;

		/**
		 * Visit child components. Does not visit portals.
		 */
		visitComponents(callback: (component: Component) => (boolean | null), options?: {type?: Component.TraversalType}): void;

		/**
		 * Attaches component to DOM element represented by parent parameter.
		 * If component has already been attached to DOM element then this instance will be first detached and then reattached to another DOM element. User can specify how the component is attached to DOM by specifying mode in options.
		 * @deprecated Use virtual DOM 
		 */
		attachTo(parentOrSelector: (HTMLElement | string), options?: {mode?: Component.AttachMode; element?: Element; index?: number; parentComponent?: Component}): Component;

		/**
		 * Removes component from parent DOM element to which it has been previously attached. Calling this function will remove all HTMLElement nodes from DOM that are managed by this component. This does not have any effect if component has not been attached to DOM yet.
		 * Component can be safely reattached to DOM once it's been detached by {@link Component.attachTo}
		 * @deprecated Use virtual DOM 
		 */
		detach(): void;

		/**
		 * Returns the list of registered message pre-filters for a given message
		 */
		protected _getMessagePreFilters(message: RoutedMessage): globalThis.Array<RoutedMessage.Filter>;

		/**
		 * Returns the list of registered message post-filters for a given message
		 */
		protected _getMessagePostFilters(message: RoutedMessage): globalThis.Array<RoutedMessage.Filter>;

		/**
		 * Processes DOM and other messages
		 */
		processMessage(next: RoutedMessage.Handler, message: RoutedMessage, result: RoutedMessage.Result): void;

		/**
		 * Check if the component DOM contains an element
		 */
		containsElement(element: HTMLElement, options?: {isOwnElement?: boolean}): boolean;

		/**
		 * Computes component size. Can be safely called only for rendered components.
		 */
		computeSize(includeMargin: boolean): {width: number; height: number};

		/**
		 * Makes this component visible
		 */
		show(): void;

		/**
		 * Hides this component making it invisible
		 */
		hide(): void;

		/**
		 * Sets focus to this component.
		 */
		focus(): void;

		/**
		 * Sets visibility
		 */
		setVisible(visible: boolean, options?: {reason?: string}): void;

		/**
		 * Sets enabled
		 */
		setEnabled(enabled: boolean, options?: {reason?: string}): void;

		/**
		 * Sets valid
		 */
		setValid(value: boolean, options?: {message?: (string | Translation | Component | JSX.Element); reason?: string}): void;

		/**
		 * Set component status. Clears the statusMessage property if no new message is specified.
		 */
		setStatus(status: Component.Status, options?: {message?: (string | Translation | Component | JSX.Element); reason?: string; silent?: boolean}): void;

		/**
		 * Change status message that is shown in a tooltip on the status icon or the cell
		 */
		setStatusMessage(message: (string | Translation | Component | JSX.Element | null), options?: {reason?: (string | null); silent?: boolean}): void;

		/**
		 * Sets loader visibility
		 */
		setLoaderVisible(visible: boolean): void;

		/**
		 * Toggle focusability of the component
		 */
		setFocusable(value: boolean): void;

		/**
		 * Toggle tabbability of the component
		 */
		setTabbable(value: boolean): void;

		/**
		 * Change the visual style of the component
		 */
		setVisualStyle(style: any): void;

		/**
		 * Sets tooltip
		 */
		setTooltip(tooltip: (PackageComponent.Tooltip | null)): void;

		/**
		 * Set automation id
		 */
		setAutomationId(value: (string | null)): void;

		/**
		 * Set drag source
		 */
		setDragSource(source: (DataExchange.DragSourceProvider | null)): void;

		/**
		 * Set drag target
		 */
		setDragTarget(target: (DataExchange.DragTargetProvider | null)): void;

		/**
		 * Set label component or id
		 */
		setLabelledBy(value: (Component | VDomRef | string | number | null)): void;

		/**
		 * Set description component or id
		 */
		setDescribedBy(value: (Component | VDomRef | string | number | null)): void;

		/**
		 * Set accessibility label
		 */
		setAriaLabel(value: (string | null)): void;

		/**
		 * Registers a message filter for the component
		 */
		addMessageFilter(filter: (RoutedMessage.Filter | Record<string, RoutedMessage.Handler>)): {remove: () => void};

		/**
		 * Removes message filter previously registered using Component#addMessageFilter
		 */
		removeMessageFilter(filter: RoutedMessage.Filter): void;

		/**
		 * Get the automationId of the class
		 */
		getClassAutomationId(): (string | null);

		/**
		 * Force all components in the tree to flush any pending layout changes
		 */
		forceLayout(): void;

		/**
		 * Utility method that accepts either a string or a translation and returns a string.
		 */
		translate(value: (string | number | Translation)): string;

		/**
		 * Apply prop updates during VDom reconciliation
		 */
		private _receiveProps(oldProps: object, newProps: object): void;

		/**
		 * Perform an action after component is rendered or do it immediately if it is rendered already
		 */
		whenRendered(action: () => void): EventSource.Handle;

		/**
		 * Checks if property value has changed and if it has the correct type, writes the value to the backing field and calls _refresh.
		 */
		protected _setProp(name: string, value: any, comparator?: (left: any, right: any) => boolean): boolean;

		/**
		 * Set multiple property values
		 */
		protected _setProps(props: object): void;

		/**
		 * Validate property value using propTypes
		 */
		protected _validateProp(name: string, value: any): void;

		/**
		 * Call this method to let your parent components know that your content has changed. Windows listen for these changes and update their size.
		 */
		protected _notifyContentUpdate(): void;

		/**
		 * Add a child component
		 */
		private _addChildComponent(component: Component): void;

		/**
		 * Removes child component
		 */
		private _removeChildComponent(component: Component): void;

		/**
		 * Re-render the component. Intended only for internal use by Component and its sub-classes.
		 */
		protected _refresh(): void;

		/**
		 * Execute logic after component render
		 */
		private _handleDidRender(): void;

		/**
		 * Execute logic before component erase
		 */
		private _handleWillErase(): void;

		/**
		 * Hooks resize listener
		 */
		private _hookResizeListener(): void;

		/**
		 * Unhooks resize listener
		 */
		private _unhookResizeListener(): void;

		/**
		 * Calculates the effective enabled flag based on the enabled state of this component and its parents
		 */
		private _updateEffectiveEnabled(reason?: string): void;

		/**
		 * Remove the focus if this component is active while becoming detached or hidden
		 */
		private _removeFocus(): void;

		/**
		 * Handle resize event
		 */
		private _handleResizeEvent(args: ResizeObserver.ResizeArgs): void;

		/**
		 * Update the automationId attribute
		 */
		private _updateAutomationId(): void;

		/**
		 * Update the aria-labelledby attribute
		 */
		private _updateAriaLabelledBy(): void;

		/**
		 * Get the value of the labelled by attribute
		 */
		protected _getAriaLabelledBy(): (Component | VDomRef | string | number | null);

		/**
		 * Update the aria-describedby attribute
		 */
		private _updateAriaDescribedBy(): void;

		/**
		 * Attach drag source and target
		 */
		private _attachDragSourceAndTarget(rootElement: HTMLElement): void;

		/**
		 * Detach drag srouce and target
		 */
		private _detachDragSourceAndTarget(rootElement: HTMLElement): void;

		/**
		 * Update the aria label attribute
		 */
		protected _updateAriaLabel(): void;

		/**
		 * Update component validity based on the status property
		 */
		private _updateValidity(previousStatus: Component.Status, status: Component.Status, reason: (string | null)): void;

		/**
		 * Get the aria label for this component
		 */
		protected _getAriaLabel(): (string | null);

		/**
		 * Change the focus handler
		 */
		protected _setFocusHandler(handler: FocusHandler): void;

		/**
		 * Returns the element which obtains focus on FOCUS IN message.
		 */
		protected _getFocusElement(): HTMLElement;

		/**
		 * Get the element that should receive the aria-labelledby and aria-describedby attributes
		 */
		protected _getAriaElement(): HTMLElement;

		/**
		 * Method to be overridden in descendants which need to handle special cases when the component is disabled, but wants the event to be passed for processing. One example is allowing resizing of disabled TextArea.
		 */
		protected _bypassMessageOnDisabledComponent(message: RoutedMessage): boolean;

		/**
		 * Called when component is focused
		 */
		protected _onFocusIn(args: {element: HTMLElement; component: Component}): void;

		/**
		 * Called when component loses focus
		 */
		protected _onFocusOut(args: {nextFocusedElement: (Element | null); nextFocusedComponent: (Component | null); focusedComponent: Component}): void;

		/**
		 * Called when focus moves inside the component
		 */
		protected _onFocusMoved(args: {element: HTMLElement; component: Component}): void;

		/**
		 * Called when component is activated
		 */
		protected _onActivated(args: {element: HTMLElement; component: Component}): void;

		/**
		 * Called when component is deactivated
		 */
		protected _onDeactivated(args: {nextFocusedElement: (Element | null); nextFocusedComponent: (Component | null); focusedComponent: Component}): void;

		/**
		 * Override to handle mouse click message in capture phase
		 */
		protected _onCaptureClick(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle mouse double click message in capture phase
		 */
		protected _onCaptureDoubleClick(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle wheel message in capture phase
		 */
		protected _onCaptureWheel(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle pointer move message in capture phase
		 */
		protected _onCapturePointerMove(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle pointer leave message in capture phase
		 */
		protected _onCapturePointerLeave(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle pointer enter message in capture phase
		 */
		protected _onCapturePointerEnter(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle pointer over message in capture phase
		 */
		protected _onCapturePointerOver(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle pointer out message in capture phase
		 */
		protected _onCapturePointerOut(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle pointer up message in capture phase
		 */
		protected _onCapturePointerUp(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle pointer down message in capture phase
		 */
		protected _onCapturePointerDown(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle key down message in capture phase
		 */
		protected _onCaptureKeyDown(message: KeyboardMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle key up message in capture phase
		 */
		protected _onCaptureKeyUp(message: KeyboardMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle key press message in capture phase
		 */
		protected _onCaptureKeyPress(message: KeyboardMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle key down message in bubble up phase
		 */
		protected _onKeyDown(message: KeyboardMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle key up message in bubble up phase
		 */
		protected _onKeyUp(message: KeyboardMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle key press message in bubble up phase
		 */
		protected _onKeyPress(message: KeyboardMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle mouse click message in bubble up phase
		 */
		protected _onClick(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle mouse double click message in bubble up phase
		 */
		protected _onDoubleClick(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle pointer leave message in bubble up phase
		 */
		protected _onPointerLeave(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle pointer enter message in bubble up phase
		 */
		protected _onPointerEnter(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle pointer move message in bubble up phase
		 */
		protected _onPointerMove(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle pointer up message in bubble up phase
		 */
		protected _onPointerUp(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle pointer down message in bubble up phase
		 */
		protected _onPointerDown(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle pointer over message in bubble up phase
		 */
		protected _onPointerOver(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle pointer out message in bubble up phase
		 */
		protected _onPointerOut(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle mouse wheel message in bubble up phase
		 */
		protected _onWheel(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle scroll message in bubble up phase
		 */
		protected _onScroll(message: ViewMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle paste message in bubble up phase
		 */
		protected _onPaste(message: ClipboardMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle cut message in bubble up phase
		 */
		protected _onCut(message: ClipboardMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle select message in bubble up phase
		 */
		protected _onSelect(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Override to handle input message in bubble up phase
		 */
		protected _onInput(message: ValueChangeMessage, result: RoutedMessage.Result): void;

		/**
		 * Handle context menu message
		 */
		protected _onContextMenu(message: PointerMessage, result: RoutedMessage.Result): void;

		/**
		 * Called before the component is rendered for the first time.
		 * @deprecated 
		 */
		protected _onInitialize(): void;

		/**
		 * Called when component should dispose itself. This method should contain all the dispose logic.
		 * @deprecated 
		 */
		protected _onDispose(): void;

		/**
		 * Called once the component is added to active page. This method should return the DOM for this component.
		 */
		protected _onRender(context: object, css: object): (HTMLElement | JSX.Element | Component);

		/**
		 * Called once component has been fully rendered.
		 */
		protected _onAfterRender(context: object): void;

		/**
		 * Called for components using virtual dom after the dom has been updated.
		 */
		protected _onAfterUpdate(context: object): void;

		/**
		 * Called before component erases it's content.
		 */
		protected _onBeforeErase(context: object): void;

		/**
		 * Called when component is removed from the page or becomes hidden. By default the component DOM is thrown away but you may perform additional cleanup logic in this method such as releasing any references to the DOM elements.
		 * @deprecated 
		 */
		protected _onErase(context: object): void;

		/**
		 * Called when component should update its layout
		 */
		protected _onLayout(): void;

		/**
		 * Called on visible changes
		 */
		protected _onVisibleChanged(args: object): void;

		/**
		 * Called on visualStyle changes
		 */
		protected _onVisualStyleChanged(args: object): void;

		/**
		 * Called when component is resized
		 */
		protected _onResize(args: Component.ResizeArgs): void;

		/**
		 * Override to handle enabled flag change
		 */
		protected _onEnabledChanged(args: {enabled: boolean; previousEnabled: boolean; reason?: string}): void;

		/**
		 * Override to handle effective enabled flag change
		 */
		protected _onEffectiveEnabledChanged(args: {effectiveEnabled: boolean; previousEffectiveEnabled: boolean; reason?: string}): void;

		/**
		 * Override to handle validity change
		 */
		protected _onValidityChanged(args: {valid: boolean; previousValid: boolean; reason?: string}): void;

		/**
		 * Override to handle content updates
		 */
		protected _onContentUpdated(args: {component: Component}): boolean;

		/**
		 * Override to handle status changes
		 */
		protected _onStatusChanged(args: {status: Component.Status; previousStatus: Component.Status; reason?: string}): void;

		/**
		 * Override to handle status message changes
		 */
		protected _onStatusMessageChanged(args: {message: (string | Translation | Component); previousMessage: (string | Translation | Component); reason?: string}): void;

		protected _onContentMeasurementStarted(): void;

		protected _onContentMeasurementFinalized(): void;

		/**
		 * Provide additional context for self and child components
		 */
		protected _onProvideContext(context: object): object;

		/**
		 * Override to manually handle prop update during VDom reconciliation. By default property setter is called.
		 */
		protected _onReceiveProp(name: string, oldValue: any, newValue: any): void;

		/**
		 * Override to handle what should happen when a property is unset in virtual DOM
		 */
		protected _onUnsetProp(key: string): any;

		/**
		 * Return true to force component virtual DOM refresh
		 */
		protected _onShouldUpdate(): void;

		static Event: Component.EventTypes;

		/**
		 * Locates nearest component which encapsulates given HTMLElement
		 */
		static findByElement(element: Element, context?: Element): (Component | null);

		/**
		 * Creates a pseudo Component around a DOM element. Can be used as an owner of windows in legacy where no other owner is available or as a component for tooltip.
		 */
		static wrapElement(element: Element, host: PackageComponent.Host): ElementComponent;

		/**
		 * Find a Host based on a component
		 */
		static getHostByComponent(component: (Component | ElementComponent)): (PackageComponent.Host | null);

		/**
		 * Prepare component props. Merges defaultProps into options and checks types using propTypes.
		 */
		static props(Class: (options: any) => any, options: object, deepExtend?: boolean): object;

		/**
		 * Available contexts for rendering
		 */
		static contextTypes: globalThis.Array<string>;

		/**
		 * Checks if object is an instance of Component
		 */
		static is(value: any): void;

	}

	export namespace Component {
		interface Options {
			ariaLabel?: (string | Translation);

			automationId?: string;

			classList?: HtmlClassList.ClassList;

			describedBy?: (Component | VDomRef | number | string);

			dragSource?: DataExchange.DragSourceProvider;

			dragTarget?: DataExchange.DragTargetProvider;

			enabled?: boolean;

			focusable?: boolean;

			labelledBy?: (Component | VDomRef | number | string);

			messageFilter?: (RoutedMessage.Filter | Record<string, RoutedMessage.Handler>);

			observeSize?: boolean;

			rootAttributes?: Record<string, string>;

			rootStyle?: Record<string, string>;

			status?: Component.Status;

			statusMessage?: (string | Translation | Component | JSX.Element);

			tabbable?: boolean;

			tooltip?: PackageComponent.Tooltip;

			valid?: boolean;

			visible?: boolean;

			visualStyle?: any;

			loader?: PackageComponent.Loader.Options;

			contextProvider?: (context: object) => object;

			on?: EventSource.ListenerMap;

			ref?: VDomRef;

			key?: any;

		}

		interface EventTypes {
			INITIALIZED: string;

			WILL_DISPOSE: string;

			DISPOSED: string;

			RENDERED: string;

			WILL_ERASE: string;

			FOCUS_IN: string;

			FOCUS_OUT: string;

			FOCUS_MOVED: string;

			ACTIVATED: string;

			DEACTIVATED: string;

			ENABLED: string;

			EFFECTIVE_ENABLED_CHANGED: string;

			VALIDITY_CHANGED: string;

			STATUS_CHANGED: string;

			STATUS_MESSAGE_CHANGED: string;

			RESIZED: string;

			POINTER_ENTER: string;

			POINTER_LEAVE: string;

			VISIBILITY_CHANGED: string;

		}

		interface ResizeArgs {
			size: ResizeObserver.Size;

			previousSize: ResizeObserver.Size;

			deltaWidth: number;

			deltaHeight: number;

		}

		enum AttachMode {
			APPEND,
			PREPEND,
			BEFORE,
			INDEX,
		}

		enum Status {
			NONE,
			SUCCESS,
			INFO,
			WARNING,
			ERROR,
			PENDING,
		}

		enum StateStyle {
			ACTIVE,
			FOCUSED,
			DISABLED,
			SUSPENDED,
		}

		enum TraversalType {
			PREORDER,
			POSTORDER,
		}

	}

	/**
	 * Component focus handler
	 */
	class ComponentFocusHandler {
		/**
		 * Constructs ComponentFocusHandler
		 */
		constructor(args: {focusable?: boolean; tabbable?: boolean; component?: Component});

		/**
		 * True if the component is focusable
		 */
		effectiveFocusable: boolean;

		/**
		 * True if the component can be focusable
		 */
		focusable: boolean;

		/**
		 * True if the component is tabbable
		 */
		effectiveTabbable: boolean;

		/**
		 * True if the component can be tabbable
		 */
		tabbable: boolean;

		/**
		 * Current focus target component
		 */
		focusComponent: Component;

		/**
		 * Updates
		 */
		update(): void;

		/**
		 * Focuses
		 */
		focus(): boolean;

		/**
		 * Check if focused
		 */
		isFocused(focusComponent: Component): boolean;

		/**
		 * Creates new ComponentFocusHandler
		 */
		static factory(args: object): ComponentFocusHandler;

	}

	namespace ComponentFocusHandler {
	}

	/**
	 * Computed translation
	 */
	class ComputedTranslation extends Translation {
		/**
		 * Constructor
		 */
		constructor(callback: (i18n: I18n) => string);

	}

	namespace ComputedTranslation {
	}

	/**
	 * Context
	 */
	export class Context implements EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: EventSource.EventName, listener: EventSource.Listener): EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: EventSource.EventName): void;

		/**
		 * Constructs Context
		 */
		constructor(options?: Context.Options);

		/**
		 * Get parent context
		 */
		parent: (Context | null);

		/**
		 * Context name
		 */
		name: string;

		/**
		 * Child contexts
		 */
		children: globalThis.Array<Context>;

		/**
		 * Root context
		 */
		root: Context;

		/**
		 * Service map
		 */
		services: HierarchicalMap;

		/**
		 * Current state
		 */
		state: object;

		/**
		 * Route with parameters
		 */
		routeState: Route.State;

		/**
		 * True if the context has been disposed
		 */
		disposed: boolean;

		/**
		 * Create child context
		 */
		createChild(options?: Context.Options): Context;

		/**
		 * Manually change context state
		 */
		setState(state: object): void;

		/**
		 * Subscribe to event
		 */
		subscribe(topic: string, handler: (args: object) => void): {remove: () => void};

		/**
		 * Publish event
		 */
		publish(topic: string, args?: object, options?: {mode?: Context.EventMode}): void;

		/**
		 * Dispatch store action. When action is string or two parameters are used then action object {type: action, payload: payload} is created
		 */
		dispatchAction(action: (Reducer.Action | string), payload?: any): void;

		/**
		 * Activate a new route.
		 */
		routeTo(route: Route, parameters?: object, modifiers?: {replace?: boolean}): void;

		/**
		 * Manually change the route object.
		 */
		setRoute(routeState: Route.State): void;

		/**
		 * Returns true if this context is child of given parent context
		 */
		isChildOf(parent: Context): boolean;

		/**
		 * Disposes the context
		 */
		dispose(): void;

		/**
		 * Get the full list of services
		 */
		getServices(): void;

		/**
		 * The default state provider copies the parentState to currentState
		 */
		static defaultStateProvider(parentState: any, currentState: any): any;

		static Event: Context.EventTypes;

	}

	export namespace Context {
		interface Options {
			parent?: Context;

			rooted?: boolean;

			name?: string;

			state?: object;

			stateProvider?: Context.StateProviderCallback;

			actionDispatch?: (action: any) => void;

			actionDecorator?: (action: any) => any;

			routeTo?: (route: Route, parameters: object, modifiers: object) => void;

			routeState?: Route.State;

			on?: EventSource.ListenerMap;

		}

		type StateProviderCallback = (parentState: any, childState: any) => any;

		interface EventTypes {
			STATE_CHANGED: string;

			ROUTE_CHANGED: string;

			ACTION_DISPATCHED: string;

			DISPOSED: string;

		}

		/**
		 * Event mode types. - Broadcast - event is handled by all handlers. - All - if scope doesn't have root scope, behavior is same as it is in 'broadcast' mode. - if scope is rooted (has root scope specified), event is handled by all handlers under this root scope. - Local - event is handled only by the sender scope handlers. - Scope - event is handled by the sender scope handlers and all child handlers.
		 */
		enum EventMode {
			ALL,
			BROADCAST,
			LOCAL,
			SCOPE,
		}

	}

	/**
	 * Context types
	 */
	export class ContextType {
		static DEVICE_METADATA: string;

		static DISPATCHER: string;

		static FOCUS_MANAGER: string;

		static HELP: string;

		static HELP_CENTER: string;

		static I18N: string;

		static MESSAGING: string;

		static PERFORMANCE: string;

		static PREFERENCES: string;

		static ROUTER: string;

		static ROUTER_NAVIGATION: string;

		static ROUTER_LOCATION: string;

		static ROUTER_ROUTE: string;

		static SCROLL_OBSERVER: string;

		static SHORTCUTS: string;

		static WINDOW_MANAGER: string;

		static THEME: string;

		static THEME_BACKGROUND: string;

		static DEBUG: string;

		static FORMAT: string;

		static APP: string;

		static FORM: string;

		static LOGGING: string;

		static DISPATCH: string;

		static STORE: string;

		static WINDOW: string;

		/**
		 * Create a new context type
		 */
		static new(name: string): string;

	}

	export namespace ContextType {
	}

	/**
	 * Cookie helper functions
	 */
	namespace Cookies {
		/**
		 * Get cookie
		 */
		function get(key: string): string;

		/**
		 * Set cookie
		 */
		function set(key: string, value: string, options: object): void;

		/**
		 * Expire cookie
		 */
		function expire(key: string, options: object): void;

	}

	/**
	 * Counter
	 */
	export class Counter {
		/**
		 * Constructor
		 */
		constructor(first?: number, increment?: number);

		/**
		 * Get next value
		 */
		next(): number;

	}

	export namespace Counter {
	}

	export namespace DataExchange {
		interface DragSource {
			onProvideSourceData: (args: DataExchange.ProvideSourceDataArgs) => any;

			onInitializeGhost?: (args: DataExchange.InitializeGhostArgs) => void;

			onBegin?: (args: DataExchange.BeginArgs) => void;

			onTargetSubscribed?: (args: DataExchange.SubscribeArgs) => void;

			onTargetUnsubscribed?: (args: DataExchange.SubscribeArgs) => void;

			onEnd?: (args: DataExchange.EndArgs) => void;

			onCancel: (args: DataExchange.EndArgs) => void;

			onCommit: (args: DataExchange.CommitArgs) => void;

		}

		interface DragTarget {
			onProvideTargetData: (args: DataExchange.ProvideTargetDataArgs) => any;

			onCompareData?: (left: any, right: any) => boolean;

			onSubscribe?: (args: DataExchange.SubscribeArgs) => void;

			onUnsubscribe?: (args: DataExchange.SubscribeArgs) => void;

			onCommit: (args: DataExchange.CommitArgs) => void;

		}

		type DragSourceProvider = (args: DataExchange.DragSourceProviderArgs) => DataExchange.DragSource;

		interface DragSourceProviderArgs {
			cursorElement: Element;

			cursorComponent: Component;

			cursorPosition: PointerMessage.Position;

			sourceElement: Element;

			sourceComponent: Component;

		}

		type DragTargetProvider = (args: DataExchange.DragTargetProviderArgs) => DataExchange.DragTarget;

		interface DragTargetProviderArgs {
			source: any;

			sourceComponent: Component;

			targetComponent: Component;

		}

		interface ProvideSourceDataArgs {
			cursorElement: Element;

			cursorComponent: Component;

			cursorPosition: PointerMessage.Position;

			sourceElement: Element;

			sourceComponent: Component;

		}

		interface InitializeGhostArgs {
			source: any;

			cursorPosition: PointerMessage.Position;

			sourceElement: Element;

			sourceComponent: Component;

			ghost: DragDropGhost;

		}

		interface BeginArgs {
			source: any;

			sourceComponent: Component;

			ghost: DragDropGhost;

		}

		interface SubscribeArgs {
			source: any;

			sourceComponent: Component;

			target: any;

			targetComponent: Component;

			ghost: DragDropGhost;

		}

		interface EndArgs {
			source: any;

			sourceComponent: Component;

		}

		interface CommitArgs {
			source: any;

			sourceComponent: Component;

			target: any;

			targetComponent: Component;

		}

		interface ProvideTargetDataArgs {
			source: any;

			sourceComponent: Component;

			targetComponent: Component;

			cursorElement: Element;

			cursorPosition: PointerMessage.Position;

			cursorComponent: Component;

		}

		interface SourceDecorator {
			onDecorate: (args: DataExchange.BeginArgs) => void;

			onUndecorate: (args: DataExchange.EndArgs) => void;

		}

		interface TargetDecorator {
			onDecorate: (args: DataExchange.SubscribeArgs) => void;

			onUndecorate: (args: DataExchange.SubscribeArgs) => void;

		}

		/**
		 * Build basic drag source
		 */
		function buildDragSource(options: {onProvideSourceData: (args: DataExchange.ProvideSourceDataArgs) => any; decorator?: (args: DataExchange.DragSourceProviderArgs) => DataExchange.SourceDecorator; targetDecorator?: (args: DataExchange.DragSourceProviderArgs) => DataExchange.TargetDecorator; onInitializeGhost?: (args: DataExchange.InitializeGhostArgs) => void; onCancel?: (args: DataExchange.EndArgs) => void; onCommit?: (args: DataExchange.CommitArgs) => void}): DataExchange.DragSourceProvider;

		/**
		 * Build basic drag target
		 */
		function buildDragTarget(options: {same?: boolean; onValidateExchange?: (args: DataExchange.DragTargetProviderArgs) => boolean; onProvideTargetData: (args: DataExchange.ProvideTargetDataArgs) => any; onCompareData: (left: any, right: any) => boolean; onCommit: (args: DataExchange.CommitArgs) => void; decorator?: (args: DataExchange.DragTargetProviderArgs) => DataExchange.TargetDecorator}): DataExchange.DragTargetProvider;

	}

	export class DataExchangeManager implements MessageHandler {
		/**
		 * Constructs DataExchangeManager
		 */
		constructor();

		/**
		 * Processes message
		 */
		processMessage(next: RoutedMessage.Handler, message: RoutedMessage, result: object): void;

	}

	export namespace DataExchangeManager {
	}

	/**
	 * Data source interface
	 */
	export interface DataSource extends EventSource {
		/**
		 * Query data source items
		 */
		query(args: DataSource.QueryArguments, resolve: (args: {items: globalThis.Array<any>}) => void, reject?: (error: any) => void): void;

	}

	export namespace DataSource {
		interface QueryArguments {
			item?: any;

			index?: number;

			count?: number;

			cancellationToken?: CancellationToken;

		}

		type QueryCallback = (args: DataSource.QueryArguments, resolve: (args: {items: globalThis.Array<any>}) => void, reject: (error: any) => void) => void;

		interface EventType {
			UPDATED: string;

		}

		/**
		 * This is a shortcut for Type.Implements(DataSource)
		 */
		const Type: Type.Matcher;

		/**
		 * Checks if object is an instance of DataSource
		 */
		function is(value: any): boolean;

		/**
		 * Get a promise to a data source query
		 */
		function queryPromise(dataSource: DataSource, args?: DataSource.QueryArguments): globalThis.Promise<{items: globalThis.Array<any>}>;

		/**
		 * Create a generic data source based on a given query function
		 */
		function create(query: (args: DataSource.QueryArguments, resolve: (args: {items: globalThis.Array<any>}) => void, reject: (error: any) => void) => void): GenericDataSource;

		/**
		 * Loads all data in the data source
		 */
		function queryAll(dataSource: DataSource): globalThis.Promise<globalThis.Array<any>>;

		enum UpdateType {
			ADD,
			REMOVE,
			MOVE,
			RESET,
		}

		const Event: DataSource.EventType;

	}

	/**
	 * Hierarchical data store
	 */
	export class DataStore {
		/**
		 * Constructs DataStore
		 */
		constructor();

		/**
		 * Root of the entry tree
		 */
		rootEntry: DataStoreEntry;

		/**
		 * The associated data source
		 */
		dataSource: (DataSource | null);

		/**
		 * True if the data store is empty
		 */
		empty: boolean;

		/**
		 * Binds the data source
		 */
		bindDataSource(dataSource: DataSource): void;

		/**
		 * Unbinds the data source
		 */
		unbindDataSource(): void;

		/**
		 * Updates the data source
		 */
		update(update: object, args: object): void;

		/**
		 * Get entry for the given data item
		 */
		entryForDataItem(dataItem: any): any;

		/**
		 * Visits all items
		 */
		visit(callback: (entry: DataStoreEntry) => (boolean | null)): void;

		/**
		 * Disposes data source
		 */
		dispose(): void;

	}

	export namespace DataStore {
	}

	/**
	 * Hierarchical data store entry
	 */
	class DataStoreEntry {
	}

	namespace DataStoreEntry {
	}

	/**
	 * UIF Date
	 */
	export class Date {
		/**
		 * Constructor
		 */
		constructor(yearOrDate?: (number | string | globalThis.Date), monthIndex?: number, day?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number);

		/**
		 * Returns day of week where SUN=0, MON=1, ... SAT=6
		 */
		dayOfWeek: number;

		/**
		 * Gets current day in month
		 */
		day: number;

		/**
		 * Gets current month
		 */
		month: number;

		/**
		 * Gets current year
		 */
		year: number;

		/**
		 * Gets hours
		 */
		hours: number;

		/**
		 * Gets minutes
		 */
		minutes: number;

		/**
		 * Gets seconds
		 */
		seconds: number;

		/**
		 * Gets milliseconds
		 */
		milliseconds: number;

		/**
		 * Gets the number of milliseconds since 1970/01/01
		 */
		millisecondsSinceEpoch: number;

		/**
		 * Gets day in UTC time
		 */
		utcDay: number;

		/**
		 * Gets month in UTC time
		 */
		utcMonth: number;

		/**
		 * Gets year in UTC time
		 */
		utcYear: number;

		/**
		 * Gets hours in UTC time
		 */
		utcHours: number;

		/**
		 * Gets minutes in UTC time
		 */
		utcMinutes: number;

		/**
		 * Gets/Sets the seconds in UTC time
		 */
		utcSeconds: number;

		/**
		 * Gets/Sets milliseconds in UTC time
		 */
		utcMilliseconds: number;

		/**
		 * Checks if is the date is valid
		 */
		isValid(): boolean;

		/**
		 * Removes time supplement from the date
		 */
		stripTime(): Date;

		/**
		 * Removes time and day information from the date
		 */
		stripDayAndTime(): Date;

		/**
		 * Moves n day forward
		 */
		addDay(num: number): Date;

		/**
		 * Moves n weeks forward
		 */
		addWeek(num: number): Date;

		/**
		 * Moves n months forward
		 */
		addMonth(num: number): Date;

		/**
		 * Moves n years forward
		 */
		addYear(num: number): Date;

		/**
		 * Moves n hours forward
		 */
		addHour(num: number): Date;

		/**
		 * Moves n minutes forward
		 */
		addMinute(num: number): Date;

		/**
		 * Moves n seconds forward
		 */
		addSecond(num: number): Date;

		/**
		 * Moves n milliseconds forward
		 */
		addMillisecond(num: number): Date;

		/**
		 * Returns a new date with modified day
		 */
		setDay(day: number): Date;

		/**
		 * Returns a new date with a modified month
		 */
		setMonth(month: number): Date;

		/**
		 * Returns a new date with a modified year
		 */
		setYear(year: number): Date;

		/**
		 * Returns a new date with modified number of hours
		 */
		setHours(hours: number): Date;

		/**
		 * Returns a new date with modified number of minutes
		 */
		setMinutes(minutes: number): Date;

		/**
		 * Returns a new date with modified number of seconds
		 */
		setSeconds(seconds: number): Date;

		/**
		 * Returns a new date with modified number of miliseconds
		 */
		setMilliseconds(milliseconds: number): Date;

		/**
		 * Moves one day forward
		 */
		nextDay(): Date;

		/**
		 * Moves one day back
		 */
		prevDay(): Date;

		/**
		 * Compares this date with another.
		 */
		compare(date: Date, dateOnly?: boolean): number;

		/**
		 * Compares this date with another for equality.
		 */
		equals(date: (Date | null), dateOnly?: boolean): boolean;

		/**
		 * Returns true if this date is before the date in arguments
		 */
		before(date: Date, dateOnly?: boolean): boolean;

		/**
		 * Returns true if this date is before or equal to the date in arguments
		 */
		beforeOrEqual(date: Date, dateOnly?: boolean): boolean;

		/**
		 * Returns true if this date is after the date in arguments
		 */
		after(date: Date, dateOnly?: boolean): boolean;

		/**
		 * Returns true if this date is after or equal to the date in arguments
		 */
		afterOrEqual(date: Date, dateOnly?: boolean): boolean;

		/**
		 * Clones this instance
		 */
		clone(): Date;

		/**
		 * Transforms date into a string
		 */
		toString(): string;

		/**
		 * Sets day in UTC time
		 */
		setUTCDay(day: number): Date;

		/**
		 * Sets month in UTC time
		 */
		setUTCMonth(month: number): Date;

		/**
		 * Gets year in UTC time
		 */
		setUTCYear(year: number): Date;

		/**
		 * Gets hours in UTC time
		 */
		setUTCHours(hours: number): Date;

		/**
		 * Gets minutes in UTC time
		 */
		setUTCMinutes(minutes: number): Date;

		/**
		 * Gets the seconds in UTC time
		 */
		setUTCSeconds(seconds: number): Date;

		/**
		 * Gets milliseconds in UTC time
		 */
		setUTCMilliseconds(milliseconds: number): Date;

		/**
		 * Returns object for JSON serialization
		 */
		toJSON(): string;

		/**
		 * Returns new instance representing this Date as EcmaScript Date
		 */
		toDate(): globalThis.Date;

		/**
		 * Returns date string
		 */
		toDateString(): string;

		/**
		 * Returns ISO date string
		 */
		toISOString(): string;

		/**
		 * Returns date string formatted under current locale
		 */
		toLocaleDateString(): string;

		/**
		 * Returns complete string representation under current locale
		 */
		toLocaleString(): string;

		/**
		 * Returns time string under current locale
		 */
		toLocaleTimeString(): string;

		/**
		 * Returns time string
		 */
		toTimeString(): string;

		/**
		 * Returns UTC time string
		 */
		toUTCString(): string;

		/**
		 * Finds the closest day of week to this date. When forward is true (default value is true), it searches for the closest upcoming day, otherwise it searches backwards for the past day.
		 */
		closestDayOfWeek(dayOfWeek: number, forward?: boolean): Date;

		/**
		 * Returns first day in month
		 */
		firstOfMonth(): Date;

		/**
		 * Returns last day in month
		 */
		lastOfMonth(): Date;

		/**
		 * Gets the number of the week
		 */
		weekNumber(): number;

		/**
		 * Creates a Date object from native JS date. If the date is null returns null.
		 */
		static fromDate(date: (globalThis.Date | null)): (Date | null);

		/**
		 * Creates a Date object from unix timestamp
		 */
		static fromTimeStamp(timeStamp: number): Date;

		/**
		 * Returns the Date for the current moment (including time)
		 */
		static now(): Date;

		/**
		 * Returns the today date (excluding time information)
		 */
		static today(): Date;

		/**
		 * Returns this months date (excluding day and time)
		 */
		static thisMonth(): Date;

		/**
		 * Compare two dates that can be null
		 */
		static equals(left: (Date | null), right: (Date | null), dateOnly?: boolean): boolean;

		/**
		 * Compare two dates that can be null. Ignores the time component.
		 */
		static dateOnlyEquals(left: (Date | null), right: (Date | null)): boolean;

		/**
		 * Compare two dates including the time. Both dates can be null.
		 */
		static dateTimeEquals(left: (Date | null), right: (Date | null)): boolean;

		/**
		 * Returns this year date (excluding month, day and time)
		 */
		static thisYear(): Date;

	}

	export namespace Date {
		enum Format {
			isoDate,
			isoTime,
			isoDateTime,
		}

	}

	/**
	 * Date formatter
	 */
	class DateFormat {
	}

	namespace DateFormat {
	}

	/**
	 * Decorator class and factory methods
	 */
	export class Decorator {
		/**
		 * Constructor
		 */
		constructor(options: object);

		/**
		 * Automation attributes
		 */
		attributes(context: object): object;

		/**
		 * Get the list of styles for this decorator
		 */
		styles(css: object, context: object): globalThis.Array<Style>;

		/**
		 * Get decorator context values
		 */
		context(context: object): (object | null);

		/**
		 * Creates background decorator with given parameters
		 */
		static background(args: Decorator.ColorOptions): Decorator;

		/**
		 * Creates border decorator with given parameters. If no side is specified then border is created on all sides.
		 */
		static border(args: Decorator.BorderOptions): Decorator;

		/**
		 * Creates font decorator
		 */
		static font(args: Decorator.FontOptions): Decorator;

		/**
		 * Creates margin decorator with given parameters. If no side is specified then margin is created on all sides.
		 */
		static margin(args: (Decorator.Margin | Decorator.BoxOptions)): Decorator;

		/**
		 * Creates padding decorator with predefined size specified by passed value.
		 */
		static padding(args: (Decorator.Padding | Decorator.BoxOptions)): Decorator;

		/**
		 * Creates shape decorator
		 */
		static shape(shape: Decorator.Shape): Decorator;

		/**
		 * Creates depth decorator
		 */
		static depth(depth: Decorator.Depth): Decorator;

		/**
		 * Creates custom decorator
		 */
		static custom(options: {background?: Decorator.ColorOptions; border?: Decorator.BorderOptions; margin?: Decorator.BoxOptions; padding?: Decorator.BoxOptions; depth?: Decorator.Depth; shape?: Decorator.Shape; font?: Decorator.FontOptions}): Decorator;

		/**
		 * Combine multiple decorators into a single one
		 */
		static combine(...decorators: globalThis.Array<Decorator>): Decorator;

		/**
		 * Get a list of decorator styles
		 */
		static styles(decorator: (Decorator | null), css: object, context: object): globalThis.Array<Style>;

		/**
		 * Get decorator attributes
		 */
		static attributes(decorator: (Decorator | null), context: object): object;

		/**
		 * Get decorator context
		 */
		static context(decorator: (Decorator | null), context: object): object;

		/**
		 * Returns decorator dynamic styles. Do not call this directly, use theme.getComponentStyles(Decorator) which caches the result.
		 */
		static getStyles(theme: Theme): object;

		/**
		 * Empty decorator
		 */
		static none: Decorator;

	}

	export namespace Decorator {
		interface BadgeOptions {
			color?: Decorator.Color;

			strength?: Decorator.Strength;

			filled?: boolean;

		}

		interface ColorOptions {
			color: Decorator.Color;

			strength?: Decorator.Strength;

		}

		interface FontOptions {
			size?: Decorator.FontSize;

			weight?: Decorator.FontWeight;

			color?: Decorator.Color;

			strength?: Decorator.Strength;

			style?: Decorator.FontStyle;

			textDecoration?: Decorator.TextDecoration;

		}

		interface BorderOptions {
			type?: Decorator.BorderType;

			color?: Decorator.Color;

			strength?: Decorator.Strength;

			weight?: Decorator.BorderWeight;

			start?: boolean;

			end?: boolean;

			top?: boolean;

			bottom?: boolean;

		}

		interface BoxOptions {
			start?: (Decorator.Padding | Decorator.Margin);

			end?: (Decorator.Padding | Decorator.Margin);

			top?: (Decorator.Padding | Decorator.Margin);

			bottom?: (Decorator.Padding | Decorator.Margin);

			horizontal?: (Decorator.Padding | Decorator.Margin);

			vertical?: (Decorator.Padding | Decorator.Margin);

		}

		/**
		 * Border weight
		 */
		enum BorderWeight {
			NONE,
			DEFAULT,
			MEDIUM,
			THICK,
		}

		/**
		 * Border type
		 */
		enum BorderType {
			SOLID,
			DASHED,
			DOTTED,
		}

		/**
		 * Shape settings
		 */
		enum Shape {
			SQUARE,
			ROUNDED_SMALL,
			ROUNDED_LARGE,
		}

		/**
		 * Depth settings
		 */
		enum Depth {
			SMALL,
			MEDIUM,
			LARGE,
		}

		/**
		 * Margin settings
		 */
		enum Margin {
			NONE,
			XXXXS,
			XXXS,
			XXS,
			XS,
			S,
			M,
			L,
			XL,
			TINY,
			SMALL,
			MEDIUM,
			LARGE,
		}

		/**
		 * Padding settings
		 */
		enum Padding {
			NONE,
			XXXXS,
			XXXS,
			XXS,
			XS,
			S,
			M,
			L,
			XL,
			TINY,
			SMALL,
			MEDIUM,
			LARGE,
		}

		/**
		 * Color settings
		 */
		enum Color {
			NEUTRAL,
			THEMED,
			DANGER,
			WARNING,
			SUCCESS,
			INFO,
			WHITE,
		}

		/**
		 * Strength settings
		 */
		enum Strength {
			LIGHTEST,
			LIGHTER,
			LIGHT,
			NEUTRAL,
			DARK,
			DARKER,
			DARKEST,
			STRONG,
			MEDIUM,
			WEAK,
		}

		/**
		 * Font weight settings
		 */
		enum FontWeight {
			NORMAL,
			SEMIBOLD,
			BOLD,
		}

		/**
		 * Font size settings
		 */
		enum FontSize {
			SMALLER,
			SMALL,
			REGULAR,
			MEDIUM,
			LARGE,
			LARGER,
			LARGEST,
		}

		/**
		 * Font style settings
		 */
		enum FontStyle {
			NORMAL,
			ITALIC,
		}

		/**
		 * Text decoration settings
		 */
		enum TextDecoration {
			UNDERLINE,
		}

	}

	/**
	 * DeviceMetadataService used to determine device information.
	 */
	export class DeviceMetadataService implements EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: EventSource.EventName, listener: EventSource.Listener): EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: EventSource.EventName): void;

		/**
		 * Constructs DeviceMetadataService
		 */
		constructor(options?: DeviceMetadataService.Options);

		/**
		 * Device type, one of DeviceMetadataService.DeviceType
		 */
		deviceType: string;

		/**
		 * Screen viewport size, one of DeviceMetadataService.Viewport
		 */
		viewport: string;

		/**
		 * Screen orientation, one of DeviceMetadataService.Orientation
		 */
		orientation: string;

		/**
		 * Screen info
		 */
		screenInfo: DeviceMetadataService.ScreenInfo;

		private _setMediaQueries(): void;

		private _getDeviceType(): void;

		private _getScreenInfo(): void;

		private _getOrientation(): void;

		private _getViewportSize(): void;

		private _setEvents(): void;

		static Event: DeviceMetadataService.EventTypes;

	}

	export namespace DeviceMetadataService {
		interface EventTypes {
			VIEWPORT_CHANGED: string;

			ORIENTATION_CHANGED: string;

		}

		interface Size {
			height?: number;

			width?: number;

		}

		interface ScreenInfo {
			density?: number;

			hasTouchScreen?: boolean;

			resolution?: DeviceMetadataService.Size;

			size?: DeviceMetadataService.Size;

		}

		interface Options {
			window?: PackageComponent.Window;

			on?: EventSource.ListenerMap;

		}

		enum DeviceType {
			PHONE,
			TABLET,
			DESKTOP,
			UNKNOWN,
		}

		enum Orientation {
			PORTRAIT,
			LANDSCAPE,
		}

		enum Viewport {
			SMALL,
			MEDIUM,
			LARGE,
			X_LARGE,
		}

	}

	export class DragDropGhost extends Component {
		/**
		 * Constructs DragDropGhost
		 */
		constructor();

		/**
		 * Content component
		 */
		content: Component;

		/**
		 * Ghost offset
		 */
		offset: {x: number; y: number};

		/**
		 * Ghost icon
		 */
		icon: PackageComponent.Image;

		/**
		 * Initializes drag-drop-shadow from the given element
		 */
		initializeFromElement(element: Element, cursorPosition: object): void;

		/**
		 * Sets content
		 */
		setContent(content: any): void;

		/**
		 * Sets offset
		 */
		setOffset(offset: object): void;

		/**
		 * Sets icon
		 */
		setIcon(icon: any): void;

		/**
		 * Clone element and fix its size
		 */
		static cloneElement(element: Element): Element;

		/**
		 * Get the mouse cursor position inside an element
		 */
		static getCursorOffsetInElement(element: Element, cursorPosition: {x: number; y: number}): {x: number; y: number};

	}

	export namespace DragDropGhost {
	}

	namespace ElementBuilder {
		/**
		 * Add classes to a DOM element
		 */
		function addClasses(element: Element, classes: (string | globalThis.Array<any> | object | Style)): void;

		/**
		 * Add data attributes to a DOM element
		 */
		function addData(element: Element, data: object): void;

		/**
		 * Add attributes to a DOM element
		 */
		function applyAttributes(element: Element, attributes: (null | undefined | string | globalThis.Array<any> | object)): void;

		/**
		 * Add children a DOM element
		 */
		function addChildren(element: Element, children: any): void;

		/**
		 * Create a DOM element
		 */
		function makeElement(elementName: string, attributes: (string | globalThis.Array<any> | object | null), children: any): HTMLElement;

		/**
		 * Create a DOM element in namespace ns
		 */
		function makeElementNS(ns: string, elementName: string, attributes: (string | globalThis.Array<any> | object | null), children: any): Element;

	}

	/**
	 * This is a very rough Component mock that can be used to create a pseudo component around a standard DOM element. It can be used in legacy as an owner of windows or for displaying tooltips on non-UIF elements.
	 */
	export class ElementComponent {
	}

	export namespace ElementComponent {
	}

	/**
	 * Event bus
	 */
	export class EventBus {
		/**
		 * Constructor
		 */
		constructor();

		/**
		 * Subscribe to a particular sender
		 */
		subscribe(sender: (string | object), listener: (((args: object) => void) | EventBusListener)): {remove: () => void};

		publish(sender: (string | object), notification: object): void;

	}

	export namespace EventBus {
	}

	/**
	 * Message listener
	 */
	export interface EventBusListener {
		/**
		 * Reports a notification to a specific output
		 */
		process(args: object): void;

	}

	export namespace EventBusListener {
	}

	/**
	 * Interface for classes with events
	 */
	export interface EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): void;

	}

	export namespace EventSource {
		type ListenerCallback = (args: any, sender: any) => void;

		interface ListenerObject {
			listener: EventSource.ListenerCallback;

			once?: boolean;

		}

		interface Handle {
			off: () => void;

		}

		type Listener = (EventSource.ListenerObject | EventSource.ListenerCallback);

		type EventName = (string | symbol);

		type ListenerMap = Record<EventSource.EventName, EventSource.Listener>;

	}

	/**
	 * Mixin implementing the EventSource interface. Provides on, off and _fireEvent methods.
	 */
	/**
	 * Move tabbable between registered components
	 */
	export class ExclusiveTabbableFocusHandler {
		/**
		 * Constructs ExclusiveTabbableFocusHandler
		 */
		constructor();

		/**
		 * True if the component is focusable
		 */
		effectiveFocusable: boolean;

		/**
		 * True if the component can be focusable
		 */
		focusable: boolean;

		/**
		 * True if the component is tabbable
		 */
		effectiveTabbable: boolean;

		/**
		 * True if the component can be tabbable
		 */
		tabbable: boolean;

		/**
		 * Current focus target component
		 */
		focusComponent: Component;

		/**
		 * The active handler
		 */
		activeHandler: (FocusHandler | null);

		/**
		 * Updates
		 */
		update(): void;

		/**
		 * Focuses
		 */
		focus(): boolean;

		/**
		 * Check if focused
		 */
		isFocused(focusComponent: Component): boolean;

		/**
		 * Adds handler
		 */
		addHandler(handler: (FocusHandler | globalThis.Array<FocusHandler>)): void;

		/**
		 * Removes handler
		 */
		removeHandler(handler: (FocusHandler | globalThis.Array<FocusHandler>)): void;

		/**
		 * Sets handlers
		 */
		setHandlers(handlers: (FocusHandler | globalThis.Array<FocusHandler>)): void;

		/**
		 * Sets active handler
		 */
		setActiveHandler(handler: FocusHandler): void;

		/**
		 * Returns new ExclusiveTabbableFocusHandler
		 */
		static factory(args: object): ExclusiveTabbableFocusHandler;

	}

	export namespace ExclusiveTabbableFocusHandler {
	}

	/**
	 * Filter code.
	 */
	export enum FilterCode {
		KEY_DOWN,
		KEY_UP,
		KEY_PRESS,
		CLICK,
		DOUBLE_CLICK,
		FOCUS_IN,
		FOCUS_OUT,
		PASTE,
		CUT,
		SELECT,
		INPUT,
		WHEEL,
		CONTEXT_MENU,
		SCROLL,
		POINTER_ENTER,
		POINTER_OVER,
		POINTER_DOWN,
		POINTER_MOVE,
		POINTER_UP,
		POINTER_LEAVE,
		POINTER_OUT,
		CAPTURE_KEY_DOWN,
		CAPTURE_KEY_UP,
		CAPTURE_KEY_PRESS,
		CAPTURE_CLICK,
		CAPTURE_DOUBLE_CLICK,
		CAPTURE_FOCUS_IN,
		CAPTURE_FOCUS_OUT,
		CAPTURE_PASTE,
		CAPTURE_CUT,
		CAPTURE_SELECT,
		CAPTURE_INPUT,
		CAPTURE_WHEEL,
		CAPTURE_CONTEXT_MENU,
		CAPTURE_SCROLL,
		CAPTURE_POINTER_ENTER,
		CAPTURE_POINTER_OVER,
		CAPTURE_POINTER_DOWN,
		CAPTURE_POINTER_MOVE,
		CAPTURE_POINTER_UP,
		CAPTURE_POINTER_LEAVE,
		CAPTURE_POINTER_OUT,
	}

	/**
	 * Flag generator
	 */
	export class FlagGenerator {
		/**
		 * Constructor
		 */
		constructor(seed: number);

		/**
		 * Generate the next flag value
		 */
		next(): number;

	}

	export namespace FlagGenerator {
	}

	/**
	 * Flags class
	 */
	export class Flags {
		/**
		 * Constructor
		 */
		constructor(value: number);

		/**
		 * Get the current value
		 */
		value: number;

		/**
		 * Check whether value satisfies given flag combination
		 */
		is(flagCombination: number): boolean;

		/**
		 * Enable given flag combination
		 */
		set(flagCombination: number): Flags;

		/**
		 * Unset given flag combination
		 */
		unset(flagCombination: number): Flags;

		/**
		 * Invert the value of given flags
		 */
		flip(flagCombination: number): Flags;

		/**
		 * Enable/disable given flags based on the second parameter
		 */
		toggle(flagCombination: number, toggle: boolean): Flags;

		/**
		 * Compare this flags against another flag combination
		 */
		diff(flagCombination: (number | Flags)): Flags;

		/**
		 * Returns a new copy of this
		 */
		copy(): Flags;

		/**
		 * Removes all flags
		 */
		clear(): Flags;

		/**
		 * Check whether value satisfies given flag combination
		 */
		static is(value: number, flagCombination: number): boolean;

		/**
		 * Return a modified value with given flags enabled
		 */
		static set(value: number, flagCombination: number): number;

		/**
		 * Return a modified value with given flags disabled
		 */
		static unset(value: number, flagCombination: number): number;

		/**
		 * Return a modified value with given flags inverted
		 */
		static flip(value: number, flagCombination: number): number;

		/**
		 * Return a modified value with given flags enabled/disabled depending on the last parameter
		 */
		static toggle(value: number, flagCombination: number, toggle: boolean): number;

		/**
		 * Return the difference between two flag collections
		 */
		static diff(left: number, right: number): number;

	}

	export namespace Flags {
	}

	class FloatFormat {
	}

	namespace FloatFormat {
	}

	/**
	 * Focus handler
	 */
	export interface FocusHandler {
		/**
		 * True if the component is focusable
		 */
		effectiveFocusable: boolean;

		/**
		 * True if the component can be focusable
		 */
		focusable: boolean;

		/**
		 * True if the component is tabbable
		 */
		effectiveTabbable: boolean;

		/**
		 * True if the component can be tabbable
		 */
		tabbable: boolean;

		/**
		 * Current focus target component
		 */
		focusComponent: Component;

		/**
		 * Updates
		 */
		update(): void;

		/**
		 * Focuses
		 */
		focus(): void;

		/**
		 * Check if focused
		 */
		isFocused(focusComponent: Component): boolean;

	}

	export namespace FocusHandler {
	}

	export class FocusManager implements MessageHandler {
		/**
		 * Constructs FocusManager
		 */
		constructor();

		/**
		 * Return current focused element
		 */
		focusedElement: (Element | null);

		/**
		 * Get the currently focused component
		 */
		focusedComponent: (Component | null);

		/**
		 * Returns next or previous focusable element in current context
		 */
		getNextFocusableElementInDirection(forward: boolean, focusedElement?: Element, context?: Element, tabbable?: boolean): (Element | null);

		/**
		 * Returns next focusable element in current context
		 */
		getNextFocusableElement(focusedElement?: Element, context?: Element, tabbable?: boolean): (Element | null);

		/**
		 * Returns previous focusable element in current context
		 */
		getPreviousFocusableElement(focusedElement?: Element, context?: Element, tabbable?: boolean): (Element | null);

		/**
		 * Focus next element in context
		 */
		focusNextElement(focusedElement?: Element, context?: Element, tabbable?: boolean): boolean;

		/**
		 * Focus previous element in context
		 */
		focusPreviousElement(focusedElement?: Element, context?: Element, tabbable?: boolean): boolean;

		/**
		 * Processes message
		 */
		processMessage(next: RoutedMessage.Handler, message: RoutedMessage, result: RoutedMessage.Result): void;

	}

	export namespace FocusManager {
	}

	export class FocusMessage extends RoutedMessage {
		/**
		 * Constructs FocusMessage
		 */
		constructor(options: FocusMessage.Options);

		/**
		 * Target element of event
		 */
		element: Element;

		/**
		 * Next focused element
		 */
		nextFocusedElement: Element;

		/**
		 * Next focused component
		 */
		nextFocusedComponent: Component;

		/**
		 * Previous focused element
		 */
		previousFocusedElement: Element;

		/**
		 * Previous focused component
		 */
		previousFocusedComponent: Component;

		/**
		 * Creates message from FocusEvent
		 */
		static fromEvent(event: FocusEvent): FocusMessage;

	}

	export namespace FocusMessage {
		interface Options extends RoutedMessage.Options {
			element: Element;

			nextFocusedElement: Element;

			nextFocusedComponent: Component;

			previousFocusedElement: Element;

			previousFocusedComponent: Component;

		}

	}

	/**
	 * Supported format service formats
	 */
	export enum Format {
		DATE,
		DATE_TIME,
		TIME,
		INTEGER,
		FLOAT,
	}

	/**
	 * Format service for conversion between string and various other data types
	 */
	export class FormatService {
		/**
		 * Constructor
		 */
		constructor(formats?: object);

		/**
		 * Convert value to a string. Empty string is returned for null and invalid values.
		 */
		format(value: any, format: FormatService.Format, options?: object): string;

		/**
		 * Parse a value from a string. Null is returned for empty string or invalid values.
		 */
		parse(value: any, format: FormatService.Format, options?: object): any;

		/**
		 * Customize this format service with new formatters. Returns a new format service.
		 */
		with(formats: object): FormatService;

		/**
		 * Create default formatters for a given localization context
		 */
		static forI18n(i18n: I18n): FormatService;

	}

	export namespace FormatService {
		export import Format = Self.Format;

	}

	/**
	 * Utility functions for functions
	 */
	export namespace Function {
		/**
		 * Function that does nothing and returns nothing
		 */
		function VOID(): void;

		/**
		 * Function that always returns null
		 */
		function NULL(): null;

		/**
		 * Function that returns its first input argument (unmodified)
		 */
		function IDENTITY(value: any): any;

		/**
		 * Function that compares two values using the three equals operator
		 */
		function STRICT_EQUALS(left: any, right: any): boolean;

		/**
		 * Function that always returns true
		 */
		function TRUE(): boolean;

		/**
		 * Function that always returns false
		 */
		function FALSE(): boolean;

		/**
		 * Creates a function that returns given value
		 */
		function VALUE(value: any): () => any;

		/**
		 * Throttles calls to the callback
		 */
		function throttle(callback: (...args: globalThis.Array<any>) => void, interval?: number): (...args: globalThis.Array<any>) => void;

		/**
		 * Debounce calls to the callback
		 */
		function debounce(callback: (...args: globalThis.Array<any>) => void, interval?: number): (...args: globalThis.Array<any>) => void;

		/**
		 * Given an array of functions run them all
		 */
		function runAll(list: globalThis.Array<() => void>): void;

		/**
		 * Create a memoized function (single argument)
		 */
		function memoize(func: (arg: any) => any): (arg: any) => any;

		/**
		 * Create a function that caches the result of its last input. If it is called with the same input it will return the cached result.
		 */
		function memoizeLast(func: (arg: any) => any): (arg: any) => any;

		/**
		 * Run a callback in a try catch. If it fails run the errorCallback instead.
		 */
		function runSafely<T>(callback?: () => T, errorCallback?: (error: Error) => T): T;

	}

	/**
	 * Generic data source
	 */
	class GenericDataSource implements DataSource, EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: EventSource.EventName, listener: EventSource.Listener): EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: EventSource.EventName): void;

		/**
		 * Constructs GenericDataSource
		 */
		constructor(query: DataSource.QueryCallback);

		/**
		 * Creates a query over the data source
		 */
		query(args: object, resolve: (args: {items: globalThis.Array<any>}) => void, reject: (error: any) => void): void;

	}

	namespace GenericDataSource {
	}

	/**
	 * Hash based router
	 */
	export function HashRouter(props?: object): JSX.Element;

	/**
	 * Hierarchical map
	 */
	export class HierarchicalMap {
		/**
		 * Constructs HierarchicalMap
		 */
		constructor(parent?: HierarchicalMap);

		/**
		 * Parent map
		 */
		parent: (HierarchicalMap | null);

		add(key: any, value: any): void;

		/**
		 * Remove the value for given key
		 */
		remove(key: any): any;

		/**
		 * Get the value for given key
		 */
		get(key: any): any;

		/**
		 * Check if the map contains a key
		 */
		has(key: any): boolean;

		/**
		 * Remove all entries from the map
		 */
		clear(): void;

		/**
		 * Get the list of registered services
		 */
		flatten(): object;

	}

	export namespace HierarchicalMap {
	}

	/**
	 * Function component hooks
	 */
	export namespace Hook {
		type EffectCleanupCallback = () => void;

		/**
		 * State hook
		 */
		function useState<T = any>(initialState: T): [T, (state: T) => void];

		/**
		 * Layout effect hook
		 */
		function useEffect(callback: () => (Hook.EffectCleanupCallback | void), dependencies?: globalThis.Array<any>): void;

		/**
		 * Layout effect hook
		 */
		function useLayoutEffect(callback: () => (Hook.EffectCleanupCallback | void), dependencies?: globalThis.Array<any>): void;

		/**
		 * Context hook
		 */
		function useContext<T = any>(type: string): T;

		/**
		 * Style hook
		 */
		function useStyles(provider: (theme: Theme) => object): any;

		/**
		 * Reducer hook
		 */
		function useReducer(reducer: (state: any, action: object) => any, initialState: any): [any, (action: object) => any];

		/**
		 * Ref hook
		 */
		function useRef<T = any>(initialValue?: T): VDomRef<T>;

		/**
		 * Callback hook
		 */
		function useCallback<T extends Function>(callback: T, dependencies?: globalThis.Array<any>): T;

		/**
		 * Memo hook
		 */
		function useMemo<T>(callback: () => T, dependencies?: globalThis.Array<any>): T;

		/**
		 * Dispatch hook
		 */
		function useDispatch(): Store.DispatchFunc;

		/**
		 * Select value from the Store
		 */
		function useSelector<State, Selected>(selector: (state: State) => Selected, equalityFn?: (left: Selected, right: Selected) => boolean): Selected;

		/**
		 * Generate a unique ID that is stable across re-renders
		 */
		function useId(): string;

	}

	/**
	 * Html related utilities
	 */
	export namespace Html {
		/**
		 * Get width of native scrollbar
		 */
		function getScrollbarWidth(): number;

		/**
		 * Find the closest parent element matching selector. If selector is empty then direct parent is returned.
		 */
		function getParent(startElement: Node, selector?: (string | ((element: Element) => boolean)), stopElement?: Node): (Node | null);

		/**
		 * Find children matches selector(or the first findFirstN elements)
		 */
		function getChildren(parent: HTMLElement, selector: (string | ((element: Element) => boolean)), findFirstN?: number): globalThis.Array<Node>;

		/**
		 * Get nth child, which matches selector (numbered from 0)
		 */
		function getChild(parent: HTMLElement, selector: (string | ((element: Element) => boolean)), index?: number): HTMLElement;

		/**
		 * Deserialize data object from script tag containing JSON
		 */
		function getDataFromJSON(elementID: string): object;

		/**
		 * Insert node as the last child of parent.
		 */
		function appendChild(parent: Element, element: Element): void;

		/**
		 * Appends multiple DOM elements as the last children of parent
		 */
		function appendChildren(parent: Element, elements: globalThis.Array<Element>): void;

		/**
		 * Insert node as a first child of parent.
		 */
		function prependChild(parent: Element, element: Element): void;

		/**
		 * Insert node as a child of parent at specific position.
		 */
		function insertChild(parent: Element, element: Element, index?: number): void;

		/**
		 * Insert element before target element
		 */
		function insertBefore(target: Node, element: Node): void;

		/**
		 * Insert element after target element
		 */
		function insertAfter(target: Node, element: Node): void;

		/**
		 * Replace element with another one
		 */
		function replaceElement(newElement: Element, element: Element): Element;

		/**
		 * Detach element from dom tree.
		 */
		function detach(element: Node): void;

		/**
		 * Clear content of element
		 */
		function clear(element: HTMLElement): void;

		/**
		 * Copy all attributes from source element to target element
		 */
		function copyAttributes(source: Element, destination: Element, overwrite?: boolean): void;

		/**
		 * Remove all attributes from an element
		 */
		function clearAttributes(element: HTMLElement): void;

		/**
		 * Get element offset to another element (floats)
		 */
		function getElementOffset(element: HTMLElement, baseElement: HTMLElement): {top: number; left: number};

		/**
		 * Get element offset to document
		 */
		function getDocumentOffset(element: HTMLElement): {top: number; left: number};

		/**
		 * Converts box coordinates from client space to document space (floats)
		 */
		function viewportToDocumentCoordinates(box: {top: number; left: number; height: number; width: number}): {top: number; left: number; height: number; width: number};

		/**
		 * Get position of element borderBox to window (in document coordinates)
		 */
		function documentBorderBox(element: HTMLElement): {top: number; left: number; width: number; height: number};

		/**
		 * Get position of element marginBox to window (in document coordinates)
		 */
		function documentMarginBox(element: HTMLElement): {top: number; left: number; width: number; height: number};

		/**
		 * Get the element content box
		 */
		function viewportContentBox(element: HTMLElement): {top: number; left: number; height: number; width: number};

		/**
		 * Get the element border box
		 */
		function viewportBorderBox(element: HTMLElement): {top: number; left: number; height: number; width: number};

		/**
		 * Get the element margin box
		 */
		function viewportMarginBox(element: HTMLElement): {top: number; left: number; height: number; width: number};

		/**
		 * Get size of whole document
		 */
		function documentBox(): Rectangle;

		/**
		 * Get size of window
		 */
		function windowBox(): {top: number; left: number; height: number; width: number};

		/**
		 * Calculates dimensions of an element as it would be without flex-grow and flex-shrink applied
		 */
		function naturalSize(element: HTMLElement): {width: number; height: number};

		/**
		 * Calculate elements offset box
		 */
		function offsetBox(element: Element): {top: number; left: number; width: number; height: number};

		/**
		 * Checks that element is focusable/tabbable
		 */
		function isFocusableElement(element: HTMLElement, tabbable?: boolean): boolean;

		/**
		 * Copy element contents to clipboard
		 */
		function copyElementToClipboard(element: Element): void;

		/**
		 * Clear selection in the whole document
		 */
		function clearSelection(): void;

		namespace Element {
			enum Section {
				DIV,
				ARTICLE,
				ASIDE,
				FOOTER,
				HEADER,
				MAIN,
				NAV,
				SECTION,
			}

		}

	}

	/**
	 * Dictionary of element attributes
	 */
	export class HtmlAttributeList {
		/**
		 * Constructs HtmlAttributeList
		 */
		constructor(attributes?: Record<string, string>, options?: {onChange?: HtmlAttributeList.ChangeCallback});

		/**
		 * Apply attributes to an element
		 */
		applyToElement(element: HTMLElement): void;

		/**
		 * Get attribute value
		 */
		get(name: string): (string | null);

		/**
		 * Set attribute value
		 */
		set(name: (string | Record<string, string>), value?: (string | boolean)): void;

		/**
		 * Remove attribute
		 */
		remove(name: (string | globalThis.Array<string>)): void;

		/**
		 * Adds an entry into multi value attribute
		 */
		addEntry(name: (string | Record<string, (string | boolean | globalThis.Array<string>)>), value?: (string | boolean | globalThis.Array<string>)): void;

		/**
		 * Removes an entry from multi value attribute
		 */
		removeEntry(name: (string | Record<string, (string | boolean | globalThis.Array<string>)>), value?: (string | boolean | globalThis.Array<string>)): void;

		/**
		 * Add or remove attribute depending on whether value is set
		 */
		toggle(name: string, value: (string | null)): void;

		/**
		 * Check if attribute has been set
		 */
		has(name: string): boolean;

		/**
		 * Clear all attributes
		 */
		clear(): void;

		/**
		 * Set attribute to value if condition is met, otherwise remove the attribute
		 */
		setIf(key: string, value: string, condition: boolean): void;

		/**
		 * Apply the difference between two attribute lists
		 */
		applyDiff(oldValue: Record<string, string>, newValue: Record<string, string>): void;

	}

	export namespace HtmlAttributeList {
		type ChangeCallback = (added: Record<string, string>, removed: globalThis.Array<string>, applyToElement: (element: Element) => void) => void;

	}

	/**
	 * Html class list
	 */
	export class HtmlClassList {
		/**
		 * Constructs HtmlClassList
		 */
		constructor(classList?: HtmlClassList.ClassList, options?: {onChange?: HtmlClassList.ChangeCallback});

		/**
		 * Apply classes to an element
		 */
		applyToElement(element: HTMLElement): void;

		/**
		 * Add class names
		 */
		add(classNames: (string | globalThis.Array<string>)): void;

		/**
		 * Remove class names
		 */
		remove(classNames: (string | globalThis.Array<string>)): void;

		/**
		 * Toggle class names
		 */
		toggle(classNames: (string | globalThis.Array<string> | Record<string, boolean>), value?: boolean): void;

		/**
		 * Check if class list contains a particular class name
		 */
		has(className: (string | Style)): boolean;

		/**
		 * Apply the difference between two class lists
		 */
		applyDiff(oldValue: HtmlClassList.ClassList, newValue: HtmlClassList.ClassList): void;

	}

	export namespace HtmlClassList {
		type ClassList = (string | Style | globalThis.Array<(string | Style)> | Record<string, boolean>);

		type ChangeCallback = (added: globalThis.Array<string>, removed: globalThis.Array<string>, applyToElement: (element: Element) => void) => void;

	}

	/**
	 * Dictionary of element inline styles
	 */
	export class HtmlStyleList {
		/**
		 * Constructs HtmlStyleList
		 */
		constructor(style?: Record<string, string>, options?: {onChange?: HtmlStyleList.ChangeCallback});

		/**
		 * Apply inline styles to element
		 */
		applyToElement(element: HTMLElement): void;

		/**
		 * Get inline style value
		 */
		get(name: string): (string | null);

		/**
		 * Set inline style value
		 */
		set(name: (string | Record<string, string>), value?: string): void;

		/**
		 * Remove inline style
		 */
		remove(name: (string | globalThis.Array<string>)): void;

		/**
		 * Add or remove style depending on whether value is set
		 */
		toggle(name: string, value: (string | null)): void;

		/**
		 * Check if inline style has been set
		 */
		has(name: string): boolean;

		/**
		 * Removes all style rules
		 */
		clear(): void;

		/**
		 * Apply the difference between two style lists
		 */
		applyDiff(oldValue: Record<string, string>, newValue: Record<string, string>): void;

	}

	export namespace HtmlStyleList {
		type ChangeCallback = (added: Record<string, string>, removed: globalThis.Array<string>, applyToElement: (element: Element) => void) => void;

	}

	export class HttpPostDataFormatter extends LogFormatter {
		/**
		 * Constructs HttpPostDataFormatter
		 */
		constructor();

	}

	export namespace HttpPostDataFormatter {
	}

	/**
	 * Internationalization context
	 */
	export class I18n {
		/**
		 * Constructs I18n
		 */
		constructor(options?: object);

		/**
		 * Get the default date format
		 */
		dateFormat: string;

		/**
		 * Get the default time format
		 */
		timeFormat: string;

		/**
		 * Localized month labels
		 */
		monthLabels: {short: globalThis.Array<string>; long: globalThis.Array<string>};

		/**
		 * Localized day labels
		 */
		dayLabels: {short: globalThis.Array<string>; long: globalThis.Array<string>};

		/**
		 * Localized am/pm labels
		 */
		amPmLabels: globalThis.Array<string>;

		/**
		 * First day of the week. 0 = Sunday.
		 */
		firstDayOfWeek: number;

		/**
		 * right-to-left environment.
		 */
		rtl: boolean;

		/**
		 * Unicode BCP 47 locale identifier
		 */
		language: string;

		/**
		 * Get a translated string
		 */
		get(args: (string | I18n.GetParam)): string;

		/**
		 * Add translation
		 */
		set(args: {key?: string; text?: string}): I18n;

		/**
		 * Remove a translation
		 */
		remove(args: {key?: string}): I18n;

		/**
		 * Remove all translations
		 */
		clear(): I18n;

		/**
		 * Add a translation bundle
		 */
		addBundle(bundle: object): I18n;

		/**
		 * Compares strings in the given locale
		 */
		compare(left: string, right: string): number;

		/**
		 * Create a new I18n object from a translation bundle
		 */
		static fromBundle(translations: object): I18n;

		/**
		 * Create I18n object from locale. This is used in examples, catalog and app template.
		 */
		static fromLocale(locale: object, options: object): I18n;

	}

	export namespace I18n {
		interface GetParam {
			key: string;

			default?: string;

			params?: object;

		}

	}

	/**
	 * Image constants
	 */
	namespace ImageConstant {
		/**
		 * Image size
		 */
		enum Size {
			XXS,
			XS,
			S,
			M,
			L,
			XL,
			XXL,
		}

		/**
		 * Border radius
		 */
		enum BorderRadius {
			SQUARE,
			ROUNDED,
			ROUND,
		}

		/**
		 * Image color
		 */
		enum Color {
			NEUTRAL,
			THEMED,
			DANGER,
			WARNING,
			SUCCESS,
			INFO,
			WHITE,
		}

		/**
		 * Color strength settings
		 */
		enum ColorStrength {
			LIGHTEST,
			LIGHTER,
			LIGHT,
			NEUTRAL,
			DARK,
			DARKER,
			DARKEST,
		}

	}

	/**
	 * Immutable image metadata object
	 */
	export class ImageMetadata {
		/**
		 * Constructs ImageMetadata
		 */
		constructor(options?: (ImageMetadata.Options | string));

		/**
		 * ImageMetadata caption
		 */
		caption: (string | Translation | null);

		/**
		 * ImageMetadata url
		 */
		url: (string | null);

		/**
		 * True if image should be mirrored in RTL setting
		 */
		rtlSensitive: boolean;

		/**
		 * Returns current image metadata options
		 */
		getOptions(theme?: Theme): ImageMetadata.Options;

		/**
		 * Returns a new image with a modified styleable property
		 */
		withStyleable(styleable: boolean): ImageMetadata;

		/**
		 * Returns a new image with a modified size
		 */
		withSize(widthOrSize: (string | number | ImageMetadata.Size), height?: (string | number)): ImageMetadata;

		/**
		 * Removes any size specification
		 */
		withNoSize(): ImageMetadata;

		/**
		 * Returns a new image with a modified caption
		 */
		withCaption(caption: (string | Translation)): ImageMetadata;

		/**
		 * If this image already has a caption it is returned. Otherwise returns a new image with the desired caption.
		 */
		withDefaultCaption(defaultCaption: string): ImageMetadata;

		/**
		 * Returns a new image with a modified class name
		 */
		withClassName(name: string): ImageMetadata;

		/**
		 * Returns a new image metadata with given offset
		 */
		withOffset(offset: object): ImageMetadata;

		/**
		 * Extends image metadata with given options
		 */
		withOptions(options: object): ImageMetadata;

		/**
		 * Creates a new image with a class added to its class list
		 */
		addClass(className: string): ImageMetadata;

		/**
		 * Returns a new image with a modified url
		 */
		withUrl(url: string): ImageMetadata;

		/**
		 * Returns a new image with modified RTL sensitivity
		 */
		withRTLSensitive(rtlSensitive: boolean): ImageMetadata;

		/**
		 * Returns a new image with modified theme specific options
		 */
		withThemeSpecificOptions(themeSpecificOptions: (theme: Theme) => object): ImageMetadata;

		/**
		 * Create a new image instance with modified options
		 */
		private _clone(options: object): ImageMetadata;

		/**
		 * Creates a new image instance with a given parameters
		 */
		static create(options: (string | Url | globalThis.Array<string> | ImageMetadata | ImageMetadata.Options)): ImageMetadata;

		/**
		 * Creates a new image with a given url
		 */
		static withUrl(url: string): ImageMetadata;

		/**
		 * Create a new image with a given class name
		 */
		static withClassName(classList: (string | globalThis.Array<string>)): ImageMetadata;

		/**
		 * Create a new image with a given caption
		 */
		static withCaption(caption: string): ImageMetadata;

		/**
		 * Type accepted by ImageMetadata.create method
		 */
		static Source: Type.Matcher;

	}

	export namespace ImageMetadata {
		interface FrameSettings {
			frameWidth: number;

			frameHeight: number;

			keys?: globalThis.Array<string>;

		}

		interface Options {
			styleable?: boolean;

			classList?: (string | globalThis.Array<string>);

			url?: string;

			offset?: {x?: (number | string); y?: (number | string)};

			width?: (number | string);

			height?: (number | string);

			repeat?: boolean;

			caption?: string;

			rtlSensitive?: boolean;

			frameSettings?: ImageMetadata.FrameSettings;

			themeSpecificOptions?: (theme: Theme) => object;

		}

		export import Size = Self.ImageConstant.Size;

	}

	/**
	 * Immutable array
	 */
	export class ImmutableArray {
		/**
		 * Immutable array constructor
		 */
		constructor(array?: globalThis.Array<any>);

		/**
		 * Get iterator
		 */
		[Symbol.iterator](): any;

		/**
		 * True if the array is empty
		 */
		empty: boolean;

		/**
		 * Array length
		 */
		length: number;

		/**
		 * Reference to the first item
		 */
		firstItem: (null | any);

		/**
		 * Reference to the last item
		 */
		lastItem: (null | any);

		/**
		 * Return first item or a default value if array is empty
		 */
		firstItemOrDefault(defaultValue: any): any;

		/**
		 * Return last item or a default value if array is empty
		 */
		lastItemOrDefault(defaultValue: any): any;

		/**
		 * Get item at index
		 */
		at(index: number): (null | any);

		/**
		 * Append item at the end of the array
		 */
		push(item: any): ImmutableArray;

		/**
		 * Pop item from the end of the array
		 */
		pop(): ImmutableArray;

		/**
		 * Insert item at index
		 */
		insert(index: number, item: any): ImmutableArray;

		/**
		 * Remove a particular item from the array
		 */
		remove(value: any): ImmutableArray;

		/**
		 * Remove item at index
		 */
		removeAt(index: number, count?: number): ImmutableArray;

		/**
		 * Concatenate two arrays
		 */
		concat(array: ImmutableArray): ImmutableArray;

		/**
		 * Filter all items that do not satisfy the predicate
		 */
		filter(filter: (item: any, index: number) => boolean): ImmutableArray;

		/**
		 * Transform the items
		 */
		map(transform: (item: any, index: number) => any): ImmutableArray;

		/**
		 * Sorts the array using a comparator. Returns self if the array is already sorted.
		 */
		sort(comparator: (left: any, right: any) => number): ImmutableArray;

		/**
		 * Convert to a native array
		 */
		toArray(): globalThis.Array<any>;

		/**
		 * Create immutable array of {count} items increasing by step
		 */
		static range(from: number, count: number, step?: number): ImmutableArray;

		/**
		 * Create an array of {count} items where all items will be initialized to a given value
		 */
		static repeat(value: any, count: number): ImmutableArray;

		/**
		 * Set the item at index and return a new array. If the item is already present at that index the same array is returned.
		 */
		static set(array: globalThis.Array<any>, index: number, item: any): globalThis.Array<any>;

		/**
		 * Return a new array with a given item appended
		 */
		static push(array: globalThis.Array<any>, item: any): globalThis.Array<any>;

		/**
		 * Return a new array without the last item
		 */
		static pop(array: globalThis.Array<any>): any;

		/**
		 * Remove items from the beginning
		 */
		static shift(array: globalThis.Array<any>, count?: number): globalThis.Array<any>;

		/**
		 * Insert item at the beginning of the array
		 */
		static unshift(array: globalThis.Array<any>, item: any): globalThis.Array<any>;

		/**
		 * Insert items at the beginning of the array
		 */
		static unshiftAll(array: globalThis.Array<any>, items: globalThis.Array<any>): globalThis.Array<any>;

		/**
		 * Insert item into an array. Does not modify the input array.
		 */
		static insert(array: globalThis.Array<any>, index: number, item: any): globalThis.Array<any>;

		/**
		 * Insert items from a given array into another array. Does not modify the original array.
		 */
		static insertAll(array: globalThis.Array<any>, index: number, items: globalThis.Array<any>): globalThis.Array<any>;

		/**
		 * Return a new array where items are moved to a different position.
		 */
		static reorder(array: globalThis.Array<any>, fromIndex: number, toIndex: number, count?: number): globalThis.Array<any>;

		/**
		 * Create a reversed array
		 */
		static reverse(array: globalThis.Array<any>): globalThis.Array<any>;

		/**
		 * Remove the first matching value from array
		 */
		static remove(array: globalThis.Array<any>, value: any): globalThis.Array<any>;

		/**
		 * Remove items at specific index
		 */
		static removeAt(array: globalThis.Array<any>, index: number, count?: number): globalThis.Array<any>;

		/**
		 * Remove all values from the array
		 */
		static removeAll(array: globalThis.Array<any>, values: globalThis.Array<any>): globalThis.Array<any>;

		/**
		 * Filter array and return a new array keeping only the items matching the predicate
		 */
		static filter(array: globalThis.Array<any>, filter: (item: any, index: number) => boolean): globalThis.Array<any>;

		/**
		 * Filter array and return a new array only if at least one item is mapped to a different object
		 */
		static map(array: globalThis.Array<any>, transform: (item: any, index: number) => any): globalThis.Array<any>;

		/**
		 * Sort array using a comparator. Returns the same array if the array is already sorted.
		 */
		static sort(array: globalThis.Array<any>, comparator: (left: any, right: any) => number): globalThis.Array<any>;

		/**
		 * Empty immutable array constant
		 */
		static EMPTY: ImmutableArray;

	}

	export namespace ImmutableArray {
	}

	/**
	 * Immutable object helpers
	 */
	export namespace ImmutableObject {
		/**
		 * Updates a nested property without modifying the source object. Returns a new object that reuses as much of the source as possible.
		 */
		function set(source: object, path: (globalThis.Array<string> | string | object), value?: any): object;

		/**
		 * Updates a nested property without modifying the source object. Returns a new object that reuses as much of the source as possible.
		 */
		function update(source: object, path: (globalThis.Array<string> | string), updater: (value: any) => any): object;

		/**
		 * Merge two objects into a new one or return the target when same
		 */
		function merge(target: object, source: object): object;

		/**
		 * Remove a nested property without modifying the source object. Returns a new object that reuses as much of the source as possible.
		 */
		function remove(source: object, path: (globalThis.Array<string> | string)): object;

		/**
		 * Map object values using a mapping function. Returns the same object if all mapped values are the same as the original values.
		 */
		function mapValues(object: object, mapper: (key: string, value: any) => any): object;

		/**
		 * Constant used in update(). Representing that the searched property does not exist in the object.
		 */
		const NO_VALUE: object;

	}

	/**
	 * Immutable set class
	 */
	export class ImmutableSet {
		/**
		 * Constructor
		 */
		constructor(iterable?: Iterable<any>);

		/**
		 * Get iterator
		 */
		[Symbol.iterator](): any;

		/**
		 * Array of values in the set
		 */
		values: globalThis.Array<any>;

		/**
		 * Size of the set
		 */
		size: number;

		/**
		 * True if the set is empty
		 */
		empty: boolean;

		/**
		 * Add value to the set
		 */
		add(value: any): ImmutableSet;

		/**
		 * Add multiple values to the set
		 */
		addAll(values: globalThis.Array<any>): ImmutableSet;

		/**
		 * Remove value from the set
		 */
		delete(value: any): ImmutableSet;

		/**
		 * Remove multiple values from the set
		 */
		deleteAll(values: globalThis.Array<any>): ImmutableSet;

		/**
		 * Add/remove item based on the second parameter
		 */
		toggle(item: any, add?: boolean): ImmutableSet;

		/**
		 * Add/remove items based on the second parameter
		 */
		toggleAll(items: globalThis.Array<any>, add?: boolean): ImmutableSet;

		/**
		 * Check if set contains a value
		 */
		has(value: any): boolean;

		/**
		 * Check if set contains all values
		 */
		hasAll(values: globalThis.Array<any>): boolean;

		/**
		 * Check if set contains any value
		 */
		hasAny(values: globalThis.Array<any>): boolean;

		/**
		 * Check if set contains another set
		 */
		contains(anotherSet: ImmutableSet): boolean;

		/**
		 * Check if set equals another set
		 */
		equals(anotherSet: ImmutableSet): boolean;

		/**
		 * Union set with another set
		 */
		union(anotherSet: ImmutableSet): ImmutableSet;

		/**
		 * Intersect set with another set
		 */
		intersect(anotherSet: ImmutableSet): ImmutableSet;

		/**
		 * Subtract another set from this set
		 */
		subtract(anotherSet: ImmutableSet): ImmutableSet;

		/**
		 * Execute callback for every value in the set
		 */
		forEach(callback: (item: any) => void, context: any): void;

		/**
		 * Remove values that do not match the predicate
		 */
		filter(predicate: (item: any) => boolean, context: any): ImmutableSet;

		/**
		 * Transform values of the set
		 */
		map(transform: (item: any) => any, context: any): ImmutableSet;

		/**
		 * Create an immutable set from a list of values
		 */
		static fromValues(...values: globalThis.Array<any>): ImmutableSet;

		/**
		 * Create an immutable set from an array
		 */
		static fromArray(array: globalThis.Array<any>): ImmutableSet;

		/**
		 * Immutable set constant
		 */
		static EMPTY: ImmutableSet;

	}

	export namespace ImmutableSet {
	}

	export namespace ImmutableUpdate {
		/**
		 * Update an immutable state as if it was mutable. The function takes an original state and a callback to update the state. Any changes to the state in the callback are recorded and a new state is created reusing the parts of the original state that have not been changed. The original state is left unchanged.
		 */
		function of(base: object, recipe: (draft: any) => any, plugins?: globalThis.Array<any>): any;

	}

	export interface InputComponent {
		/**
		 * ID of the input element
		 */
		inputId: string;

		/**
		 * Returns attributes of the input element
		 */
		inputAttributes: HtmlAttributeList;

		/**
		 * True if the input is empty
		 */
		empty: boolean;

		/**
		 * True if the input is mandatory
		 */
		mandatory: boolean;

	}

	export namespace InputComponent {
	}

	export interface InputController {
		/**
		 * Attaches controller to the given component
		 */
		attach(component: Component): void;

		/**
		 * Detaches controller
		 */
		detach(): void;

		/**
		 * Resets controller
		 */
		reset(): void;

		/**
		 * Filters message
		 */
		filterMessage(message: object, result: object): void;

		/**
		 * Handles message
		 */
		handleMessage(message: object, result: object): void;

	}

	export namespace InputController {
	}

	class IntegerFormat {
	}

	namespace IntegerFormat {
	}

	/**
	 * Interface
	 */
	export class Interface extends InterfaceMarker {
		/**
		 * Constructor
		 */
		constructor(definition: Interface.Options);

		/**
		 * Interface name
		 */
		name: string;

		/**
		 * Unique interface id
		 */
		id: number;

		/**
		 * List of (direct) parent interfaces
		 */
		parentInterfaces: globalThis.Array<Interface>;

		/**
		 * Interface methods
		 */
		methods: object;

		/**
		 * Interface properties
		 */
		properties: object;

		/**
		 * Get a transitive closure map of this interface and all its parent interfaces
		 */
		transitiveParents: object;

		/**
		 * Checks that all interface methods are implemented on a given object.
		 */
		verify(descriptor: ClassDescriptor, name: string): void;

		/**
		 * Check whether object implements this interface
		 */
		isImplementedBy(obj: object): boolean;

		/**
		 * Check whether this interface extends another interface (transitively)
		 */
		isChildOf(superInterface: Interface): void;

		/**
		 * Checks whether subInterface extends this interface
		 */
		isParentOf(subInterface: Interface): void;

		/**
		 * Sanitize interface definition
		 */
		private _sanitizeDefinition(definition: object): void;

		/**
		 * Check whether method is a public method
		 */
		private _isPublicMethod(methodName: string): boolean;

		/**
		 * Validate interface definition
		 */
		private _validateDefinition(definition: object): void;

		/**
		 * Check taht the list of parent interfaces is valid
		 */
		private _validateParentInterfaces(name: string, interfaces: globalThis.Array<Interface>): void;

		/**
		 * Check that interface api contains only public functions
		 */
		private _validatePublicMethods(name: string, methods: object): void;

		/**
		 * Create new interface
		 */
		static create(definition: Interface.Options): Interface;

	}

	export namespace Interface {
		/**
		 * Interface definition
		 */
		interface Options {
			methods?: object;

			properties?: object;

			parentInterfaces?: globalThis.Array<number>;

			name?: string;

		}

	}

	/**
	 * Marker object for interfaces
	 */
	class InterfaceMarker {
	}

	namespace InterfaceMarker {
	}

	/**
	 * JSX namespace
	 */
	export namespace JSX {
		export import Element = Self.VDomElement;

	}

	/**
	 * JSX route component
	 */
	export function JsxRoute(props?: {path?: string; exact?: boolean}): JSX.Element;

	/**
	 * Key codes
	 */
	export enum KeyCode {
		BACKSPACE,
		TAB,
		ENTER,
		SHIFT,
		CTRL,
		ALT,
		PAUSE,
		CAPSLOCK,
		ESCAPE,
		SPACE,
		PAGE_UP,
		PAGE_DOWN,
		END,
		HOME,
		ARROW_LEFT,
		ARROW_RIGHT,
		ARROW_UP,
		ARROW_DOWN,
		PRINT_SCREEN,
		INSERT,
		DELETE,
		A,
		B,
		C,
		D,
		E,
		F,
		G,
		H,
		I,
		J,
		K,
		L,
		M,
		N,
		O,
		P,
		Q,
		R,
		S,
		T,
		U,
		V,
		W,
		X,
		Y,
		Z,
		META,
		META_LEFT,
		META_RIGHT,
		CONTEXT_MENU,
		NUM_0,
		NUM_1,
		NUM_2,
		NUM_3,
		NUM_4,
		NUM_5,
		NUM_6,
		NUM_7,
		NUM_8,
		NUM_9,
		NUM_MUL,
		NUM_ADD,
		NUM_SUB,
		NUM_DECIMAL,
		NUM_DIV,
		F1,
		F2,
		F3,
		F4,
		F5,
		F6,
		F7,
		F8,
		F9,
		F10,
		F11,
		F12,
		NUM_LOCK,
		SCROLL_LOCK,
		SEMICOLON,
		EQUAL,
		COMMA,
		DASH,
		PERIOD,
		SLASH,
		BACK_QUOTE,
		BRACKET_LEFT,
		BACK_SLASH,
		BRACKET_RIGHT,
		SINGLE_QUOTE,
	}

	/**
	 * Handles keyboard messages with registered actions
	 */
	export class KeyHandler {
		/**
		 * Adds new key action to collection
		 */
		add(keyStroke: (KeyStroke.Source | KeyShortcut), action: KeyShortcut.ActionCallback): object;

		/**
		 * Removes key action from collection
		 */
		remove(shortcut: KeyShortcut): void;

		/**
		 * Triggers first action that match provided message
		 */
		handle(message: KeyboardMessage, result: RoutedMessage.Result): boolean;

	}

	export namespace KeyHandler {
	}

	/**
	 * Keyboard shortcut
	 */
	export class KeyShortcut {
		/**
		 * Constructor
		 */
		constructor(options: {keyStroke: KeyStroke; action: KeyShortcut.ActionCallback});

		keyStroke: KeyStroke;

		action: KeyShortcut.ActionCallback;

		/**
		 * Handles message - returns true if the message is handled
		 */
		handle(message: KeyboardMessage, result: RoutedMessage.Result): boolean;

		/**
		 * Tests if message match the shortcut
		 */
		match(message: KeyboardMessage): boolean;

		/**
		 * Creates shortcut
		 */
		static create(keyStroke: KeyStroke.Source, action: KeyShortcut.ActionCallback): KeyShortcut;

	}

	export namespace KeyShortcut {
		type ActionCallback = (message: KeyboardMessage, result: RoutedMessage.Result) => boolean;

	}

	/**
	 * Key stroke
	 */
	export class KeyStroke {
		constructor(options?: KeyStroke.Options);

		/**
		 * Keycode part of keystroke
		 */
		keyCode: KeyCode;

		/**
		 * Key part of keystroke
		 */
		key: string;

		/**
		 * Indicates modifier keys state
		 */
		modifier: KeyboardMessage.Modifier;

		/**
		 * Hash of keystroke
		 */
		hash: KeyStrokeHash;

		/**
		 * Check if
		 */
		match(message: KeyboardMessage): void;

		/**
		 * Serialize stroke to string in format '<modifier>+<modifier>+<key>'
		 */
		toString(): string;

		/**
		 * Create keyStroke from string in format '<modifier>+<modifier>+<key>'
		 */
		static fromString(str: string, options?: KeyStroke.Options): KeyStroke;

		/**
		 * Create keystroke from array of keys
		 */
		static fromKeys(keys: globalThis.Array<(string | KeyCode)>, options?: KeyStroke.Options): KeyStroke;

		/**
		 * KeyStroke factory function
		 */
		static create(options: KeyStroke.Source): KeyStroke;

	}

	export namespace KeyStroke {
		interface Options {
			keyCode?: KeyCode;

			key?: string;

			modifier: KeyboardMessage.Modifier;

		}

		/**
		 * Source of KeyStroke
		 */
		type Source = (KeyStroke | KeyStroke.Options | string | globalThis.Array<(string | KeyCode)>);

	}

	/**
	 * Key stroke hash
	 */
	export class KeyStrokeHash {
		constructor(options: {keyCode: KeyCode; key: string; modifier: KeyboardMessage.Modifier});

		/**
		 * Match another hash
		 */
		match(hash: KeyStrokeHash): boolean;

	}

	export namespace KeyStrokeHash {
	}

	export class KeyboardMessage extends RoutedMessage {
		/**
		 * Constructs KeyboardMessage
		 */
		constructor(options: KeyboardMessage.Options);

		/**
		 * Target element of source event
		 */
		element: Element;

		/**
		 * Character of pressed key (if has any)
		 */
		char: string;

		/**
		 * The value of the key pressed by the user
		 */
		key: string;

		/**
		 * Number representing a system and implementation dependent numerical code identifying the unmodified value of the pressed key
		 */
		keyCode: number;

		/**
		 * The Unicode value of a character key
		 */
		charCode: number;

		/**
		 * Indicates modifier keys state
		 */
		modifier: KeyboardMessage.Modifier;

		/**
		 * Hash of this message
		 */
		hash: KeyStrokeHash;

		static fromEvent(event: KeyboardEvent): KeyboardMessage;

		static getModifier(): void;

	}

	export namespace KeyboardMessage {
		interface Modifier {
			ctrl: boolean;

			alt: boolean;

			shift: boolean;

			meta: boolean;

			none: boolean;

		}

		interface Options extends RoutedMessage.Options {
			element: Element;

			char: string;

			key: string;

			keyCode: number;

			charCode: number;

			modifier: KeyboardMessage.Modifier;

		}

	}

	/**
	 * Lazily loaded data source wrapper
	 */
	export class LazyDataSource implements DataSource, EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: EventSource.EventName, listener: EventSource.Listener): EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: EventSource.EventName): void;

		/**
		 * Constructor
		 */
		constructor(provider: LazyDataSource.Provider);

		/**
		 * The wrapped lazy loaded data source
		 */
		dataSource: (DataSource | null);

		/**
		 * True if the data source has been loaded
		 */
		loaded: boolean;

		/**
		 * Query data source items
		 */
		query(args: DataSource.QueryArguments, onResult: (args: {items: globalThis.Array<any>}) => void, onError?: (error: any) => void): void;

		/**
		 * Returns a new LazyDataSource with a transformation applied on the lazy loaded data source
		 */
		transform(transform: (item: any) => any): LazyDataSource;

		/**
		 * Returns a filtered LazyDataSource by applying the filter operation to the lazy loaded data source
		 */
		filter(predicate: (item: any) => boolean): LazyDataSource;

		/**
		 * Returns a new transformed lazy data source
		 */
		map(transform: (item: any, index: number) => any): LazyDataSource;

		/**
		 * Returns a new sorted lazy data source
		 */
		sort(comparator: (left: any, right: any) => number): LazyDataSource;

		/**
		 * Force load the wrapped data source
		 */
		load(): globalThis.Promise<DataSource>;

	}

	export namespace LazyDataSource {
		type Provider = () => (globalThis.Array<any> | DataSource | globalThis.Promise<(globalThis.Array<any> | DataSource)>);

	}

	/**
	 * Logger
	 */
	export namespace Log {
		/**
		 * Log at specific level
		 */
		function log(level: LogLevel, ...message: globalThis.Array<any>): void;

		/**
		 * Log at error level
		 */
		function error(...args: globalThis.Array<any>): void;

		/**
		 * Log at warning level
		 */
		function warning(...args: globalThis.Array<any>): void;

		/**
		 * Log a warning message once
		 */
		function warningOnce(message: string): void;

		/**
		 * Log at info level
		 */
		function info(...args: globalThis.Array<any>): void;

		/**
		 * Log at debug level
		 */
		function debug(...args: globalThis.Array<any>): void;

		/**
		 * Log at trace level
		 */
		function trace(...args: globalThis.Array<any>): void;

		/**
		 * Log deprecation
		 */
		function deprecation(message: string, version: ReleaseVersion, link?: string): void;

	}

	/**
	 * Log category
	 */
	export enum LogCategory {
		GLOBAL,
		DEPRECATION,
	}

	export class LogFormatter implements NotificationFormatter {
		/**
		 * Constructs LogFormatter
		 */
		constructor();

		showTime: boolean;

		showLevel: boolean;

		showStack: boolean;

		showUrl: boolean;

		format(notification: object): globalThis.Array<any>;

		/**
		 * Convert arbitrary value to string
		 */
		static stringifyValue(obj: any): string;

		/**
		 * Convert time to locale string
		 */
		static timeToLocaleString(time: Date): string;

		/**
		 * Get log level string
		 */
		static getLevelString(level: LogLevel): string;

		/**
		 * Converts a stack array to a string
		 */
		static getStackString(stack: string): string;

	}

	export namespace LogFormatter {
	}

	export enum LogLevel {
		ALL,
		TRACE,
		DEBUG,
		INFO,
		WARNING,
		ERROR,
		NONE,
	}

	/**
	 * Log reporter
	 */
	export class LogReporter implements EventBusListener {
		/**
		 * Constructs LogReporter
		 */
		constructor();

		threshold: LogLevel;

		/**
		 * Whether a stack trace should be saved. Use this options for debugging purposes only as it may have a negative impact on performance. This does not work in IE10.
		 */
		captureStackTrace: boolean;

		/**
		 * Reports a message to a specific output
		 */
		process(notification: {category: LogCategory; level: LogLevel; message: string; time: Date}): void;

		/**
		 * Sets a specific notification formatter
		 */
		setFormatter(formatter: NotificationFormatter): void;

		/**
		 * Preprocess input args
		 */
		protected _preprocess(): object;

	}

	export namespace LogReporter {
	}

	/**
	 * Logging context
	 */
	export class LoggingContext {
		/**
		 * Constructor
		 */
		constructor(options?: {reporters?: object});

		/**
		 * Start listening
		 */
		attach(): void;

		/**
		 * Stop listening
		 */
		detach(): void;

		/**
		 * Log message
		 */
		log(level: LogLevel, ...message: globalThis.Array<any>): void;

		/**
		 * Get reporter
		 */
		getReporter(reporter: string): any;

		/**
		 * Create a default LoggingContext based on debug settings
		 */
		static default(debug: object, extraReporters?: object): LoggingContext;

		/**
		 * Create a LoggingContext that logs to console only
		 */
		static console(): LoggingContext;

		/**
		 * Create a logging context that does not do any logging
		 */
		static none(): LoggingContext;

	}

	export namespace LoggingContext {
	}

	/**
	 * LRU cache
	 */
	export class LruCache {
		/**
		 * Constructor
		 */
		constructor(maxSize?: number);

		/**
		 * Get the cache size
		 */
		size: number;

		/**
		 * Check if the cache contains the key
		 */
		has(key: any): boolean;

		/**
		 * Get value for the key. Does NOT update the "recently used"-ness of the key.
		 */
		peek(key: any): any;

		/**
		 * Get value for the key and mark it as recently used.
		 */
		get(key: any): any;

		/**
		 * Set or update the value for a key and mark it as recently used.
		 */
		set(key: any, value: any): LruCache;

		/**
		 * Delete the key from the cache.
		 */
		delete(key: any): LruCache;

		/**
		 * Clear the cache
		 */
		clear(): LruCache;

		/**
		 * Remove last recently used item from the cache
		 */
		private _removeLast(): void;

	}

	export namespace LruCache {
	}

	/**
	 * Map class based on the native browser Map
	 * @deprecated Use the native Map 
	 */
	export class Map {
		/**
		 * Constructor
		 */
		constructor(iterable?: globalThis.Array<any>);

		/**
		 * Get iterator
		 */
		[Symbol.iterator](): any;

		/**
		 * Get map size
		 */
		size: number;

		/**
		 * Is the map empty
		 */
		empty: boolean;

		/**
		 * Get the oldest key in the map
		 */
		firstKey: any;

		/**
		 * Get a list of map keys in insertion order
		 */
		keys: globalThis.Array<any>;

		/**
		 * Get a list of map values in insertion order
		 */
		values: globalThis.Array<any>;

		/**
		 * Get a list of map entries in insertion order
		 */
		entries: globalThis.Array<any>;

		/**
		 * Associate key with value
		 */
		set(key: any, value: any): globalThis.Map<any, any>;

		/**
		 * Get value associated with given key
		 */
		get(key: any): any;

		/**
		 * Remove given key from the map
		 */
		delete(key: any): globalThis.Map<any, any>;

		/**
		 * Check if key is present in the map
		 */
		has(key: any): boolean;

		/**
		 * Clear the map
		 */
		clear(): globalThis.Map<any, any>;

		/**
		 * Execute callback for every map entry
		 */
		forEach(callback: (value: any, key: any, map: globalThis.Map<any, any>) => void, context?: any): void;

		/**
		 * Create a Map from an array
		 */
		static fromArray(array: globalThis.Array<any>, splitter?: (item: any) => ({key: string; value: any} | null)): globalThis.Map<any, any>;

	}

	export namespace Map {
	}

	/**
	 * MarkdownService used to format text
	 */
	export class MarkdownService {
		/**
		 * Constructs MarkdownService
		 */
		constructor(options?: MarkdownService.Options);

		/**
		 * Sets function that creates link representation in markup
		 */
		setCreateLink(createLinkFactory: (args: object) => JSX.Element): void;

		/**
		 * Sets function that creates text representation in markup
		 */
		setCreateText(createTextFactory: (args: object) => JSX.Element): void;

		/**
		 * Sets formatted text content
		 */
		formatText(text: (string | number | Translation), options?: {linkOptions?: PackageComponent.Link.Options; textOptions?: PackageComponent.Text.Options}): globalThis.Array<object>;

		private _formatStyle(): void;

		private _formatLink(): void;

		private _matchBoldGroup(): void;

		private _matchItalicGroup(): void;

		private _matchLinkGroup(): void;

		private _replaceMarkupWithSubstitutes(): void;

		private _replaceBoldWithSubstitute(): void;

		private _replaceItalicWithSubstitute(): void;

		private _replaceEscapedCharsWithAscii(): void;

		private _revertToChars(): void;

	}

	export namespace MarkdownService {
		interface Text {
			bold?: boolean;

			italic?: boolean;

			text?: string;

		}

		interface Link {
			content?: string;

			url?: string;

		}

		interface Options extends Component.Options {
			createLink?: (args: object) => JSX.Element;

			createText?: (args: object) => JSX.Element;

		}

	}

	/**
	 * Message code.
	 */
	export enum MessageCode {
		KEY_DOWN,
		KEY_UP,
		KEY_PRESS,
		CLICK,
		DOUBLE_CLICK,
		FOCUS_IN,
		FOCUS_OUT,
		PASTE,
		CUT,
		SELECT,
		INPUT,
		WHEEL,
		CONTEXT_MENU,
		SCROLL,
		POINTER_ENTER,
		POINTER_OVER,
		POINTER_DOWN,
		POINTER_MOVE,
		POINTER_UP,
		POINTER_LEAVE,
		POINTER_OUT,
	}

	/**
	 * Message handler.
	 */
	export interface MessageHandler {
		/**
		 * Process message.
		 */
		processMessage(next: RoutedMessage.Handler, message: RoutedMessage, result: RoutedMessage.Result): void;

	}

	export namespace MessageHandler {
	}

	/**
	 * Mixin class
	 */
	export class Mixin extends MixinMarker {
		/**
		 * Constructor
		 */
		constructor(definition: Mixin.Options);

		/**
		 * Create new mixin
		 */
		static create(definition: object): Mixin;

	}

	export namespace Mixin {
		interface Options {
			methods?: object;

			properties?: object;

			name?: string;

		}

	}

	/**
	 * Marker object for mixins
	 */
	class MixinMarker {
	}

	namespace MixinMarker {
	}

	/**
	 * Mouse buttons identifiers
	 */
	export enum MouseButton {
		LEFT,
		MIDDLE,
		RIGHT,
	}

	/**
	 * Mutable data source interface
	 */
	export interface MutableDataSource extends DataSource {
		/**
		 * Adds items to the collection
		 */
		add(args: {parent?: any; item?: any; items?: globalThis.Array<any>; index?: number; reason?: string}): object;

		/**
		 * Remove items from the collection
		 */
		remove(args: {parent?: any; item?: any; items?: globalThis.Array<any>; index?: number; count?: number; reason?: string}): object;

		/**
		 * Change order of elements in the collection. Moves a chunk of items from one position to another.
		 */
		move(args: {sourceParent?: number; sourceIndex: number; targetParent?: number; targetIndex: number; count?: number; reason?: string}): object;

	}

	export namespace MutableDataSource {
	}

	/**
	 * Navigator using the pathname part of the URL
	 */
	export class Navigator {
		/**
		 * Constructor
		 */
		constructor(options: {getLocation: () => Navigator.GetLocationResult; constructUrl: (route: string, params: object) => string});

		/**
		 * Get current location
		 */
		location: string;

		/**
		 * Get current search part of the URL
		 */
		search: string;

		/**
		 * Get the hash part of the URL
		 */
		hash: string;

		/**
		 * Construct url for a given route and parameters
		 */
		constructUrl(route: string, params?: object): string;

		/**
		 * Check if current location matches a given route
		 */
		recognizeRoute(route: string, options?: {exact?: boolean}): object;

		/**
		 * Attach the navigator
		 */
		listen(callback: (args: {location: string; search: string; hash: string}) => void): () => void;

		/**
		 * Navigate to route creating a new history entry
		 */
		push(route: string, params?: object): void;

		/**
		 * Navigate to route replacing the current history entry
		 */
		replace(route: string, params: object): void;

		/**
		 * Go forward or backward in history
		 */
		go(index: number): void;

		/**
		 * Go back in history
		 */
		back(): void;

		/**
		 * Go forward in history
		 */
		forward(): void;

		/**
		 * Construct a path navigator
		 */
		static path(options?: {basename?: string}): Navigator;

		/**
		 * Construct a hash navigator
		 */
		static hash(): Navigator;

		/**
		 * Construct a parameter navigator
		 */
		static param(options: {name: string}): Navigator;

	}

	export namespace Navigator {
		interface GetLocationResult {
			location: string;

			hash: string;

			search: string;

		}

	}

	export class NoneLogFormatter extends LogFormatter {
		/**
		 * Constructs NoneLogFormatter
		 */
		constructor();

	}

	export namespace NoneLogFormatter {
	}

	/**
	 * Notification formatter
	 */
	export interface NotificationFormatter {
		format(notification: object): globalThis.Array<any>;

	}

	export namespace NotificationFormatter {
	}

	/**
	 * Notification service
	 */
	export const NotificationService: EventBus;

	/**
	 * Utility functions for numbers
	 */
	export namespace Number {
		/**
		 * Checks whether given number is between given range ( rangeStart <= number <= rangeEnd).
		 */
		function isBetween(number: number, rangeStart: number, rangeEnd: number): boolean;

		/**
		 * Checks that index is a valid index for an array of a given size, i.e., that it is in the range [0, size)
		 */
		function isValidIndex(index: number, size: number): boolean;

		/**
		 * Test that value is a valid finite number (number that is not NaN and not infinite)
		 */
		function isFinite(value: any): boolean;

		/**
		 * Test that value is NaN
		 */
		function isNaN(value: any): boolean;

		/**
		 * Test that value is positive or negative infinity
		 */
		function isInfinity(value: any): boolean;

		/**
		 * Restrict number to a given interval
		 */
		function toBounds(number: number, min: number, max: number): number;

		/**
		 * Generate a random integer from a given range
		 */
		function randomInteger(min: number, max: number): number;

		/**
		 * Returns a random integer from the range 0..length-1
		 */
		function randomIndex(length: number): number;

		/**
		 * Compare two numbers
		 */
		function compare(left: number, right: number, ascending?: boolean): number;

		/**
		 * Check if number is a power of 2. Works only for positive integers.
		 */
		function isPowerOf2(number: number): boolean;

		/**
		 * Convert value to a number
		 */
		function of(value: any): number;

		/**
		 * Check if value is an integer
		 */
		function isInteger(value: any): boolean;

		/**
		 * Convert a string to a number. Returns NaN when the input is not a number.
		 */
		function parse(value: string): number;

	}

	/**
	 * Provides basic object introspection and extension methods
	 */
	export namespace Object {
		/**
		 * Shallow extend of target object with properties from one or more source objects
		 */
		function extend(target: object, ...sources: globalThis.Array<object>): object;

		/**
		 * Deep extend of target object with properties from one or more source objects
		 */
		function deepExtend(target: object, ...sources: globalThis.Array<object>): object;

		/**
		 * Shallow object copy
		 */
		function copy(source: (object | globalThis.Array<any>)): object;

		/**
		 * Copy object including symbol keys
		 */
		function copyWithSymbols(source: object): void;

		/**
		 * Shallow copy of object properties matching predicate
		 */
		function copyIf(source: (object | globalThis.Array<any>), predicate: (key: string, value: any) => boolean): object;

		/**
		 * Create deep object copy
		 */
		function deepCopy(source: object, maxLevel?: number): void;

		/**
		 * Copy object properties that match the predicate
		 */
		function filter(source: object, filter: (key: string, value: any) => boolean): object;

		/**
		 * Recursively checks that the first object contains all properties of the second one and that these properties have the same values.
		 */
		function deepContains(left: any, right: any): boolean;

		/**
		 * Deep comparison of two objects
		 */
		function equals(left: any, right: any): boolean;

		/**
		 * Shallow comparison of two objects
		 */
		function shallowEquals(left: (object | null), right: (object | null)): boolean;

		/**
		 * Returns true if the object has no own property
		 */
		function isEmpty(object: object): boolean;

		/**
		 * Return a unique ID for an object
		 */
		function guid(object: object): number;

		/**
		 * Generate a unique id
		 */
		function nextGuid(): number;

		/**
		 * Define property on object
		 */
		function defineProperty(): void;

		/**
		 * Define properties on object
		 */
		function defineProperties(): void;

		/**
		 * Freeze object
		 */
		function freeze(object: object): object;

		/**
		 * Deep freeze object
		 */
		function deepFreeze(object: object): object;

		/**
		 * Check if object is frozen
		 */
		function isFrozen(object: object): boolean;

		/**
		 * Get own property names
		 */
		function getOwnPropertyNames(): void;

		/**
		 * Get own property descriptor
		 */
		function getOwnPropertyDescriptor(): void;

		/**
		 * Get own property descriptors
		 */
		function getOwnPropertyDescriptors(): void;

		/**
		 * Get own property symbols
		 */
		function getOwnPropertySymbols(): void;

		/**
		 * Returns an array of object keys
		 */
		function keys(object: object): globalThis.Array<string>;

		/**
		 * Returns an array of object keys including symbols
		 */
		function keysWithSymbols(source: object): globalThis.Array<(string | symbol)>;

		/**
		 * Merge objects
		 */
		function assign(...object: globalThis.Array<object>): object;

		/**
		 * Get object prototype
		 */
		function getPrototypeOf(object: object): (object | null);

		/**
		 * Recursively find property descriptor on the object or its prototypes
		 */
		function getPropertyDescriptor(object: object, propertyName: string): (object | null);

		/**
		 * Returns an array of object values
		 */
		function values(object: object): globalThis.Array<any>;

		/**
		 * Return object entries as an array of key/value pairs.
		 */
		function entries(object: object): globalThis.Array<[string, any]>;

		/**
		 * Return object entries including symbols as an array of key/value pairs.
		 */
		function entriesWithSymbols(source: object): globalThis.Array<[(string | symbol), any]>;

		/**
		 * Create a new object from entries
		 */
		function fromEntries(iterable: Iterable<[string, any]>): object;

		/**
		 * Create a new object with the specified prototype and properties
		 */
		function create(prototype: object, properties?: object): object;

		/**
		 * Compare values
		 */
		function is(left: any, right: any): boolean;

		/**
		 * Convert a value to string
		 */
		function toString(value: any): string;

		/**
		 * Get value from nested object
		 */
		function getValue(context: object, path: (string | globalThis.Array<string>), defaultValue?: any): any;

		/**
		 * Set value of nested object
		 */
		function setValue(context: object, path: (string | globalThis.Array<string>), value: any, pathCreator?: (context: object, property: string) => object): void;

		/**
		 * Compare values at path
		 */
		function compareValues(left: object, right: object, path: (string | globalThis.Array<string>), comparator?: (left: any, right: any) => boolean): boolean;

		/**
		 * Creates a new object with the same keys but values mapped using the mapper function
		 */
		function mapValues(input: object, mapper: (value: any, key: string, input: object) => any): void;

		/**
		 * Get object symbol keys
		 */
		function symbolKeys(object: object): globalThis.Array<symbol>;

		/**
		 * Get object symbol values
		 */
		function symbolValues(object: object): globalThis.Array<any>;

		/**
		 * Get object symbol entries
		 */
		function symbolEntries(object: object): globalThis.Array<[symbol, any]>;

		/**
		 * Check if object has own property. Avoids the problem with hasOwnProperty being overridden.
		 */
		function hasOwnProperty(object: object, propertyName: string): boolean;

		/**
		 * Empty object constant
		 */
		const EMPTY: object;

	}

	/**
	 * Opaque focus handler
	 */
	class OpaqueFocusHandler {
		/**
		 * Constructs OpaqueFocusHandler
		 */
		constructor(args: {component?: Component; handler?: FocusHandler});

		/**
		 * True if the component is focusable
		 */
		effectiveFocusable: boolean;

		/**
		 * True if the component can be focusable
		 */
		focusable: boolean;

		/**
		 * True if the component is tabbable
		 */
		effectiveTabbable: boolean;

		/**
		 * True if the component can be tabbable
		 */
		tabbable: boolean;

		/**
		 * Current focus target component
		 */
		focusComponent: Component;

		/**
		 * Updates handler
		 */
		update(): void;

		/**
		 * Focuses
		 */
		focus(): any;

		/**
		 * Check if focused
		 */
		isFocused(focusComponent: Component): boolean;

		/**
		 * Wrap focus handler of a child component
		 */
		static wrap(parent: Component, child: Component): OpaqueFocusHandler;

	}

	namespace OpaqueFocusHandler {
	}

	/**
	 * Page
	 */
	export class Page {
		/**
		 * Constructor
		 */
		constructor(options?: Page.Options);

		/**
		 * The root context
		 */
		context: Context;

		/**
		 * Shell reference
		 */
		shell: PackageComponent.Shell;

		/**
		 * Context services
		 */
		services: HierarchicalMap;

		/**
		 * Starts the main page routine
		 */
		run(): void;

	}

	export namespace Page {
		interface Options {
			context?: Context;

			shell?: PackageComponent.Shell;

		}

	}

	/**
	 * Page message dispatcher
	 */
	export class PageMessageDispatcher {
		/**
		 * Constructor
		 */
		constructor(options: object);

		/**
		 * Adds filter on begin of filters queue
		 */
		registerFilter(handler: (RoutedMessage.Filter | MessageHandler)): {remove: () => void};

		/**
		 * Listen on element on events
		 */
		attach(eventDispatcher?: HTMLElement): {remove: () => void};

		/**
		 * Stop listening on an element
		 */
		detach(eventDispatcher: HTMLElement): void;

		/**
		 * Disposes page message dispatcher
		 */
		dispose(): void;

		/**
		 * Sends the message to the recipient along a path consisting of all its ancestors in the virtual DOM
		 */
		postMessage(message: RoutedMessage): void;

		/**
		 * Create message route
		 */
		private createMessageRoute(message: RoutedMessage): globalThis.Array<RoutedMessage.Filter>;

		/**
		 * Creates main message chain
		 */
		protected getMessageHandlers(message: RoutedMessage): globalThis.Array<MessageHandler>;

		/**
		 * Hook to browser events
		 */
		private hookOnEventDispatcher(): void;

		/**
		 * Unhook from browser events
		 */
		private unhookFromEventDispatcher(): void;

		/**
		 * List of events handled by PageMessageDispatcher.
		 */
		static HandledEvents: globalThis.Array<string>;

	}

	export namespace PageMessageDispatcher {
	}

	/**
	 * Parameter based router
	 */
	export function ParamRouter(props: {name: string}): JSX.Element;

	/**
	 * Path based router
	 */
	export function PathRouter(props?: {basename?: string}): JSX.Element;

	export class PersistingFormatter extends LogFormatter {
		/**
		 * Constructs PersistingFormatter
		 */
		constructor();

	}

	export namespace PersistingFormatter {
	}

	export class PersistingReporter extends LogReporter {
		/**
		 * Constructs PersistingReporter
		 */
		constructor();

		/**
		 * Get all messages stored in all instances of PersistingReporter
		 */
		getMessages(): globalThis.Array<any>;

		/**
		 * Get all messages stored in all instances of PersistingReporter
		 */
		getDeprecations(): globalThis.Array<any>;

		/**
		 * Check if any deprecation has been reported
		 */
		hasDeprecations(): boolean;

		/**
		 * Delete all stored messages
		 */
		clear(): void;

		/**
		 * Get all messages stored in all instances of PersistingReporter. This static method is used in automation framework
		 */
		static getMessages(): globalThis.Array<any>;

		static Event: PersistingReporter.EventTypes;

	}

	export namespace PersistingReporter {
		interface EventTypes {
			STORAGE_CHANGED: string;

		}

	}

	export class PointerMessage extends RoutedMessage {
		/**
		 * Constructs PointerMessage
		 */
		constructor(options: PointerMessage.Options);

		/**
		 * Target element of source event
		 */
		element: Element;

		/**
		 * Related element of source event
		 */
		relatedElement: Element;

		/**
		 * Button state
		 */
		button: PointerMessage.Button;

		/**
		 * Indicates modifier buttons state
		 */
		modifier: KeyboardMessage.Modifier;

		/**
		 * Position of pointer according to element, document and screen
		 */
		position: PointerMessage.Position;

		/**
		 * Indicates change of position of wheel device
		 */
		wheel: PointerMessage.Wheel;

		/**
		 * Indicates change of position of pointer from last message
		 */
		movement: PointerMessage.Movement;

		/**
		 * A unique identifier for the pointer
		 */
		pointerId: string;

		/**
		 * Indicates type of pointer
		 */
		pointerType: PointerMessage.PointerType;

		clone(options: object): PointerMessage;

		static fromEvent(event: PointerEvent, options?: object): PointerMessage;

		static fromMouseEvent(event: MouseEvent, type?: PointerMessage.PointerType): PointerMessage;

		static getPosition(): void;

		static getButton(): void;

		static getWheel(): void;

		static getMovement(): void;

	}

	export namespace PointerMessage {
		interface Position {
			element: {x: number; y: number};

			document: {x: number; y: number};

			client: {x: number; y: number};

		}

		interface Button {
			primary: boolean;

			secondary: boolean;

			auxiliary: boolean;

			none: boolean;

		}

		interface Movement {
			dx: number;

			dy: number;

		}

		interface Wheel {
			dx: number;

			dy: number;

		}

		interface Options extends RoutedMessage.Options {
			element: Element;

			relatedElement: Element;

			button: PointerMessage.Button;

			modifier: KeyboardMessage.Modifier;

			position: PointerMessage.Position;

			wheel: PointerMessage.Wheel;

			movement: PointerMessage.Movement;

			pointerId: string;

			pointerType: PointerMessage.PointerType;

		}

		enum PointerType {
			MOUSE,
			PEN,
			TOUCH,
			UNKNOWN,
		}

	}

	interface Portal {
		/**
		 * Owner component
		 */
		owner: (Component | VDomRef | null);

	}

	namespace Portal {
	}

	/**
	 * Helper for getting position of frame
	 */
	export class PositionHelper {
		/**
		 * Return absolute position in container corresponding with specified element or point on the page.
		 */
		static getPosition(options: PositionHelper.Options): PositionHelper.FrameDescription;

		/**
		 * Go through all allowed positions and get the most appropriate
		 */
		private static _choosePosition(options: PositionHelper.HelperOptions): PositionHelper.FrameDescription;

		/**
		 * Go through all allowed positions on screen and get the most appropriate
		 */
		private static _chooseScreenPosition(options: PositionHelper.HelperOptions): PositionHelper.FrameDescription;

		/**
		 * Go through all allowed positions on target and get the most appropriate
		 */
		private static _chooseTargetPosition(options: PositionHelper.HelperOptions): PositionHelper.FrameDescription;

		/**
		 * Use the given strategy for positioning frame
		 */
		private static _useStrategy(basePointPosition: PositionHelper.Point, frameDescription: PositionHelper.FrameDescription, result: PositionHelper.BestResult, options: PositionHelper.HelperOptions): void;

		/**
		 * Shift the computed position of frame on the screen to fit the frame. Keeps the place but ignores alignment.
		 */
		private static _shiftFrame(frameDescription: PositionHelper.FrameDescription, outerFrame: PositionHelper.Coordinates): void;

		/**
		 * Get all alignments from options which can be used for specified placement
		 */
		private static _getAvailableAlignments(placement: string, options: PositionHelper.HelperOptions): globalThis.Array<PositionHelper.Alignment>;

		/**
		 * Compute base coordinates point Base point is the origin place, where is applied the position and alignment
		 */
		private static _getBasePointCoordinates(elementBox: PositionHelper.Coordinates, position: {placement: PositionHelper.Placement; alignment: PositionHelper.Alignment}, userOffset: PositionHelper.Offset): PositionHelper.Point;

		/**
		 * Compute final position (top, left) in given frame.
		 */
		private static _getFramePosition(size: PositionHelper.Size, basePosition: PositionHelper.Point, place: {placement: PositionHelper.Placement; alignment: PositionHelper.Alignment}): Rectangle;

		/**
		 * Compute alternate size which can fit into parent frame and does not break a minimum size limit
		 */
		private static _reduceSize(visibleFrame: PositionHelper.Coordinates, size: PositionHelper.Size, frameDescription: PositionHelper.FrameDescription, centerPoint: PositionHelper.Point): PositionHelper.Size;

		/**
		 * Concatenate allowed position with placement position. placement positions get first.
		 */
		private static _concatAllowedPositions(options: PositionHelper.HelperOptions): globalThis.Array<PositionHelper.Placement>;

		/**
		 * Frame into the outer frame - window - must fit
		 */
		static getOuterFramePosition(frame: (HTMLElement | PackageComponent.Window)): Rectangle;

		/**
		 * Initialize frame parameters with default values for undefined properties.
		 */
		private static _initializeOptions(options: PositionHelper.Options): PositionHelper.HelperOptions;

		private static _getBox(target: (Rectangle | Element | object)): Rectangle;

		/**
		 * Initialize size options. If string size or string px size is provided, the value is converted into number.
		 */
		private static _initializeSizes(options: object): PositionHelper.SizeOptions;

		/**
		 * Default placement of the frame according to the target element (position of main axis).
		 */
		static DEFAULT_PLACEMENT: globalThis.Array<PositionHelper.Placement>;

		/**
		 * Default alignment of the frame according to the target element (position of the cross axis).
		 */
		static DEFAULT_ALIGNMENT: globalThis.Array<PositionHelper.Alignment>;

		/**
		 * Default frame size.
		 */
		static DEFAULT_SIZE: PositionHelper.SizeOptions;

	}

	export namespace PositionHelper {
		interface Coordinates extends Rectangle {
		}

		interface SizeOptions {
			height: number;

			maxHeight: number;

			maxWidth: number;

			minHeight: number;

			minWidth: number;

			width: number;

		}

		interface Options {
			alignment?: (PositionHelper.Alignment | globalThis.Array<PositionHelper.Alignment>);

			alignmentOffset?: number;

			allowed?: (PositionHelper.Placement | globalThis.Array<PositionHelper.Placement>);

			allowOverlapOuterContainer?: boolean;

			outerContainer?: (HTMLElement | Rectangle);

			placement?: (PositionHelper.Placement | globalThis.Array<PositionHelper.Placement>);

			placementOffset?: number;

			rtl?: boolean;

			size?: PositionHelper.SizeOptions;

			strategy?: PositionHelper.Strategy;

			target?: (string | HTMLElement | PositionHelper.Point | Rectangle);

		}

		interface Size {
			height: number;

			width: number;

		}

		interface Info {
			passed: boolean;

			placement: (string | globalThis.Array<string>);

			alignment: (string | globalThis.Array<string>);

		}

		interface FrameDescription {
			position: Rectangle;

			targetBox: Rectangle;

			info: PositionHelper.Info;

		}

		interface BestResult {
			frameDescription: PositionHelper.FrameDescription;

			fitting: number;

			original: boolean;

		}

		interface Point {
			left: number;

			top: number;

		}

		interface Offset {
			place: number;

			align: number;

		}

		interface HelperOptions {
			allowed: (PositionHelper.Placement | globalThis.Array<PositionHelper.Placement>);

			placement: (PositionHelper.Placement | globalThis.Array<PositionHelper.Placement>);

			alignment: (PositionHelper.Alignment | globalThis.Array<PositionHelper.Alignment>);

			size: PositionHelper.SizeOptions;

			frameSize?: PositionHelper.SizeOptions;

			frameDescription?: PositionHelper.FrameDescription;

			target: (string | HTMLElement | PositionHelper.Point);

			outerFrame: PositionHelper.Coordinates;

			targetBox: PositionHelper.Coordinates;

			strategy: PositionHelper.Strategy;

			alignmentOffset?: number;

			placementOffset?: number;

		}

		/**
		 * Strategy of position the frame to fit inside the screen
		 */
		enum Strategy {
			SIZE,
			POSITION,
			SHIFT,
		}

		/**
		 * Placement of the frame according to the target element (position of main axis).
		 */
		enum Placement {
			OVER,
			ALL,
			ABOVE,
			BELOW,
			LEFT,
			RIGHT,
		}

		/**
		 * Alignment of the frame according to the target element (position of the cross axis).
		 */
		enum Alignment {
			LEFT,
			RIGHT,
			CENTER_HORIZONTAL,
			CENTER_VERTICAL,
			TOP,
			BOTTOM,
			CORNER_LEFT,
			CORNER_RIGHT,
		}

		/**
		 * Screen position
		 */
		enum ScreenPosition {
			SCREEN_CENTER,
		}

	}

	/**
	 * Preferences
	 */
	export class Preferences {
		/**
		 * Constructor
		 */
		constructor(options?: {preferences?: object});

		/**
		 * Get preference value. Throws an error if the preference is not present and no default value is specified.
		 */
		get(preference: string, defaultValue?: any): any;

		/**
		 * Set preference value
		 */
		set(key: string, value: any): Preferences;

		/**
		 * Checks for presence of the preference
		 */
		has(preference: string): boolean;

		/**
		 * Add preference bundle
		 */
		addBundle(preferences: object): Preferences;

	}

	export namespace Preferences {
	}

	/**
	 * Base presenter class
	 */
	export class Presenter implements EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: EventSource.EventName, listener: EventSource.Listener): EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: EventSource.EventName): void;

		/**
		 * Constructor
		 */
		constructor(options: Presenter.Options);

		/**
		 * The associated context
		 */
		context: Context;

		view: Component;

		/**
		 * True if the view has been created
		 */
		viewCreated: boolean;

		/**
		 * Context services
		 */
		services: HierarchicalMap;

		/**
		 * Context state
		 */
		state: HierarchicalMap;

		/**
		 * Route with parameters
		 */
		routeState: Route.State;

		/**
		 * The translation service
		 */
		i18n: I18n;

		/**
		 * True if the presenter has been initialized
		 */
		initialized: boolean;

		/**
		 * True if the presenter has been disposed
		 */
		disposed: boolean;

		/**
		 * Initializes presenter.
		 */
		initialize(): void;

		/**
		 * Creates view component.
		 */
		createView(): Component;

		/**
		 * Publish event
		 */
		publish(topic: string, args?: object, options?: {mode?: Context.EventMode}): void;

		/**
		 * Subscribe to event
		 */
		subscribe(topic: string, handler: (args: object) => void): {remove: () => void};

		/**
		 * Dispatch store action. When action is string or two parameters are used then action object {type: action, payload: payload} is created
		 */
		dispatchAction(action: (Reducer.Action | string), payload?: any): void;

		/**
		 * Activate a new route.
		 */
		routeTo(route: Route, parameters?: object, modifiers?: object): void;

		/**
		 * Disposes all presenter's resources.
		 */
		dispose(): void;

		/**
		 * Utility method that accepts either a string or a translation and returns a string.
		 */
		translate(value: (string | number | Translation)): string;

		/**
		 * Creates the view if it has not been created yet
		 */
		private _createView(): Component;

		/**
		 * Create a child presenter
		 */
		protected _createChild(presenterClass: any, options?: {contextName?: string; contextNameSuffix?: string; stateProvider?: Context.StateProviderCallback; state?: object; eventRoot?: boolean; contextOptions?: object; presenterOptions?: object}): Presenter;

		/**
		 * Registers services.
		 */
		protected _onRegisterServices(servicesContainer: HierarchicalMap, rootServicesContainer: HierarchicalMap): void;

		/**
		 * Registers listeners.
		 */
		protected _onRegisterListeners(): void;

		/**
		 * Method is called whenever state on the presenter's context is changed.
		 */
		protected _onStateChanged(oldState: object, currentState: object): void;

		/**
		 * Method is called whenever route on the presenter's context is changed.
		 */
		protected _onRouteChanged(oldRouteState: Route.State, currentRouteState: Route.State): void;

		/**
		 * Create presenter view
		 */
		protected _onCreateView(): Component;

		protected _onViewCreated(): void;

		protected _onDispose(): void;

		/**
		 * Create a child presenter
		 */
		static create(presenterClass: any, options: {parentContext: Context; parentPresenter?: Presenter; contextName?: string; contextNameSuffix?: string; stateProvider?: Context.StateProviderCallback; state?: object; eventRoot?: boolean; contextOptions?: object; presenterOptions?: object}): Presenter;

		static Event: Presenter.EventTypes;

	}

	export namespace Presenter {
		interface Options {
			context: Context;

			parent?: Presenter;

			on?: EventSource.ListenerMap;

		}

		interface EventTypes {
			DISPOSE: string;

		}

	}

	/**
	 * Priority queue class
	 */
	export class PriorityQueue {
		/**
		 * Constructor
		 */
		constructor();

		/**
		 * Get the length of the queue
		 */
		length: number;

		/**
		 * True if the queue is empty
		 */
		empty: boolean;

		/**
		 * Insert item with priority
		 */
		insert(item: any, priority: number): void;

		/**
		 * Pop item with the highest priority
		 */
		pop(): any;

	}

	export namespace PriorityQueue {
	}

	/**
	 * Base interface for objects with observable properties
	 */
	export interface PropertyObservable extends EventSource {
	}

	export namespace PropertyObservable {
		interface EventTypes {
			PROPERTY_CHANGED: string;

		}

		interface EventArgs {
			propertyName: string;

			oldValue: any;

			newValue: any;

		}

		const Event: PropertyObservable.EventTypes;

	}

	/**
	 * Common behavior for objects with observable properties
	 */
	/**
	 * Property observable proxy
	 */
	export class PropertyObservableProxy {
		/**
		 * Constructor
		 */
		constructor();

		/**
		 * Wrap value in a PropertyObservable proxy
		 */
		static wrap(value: object): PropertyObservableProxy;

	}

	export namespace PropertyObservableProxy {
	}

	/**
	 * Base class for components based on the VDom model
	 */
	export class PureComponent<Props = any, State = any> {
		/**
		 * Constructor
		 */
		constructor(props: Props, context: any);

		/**
		 * Update component state
		 */
		setState(state: Partial<State>): void;

		/**
		 * Component props
		 */
		protected props: Props;

		/**
		 * Component state
		 */
		protected state: State;

		/**
		 * Component context
		 */
		protected context: any;

		/**
		 * Component style
		 */
		protected style: any;

		/**
		 * Invoked when the component is mounted to the DOM
		 */
		protected render(): VDom.Node;

		/**
		 * Alias for componentDidMount
		 * @deprecated 
		 */
		protected mounted(): void;

		/**
		 * Invoked when the component is mounted to the DOM
		 */
		protected componentDidMount(): void;

		/**
		 * Alias for componentWillUnmount
		 * @deprecated 
		 */
		protected willUnmount(): void;

		/**
		 * Invoked before the component is unmounted from the DOM.
		 */
		protected componentWillUnmount(): void;

		/**
		 * Alias for componentDidUpdate
		 * @deprecated 
		 */
		protected updated(previousProps: Props, previousState: State, previousContext: any, snapshot: any): void;

		/**
		 * Invoked after the component is updated
		 */
		protected componentDidUpdate(previousProps: Props, previousState: State, previousContext: any, snapshot: any): void;

		/**
		 * Alias for shouldComponentUpdate
		 * @deprecated 
		 */
		protected shouldUpdate(nextProps: Props, nextState: State, nextContext: any): void;

		/**
		 * Invoked when the component is mounted to DOM
		 */
		protected shouldComponentUpdate(nextProps: Props, nextState: State, nextContext: any): void;

		/**
		 * Invoked when the component is mounted to DOM
		 */
		protected getSnapshotBeforeUpdate(previousProps: Props, previousState: State, previousContext: any): any;

	}

	export namespace PureComponent {
	}

	/**
	 * Rectangle
	 */
	export class Rectangle {
		/**
		 * Constructor
		 */
		constructor(rectangle: Rectangle.RectangleSpec);

		right: number;

		bottom: number;

		x: number;

		y: number;

		/**
		 * Returns intersect rectangle
		 */
		intersect(rectangle: Rectangle): Rectangle;

		/**
		 * Check if this interset with rectangle
		 */
		intersects(rectangle: Rectangle): boolean;

		/**
		 * Area of intersection
		 */
		intersectArea(rectangle: Rectangle): number;

		/**
		 * Returns the smallest rectangle enclosing this rectangle and the rectangle in parameters
		 */
		union(rectangle: Rectangle): Rectangle;

		/**
		 * Returns true if rectangle is inside this
		 */
		contains(rectangle: Rectangle): boolean;

		/**
		 * Returns true if position and size are equal
		 */
		equals(rectangle: Rectangle): boolean;

		/**
		 * Adjust size of rectangle to size of argument
		 */
		clipSize(rectangle: Rectangle): Rectangle;

		/**
		 * Area of rectangle
		 */
		area(): number;

		/**
		 * Resize current rectangle by delta
		 */
		extend(delta: (number | Rectangle)): Rectangle;

		/**
		 * Move rectangle into rectangle
		 */
		moveInto(rectangle: Rectangle): Rectangle;

		/**
		 * Clone this rectangle
		 */
		clone(): Rectangle;

		/**
		 * Round all dimensions using Math.round
		 */
		round(): Rectangle;

		/**
		 * Returns smallest containig rectangle with left, top, width, height as integers
		 */
		getEnclosingIntRectangle(): Rectangle;

		/**
		 * Returns rectangle with left, top, width, height are converted to integers
		 */
		getSnappedIntRectangle(): Rectangle;

		/**
		 * Returns bouding rectangle of all rectangles
		 */
		static getBoundingRectangle(): Rectangle;

		/**
		 * Create rectangle instance from another rectangle
		 */
		static fromBox(rectangle: Rectangle): Rectangle;

		/**
		 * Create rectagle instance from point
		 */
		static fromPoint(point: Rectangle.Point): Rectangle;

	}

	export namespace Rectangle {
		interface Point {
			x?: number;

			y?: number;

			left?: number;

			top?: number;

		}

		interface RectangleSpec {
			left: number;

			top: number;

			width: number;

			height: number;

		}

	}

	export namespace Reducer {
		/**
		 * Reducer is a function mapping a state to a new state based on a given action
		 */
		type Function = (currentState: any, action: Reducer.Action) => any;

		interface Action {
			type: (string | symbol);

			payload?: any;

		}

		interface WithPath {
			reduce: Reducer.Function;

			path: (string | globalThis.Array<string>);

		}

		/**
		 * Create a new reducer with a list of actions.
		 */
		function create(options: {name?: string; initialState?: object; Action?: object; before?: (Reducer.Function | Reducer.WithPath | globalThis.Array<(Reducer.WithPath | Reducer.Function)>); after?: (Reducer.Function | Reducer.WithPath | globalThis.Array<(Reducer.WithPath | Reducer.Function)>)}): any;

		/**
		 * Create a single reducer from multiple reducers. Each reducer is an object consisting of a reduce function and a path. The paths are not allowed to overlap.
		 */
		function combine(reducers: globalThis.Array<Reducer.WithPath>): Reducer.Function;

	}

	/**
	 * Redwood icons
	 */
	enum RedwoodIcon {
		ICO_ACCOUNTS_PAYABLE,
		ICO_ADAPTER,
		ICO_ADD_COLUMN_ALT,
		ICO_ADD_CREATE_PAGE,
		ICO_ADD_EDIT_PAGE,
		ICO_ADD_LEVEL,
		ICO_ADD_NODE,
		ICO_ADD_ROW,
		ICO_ANGLE,
		ICO_ARROW_CIRCLE_DOWN,
		ICO_ARROW_CIRCLE_UP,
		ICO_ARROW_DOWN,
		ICO_ARROW_DOWN_RIGHT,
		ICO_ARROW_LEFT,
		ICO_ARROW_RIGHT,
		ICO_ARROW_UP,
		ICO_ARROW_UP_RIGHT,
		ICO_BACK_PARENT,
		ICO_BANK,
		ICO_BAR_CHART,
		ICO_BINARY,
		ICO_BUILD,
		ICO_BUILDER,
		ICO_CALCULATOR,
		ICO_CALENDAR,
		ICO_CALENDAR_ADD,
		ICO_CALL,
		ICO_CAMERA,
		ICO_CANCEL,
		ICO_CARET_DOWN,
		ICO_CARET_UP,
		ICO_CASH_IN_TRANSIT,
		ICO_CC_CARD,
		ICO_CELL_PHONE,
		ICO_CHART_AREA,
		ICO_CHART_AREA_STACK,
		ICO_CHART_AUTO,
		ICO_CHART_AXIS_X,
		ICO_CHART_AXIS_Y,
		ICO_CHART_BAR_H,
		ICO_CHART_BAR_STACKED_100_V,
		ICO_CHART_BAR_STACKED_H,
		ICO_CHART_BAR_V,
		ICO_CHART_BUBBLE,
		ICO_CHART_GAUGE_ODOMETER,
		ICO_CHART_LINE,
		ICO_CHECK,
		ICO_CHECKBOX_CHECKED,
		ICO_CHECKBOX_PARTIAL,
		ICO_CHEVRON_DOUBLE_DOWN,
		ICO_CHEVRON_DOUBLE_LEFT,
		ICO_CHEVRON_DOUBLE_RIGHT,
		ICO_CHEVRON_DOUBLE_UP,
		ICO_CHEVRON_DOWN,
		ICO_CHEVRON_DOWN_END,
		ICO_CHEVRON_LEFT,
		ICO_CHEVRON_LEFT_END,
		ICO_CHEVRON_RIGHT,
		ICO_CHEVRON_RIGHT_END,
		ICO_CHEVRON_UP,
		ICO_CHEVRON_UP_END,
		ICO_CIRCLE,
		ICO_CIRCLE_S,
		ICO_CIRCULAR_PROGRESS,
		ICO_CLOCK,
		ICO_CLOCK_HISTORY,
		ICO_CLOSE,
		ICO_CLOSE_CIRCLE_S,
		ICO_COLLAPSE,
		ICO_COLLECTION_ALT,
		ICO_COLOR_PALETTE,
		ICO_COLUMNS,
		ICO_COMMENT_ADD,
		ICO_CONTACT_CHECK,
		ICO_CONTACT_GROUP,
		ICO_COPY,
		ICO_CURRENCY_MONEY,
		ICO_DATABASE,
		ICO_DATE,
		ICO_DATE_RANGE_INPUT,
		ICO_DIAMOND_8,
		ICO_DIVIDER_ROWS,
		ICO_DOCUMENTS,
		ICO_DOCUMENT_LINK,
		ICO_DOWNLOAD,
		ICO_DO_NOT_ENTER,
		ICO_DRAG_CORNER,
		ICO_DRAG_H,
		ICO_DRAG_HANDLE,
		ICO_DRAG_INDICATOR,
		ICO_DYNAMIC_CONFIG,
		ICO_DYNAMIC_TABLE,
		ICO_EDIT,
		ICO_EDIT_COLUMN,
		ICO_EDIT_INLINE,
		ICO_EDUCATION,
		ICO_EMAIL,
		ICO_EMOJI_MEH,
		ICO_EMOJI_SAD,
		ICO_EMOJI_SMILE,
		ICO_EMPLOYEE,
		ICO_EMPLOYEE_STATUS,
		ICO_END_NODE,
		ICO_ENTER_IDENTIFIER,
		ICO_ERROR,
		ICO_EVENT_AVAILABLE,
		ICO_EXPAND,
		ICO_EXPORT,
		ICO_EXTENDABLE_ITEM,
		ICO_FILE,
		ICO_FILE_CSV,
		ICO_FILE_EXCEL,
		ICO_FILE_PDF,
		ICO_FILTER_ALT,
		ICO_FIT_HEIGHT,
		ICO_FIT_SIZE,
		ICO_FIT_WIDTH,
		ICO_FLAGGED,
		ICO_FOLDER,
		ICO_FUNCTION,
		ICO_FUNCTION_ALT,
		ICO_FUTURE_READY,
		ICO_GRID_CONTAINER_H,
		ICO_HAPPY_FILLED,
		ICO_HASHTAG,
		ICO_HEART,
		ICO_HEART_S,
		ICO_HELP,
		ICO_HIGHLIGHT_COLOR,
		ICO_HIGHLIGHT_COLUMNS,
		ICO_HIGHLIGHT_ROWS,
		ICO_HOME,
		ICO_INFORMATION,
		ICO_INPUT_NUMBER,
		ICO_INVENTORY_COST_REVALUATION,
		ICO_ITEM_OVERVIEW,
		ICO_KEY,
		ICO_LAYOUT_1_COL_2_ROW,
		ICO_LINK,
		ICO_LOCATION_PIN,
		ICO_LOCK,
		ICO_LOG_IN,
		ICO_LOG_OUT,
		ICO_MALE,
		ICO_MEMO_PRESENT,
		ICO_MEMO_PRESENT_1,
		ICO_MEMO_PRESENT_2,
		ICO_MENU_OVERFLOW,
		ICO_MESSAGE_ALT,
		ICO_MINUS,
		ICO_MINUS_SQUARE,
		ICO_MOVE_TOGETHER,
		ICO_NETWORKING,
		ICO_NEUTRAL_FILLED,
		ICO_NOTE,
		ICO_NOTES_ADD,
		ICO_NULL_VALUE,
		ICO_OVERFLOW_H,
		ICO_OVERFLOW_VERT,
		ICO_PAGINATION,
		ICO_PARTNERS,
		ICO_PIN,
		ICO_PIN_COLUMNS,
		ICO_PIN_ROWS,
		ICO_PLAYLIST_ADD_CHECK,
		ICO_PLUS,
		ICO_PLUS_SQUARE,
		ICO_POLYMORPH,
		ICO_PRINT,
		ICO_PRODUCT_CATEGORY,
		ICO_PURCHASE_ORDER,
		ICO_PUZZLE,
		ICO_RANK_1_FILLED,
		ICO_RANK_1_OUTLINE,
		ICO_RANK_2_FILLED,
		ICO_RANK_2_OUTLINE,
		ICO_RANK_3_FILLED,
		ICO_RANK_3_OUTLINE,
		ICO_RANK_4_FILLED,
		ICO_RANK_4_OUTLINE,
		ICO_RANK_5_FILLED,
		ICO_RANK_5_OUTLINE,
		ICO_REDO,
		ICO_REFRESH,
		ICO_REMOVE_COLUMN,
		ICO_REMOVE_ROW,
		ICO_RESIZE,
		ICO_ROWS,
		ICO_SAVE,
		ICO_SAVE_AS,
		ICO_SEARCH,
		ICO_SEPARATOR,
		ICO_SET_DATA,
		ICO_SHARE,
		ICO_SHUFFLE,
		ICO_SLIDERS,
		ICO_SORT,
		ICO_SORT_RELEVANCE_HIGH,
		ICO_SORT_RELEVANCE_LOW,
		ICO_SPELL_CHECK,
		ICO_SQUARE,
		ICO_STAR,
		ICO_STAR_FULL,
		ICO_STOPWATCH,
		ICO_SUBDIRECTORY_ARROW_UP_RIGHT,
		ICO_SUBSIDIARY,
		ICO_SUCCESS,
		ICO_SWITCH_OFF,
		ICO_SYNC,
		ICO_TABLES,
		ICO_TABLES_PIVOT,
		ICO_TAG,
		ICO_TEXT,
		ICO_THEMATIC_MAP,
		ICO_THUMBS_DOWN,
		ICO_THUMBS_UP,
		ICO_TIME_OFF,
		ICO_TRANSFER_MONEY,
		ICO_TRASH,
		ICO_UNDO_ALT,
		ICO_UNGROUP,
		ICO_UNHAPPY_FILLED,
		ICO_UNLINK,
		ICO_UPLOAD,
		ICO_VERYHAPPY_FILLED,
		ICO_VERYUNHAPPY_FILLED,
		ICO_VIEW,
		ICO_VIEW_HIDE,
		ICO_VIEW_PARTIAL,
		ICO_WARNING,
		ICO_WRAP_LINE,
		ICO_WRENCH,
		ICO_ZOOM_IN,
		ICO_ZOOM_OUT,
	}

	/**
	 * Redwood icon mapping
	 */
	enum RedwoodSystemIconMapping {
	}

	/**
	 * Redwood theme
	 */
	export class RedwoodTheme extends Theme {
		/**
		 * Constructs RedwoodTheme
		 */
		constructor(options?: RedwoodTheme.Options);

	}

	export namespace RedwoodTheme {
		interface Options extends Theme.Options {
		}

		export import Icon = Self.RedwoodIcon;

		export import SystemIconMapping = Self.RedwoodSystemIconMapping;

	}

	/**
	 * Redwood tokens
	 */
	enum RedwoodToken {
	}

	/**
	 * Class descriptor
	 */
	class ReflectionClassDescriptor {
	}

	namespace ReflectionClassDescriptor {
	}

	export enum RefreshedColorSet {
	}

	/**
	 * Refreshed icons
	 */
	enum RefreshedIcon {
		ACTUAL_SIZE,
		ADD,
		ADD_COLUMN,
		ADD_COMMENT,
		ADD_LEVEL,
		ADD_MENU,
		ADD_NODE,
		ADD_RECORD,
		ADD_ROW,
		AI_SPARKLE,
		ALERT,
		API,
		APPLICATION,
		APPOINTMENT,
		ARROW_DIAGONAL_DOWN,
		ARROW_DIAGONAL_UP,
		ARROW_DOWN,
		ARROW_LEFT,
		ARROW_PARENT,
		ARROW_RIGHT,
		ARROW_UP,
		ATTRIBUTES,
		AUTO_CALCULATE,
		AVAILABLE,
		BANK_ACCOUNT,
		BLANK,
		BLOCKED,
		BLOCKER,
		BREAK_LINK,
		BUILDER,
		CALCULATE_DURATION,
		CALENDAR,
		CALL,
		CARET_DOWN_REDWOOD,
		CASH_IN_TRANSIT,
		CHART,
		CHART_AREA,
		CHART_AREA_STACKED,
		CHART_BAR,
		CHART_BAR_STACKED,
		CHART_BUBBLE,
		CHART_COLUMN,
		CHART_COLUMN_STACKED,
		CHART_LINE,
		CHECK,
		CHECKBOX_CHECKED,
		CHECKBOX_PARTIAL,
		CHECK_SMALL,
		CHECK_SPELLING,
		CHEVRON_DOWN,
		CHEVRON_LEFT,
		CHEVRON_RIGHT,
		CHEVRON_UP,
		CLOCK,
		CLOSE,
		COLLAPSE,
		COLLECTION,
		COLOR_PALETTE,
		COMPONENTS,
		COMPRESS,
		CONDITIONAL_DATASET,
		CONDITIONAL_FORMATTING,
		CONSOLIDATE,
		CONTEXTUAL_MENU,
		COPY,
		CREDENTIALS,
		CREDIT_CARD,
		CUSTOM,
		DATASET,
		DATE,
		DELETE,
		DELTA_LOGO,
		DEPARTMENTS,
		DISMISS,
		DOCUMENTS,
		DOUBLE_CHEVRON_DOWN,
		DOUBLE_CHEVRON_LEFT,
		DOUBLE_CHEVRON_RIGHT,
		DOUBLE_CHEVRON_UP,
		DOWNLOAD_DOCUMENT,
		DRAGHANDLE,
		DRAGHANDLE_SMALL,
		DROPDOWN,
		DROPDOWN_UP,
		EDIT,
		EDIT_LOG,
		EMAIL,
		EMPLOYEE,
		EMPLOYEE_STATUS,
		END_DATE,
		END_NODE,
		ENTER_IDENTIFIER,
		ERROR,
		EXPAND,
		EXPORT,
		EXTEND_HANDLE,
		FAILED,
		FEEDBACK_NEGATIVE,
		FEEDBACK_POSITIVE,
		FILE_CSV,
		FILE_EXCEL,
		FILE_PDF,
		FILTER,
		FILTERS_LEFT,
		FILTERS_TOP,
		FLAG,
		FOLDER,
		FORMAT,
		FORMAT_NUMBER,
		FORMAT_TABLE,
		FORMAT_TEXT,
		FORMULA,
		GROUPS,
		HAMBURGER,
		HAPPY_FILLED,
		HAPPY_OUTLINE,
		HEART_FILLED,
		HEART_OUTLINE,
		HEIGHT,
		HELP,
		HIDE,
		HIDE_FILTERS,
		HIERARCHICAL,
		HIERARCHY,
		HIGHLIGHT,
		HIGHLIGHT_COLUMNS,
		HIGHLIGHT_ROWS,
		HISTORY,
		HOME,
		INDICATOR_BOTTOM,
		INDICATOR_DOWN,
		INDICATOR_UP,
		INFO,
		INSERT,
		INSIGHT,
		INVENTORY,
		JOIN_DOCUMENT,
		LINK,
		LIST,
		LOADING,
		LOCALIZE,
		LOCK,
		LOCKED_TASK,
		MANUFACTURING,
		MAP,
		MASTER_DETAIL,
		MAXIMIZE,
		MEMO_ADD,
		MEMO_HOVER,
		MEMO_PRESENT,
		MESSAGE,
		MINIMIZE,
		MINI_MAP,
		MINUS,
		MOBILE,
		MONEY,
		MOVE_BOTTOM,
		MOVE_DOWN,
		MOVE_FIRST,
		MOVE_LAST,
		MOVE_LEFT,
		MOVE_RIGHT,
		MOVE_TOGETHER,
		MOVE_TOP,
		MOVE_UP,
		NEUTRAL_FILLED,
		NEUTRAL_OUTLINE,
		NOTE,
		NULL_VALUE,
		NUMBERS,
		NUMERIC,
		OPEN_NEW,
		OVERFLOW,
		OVERVIEW,
		PAGINATION,
		PARENT_RECORD,
		PARTNERS,
		PAYABLES,
		PERFORMANCE,
		PERSON,
		PIN,
		PIN_COLUMNS,
		PIN_ROWS,
		PIVOT_TABLE,
		POLYMORPH,
		PREVIEW,
		PRINT,
		PRODUCT_CATEGORY,
		PURCHASE,
		RADIUS,
		RANKING_FILLED,
		RANKING_OUTLINE,
		RANK_1_FILLED,
		RANK_1_OUTLINE,
		RANK_2_FILLED,
		RANK_2_OUTLINE,
		RANK_3_FILLED,
		RANK_3_OUTLINE,
		RANK_4_FILLED,
		RANK_4_OUTLINE,
		RANK_5_FILLED,
		RANK_5_OUTLINE,
		RECORD,
		REDO,
		REFRESH,
		REJECTED,
		REMOVE_COLUMN,
		REMOVE_ROW,
		RESIZE,
		ROLES,
		SAVE,
		SAVE_AS,
		SCALE,
		SCHEDULE,
		SEARCH,
		SEPARATOR,
		SETTINGS,
		SHAPE_DIAMOND,
		SHARE,
		SNAPSHOT,
		SORT,
		SORT_ASCENDING,
		SORT_DESCENDING,
		SPINNER,
		START_DATE,
		STAR_FILLED,
		STAR_OUTLINE,
		STATUS_SUCCESS,
		STATUS_WARNING,
		SUBSIDIARIES,
		SUM,
		SUMMARIZE,
		SWITCH,
		TABLE_COLUMNS,
		TABLE_ROWS,
		TABLE_VALUES,
		TEXT,
		TIMER,
		TIME_OFF,
		TRANSPOSE,
		UNDO,
		UNGROUP,
		UNHAPPY_FILLED,
		UNHAPPY_OUTLINE,
		UNIVERSITY,
		UNKNOWN,
		UPLOAD_DOCUMENT,
		VERY_HAPPY_FILLED,
		VERY_HAPPY_OUTLINE,
		VERY_UNHAPPY_FILLED,
		VERY_UNHAPPY_OUTLINE,
		VIEW_BY_DATE,
		VIEW_PARENT_RECORD,
		VIEW_PARTIAL,
		VIEW_SHOW,
		WIDTH,
		WRAP_LINE,
		XAXIS,
		YAXIS,
		ZOOM_FIT,
		ZOOM_IN,
		ZOOM_OUT,
	}

	/**
	 * Refreshed theme
	 */
	export class RefreshedTheme extends Theme {
		/**
		 * Constructs RefreshedTheme
		 */
		constructor(options?: RefreshedTheme.Options);

		/**
		 * Gets the active color set
		 */
		colorSet: RefreshedTheme.ColorSet;

		/**
		 * Get memoized RefreshedTheme instance for given color set
		 */
		static forColorSet(colorSet: RefreshedTheme.ColorSet): RefreshedTheme;

		/**
		 * List of available color set IDs
		 */
		static colorSets: globalThis.Array<number>;

	}

	export namespace RefreshedTheme {
		interface Options extends Theme.Options {
			colorSet?: RefreshedTheme.ColorSet;

		}

		interface ColorSetDefinition {
			primary: string;

			secondaryLight: string;

			secondaryDark: string;

		}

		export import Icon = Self.RefreshedIcon;

		export import ColorSet = Self.RefreshedColorSet;

	}

	/**
	 * Refreshed tokens
	 */
	enum RefreshedToken {
		colorWhite,
		colorBlack,
	}

	enum ReleaseVersion {
		R18_1,
		R18_2,
		R19_1,
		R19_2,
		R20_1,
		R20_2,
		R21_1,
		R21_2,
		R22_1,
		R22_2,
		R23_1,
		R23_2,
		R24_1,
		R24_2,
		R25_1,
		R25_2,
		current,
		incoming,
	}

	/**
	 * Require utilities
	 */
	export namespace Require {
		/**
		 * Require a module
		 */
		function module(module: string): globalThis.Promise<any>;

		/**
		 * Require multiple modules
		 */
		function modules(modules: globalThis.Array<string>): globalThis.Promise<any>;

	}

	/**
	 * Resize observer
	 */
	export class ResizeObserver {
		/**
		 * Constructor
		 */
		constructor(callback: ResizeObserver.ResizeCallback, options?: {box?: ResizeObserver.Box});

		/**
		 * Current target
		 */
		target: (Component | Element | null);

		/**
		 * Get the last observed size
		 */
		lastObservedSize: {width: number; height: number};

		/**
		 * Start observing a target
		 */
		connect(target: (Component | Element)): void;

		/**
		 * Stop observing the current target
		 */
		disconnect(): void;

		static NoSize: ResizeObserver.Size;

	}

	export namespace ResizeObserver {
		interface Size {
			width: number;

			height: number;

		}

		interface ResizeArgs {
			size: ResizeObserver.Size;

			previousSize: ResizeObserver.Size;

		}

		type ResizeCallback = (args: ResizeObserver.ResizeArgs) => void;

		enum Box {
			BORDER,
			CONTENT,
		}

	}

	/**
	 * Route is defined by URL pattern which matches one or more URLs. It can accept handler function to be called when its URL is matched.
	 * @deprecated 
	 */
	export class Route {
		/**
		 * Constructs Route
		 */
		constructor(options: Route.Options);

		/**
		 * Route pattern
		 */
		pattern: string;

		/**
		 * Constructs URL string based on given parameters.
		 */
		constructUrl(params?: object): string;

		/**
		 * Returns route parameters if the URL matches the route, null otherwise.
		 */
		recognizeUrl(url: string): (object | null);

		/**
		 * Calls the route handler.
		 */
		handle(args: Route.HandlerArgs): void;

		/**
		 * Create a parametrized route
		 */
		withParameters(parameters: object): Route.State;

		/**
		 * Creates a new Route.
		 */
		static create(url: string, handler?: Route.Handler): Route;

	}

	export namespace Route {
		interface Options {
			url?: string;

			handler: Route.Handler;

		}

		/**
		 * Route handler is called when the route is activated
		 */
		type Handler = (args: Route.HandlerArgs) => void;

		interface State {
			parameters: object;

			route: Route;

		}

		interface HandlerArgs {
			context: Context;

			oldParams: object;

			oldRoute: (Route | null);

			params: object;

			route: Route;

			router: Router;

		}

	}

	/**
	 * Routed message
	 */
	export class RoutedMessage {
		/**
		 * Constructs RoutedMessage
		 */
		constructor(options: RoutedMessage.Options);

		/**
		 * Unique identifier of message's type
		 */
		code: MessageCode;

		/**
		 * Object that is target of this message
		 */
		recipient: (Component | null);

		/**
		 * Create filter function according to supported options
		 */
		static createFilter(filter: (Record<RoutedMessage.FilterCode, RoutedMessage.Handler> | RoutedMessage.Filter)): RoutedMessage.Filter;

		/**
		 * Dispatch message along a chain of message handlers
		 */
		static dispatchChain(chain: globalThis.Array<RoutedMessage.Filter>, next: RoutedMessage.Handler, message: RoutedMessage, result: RoutedMessage.Result): void;

	}

	export namespace RoutedMessage {
		interface Result {
			handled: boolean;

			executeDefault: boolean;

			allowDrag: boolean;

			stopPropagation: boolean;

		}

		type Handler = (message: RoutedMessage, result: RoutedMessage.Result) => void;

		type Filter = (next: RoutedMessage.Handler, message: RoutedMessage, result: RoutedMessage.Result) => void;

		interface Options {
			code: MessageCode;

			recipient: MessageHandler;

		}

		export import MessageCode = Self.MessageCode;

		export import FilterCode = Self.FilterCode;

	}

	/**
	 * Router provides URL handling in single-page applications.
	 */
	export class Router {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: EventSource.EventName, listener: EventSource.Listener): EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: EventSource.EventName): void;

		/**
		 * Constructs Router
		 */
		constructor(options: Router.Options);

		routes: globalThis.Array<Route>;

		context: (Context | null);

		activeRoute: (Route | null);

		activeParams: object;

		activeUrl: string;

		/**
		 * Navigates to a route or URL string.
		 */
		routeTo(route?: (Route | string), params?: object, args?: {replace?: boolean}): void;

		/**
		 * Redirects to a route or URL (replacing the current URL in history).
		 */
		redirectTo(route?: (Route | string), params?: object): void;

		/**
		 * Registers a new route.
		 */
		addRoute(route: Route): void;

		/**
		 * Unregisters route.
		 */
		removeRoute(route: Route): boolean;

		/**
		 * Starts listening on URL changes.
		 */
		listen(): void;

		/**
		 * Stops listening on URL changes.
		 */
		stop(): void;

		/**
		 * Navigates back in history.
		 */
		goBack(): void;

		/**
		 * Navigates forward in history.
		 */
		goForward(): void;

		/**
		 * Creates a new Route.
		 */
		static createRoute(url: string, handler?: Route.Handler): Route;

		static Event: Router.EventTypes;

	}

	export namespace Router {
		interface Options {
			routes: (globalThis.Array<Route> | object);

			context?: Context;

			on?: EventSource.ListenerMap;

		}

		interface EventTypes {
			ROUTE_RECOGNIZED: string;

			ROUTE_CHANGED: string;

			ROUTE_NOT_FOUND: string;

		}

		export import Path = Self.PathRouter;

		export import Hash = Self.HashRouter;

		export import Param = Self.ParamRouter;

		export import Routes = Self.Routes;

		export import Route = Self.JsxRoute;

	}

	/**
	 * Router location
	 */
	export class RouterLocation {
		/**
		 * Constructor
		 */
		constructor(options: RouterLocation.Options);

		/**
		 * Get current location
		 */
		location: string;

		/**
		 * Get the search part of the URL
		 */
		search: string;

		/**
		 * Get the hash part of the URL
		 */
		hash: string;

		/**
		 * Check if this location matches a given route
		 */
		matches(route: string, options?: {exact?: boolean}): boolean;

	}

	export namespace RouterLocation {
		interface Options {
			location: string;

			search: string;

			hash: string;

		}

	}

	/**
	 * Routes component
	 */
	export function Routes(props?: object): JSX.Element;

	/**
	 * Scroll controller
	 */
	export class ScrollController implements EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: EventSource.EventName, listener: EventSource.Listener): EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: EventSource.EventName): void;

		/**
		 * Constructs ScrollController
		 */
		constructor(options: {on?: EventSource.ListenerMap});

		/**
		 * Gets the size of viewport
		 */
		viewportSize: Scrollable.Size;

		/**
		 * Gets the size of the content inside viewport
		 */
		contentSize: Scrollable.Size;

		/**
		 * Gets the scroll offset
		 */
		scrollOffset: Scrollable.Offset;

		/**
		 * Scrollability
		 */
		scrollability: Scrollable.Scrollability;

		/**
		 * Scrollability
		 */
		scrollabilityOffset: Scrollable.Scrollability;

		/**
		 * Check if options can change current scroll offset
		 */
		canScroll(options: ScrollController.ScrollOptions): boolean;

		/**
		 * Fires scroll if the offset is changed
		 */
		scroll(options: ScrollController.ScrollOptions): boolean;

		/**
		 * Scroll to the top
		 */
		scrollToTop(options?: {reason?: any}): boolean;

		/**
		 * Scroll to the bottom
		 */
		scrollToBottom(options?: {reason?: any}): boolean;

		/**
		 * Resize the viewport or content
		 */
		resize(options: ScrollController.ResizeOptions): boolean;

		/**
		 * Bind scrollable
		 */
		bind(scrollable: Scrollable, options: object): {remove: () => void};

		/**
		 * Unbind scrollable
		 */
		unbind(scrollable: Scrollable): void;

		/**
		 * Dispose the scroll controller
		 */
		dispose(): void;

		static Event: ScrollController.EventTypes;

	}

	export namespace ScrollController {
		interface EventTypes {
			SCROLL: string;

			RESIZE: string;

			SCROLLABILITY_CHANGED: string;

		}

		interface ResizeOptions {
			viewportSize?: {x: (number | null); y: (number | null)};

			contentSize?: {x: (number | null); y: (number | null)};

			reason?: string;

		}

		interface ScrollOffsetChange {
			x?: number;

			y?: number;

			rx?: number;

			ry?: number;

			dx?: number;

			dy?: number;

		}

		interface ScrollOptions {
			offset: ScrollController.ScrollOffsetChange;

			reason: string;

		}

		/**
		 * Scroll binding function
		 */
		enum ScrollBind {
			NoSync,
			HorizontalSync,
			VerticalSync,
		}

		/**
		 * Size binding function
		 */
		enum SizeBind {
			NoSync,
			HorizontalSync,
			VerticalSync,
		}

	}

	export class ScrollObserver implements MessageHandler {
		/**
		 * Constructs ScrollObserver
		 */
		constructor();

		/**
		 * Processes message
		 */
		processMessage(next: RoutedMessage.Handler, message: RoutedMessage, result: RoutedMessage.Result): void;

		/**
		 * Registers scroll handler on given element
		 */
		register(element: HTMLElement, handler: () => void): void;

		/**
		 * Unregisters scroll handler from given element
		 */
		unregister(element: HTMLElement): void;

	}

	export namespace ScrollObserver {
	}

	export interface Scrollable {
		/**
		 * Scroll offset
		 */
		scrollOffset: Scrollable.Offset;

		/**
		 * Viewport size
		 */
		viewportSize: Scrollable.Size;

		/**
		 * Content size
		 */
		contentSize: Scrollable.Size;

		/**
		 * Resizes
		 */
		resize(options: object): void;

		/**
		 * Scrolls
		 */
		scroll(options: object): void;

	}

	export namespace Scrollable {
		interface EventTypes {
			RESIZE: string;

			SCROLL: string;

			SCROLLABILITY_CHANGED: string;

		}

		interface Offset {
			x: number;

			y: number;

		}

		interface Size {
			x: number;

			y: number;

		}

		interface Scrollability {
			up: boolean;

			down: boolean;

			left: boolean;

			right: boolean;

			any: boolean;

		}

		interface ScrollabilityOffset {
			up: number;

			down: number;

			left: number;

			right: number;

			any: number;

		}

		const Event: Scrollable.EventTypes;

	}

	/**
	 * Set class
	 */
	export class Set {
		/**
		 * Constructor
		 */
		constructor(iterable?: Iterable<any>);

		/**
		 * Get iterator
		 */
		[Symbol.iterator](): any;

		/**
		 * Get the number of set entries
		 */
		size: number;

		/**
		 * Is the set empty
		 */
		empty: boolean;

		/**
		 * Get a list of set values in insertion order
		 */
		values: globalThis.Array<any>;

		/**
		 * Add a value to the set
		 */
		add(value: any): globalThis.Set<any>;

		/**
		 * Add all values from an array into the set
		 */
		addAll(values: globalThis.Array<any>): globalThis.Set<any>;

		/**
		 * Remove a value from the set
		 */
		delete(value: any): globalThis.Set<any>;

		/**
		 * Removes all values in the array from the set
		 */
		deleteAll(values: globalThis.Array<any>): globalThis.Set<any>;

		/**
		 * Toggle item in the set
		 */
		toggle(item: any, add?: boolean): globalThis.Set<any>;

		/**
		 * Toggle item in the set
		 */
		toggleAll(items: globalThis.Array<any>, add?: boolean): globalThis.Set<any>;

		/**
		 * Check if the set contains a particular value
		 */
		has(value: any): boolean;

		/**
		 * Check if the set contains all values in the list
		 */
		hasAll(values: globalThis.Array<any>): boolean;

		/**
		 * Check if the set contains any value in the list
		 */
		hasAny(values: globalThis.Array<any>): boolean;

		/**
		 * Clear the set
		 */
		clear(): globalThis.Set<any>;

		/**
		 * Check that this set contains all values from the argument
		 */
		contains(set: globalThis.Set<any>): boolean;

		/**
		 * Checks that two sets contain the same values
		 */
		equals(set: globalThis.Set<any>): boolean;

		/**
		 * Returns a new set containing the same values as this set
		 */
		clone(): globalThis.Set<any>;

		/**
		 * Create a new set containing all values from this set and the set in arguments
		 */
		union(set: globalThis.Set<any>): globalThis.Set<any>;

		/**
		 * Add all values from the set into this set
		 */
		unionInplace(set: globalThis.Set<any>): globalThis.Set<any>;

		/**
		 * Create a new set containing all elements that are present in both sets
		 */
		intersect(set: globalThis.Set<any>): globalThis.Set<any>;

		/**
		 * Removes all values from the set which are not contained in the argument
		 */
		intersectInplace(set: globalThis.Set<any>): globalThis.Set<any>;

		/**
		 * Creates a new set that contains all values that are in this set but not in the argument
		 */
		subtract(set: globalThis.Set<any>): globalThis.Set<any>;

		/**
		 * Removes all values that are contained in the argument
		 */
		subtractInplace(set: globalThis.Set<any>): globalThis.Set<any>;

		/**
		 * Execute callback for every value in the set
		 */
		forEach(callback: (value: any, set: globalThis.Set<any>) => void, context?: any): void;

		/**
		 * Creates a new set containing values that match the predicate
		 */
		filter(predicate: (value: any) => boolean, context?: any): globalThis.Set<any>;

		/**
		 * Removes all values that do not match the predicate
		 */
		filterInplace(predicate: (value: any) => boolean, context?: any): globalThis.Set<any>;

		/**
		 * Maps set to another set
		 */
		map(transform: (value: any) => any, context?: any): globalThis.Set<any>;

		/**
		 * Check if there is a value in the set for which the predicate holds
		 */
		some(predicate: (value: any) => boolean, context?: any): boolean;

		/**
		 * Check if a predicate holds for all values in the set
		 */
		every(predicate: (value: any) => boolean, context?: any): boolean;

		/**
		 * Create a new set from a list of values
		 */
		static fromValues(...values: globalThis.Array<any>): globalThis.Set<any>;

		/**
		 * Create a new set from an array of values
		 */
		static fromArray(array: globalThis.Array<object>): globalThis.Set<any>;

	}

	export namespace Set {
	}

	export class SimpleLogFormatter extends LogFormatter {
		/**
		 * Constructs SimpleLogFormatter
		 */
		constructor();

	}

	export namespace SimpleLogFormatter {
	}

	/**
	 * Simple performance service
	 */
	export class SimplePerformance {
		/**
		 * Constructs SimplePerformance
		 */
		constructor();

		/**
		 * Performance data
		 */
		data: ArrayDataSource;

		/**
		 * Adds item
		 */
		addItem(name: string, value: any): void;

		/**
		 * Begins
		 */
		begin(clazz: any, bucket: string): void;

		/**
		 * Ends
		 */
		end(clazz: any, bucket: string): void;

	}

	export namespace SimplePerformance {
		/**
		 * SimplePerformance types
		 */
		enum Type {
			BEGIN,
			END,
		}

	}

	/**
	 * Stack trace
	 */
	export namespace StackTrace {
		/**
		 * Gets current call stack and turns it to an array
		 */
		function get(): globalThis.Array<any>;

	}

	/**
	 * Precomputed size index
	 */
	class StaticSizeIndex {
	}

	namespace StaticSizeIndex {
	}

	/**
	 * Class for Storage control - LocalStorage, SessionStorage. Supports expiration while using localStorage, sessionStorage doesn't need it if LocalStorage or SessionStorage is not supported, there is a simple object fallback as pageview related storage - not handy at all, but it does not crash JS at all
	 */
	class Storage {
		/**
		 * Constructs Storage
		 */
		constructor(options?: Storage.Options);

		/**
		 * select and returns requested Storage, if supported
		 */
		private _useStorage(): Storage;

		/**
		 * checks sessionStorage support by browser
		 */
		private _isSessionStorageSupported(): boolean;

		/**
		 * checks localStorage support by browser
		 */
		private _isLocalStorageSupported(): boolean;

		/**
		 * helper for updating "modified" timestamp of an item, affects only Storage.js items
		 */
		private _setLastUpdate(key: string): void;

		/**
		 * gets rid of expired items, performs during Storage initialization affects only keys with prefix of current Storage instance
		 */
		private _cleanup(): void;

		/**
		 * returns final key for storage (read/write) - based on settings.encode enabled or not
		 */
		private _getFinalKey(key: string): string;

		/**
		 * extract item's expiration
		 */
		private _getItemExpiration(key: string): number;

		/**
		 * Retrieves item from used storage and returns its value with fallback to values stored as plaintext
		 */
		getItem(key: string): (string | object);

		/**
		 * Stores item to used storage with its timestamp as lastUpdate - this is used for expirationDate
		 */
		setItem(key: string, value: (string | object), expireInDays?: number): void;

		/**
		 * Manually refreshes lastUpdate of desired item/s
		 */
		touchItems(keys: (string | globalThis.Array<any>)): void;

		/**
		 * Removes item from used storage
		 */
		removeItem(key: string): void;

		/**
		 * Storage key
		 */
		static StorageSource: string;

		/**
		 * Storage key prefix
		 */
		static StorageKeyPrefix: string;

	}

	namespace Storage {
		interface Options {
			type?: Storage.Type;

			keyPrefix?: string;

			encode?: boolean;

		}

		enum Type {
			SESSION,
			LOCAL,
		}

	}

	/**
	 * Fallback storage
	 */
	class StorageFallback {
		/**
		 * Constructs StorageFallback
		 */
		constructor();

		/**
		 * Stores item
		 */
		setItem(key: string, value: any): void;

		/**
		 * Gets item
		 */
		getItem(key: string): any;

		/**
		 * Removes item
		 */
		removeItem(key: string): void;

	}

	namespace StorageFallback {
	}

	/**
	 * Store
	 */
	export class Store<State = any> implements EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: EventSource.EventName, listener: EventSource.Listener): EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: EventSource.EventName): void;

		/**
		 * Constructor
		 */
		constructor(options?: Store.Options);

		/**
		 * Returns true if action dispatch is asynchronous
		 */
		async: boolean;

		/**
		 * Store state
		 */
		state: State;

		/**
		 * The store reducer
		 */
		reducer: Store.Reducer;

		/**
		 * Sets current state
		 */
		setState(state: State, options?: {action?: Store.Action}): void;

		/**
		 * Returns state's subtree at given path if the path is provided. Otherwise, returns whole state.
		 */
		getState(path?: globalThis.Array<string>): any;

		/**
		 * Subscribe to state changes
		 */
		subscribe(callback: (state: State, sender: Store) => void): () => void;

		/**
		 * Dispatches action on the current state.
		 */
		dispatch(action: (Store.Action | Store.ActionCreator)): globalThis.Promise<State>;

		/**
		 * Creates a store and optionally binds it to a presenter context
		 */
		static create(options: (Store.CreateOptions | Store.Reducer), context?: Context): Store;

		/**
		 * Store provider component
		 */
		static Provider(props: {store: Store; children?: VDom.Children}): JSX.Element;

		static Event: Store.EventTypes;

		/**
		 * Type of the initial action
		 */
		static INIT_ACTION_TYPE: string;

	}

	export namespace Store {
		interface Options {
			reducer?: Store.Reducer;

			state?: object;

			async?: boolean;

			on?: EventSource.ListenerMap;

		}

		interface Action<T = any> {
			type: (string | symbol);

			payload?: T;

		}

		type DispatchFunc = (action: (Store.Action | Store.ActionCreator)) => globalThis.Promise<any>;

		/**
		 * Reducer is a function mapping a state to a new state based on a given action
		 */
		type Reducer = (currentState: any, action: Store.Action) => any;

		interface CreateOptions {
			reducer: Store.Reducer;

			state?: object;

			onStateChanged?: (args: Store.StateChangeArgs, store: Store) => void;

			async?: boolean;

		}

		interface StateChangeArgs {
			oldState: any;

			currentState: any;

			action: Store.Action;

		}

		type ActionCreator = (dispatch: Store.DispatchFunc, getState: (path: globalThis.Array<string>) => any) => globalThis.Promise<any>;

		interface EventTypes {
			STATE_CHANGED: string;

		}

	}

	/**
	 * Utility functions for strings
	 */
	export namespace String {
		/**
		 * Check if string contains another string
		 */
		function contains(string: string, what: string, caseSensitive?: boolean): boolean;

		/**
		 * Compare strings lexicographically
		 */
		function compare(left: string, right: string, ascending?: boolean): number;

		/**
		 * Check whether string starts with a given prefix
		 */
		function startsWith(string: string, prefix: string, caseSensitive?: boolean): boolean;

		/**
		 * Check whether string ends with a given suffix
		 */
		function endsWith(string: string, suffix: string, caseSensitive?: boolean): boolean;

		/**
		 * Check whether string is an empty value
		 */
		function isEmpty(string: string): boolean;

		/**
		 * Insert a sub-string at a given position
		 */
		function insert(string: string, position: number, subString: string): void;

		/**
		 * Convert value to a string
		 */
		function of(value: any): string;

		/**
		 * Pad string from left with a given character
		 */
		function padLeft(string: string, padCharacter: string, length: number): string;

		/**
		 * Pad string from right with a given character
		 */
		function padRight(string: string, padCharacter: string, length: number): string;

		/**
		 * Repeat string multiple times
		 */
		function repeat(string: string, count: number): string;

		/**
		 * Convert the first letter of the string to upper case
		 */
		function capitalizeFirstLetter(string: string): string;

		/**
		 * Convert the first letter of the string to lower case
		 */
		function lowercaseFirstLetter(string: string): string;

		/**
		 * Convert string from camelCase to kebab-case
		 */
		function camelCaseToKebabCase(string: string, separateNumbers?: boolean): string;

		/**
		 * Converts kebab-case to camelCase
		 */
		function kebabCaseToCamelCase(string: string, capitalizeFirstLetter?: boolean): string;

		/**
		 * Converts snake_case to camelCase
		 */
		function snakeCaseToCamelCase(string: string, capitalizeFirstLetter?: boolean): string;

		/**
		 * Convert string from camelCase to snake_case
		 */
		function camelCaseToSnakeCase(string: string, separateNumbers?: boolean): string;

		/**
		 * Empty string constant
		 */
		const EMPTY: string;

	}

	/**
	 * Dynamic CSS rule
	 */
	export class Style {
		/**
		 * Constructor
		 * Do not use this constructor. Always use one of the available factory methods.
		 */
		constructor(id: string, rules: globalThis.Array<string>);

		/**
		 * Check if value is a Style
		 */
		static is(value: any): boolean;

		/**
		 * Create empty style
		 */
		static empty(): Style;

		/**
		 * Css style tagged template
		 */
		static of(definition: TemplateStringsArray, ...parameters: globalThis.Array<string>): Style;

		/**
		 * Css keyframes tagged template
		 */
		static keyframes(definition: TemplateStringsArray, ...parameters: globalThis.Array<string>): Style;

		/**
		 * Create a new Style from a simple key-value object
		 */
		static fromObject(keyValueObject: object, keyParser?: (key: string) => string): Style;

		/**
		 * Empty style
		 */
		static EMPTY: Style;

	}

	export namespace Style {
	}

	/**
	 * Dynamic style manager
	 */
	class StyleManager {
	}

	namespace StyleManager {
	}

	namespace SvgLoader {
	}

	export namespace SystemIcon {
		const ACTUAL_SIZE: ImageMetadata;

		const ADD: ImageMetadata;

		const ADD_COLUMN: ImageMetadata;

		const ADD_COMMENT: ImageMetadata;

		const ADD_LEVEL: ImageMetadata;

		const ADD_MENU: ImageMetadata;

		const ADD_NODE: ImageMetadata;

		const ADD_RECORD: ImageMetadata;

		const ADD_ROW: ImageMetadata;

		const AI_SPARKLE: ImageMetadata;

		const ALERT: ImageMetadata;

		const API: ImageMetadata;

		const APPLICATION: ImageMetadata;

		const APPOINTMENT: ImageMetadata;

		const ARROW_DIAGONAL_DOWN: ImageMetadata;

		const ARROW_DIAGONAL_UP: ImageMetadata;

		const ARROW_DOWN: ImageMetadata;

		const ARROW_LEFT: ImageMetadata;

		const ARROW_PARENT: ImageMetadata;

		const ARROW_RIGHT: ImageMetadata;

		const ARROW_UP: ImageMetadata;

		const ATTRIBUTES: ImageMetadata;

		const AUTO_CALCULATE: ImageMetadata;

		const AVAILABLE: ImageMetadata;

		const BANK_ACCOUNT: ImageMetadata;

		const BLANK: ImageMetadata;

		const BLOCKED: ImageMetadata;

		const BLOCKER: ImageMetadata;

		const BREAK_LINK: ImageMetadata;

		const BUILDER: ImageMetadata;

		const CALCULATE_DURATION: ImageMetadata;

		const CALENDAR: ImageMetadata;

		const CALL: ImageMetadata;

		const CASH_IN_TRANSIT: ImageMetadata;

		const CARET_DOWN_REDWOOD: ImageMetadata;

		const CHART: ImageMetadata;

		const CHART_AREA: ImageMetadata;

		const CHART_AREA_STACKED: ImageMetadata;

		const CHART_BAR: ImageMetadata;

		const CHART_BAR_STACKED: ImageMetadata;

		const CHART_BUBBLE: ImageMetadata;

		const CHART_COLUMN: ImageMetadata;

		const CHART_COLUMN_STACKED: ImageMetadata;

		const CHART_LINE: ImageMetadata;

		const CHECK: ImageMetadata;

		const CHECKBOX_CHECKED: ImageMetadata;

		const CHECKBOX_PARTIAL: ImageMetadata;

		const CHECK_SMALL: ImageMetadata;

		const CHECK_SPELLING: ImageMetadata;

		const CHEVRON_DOWN: ImageMetadata;

		const CHEVRON_LEFT: ImageMetadata;

		const CHEVRON_RIGHT: ImageMetadata;

		const CHEVRON_UP: ImageMetadata;

		const CLOCK: ImageMetadata;

		const CLOSE: ImageMetadata;

		const COLLAPSE: ImageMetadata;

		const COLLECTION: ImageMetadata;

		const COLOR_PALETTE: ImageMetadata;

		const COMPONENTS: ImageMetadata;

		const COMPRESS: ImageMetadata;

		const CONDITIONAL_DATASET: ImageMetadata;

		const CONDITIONAL_FORMATTING: ImageMetadata;

		const CONSOLIDATE: ImageMetadata;

		const CONTEXTUAL_MENU: ImageMetadata;

		const COPY: ImageMetadata;

		const CREDENTIALS: ImageMetadata;

		const CREDIT_CARD: ImageMetadata;

		const CUSTOM: ImageMetadata;

		const DATASET: ImageMetadata;

		const DATE: ImageMetadata;

		const DELETE: ImageMetadata;

		const DELTA_LOGO: ImageMetadata;

		const DEPARTMENTS: ImageMetadata;

		const DISMISS: ImageMetadata;

		const DOCUMENTS: ImageMetadata;

		const DOUBLE_CHEVRON_DOWN: ImageMetadata;

		const DOUBLE_CHEVRON_LEFT: ImageMetadata;

		const DOUBLE_CHEVRON_RIGHT: ImageMetadata;

		const DOUBLE_CHEVRON_UP: ImageMetadata;

		const DOWNLOAD_DOCUMENT: ImageMetadata;

		const DRAGHANDLE: ImageMetadata;

		const DRAGHANDLE_SMALL: ImageMetadata;

		const DROPDOWN: ImageMetadata;

		const DROPDOWN_UP: ImageMetadata;

		const EDIT: ImageMetadata;

		const EDIT_LOG: ImageMetadata;

		const EMAIL: ImageMetadata;

		const EMPLOYEE: ImageMetadata;

		const EMPLOYEE_STATUS: ImageMetadata;

		const END_DATE: ImageMetadata;

		const END_NODE: ImageMetadata;

		const ENTER_IDENTIFIER: ImageMetadata;

		const ERROR: ImageMetadata;

		const EXPAND: ImageMetadata;

		const EXPORT: ImageMetadata;

		const EXTEND_HANDLE: ImageMetadata;

		const FAILED: ImageMetadata;

		const FEEDBACK_NEGATIVE: ImageMetadata;

		const FEEDBACK_POSITIVE: ImageMetadata;

		const FILE_CSV: ImageMetadata;

		const FILE_EXCEL: ImageMetadata;

		const FILE_PDF: ImageMetadata;

		const FILTER: ImageMetadata;

		const FILTERS_LEFT: ImageMetadata;

		const FILTERS_TOP: ImageMetadata;

		const FLAG: ImageMetadata;

		const FOLDER: ImageMetadata;

		const FORMAT: ImageMetadata;

		const FORMAT_NUMBER: ImageMetadata;

		const FORMAT_TABLE: ImageMetadata;

		const FORMAT_TEXT: ImageMetadata;

		const FORMULA: ImageMetadata;

		const GROUPS: ImageMetadata;

		const HAMBURGER: ImageMetadata;

		const HAPPY_FILLED: ImageMetadata;

		const HAPPY_OUTLINE: ImageMetadata;

		const HEART_FILLED: ImageMetadata;

		const HEART_OUTLINE: ImageMetadata;

		const HEIGHT: ImageMetadata;

		const HELP: ImageMetadata;

		const HIDE: ImageMetadata;

		const HIDE_FILTERS: ImageMetadata;

		const HIERARCHICAL: ImageMetadata;

		const HIERARCHY: ImageMetadata;

		const HIGHLIGHT: ImageMetadata;

		const HIGHLIGHT_COLUMNS: ImageMetadata;

		const HIGHLIGHT_ROWS: ImageMetadata;

		const HISTORY: ImageMetadata;

		const HOME: ImageMetadata;

		const INDICATOR_BOTTOM: ImageMetadata;

		const INDICATOR_DOWN: ImageMetadata;

		const INDICATOR_UP: ImageMetadata;

		const INFO: ImageMetadata;

		const INSERT: ImageMetadata;

		const INSIGHT: ImageMetadata;

		const INVENTORY: ImageMetadata;

		const JOIN_DOCUMENT: ImageMetadata;

		const LINK: ImageMetadata;

		const LIST: ImageMetadata;

		const LOADING: ImageMetadata;

		const LOCALIZE: ImageMetadata;

		const LOCK: ImageMetadata;

		const LOCKED_TASK: ImageMetadata;

		const MANUFACTURING: ImageMetadata;

		const MAP: ImageMetadata;

		const MASTER_DETAIL: ImageMetadata;

		const MAXIMIZE: ImageMetadata;

		const MEMO_ADD: ImageMetadata;

		const MEMO_HOVER: ImageMetadata;

		const MEMO_PRESENT: ImageMetadata;

		const MESSAGE: ImageMetadata;

		const MINIMIZE: ImageMetadata;

		const MINI_MAP: ImageMetadata;

		const MINUS: ImageMetadata;

		const MOBILE: ImageMetadata;

		const MONEY: ImageMetadata;

		const MOVE_BOTTOM: ImageMetadata;

		const MOVE_DOWN: ImageMetadata;

		const MOVE_FIRST: ImageMetadata;

		const MOVE_LAST: ImageMetadata;

		const MOVE_LEFT: ImageMetadata;

		const MOVE_RIGHT: ImageMetadata;

		const MOVE_TOGETHER: ImageMetadata;

		const MOVE_TOP: ImageMetadata;

		const MOVE_UP: ImageMetadata;

		const NEUTRAL_FILLED: ImageMetadata;

		const NEUTRAL_OUTLINE: ImageMetadata;

		const NOTE: ImageMetadata;

		const NULL_VALUE: ImageMetadata;

		const NUMBERS: ImageMetadata;

		const NUMERIC: ImageMetadata;

		const OPEN_NEW: ImageMetadata;

		const OVERFLOW: ImageMetadata;

		const OVERVIEW: ImageMetadata;

		const PAGINATION: ImageMetadata;

		const PARENT_RECORD: ImageMetadata;

		const PARTNERS: ImageMetadata;

		const PAYABLES: ImageMetadata;

		const PERFORMANCE: ImageMetadata;

		const PERSON: ImageMetadata;

		const PIN: ImageMetadata;

		const PIN_COLUMNS: ImageMetadata;

		const PIN_ROWS: ImageMetadata;

		const PIVOT_TABLE: ImageMetadata;

		const POLYMORPH: ImageMetadata;

		const PREVIEW: ImageMetadata;

		const PRINT: ImageMetadata;

		const PRODUCT_CATEGORY: ImageMetadata;

		const PURCHASE: ImageMetadata;

		const RADIUS: ImageMetadata;

		const RANKING_FILLED: ImageMetadata;

		const RANKING_OUTLINE: ImageMetadata;

		const RANK_1_FILLED: ImageMetadata;

		const RANK_1_OUTLINE: ImageMetadata;

		const RANK_2_FILLED: ImageMetadata;

		const RANK_2_OUTLINE: ImageMetadata;

		const RANK_3_FILLED: ImageMetadata;

		const RANK_3_OUTLINE: ImageMetadata;

		const RANK_4_FILLED: ImageMetadata;

		const RANK_4_OUTLINE: ImageMetadata;

		const RANK_5_FILLED: ImageMetadata;

		const RANK_5_OUTLINE: ImageMetadata;

		const RECORD: ImageMetadata;

		const REDO: ImageMetadata;

		const REFRESH: ImageMetadata;

		const REJECTED: ImageMetadata;

		const REMOVE_COLUMN: ImageMetadata;

		const REMOVE_ROW: ImageMetadata;

		const RESIZE: ImageMetadata;

		const ROLES: ImageMetadata;

		const SAVE: ImageMetadata;

		const SAVE_AS: ImageMetadata;

		const SCALE: ImageMetadata;

		const SCHEDULE: ImageMetadata;

		const SEARCH: ImageMetadata;

		const SEPARATOR: ImageMetadata;

		const SETTINGS: ImageMetadata;

		const SHAPE_DIAMOND: ImageMetadata;

		const SHARE: ImageMetadata;

		const SNAPSHOT: ImageMetadata;

		const SORT: ImageMetadata;

		const SORT_ASCENDING: ImageMetadata;

		const SORT_DESCENDING: ImageMetadata;

		const SPINNER: ImageMetadata;

		const START_DATE: ImageMetadata;

		const STAR_FILLED: ImageMetadata;

		const STAR_OUTLINE: ImageMetadata;

		const STATUS_SUCCESS: ImageMetadata;

		const STATUS_WARNING: ImageMetadata;

		const SUBSIDIARIES: ImageMetadata;

		const SUM: ImageMetadata;

		const SUMMARIZE: ImageMetadata;

		const SWITCH: ImageMetadata;

		const TABLE_COLUMNS: ImageMetadata;

		const TABLE_ROWS: ImageMetadata;

		const TABLE_VALUES: ImageMetadata;

		const TEXT: ImageMetadata;

		const TIMER: ImageMetadata;

		const TIME_OFF: ImageMetadata;

		const TRANSPOSE: ImageMetadata;

		const UNDO: ImageMetadata;

		const UNGROUP: ImageMetadata;

		const UNHAPPY_FILLED: ImageMetadata;

		const UNHAPPY_OUTLINE: ImageMetadata;

		const UNIVERSITY: ImageMetadata;

		const UNKNOWN: ImageMetadata;

		const UPLOAD_DOCUMENT: ImageMetadata;

		const VERY_HAPPY_FILLED: ImageMetadata;

		const VERY_HAPPY_OUTLINE: ImageMetadata;

		const VERY_UNHAPPY_FILLED: ImageMetadata;

		const VERY_UNHAPPY_OUTLINE: ImageMetadata;

		const VIEW_BY_DATE: ImageMetadata;

		const VIEW_PARENT_RECORD: ImageMetadata;

		const VIEW_PARTIAL: ImageMetadata;

		const VIEW_SHOW: ImageMetadata;

		const WIDTH: ImageMetadata;

		const WRAP_LINE: ImageMetadata;

		const XAXIS: ImageMetadata;

		const YAXIS: ImageMetadata;

		const ZOOM_FIT: ImageMetadata;

		const ZOOM_IN: ImageMetadata;

		const ZOOM_OUT: ImageMetadata;

	}

	/**
	 * Theme base class
	 */
	export class Theme {
		/**
		 * Constructs Theme
		 */
		constructor(options: Theme.Options);

		/**
		 * Gets theme name
		 */
		name: Theme.Name;

		/**
		 * Gets theme tokens as an JS Object
		 */
		tokens: Record<string, any>;

		/**
		 * Gets theme mixins as an JS Object
		 */
		mixins: Record<string, Function>;

		/**
		 * Get theme root style
		 */
		rootStyle: Style;

		/**
		 * Get theme drag and drop style
		 */
		dragAndDropStyle: Style;

		/**
		 * Gets theme tokens as a CSS rule
		 */
		cssVariablesStyle: Style;

		/**
		 * Gets styles for a component class
		 */
		getComponentStyles(Component: (((...args: globalThis.Array<any>) => any) | object), provider?: (theme: Theme) => object): object;

		/**
		 * Gets theme specific icon per provided ID
		 */
		getIcon(id: string): (ImageMetadata | null);

		/**
		 * Creates style with theme CSS variables
		 */
		private generateCssVariablesStyle(): Style;

	}

	export namespace Theme {
		interface Options {
			name: Theme.Name;

			rootStyle: Style;

			tokens?: object;

			icons?: object;

			systemIconsMapping?: object;

		}

		export import Name = Self.ThemeName;

		export import Background = Self.ThemeBackground;

	}

	/**
	 * Theme background
	 */
	enum ThemeBackground {
		LIGHT,
		DARK,
	}

	/**
	 * Theme icons
	 */
	enum ThemeIcon {
		ACTUAL_SIZE,
		ADD,
		ADD_COLUMN,
		ADD_COMMENT,
		ADD_LEVEL,
		ADD_MENU,
		ADD_NODE,
		ADD_RECORD,
		ADD_ROW,
		AI_SPARKLE,
		ALERT,
		API,
		APPLICATION,
		APPOINTMENT,
		ARROW_DIAGONAL_DOWN,
		ARROW_DIAGONAL_UP,
		ARROW_DOWN,
		ARROW_LEFT,
		ARROW_PARENT,
		ARROW_RIGHT,
		ARROW_UP,
		ATTRIBUTES,
		AUTO_CALCULATE,
		AVAILABLE,
		BANK_ACCOUNT,
		BLANK,
		BLOCKED,
		BLOCKER,
		BREAK_LINK,
		BUILDER,
		CALCULATE_DURATION,
		CALENDAR,
		CALL,
		CASH_IN_TRANSIT,
		CARET_DOWN_REDWOOD,
		CHART,
		CHART_AREA,
		CHART_AREA_STACKED,
		CHART_BAR,
		CHART_BAR_STACKED,
		CHART_BUBBLE,
		CHART_COLUMN,
		CHART_COLUMN_STACKED,
		CHART_LINE,
		CHECK,
		CHECKBOX_CHECKED,
		CHECKBOX_PARTIAL,
		CHECK_SMALL,
		CHECK_SPELLING,
		CHEVRON_DOWN,
		CHEVRON_LEFT,
		CHEVRON_RIGHT,
		CHEVRON_UP,
		CLOCK,
		CLOSE,
		COLLAPSE,
		COLLECTION,
		COLOR_PALETTE,
		COMPONENTS,
		COMPRESS,
		CONDITIONAL_DATASET,
		CONDITIONAL_FORMATTING,
		CONSOLIDATE,
		CONTEXTUAL_MENU,
		COPY,
		CREDENTIALS,
		CREDIT_CARD,
		CUSTOM,
		DATASET,
		DATE,
		DELETE,
		DELTA_LOGO,
		DEPARTMENTS,
		DISMISS,
		DOCUMENTS,
		DOUBLE_CHEVRON_DOWN,
		DOUBLE_CHEVRON_LEFT,
		DOUBLE_CHEVRON_RIGHT,
		DOUBLE_CHEVRON_UP,
		DOWNLOAD_DOCUMENT,
		DRAGHANDLE,
		DRAGHANDLE_SMALL,
		DROPDOWN,
		DROPDOWN_UP,
		EDIT,
		EDIT_LOG,
		EMAIL,
		EMPLOYEE,
		EMPLOYEE_STATUS,
		END_DATE,
		END_NODE,
		ENTER_IDENTIFIER,
		ERROR,
		EXPAND,
		EXPORT,
		EXTEND_HANDLE,
		FAILED,
		FEEDBACK_NEGATIVE,
		FEEDBACK_POSITIVE,
		FILE_CSV,
		FILE_EXCEL,
		FILE_PDF,
		FILTER,
		FILTERS_LEFT,
		FILTERS_TOP,
		FLAG,
		FOLDER,
		FORMAT,
		FORMAT_NUMBER,
		FORMAT_TABLE,
		FORMAT_TEXT,
		FORMULA,
		GROUPS,
		HAMBURGER,
		HAPPY_FILLED,
		HAPPY_OUTLINE,
		HEART_FILLED,
		HEART_OUTLINE,
		HEIGHT,
		HELP,
		HIDE,
		HIDE_FILTERS,
		HIERARCHICAL,
		HIERARCHY,
		HIGHLIGHT,
		HIGHLIGHT_COLUMNS,
		HIGHLIGHT_ROWS,
		HISTORY,
		HOME,
		INDICATOR_BOTTOM,
		INDICATOR_DOWN,
		INDICATOR_UP,
		INFO,
		INSERT,
		INSIGHT,
		INVENTORY,
		JOIN_DOCUMENT,
		LINK,
		LIST,
		LOADING,
		LOCALIZE,
		LOCK,
		LOCKED_TASK,
		MANUFACTURING,
		MAP,
		MASTER_DETAIL,
		MAXIMIZE,
		MEMO_ADD,
		MEMO_HOVER,
		MEMO_PRESENT,
		MESSAGE,
		MINIMIZE,
		MINI_MAP,
		MINUS,
		MOBILE,
		MONEY,
		MOVE_BOTTOM,
		MOVE_DOWN,
		MOVE_FIRST,
		MOVE_LAST,
		MOVE_LEFT,
		MOVE_RIGHT,
		MOVE_TOGETHER,
		MOVE_TOP,
		MOVE_UP,
		NEUTRAL_FILLED,
		NEUTRAL_OUTLINE,
		NOTE,
		NULL_VALUE,
		NUMBERS,
		NUMERIC,
		OPEN_NEW,
		OVERFLOW,
		OVERVIEW,
		PAGINATION,
		PARENT_RECORD,
		PARTNERS,
		PAYABLES,
		PERFORMANCE,
		PERSON,
		PIN,
		PIN_COLUMNS,
		PIN_ROWS,
		PIVOT_TABLE,
		POLYMORPH,
		PREVIEW,
		PRINT,
		PRODUCT_CATEGORY,
		PURCHASE,
		RADIUS,
		RANKING_FILLED,
		RANKING_OUTLINE,
		RANK_1_FILLED,
		RANK_1_OUTLINE,
		RANK_2_FILLED,
		RANK_2_OUTLINE,
		RANK_3_FILLED,
		RANK_3_OUTLINE,
		RANK_4_FILLED,
		RANK_4_OUTLINE,
		RANK_5_FILLED,
		RANK_5_OUTLINE,
		RECORD,
		REDO,
		REFRESH,
		REJECTED,
		REMOVE_COLUMN,
		REMOVE_ROW,
		RESIZE,
		ROLES,
		SAVE,
		SAVE_AS,
		SCALE,
		SCHEDULE,
		SEARCH,
		SEPARATOR,
		SETTINGS,
		SHAPE_DIAMOND,
		SHARE,
		SNAPSHOT,
		SORT,
		SORT_ASCENDING,
		SORT_DESCENDING,
		SPINNER,
		START_DATE,
		STAR_FILLED,
		STAR_OUTLINE,
		STATUS_SUCCESS,
		STATUS_WARNING,
		SUBSIDIARIES,
		SUM,
		SUMMARIZE,
		SWITCH,
		TABLE_COLUMNS,
		TABLE_ROWS,
		TABLE_VALUES,
		TEXT,
		TIMER,
		TIME_OFF,
		TRANSPOSE,
		UNDO,
		UNGROUP,
		UNHAPPY_FILLED,
		UNHAPPY_OUTLINE,
		UNIVERSITY,
		UNKNOWN,
		UPLOAD_DOCUMENT,
		VERY_HAPPY_FILLED,
		VERY_HAPPY_OUTLINE,
		VERY_UNHAPPY_FILLED,
		VERY_UNHAPPY_OUTLINE,
		VIEW_BY_DATE,
		VIEW_PARENT_RECORD,
		VIEW_PARTIAL,
		VIEW_SHOW,
		WIDTH,
		WRAP_LINE,
		XAXIS,
		YAXIS,
		ZOOM_FIT,
		ZOOM_IN,
		ZOOM_OUT,
	}

	/**
	 * Theme names
	 */
	enum ThemeName {
		REFRESHED,
		REDWOOD,
	}

	export namespace Thenable {
		/**
		 * Convert a value to 'thenable'. Promises are returned unchanged and static values are converted to a promise.
		 */
		function when(value?: any): globalThis.Promise<any>;

	}

	/**
	 * Immutable time class
	 */
	export class Time {
		/**
		 * Constructor
		 */
		constructor(options?: Time.Options);

		/**
		 * Get the number of hours
		 */
		hours: number;

		/**
		 * Returns a modified copy of the time instance
		 */
		setHours(newValue: number): Time;

		/**
		 * Get the number of minutes
		 */
		minutes: number;

		/**
		 * Returns modified copy of the time instance
		 */
		setMinutes(newValue: number): Time;

		/**
		 * Get the number of seconds
		 */
		seconds: number;

		/**
		 * Returns modified copy of the time instance
		 */
		setSeconds(newValue: number): Time;

		/**
		 * Get the number of milliseconds
		 */
		milliseconds: number;

		/**
		 * Returns modified copy of the time instance
		 */
		setMilliseconds(newValue: number): Time;

		/**
		 * Returns modified copy of the time instance
		 */
		set(args: Time.Options): Time;

		/**
		 * Returns modified copy of the time instance
		 */
		addHours(hours: number): Time;

		/**
		 * Returns modified copy of the time instance
		 */
		addMinutes(minutes: number): Time;

		/**
		 * Returns modified copy of the time instance
		 */
		addSeconds(seconds: number): Time;

		/**
		 * Returns modified copy of the time instance
		 */
		addMilliseconds(milliseconds: number): Time;

		/**
		 * Returns modified copy of the time instance
		 */
		add(timeDiff: Time.AddType): Time;

		/**
		 * Returns modified copy of the time instance
		 */
		subtract(args: Time.AddType): Time;

		/**
		 * Returns 1 if this time is after given time Returns 0 if both times are equal Returns -1 if this time is before given time
		 */
		compareTo(time: Time): number;

		/**
		 * Check time for equality
		 */
		equals(time: Time): boolean;

		/**
		 * Returns true if this time is before the time in the argument
		 */
		before(time: Time): boolean;

		/**
		 * Returns true if this time is after the time in the argument
		 */
		after(time: Time): boolean;

		between(rangeStart: Time, rangeEnd: Time): boolean;

		/**
		 * Modify the time component of a given date
		 */
		toDate(date: Date): Date;

		/**
		 * Returns the current time
		 */
		static now(): Time;

		/**
		 * Returns the time part of a date
		 */
		static fromDate(date: Date): Time;

		/**
		 * Compare two time values
		 */
		static compare(left: Time, right: Time): number;

		/**
		 * Compare two nullable time values for equality
		 */
		static equals(left: (Time | null), right: (Time | null)): boolean;

		/**
		 * Earliest possible time value
		 */
		static startOfDay: Time;

		/**
		 * Lat3est possible time value
		 */
		static endOfDay: Time;

	}

	export namespace Time {
		interface Options {
			hours?: number;

			minutes?: number;

			seconds?: number;

			milliseconds?: number;

		}

		/**
		 * Standard time formats
		 */
		enum Format {
			isoTime,
			plain12h,
			plain24h,
		}

		interface AddType {
			hours?: number;

			minutes?: number;

			seconds?: number;

			milliseconds?: number;

		}

	}

	class TimeFormat {
	}

	namespace TimeFormat {
	}

	/**
	 * Convenient setTimeout and requestAnimationFrame wrapper
	 */
	export class Timer {
		/**
		 * Constructor
		 */
		constructor();

		/**
		 * True if timer has been scheduled
		 */
		scheduled: boolean;

		/**
		 * Schedule a callback and possibly cancel the previous one
		 */
		reschedule(callback: () => void, timeout?: number): void;

		/**
		 * Schedule a callback if one is not already scheduled
		 */
		schedule(callback: () => void, timeout?: number): void;

		/**
		 * Request an animation frame
		 */
		scheduleAnimation(callback: () => void, timeout?: number): void;

		/**
		 * Cancel the currently scheduled callback
		 */
		cancel(): void;

		/**
		 * Start counter
		 */
		startCounter(): void;

		/**
		 * Get elapsed time from start
		 */
		getCounterElapsedTime(): (number | null);

		/**
		 * Null the counter
		 */
		nullCounter(): void;

	}

	export namespace Timer {
	}

	/**
	 * Transformed translation
	 */
	class TransformedTranslation extends Translation {
		/**
		 * Constructor
		 */
		constructor(original: Translation, transform: (text: string, i18n: I18n) => string);

	}

	namespace TransformedTranslation {
	}

	/**
	 * Translation string
	 */
	export class Translation {
		/**
		 * Constructor
		 */
		constructor(args: (string | I18n.GetParam));

		/**
		 * Translate the string using a translation context
		 */
		translate(i18n: I18n): string;

		/**
		 * Returns a new translation that will use the original Translation and transform its output using the transform function.
		 */
		transform(transform: (text: string, i18n: I18n) => string): TransformedTranslation;

		/**
		 * Create a translation object
		 */
		static of(args: (string | I18n.GetParam)): Translation;

		/**
		 * Create a computed translation
		 */
		static computed(callback: (i18n: I18n) => string): Translation;

		/**
		 * Check if value is a translation instance
		 */
		static is(value: any): boolean;

	}

	export namespace Translation {
	}

	/**
	 * Hierarchical data source
	 */
	export class TreeDataSource implements MutableDataSource, EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: EventSource.EventName, listener: EventSource.Listener): EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: EventSource.EventName): void;

		/**
		 * Constructor
		 */
		constructor(options: {data: globalThis.Array<any>; childAccessor?: (string | TreeDataSource.ChildAccessorCallback)});

		/**
		 * The data object
		 */
		data: globalThis.Array<any>;

		/**
		 * Query data source items
		 */
		query(args: DataSource.QueryArguments, resolve: (args: {items: globalThis.Array<any>}) => void, reject?: (error: any) => void): void;

		/**
		 * Replace the whole tree with a new data
		 */
		setData(data: globalThis.Array<any>): void;

		/**
		 * Return item at index path
		 */
		itemAtIndexPath(indexPath: globalThis.Array<number>): any;

		/**
		 * Adds items to the collection
		 */
		add(args: {parent?: any; item?: any; items?: globalThis.Array<any>; index?: number; reason?: string}): object;

		/**
		 * Remove items from the collection
		 */
		remove(args: {parent?: any; item?: any; items?: globalThis.Array<any>; index?: number; count?: number; reason?: string}): object;

		/**
		 * Remove all items from the data source
		 */
		clear(args?: {parent?: any}): void;

		/**
		 * Change order of elements in the collection. Moves a chunk of items from one position to another.
		 */
		move(args: {sourceParent?: number; sourceIndex: number; targetParent?: number; targetIndex: number; count?: number; reason?: string}): object;

		/**
		 * Returns a new filtered data source
		 */
		filter(filter: (item: any) => boolean): GenericDataSource;

	}

	export namespace TreeDataSource {
		type ChildAccessorCallback = (args: {dataItem: any}, resolve: (items: globalThis.Array<any>) => void, reject: (error: any) => void) => void;

	}

	/**
	 * Type checking utilities
	 */
	export namespace Type {
		interface Matcher {
			is: (value: any) => boolean;

			name: (options: object) => string;

		}

		/**
		 * Array type checker. Matches any (possibly heterogeneous) array.
		 */
		const Array: Type.Matcher;

		/**
		 * Array that is empty
		 */
		const EmptyArray: Type.Matcher;

		/**
		 * Array that is not empty
		 */
		const NonEmptyArray: Type.Matcher;

		/**
		 * Function type checker.
		 */
		const Function: Type.Matcher;

		/**
		 * String type checker. Warning: Does not match instances of the String wrapper class.
		 */
		const String: Type.Matcher;

		/**
		 * Empty string
		 */
		const EmptyString: Type.Matcher;

		/**
		 * Non-empty string
		 */
		const NonEmptyString: Type.Matcher;

		/**
		 * Date checker
		 */
		const Date: Type.Matcher;

		/**
		 * Native date checker
		 */
		const NativeDate: Type.Matcher;

		/**
		 * Matches both UIF Date and native Date
		 */
		const AnyDate: Type.Matcher;

		/**
		 * HTMLElement checker
		 */
		const HTMLElement: Type.Matcher;

		/**
		 * Element checker
		 */
		const Element: Type.Matcher;

		/**
		 * Error checker
		 */
		const Error: Type.Matcher;

		/**
		 * String pattern checker.
		 */
		function StringPattern(regex: RegExp): Type.Matcher;

		/**
		 * String has email format
		 */
		const Email: Type.Matcher;

		/**
		 * Number type checker. Matches any finite number, i.e., does not match infinity or NaN.
		 */
		const Number: Type.Matcher;

		/**
		 * Negative number checker. Matches any finite negative number.
		 */
		const NegativeNumber: Type.Matcher;

		/**
		 * Non-negative number checker. Matches any finite and non-negative number.
		 */
		const NonNegativeNumber: Type.Matcher;

		/**
		 * Positive number checker. Matches any finite number greater than 0.
		 */
		const PositiveNumber: Type.Matcher;

		/**
		 * Checks if a given number belongs to a given closed range
		 */
		function BoundedNumber(min: number, max: number): Type.Matcher;

		/**
		 * Integer checker. Matches any finite number that does not have a fractional part.
		 */
		const Integer: Type.Matcher;

		/**
		 * Negative integer checker. Matches any finite negative integer.
		 */
		const NegativeInteger: Type.Matcher;

		/**
		 * Non-negative integer checker. Matches any finite and non-negative integer number.
		 */
		const NonNegativeInteger: Type.Matcher;

		/**
		 * Positive integer checker. Matches any finite integer number greater than 0.
		 */
		const PositiveInteger: Type.Matcher;

		/**
		 * Checks if given Integer belongs to a given closed range
		 */
		function BoundedInteger(min: number, max: number): Type.Matcher;

		/**
		 * Boolean type checker Warning: Does not match instances of the Boolean wrapper class.
		 */
		const Boolean: Type.Matcher;

		/**
		 * Object type checker. Matches all "pure" objects, does not match functions and arrays.
		 */
		const Object: Type.Matcher;

		/**
		 * Instance checker
		 */
		function InstanceOf(klass: Function): Type.Matcher;

		/**
		 * Type checker that matches classes implementing all listed interfaces
		 */
		function Implements(...interfaces: globalThis.Array<Interface>): Type.Matcher;

		/**
		 * Checker for primitive types. Matches all values except objects, functions and arrays.
		 */
		const Primitive: Type.Matcher;

		/**
		 * Plain object checker. Matches objects created using the '{}' syntax, i.e., objects that don't have a complex prototype chain.
		 */
		const PlainObject: Type.Matcher;

		/**
		 * Null type checker.
		 */
		const Null: Type.Matcher;

		/**
		 * Undefined type checker.
		 */
		const Undefined: Type.Matcher;

		/**
		 * Checker that matches anything except null and undefined.
		 */
		const Value: Type.Matcher;

		/**
		 * Checker that matches null and undefined.
		 */
		const NoValue: Type.Matcher;

		/**
		 * Checker that matches a type or a no value
		 */
		function Optional(): Type.Matcher;

		/**
		 * Checker that takes a list of types and matches any of them
		 */
		function AnyOf(...types: globalThis.Array<any>): Type.Matcher;

		/**
		 * Checker that takes a list of types and matches any value that does not have any of the supplied types
		 */
		function NoneOf(...types: globalThis.Array<any>): Type.Matcher;

		/**
		 * Enum type checker. Takes an enum and returns a checker that matches the enum values.
		 */
		function Enum(enumObject: object, enumName?: string): Type.Matcher;

		/**
		 * Homogeneous array checker. Takes a type and returns a checker that matches any array whose all element have the supplied type.
		 */
		function ArrayOf(type: Type.Matcher): Type.Matcher;

		/**
		 * Non-empty homogeneous array
		 */
		function NonEmptyArrayOf(type: Type.Matcher): Type.Matcher;

		/**
		 * Object checker that matches plain objects that have specific properties of a specific type
		 */
		function PlainObjectOf(properties: object): Type.Matcher;

		/**
		 * Object checker that matches objects that have specific properties of a specific type
		 */
		function ObjectOf(properties: object): Type.Matcher;

		/**
		 * Object that has a 'then' method
		 */
		const Thenable: Type.Matcher;

		/**
		 * Object is iterable
		 */
		const Iterable: Type.Matcher;

		/**
		 * Object is an interface
		 */
		const Interface: Type.Matcher;

		/**
		 * Object is a mixin
		 */
		const Mixin: Type.Matcher;

		/**
		 * Symbol type checker
		 */
		const Symbol: Type.Matcher;

	}

	/**
	 * Url
	 */
	export class Url {
		/**
		 * Constructor
		 */
		constructor(url: (null | string | Url | Url.Definition));

		/**
		 * Url without query and hash parts
		 */
		base: string;

		/**
		 * Key value object of params
		 */
		params: globalThis.Map<any, any>;

		/**
		 * Hash part of url
		 */
		fragment: string;

		/**
		 * Convert url to a string
		 */
		toString(): string;

		/**
		 * Get parameter value
		 */
		getParameter(name: string): (string | globalThis.Array<string>);

		/**
		 * Add paramter to the url
		 */
		addParameter(name: string, value: (string | globalThis.Array<string>)): Url;

		/**
		 * Remove parameters
		 */
		removeParameter(name: string): Url;

		/**
		 * Get url parameters
		 */
		getParameters(): globalThis.Map<any, any>;

		/**
		 * Add multiple parameters
		 */
		addParameters(parameters: (object | globalThis.Map<any, any>)): Url;

		/**
		 * Remove multiple parameters
		 */
		removeParameters(parameters: globalThis.Array<string>): Url;

		/**
		 * Get url fragment
		 */
		getFragment(): string;

		/**
		 * Set fragment
		 */
		setFragment(fragment: string): Url;

		/**
		 * Remove fragment
		 */
		removeFragment(): Url;

		/**
		 * Get base url
		 */
		getBase(): string;

		/**
		 * Add parameter to the url string
		 */
		static addParameter(url: (null | string | Url | Url.Definition), parameter: string, value: string): string;

		/**
		 * Add more parameters to the url string
		 */
		static addParameters(url: (null | string | Url | Url.Definition), parameters: object): string;

		/**
		 * Remove parameter from url string
		 */
		static removeParameter(url: (null | string | Url | Url.Definition), parameter: string): string;

		/**
		 * Remove parameters from url string
		 */
		static removeParameters(url: (string | Url), ...parameters: globalThis.Array<any>): string;

		/**
		 * Get parameters from url
		 */
		static getParameters(url: string): globalThis.Map<any, any>;

		/**
		 * Get base part from url
		 */
		static getBase(url: string): string;

		/**
		 * Get fragment part from url
		 */
		static getFragment(url: string): string;

		/**
		 * Create email link
		 */
		static createEmailLink(email: (string | Url.EmailDefinition)): Url;

	}

	export namespace Url {
		interface Definition {
			base?: string;

			params?: object;

			fragment?: string;

		}

		interface EmailDefinition {
			email?: string;

			cc?: string;

			bcc?: string;

			subject?: string;

			body?: string;

		}

	}

	/**
	 * User message handle
	 */
	export class UserMessageHandle implements EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: EventSource.EventName, listener: EventSource.Listener): EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: EventSource.EventName): void;

		/**
		 * Constructor
		 */
		constructor(message: UserMessageService.MessageOptions);

		/**
		 * The user message
		 */
		message: UserMessageService.MessageOptions;

		/**
		 * True if the message is visible
		 */
		shown: boolean;

		/**
		 * Show the message
		 */
		show(): void;

		/**
		 * Hide the message
		 */
		hide(): void;

		/**
		 * Toggle the message
		 */
		toggle(show: boolean): void;

		static Event: UserMessageHandle.EventTypes;

	}

	export namespace UserMessageHandle {
		interface EventTypes {
			SHOW: symbol;

			HIDE: symbol;

		}

	}

	/**
	 * Service for displaying messages on page
	 */
	export class UserMessageService implements EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (EventSource.EventName | globalThis.Array<EventSource.EventName> | EventSource.ListenerMap), listener?: EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: EventSource.EventName, listener: EventSource.Listener): EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: EventSource.EventName): void;

		/**
		 * Constructs UserMessageService
		 */
		constructor(options: UserMessageService.Options);

		/**
		 * Get message handles
		 */
		handles: globalThis.Array<UserMessageHandle>;

		/**
		 * Shows a message
		 */
		show(message: UserMessageService.MessageOptions): UserMessageHandle;

		/**
		 * Clear all messages of given display type
		 */
		clear(displayType: UserMessageService.DisplayType): void;

		/**
		 * Shows error message
		 */
		error(args: UserMessageService.MessageOptions): UserMessageHandle;

		/**
		 * Shows warning message
		 */
		warning(args: UserMessageService.MessageOptions): UserMessageHandle;

		/**
		 * Shows info message
		 */
		info(args: UserMessageService.MessageOptions): UserMessageHandle;

		/**
		 * Shows success message
		 */
		success(args: UserMessageService.MessageOptions): UserMessageHandle;

		/**
		 * Creates a child user message service. You can either specify a specific banner and growl panel to be used by this service or preferably use the displayTypes option to specify which messages should be captured by this service and which should bubble up to the parent service. The messages from the service will be automatically displayed by any BannerPanel of GrowlPanel contained in the corresponding component subtree. Calling clear on the child service will clear only messages shown through the child service even if they are displayed in the same panel as messages from the parent service.
		 */
		createChild(args: {displayTypes?: globalThis.Array<UserMessageService.DisplayType>; bannerPanel?: PackageComponent.BannerPanel; growlPanel?: PackageComponent.GrowlPanel}): void;

		static Event: UserMessageService.EventTypes;

	}

	export namespace UserMessageService {
		interface MessageOptions {
			title?: (string | Translation);

			content?: (string | Translation | Component);

			icon?: PackageComponent.Image.Source;

			displayType?: UserMessageService.DisplayType;

			showCloseButton?: boolean;

			closeOnClick?: boolean;

			duration?: number;

			type?: UserMessageService.MessageType;

			on?: EventSource.ListenerMap;

		}

		interface EventTypes {
			SHOW_MESSAGE: string;

			HIDE_MESSAGE: string;

		}

		interface Options {
			parent?: UserMessageService;

			displayTypes?: globalThis.Array<UserMessageService.DisplayType>;

			bannerPanel?: PackageComponent.BannerPanel;

			growlPanel?: PackageComponent.GrowlPanel;

		}

		enum MessageType {
			INFO,
			SUCCESS,
			WARNING,
			ERROR,
		}

		enum DisplayType {
			BANNER,
			GROWL,
		}

	}

	/**
	 * Create a new virtual element node
	 */
	export function VDom(type: (string | ((props?: object) => VDomElement)), config?: object, children?: VDom.Children): VDomElement;

	export namespace VDom {
		type Node = (string | number | VDomElement | null);

		type Children = (VDom.Node | globalThis.Array<VDom.Node>);

		/**
		 * Jsx factory
		 */
		function jsx(type: (string | ((props?: object) => VDomElement)), config?: object, key?: string): VDomElement;

		/**
		 * Render virtual DOM to an element
		 */
		function render(element: VDom.Node, container: Element): VDomRoot;

		/**
		 * Flush all virtual DOM updates
		 */
		function flushUpdates(): void;

		/**
		 * Modify host component element by adding new props
		 */
		function cloneHostComponent(element: VDomElement, config: object): VDomElement;

		type ClassList = (string | Style | globalThis.Array<(string | Style)> | Record<string, (string | Style)>);

		/**
		 * Create a class attribute by combining multiple class sets
		 */
		function classNames(...values: globalThis.Array<VDom.ClassList>): globalThis.Array<string>;

		/**
		 * Convert native Dom to VDom
		 */
		function fromDom(element: Element): VDomElement;

		/**
		 * Convert a HTML string to VDom
		 */
		function fromString(string: string): VDomElement;

		/**
		 * Get an array of child elements
		 */
		function children(children: VDom.Children): globalThis.Array<VDom.Node>;

		/**
		 * Fragment component
		 */
		function Fragment(props: {children?: VDom.Children}): VDomElement;

		/**
		 * Portal component
		 */
		function Portal(props: {container: HTMLElement; children?: VDom.Children}): VDomElement;

		/**
		 * Context provider component
		 */
		function Context(props: {value: object; children?: VDom.Children}): VDomElement;

		/**
		 * Element decorator
		 */
		function ElementDecorator(props: object): VDomElement;

		/**
		 * Message filter
		 */
		function MessageFilter(props: object): VDomElement;

		/**
		 * Context portal
		 */
		function ContextPortal(props: object): VDomElement;

		/**
		 * Create element reference
		 */
		function ref<T = any>(): VDomRef<T>;

		export import Element = Self.VDomElement;

		export import Ref = Self.VDomRef;

	}

	/**
	 * Virtual DOM element
	 */
	export class VDomElement {
		/**
		 * VDomElement tag
		 */
		tag: VDomFiberTag;

		/**
		 * VDomElement type
		 */
		type: (string | symbol | ((props: any) => VDomElement));

		/**
		 * VDomElement props
		 */
		props: any;

		/**
		 * VDomElement key
		 */
		key: any;

		/**
		 * VDomElement ref
		 */
		ref: (VDomRef | null);

		/**
		 * Constructor
		 */
		constructor(tag: VDomFiberTag, type: (string | symbol | ((props: any) => VDomElement)), key: any, ref: (VDomRef | null), props: any, flags: number);

		/**
		 * Create a clone with merged props
		 */
		cloneWithProps(props: object): VDomElement;

		/**
		 * Create a clone with a different type
		 */
		cloneWithType(type: any): VDomElement;

		/**
		 * Create a clone with a different ref
		 */
		cloneWithRef(ref: VDomRef): VDomElement;

		/**
		 * Create a clone with different children
		 */
		cloneWithChildren(children: VDom.Children): VDomElement;

		/**
		 * Returns true if this is a host component
		 */
		isHostComponent(): boolean;

		/**
		 * Create a virtual text node
		 */
		static text(text: string): VDomElement;

		/**
		 * Create a virtual fragment node
		 */
		static fragment(children: VDom.Children): VDomElement;

		/**
		 * Create host component instance virtual node
		 */
		static hostComponentInstance(node: Element): VDomElement;

		/**
		 * Create legacy component instance virtual node
		 */
		static legacyComponentInstance(instance: Component): VDomElement;

		/**
		 * Create an error node
		 */
		static errorNode(error?: Error): VDomElement;

	}

	export namespace VDomElement {
	}

	/**
	 * Virtual DOM fiber
	 */
	class VDomFiber {
	}

	namespace VDomFiber {
	}

	/**
	 * Fiber flags
	 */
	enum VDomFiberFlag {
		NO_FLAG,
		WITH_MOUNTED,
		WITH_WILL_UNMOUNT,
		WITH_SHOULD_UPDATE,
		WITH_UPDATED,
		WITH_SNAPSHOT,
		WITH_GET_DERIVED_STATE,
		WITH_STYLE,
		INSTANCE,
	}

	/**
	 * Fiber tag
	 */
	enum VDomFiberTag {
		HOST_ROOT,
		HOST_COMPONENT,
		HOST_TEXT,
		HOST_PORTAL,
		CLASS_COMPONENT,
		FUNCTION_COMPONENT,
		LEGACY_COMPONENT,
		ELEMENT_COMPONENT,
		FRAGMENT,
		CONTEXT_PROVIDER,
		ELEMENT_DECORATOR,
		MESSAGE_FILTER,
		CONTEXT_PORTAL,
		TRANSLATION,
	}

	/**
	 * Virtual dom hook
	 */
	class VDomHook {
		/**
		 * Constructor
		 */
		constructor(tag: VDomHookTag);

	}

	namespace VDomHook {
	}

	/**
	 * Hook tag
	 */
	enum VDomHookTag {
		EFFECT,
		CONTEXT,
		STYLE,
		REDUCER,
		REF,
		CALLBACK,
		MEMO,
		SYNC_EXTERNAL_STORE,
	}

	/**
	 * Virtual DOM element reference
	 */
	export class VDomRef<T = any> {
		/**
		 * Constructor
		 */
		constructor(initial?: T);

		/**
		 * Current reference
		 */
		current: T;

	}

	export namespace VDomRef {
	}

	/**
	 * Fiber root
	 */
	class VDomRoot {
		/**
		 * Constructor
		 */
		constructor(container: Element, host?: PackageComponent.Host);

	}

	namespace VDomRoot {
	}

	export class ValueChangeMessage extends RoutedMessage {
		/**
		 * Constructs ValueChangeMessage
		 */
		constructor(options: ValueChangeMessage.Options);

		/**
		 * Target element of event
		 */
		element: Element;

		static fromEvent(event: InputEvent): ValueChangeMessage;

	}

	export namespace ValueChangeMessage {
		interface Options extends RoutedMessage.Options {
			element: Element;

		}

	}

	/**
	 * Immutable vector class
	 */
	export class Vector {
		/**
		 * Constructor
		 */
		constructor(x: number, y: number);

		/**
		 * Add another vector
		 */
		add(right: Vector): Vector;

		/**
		 * Add scalar value
		 */
		addScalar(value: number): Vector;

		/**
		 * Subtract a vector
		 */
		subtract(right: Vector): Vector;

		/**
		 * Subtract scalar value
		 */
		subtractScalar(value: number): Vector;

		/**
		 * Pointwise mutliply by another vector
		 */
		multiply(right: Vector): Vector;

		/**
		 * Multiply by scalar
		 */
		multiplyByScalar(value: number): Vector;

		/**
		 * Pointwise divide by another vector
		 */
		divide(right: Vector): Vector;

		/**
		 * Divide by scalar
		 */
		divideByScalar(value: number): Vector;

		/**
		 * Pointwise maximum of 2 vectors
		 */
		max(right: Vector): Vector;

		/**
		 * Pointwise minimum of 2 vectors
		 */
		min(right: Vector): Vector;

		/**
		 * Get the length of the vector
		 */
		length(): number;

		/**
		 * Add two vectors
		 */
		static add(left: Vector, right: Vector): Vector;

		/**
		 * Add scalar to vector
		 */
		static addScalar(vector: Vector, value: number): Vector;

		/**
		 * Subtract two vectors
		 */
		static subtract(left: Vector, right: Vector): Vector;

		/**
		 * Subtract scalar from vector
		 */
		static subtractScalar(vector: Vector, value: Vector): Vector;

		/**
		 * Pointwise multiply two vectors
		 */
		static multiply(left: Vector, right: Vector): Vector;

		/**
		 * Multiply vector by scalar
		 */
		static multiplyByScalar(vector: Vector, value: number): Vector;

		/**
		 * Pointwise divide two vectors
		 */
		static divide(left: Vector, right: Vector): Vector;

		/**
		 * Divide vector by scalar
		 */
		static divideByScalar(vector: Vector, value: number): Vector;

		/**
		 * Pointwise maximum of 2 vectors
		 */
		static max(left: Vector, right: Vector): Vector;

		/**
		 * Pointwise minimum of 2 vectors
		 */
		static min(left: Vector, right: Vector): Vector;

		/**
		 * Calculate length of a vector
		 */
		static calculateLength(vector: Vector): number;

	}

	export namespace Vector {
	}

	export class ViewMessage extends RoutedMessage {
		/**
		 * Constructs ViewMessage
		 */
		constructor(options: ViewMessage.Options);

		/**
		 * Target element of event
		 */
		element: Element;

		static fromEvent(event: Event): ViewMessage;

	}

	export namespace ViewMessage {
		interface Options extends RoutedMessage.Options {
			element: Element;

		}

	}

	/**
	 * Window manager
	 */
	export class WindowManager {
		/**
		 * Constructs WindowManager
		 */
		constructor();

		/**
		 * Get the list of opened windows
		 */
		windows: globalThis.Array<PackageComponent.Window>;

		/**
		 * Get top most modal
		 */
		topMostModal: PackageComponent.Window;

		/**
		 * Opens window
		 */
		open(window: PackageComponent.Window, filter: RoutedMessage.Filter): void;

		/**
		 * Closes window
		 */
		close(window: PackageComponent.Window): void;

		/**
		 * Activates window
		 */
		activate(window: PackageComponent.Window): void;

		/**
		 * Processes message
		 */
		processMessage(next: RoutedMessage.Handler, message: object, result: object): void;

	}

	export namespace WindowManager {
	}

	/**
	 * Parse date/time string
	 */
	function dateParser(tokenList: RegExp, string: string, format: string, options?: object): object;

	/**
	 * Reconstructs child fibers after a legacy component has been attached or detached
	 */
	function reconstructFiberChildren(fiber: VDomFiber): void;

	/**
	 * Reconstruct fibers from given node to the closest node managed by the virtual DOM
	 */
	function reconstructFiberPath(node: Node): VDomFiber;

}

declare module '@uif-js/component' {
	import * as PackageCore from '@uif-js/core'
	import * as Self from '@uif-js/component'

	/**
	 * Base class for layout headers
	 */
	export class AccordionItemHeader extends PackageCore.Component {
		/**
		 * Constructor
		 */
		constructor(options?: AccordionItemHeader.Options);

		/**
		 * Header label
		 */
		label: (string | PackageCore.Translation);

		/**
		 * Icon of header
		 */
		icon: object;

		/**
		 * Gets context controls
		 */
		contextControls: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

		/**
		 * Sets context controls
		 */
		actionControls: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

		/**
		 * Get/set expanded flag
		 */
		expanded: boolean;

		/**
		 * Initial value of the expanded property. Useful in JSX and virtual DOM.
		 */
		defaultExpanded: boolean;

		/**
		 * Get/set expanded icon
		 */
		expandedIcon: boolean;

		/**
		 * Sets label
		 */
		setLabel(label: string, reason: string): void;

		/**
		 * Sets icon
		 */
		setIcon(icon: (PackageCore.ImageMetadata | null)): void;

		/**
		 * Set expanded icon
		 */
		setExpandedIcon(icon: (PackageCore.ImageMetadata | null)): void;

		/**
		 * Set expanded state
		 */
		setExpanded(expanded: boolean): void;

		static Event: AccordionItemHeader.EventTypes;

	}

	export namespace AccordionItemHeader {
		interface EventTypes extends PackageCore.Component.EventTypes {
			EXPANDED: string;

		}

		interface Options extends PackageCore.Component.Options {
			icon?: Image.Source;

			label?: (string | PackageCore.Translation);

			contextControls?: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

			actionControls?: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

			expanded?: boolean;

			defaultExpanded?: boolean;

			expandedIcon?: Image.Source;

		}

	}

	/**
	 * AccordionPanel stacks child components vertically or horizontally. AccordionPanel children can be expanded or collapsed. Each child has a clickable label that displays its name and allows toggling visibility of the child component. By default, any number of child components can be visible at the same time.
	 */
	export class AccordionPanel extends PackageCore.Component {
		/**
		 * Constructs AccordionPanel
		 */
		constructor(options?: AccordionPanel.Options);

		/**
		 * Array of items in layout order
		 */
		items: globalThis.Array<AccordionPanelItem>;

		/**
		 * Root element type
		 */
		element: AccordionPanel.Element;

		/**
		 * Returns the list of components in the order they appear on the screen
		 */
		components: globalThis.Array<PackageCore.Component>;

		/**
		 * Alias for components property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Get the number of items in the container
		 */
		length: number;

		/**
		 * Returns true if the container is empty
		 */
		empty: boolean;

		/**
		 * Sets/Gets panel orientation
		 */
		orientation: AccordionPanel.Orientation;

		/**
		 * Can be all items collapsed in the same time
		 */
		fullyCollapsible: boolean;

		/**
		 * Sets/Gets flag if multiple items can be expanded in the same time
		 */
		multiple: boolean;

		/**
		 * Outer gap
		 */
		outerGap: (AccordionPanel.GapSize | AccordionPanel.GapSizeObject);

		/**
		 * Expanded child components
		 */
		expandedCount: number;

		/**
		 * Panel decorator
		 */
		decorator: (PackageCore.Decorator | null);

		/**
		 * Default item options
		 */
		defaultItemOptions: AccordionPanel.ItemProps;

		/**
		 * Adds items
		 */
		add(component: (AccordionPanel.ItemConfiguration | globalThis.Array<AccordionPanel.ItemConfiguration>)): AccordionPanel;

		/**
		 * Removes items
		 */
		remove(componentOrIndex: (PackageCore.Component | number | globalThis.Array<(PackageCore.Component | number)>)): AccordionPanel;

		/**
		 * Moves item at specific index
		 */
		move(args: {component: PackageCore.Component; index?: number; reason?: string}): AccordionPanel;

		/**
		 * Removes all components
		 */
		clear(): AccordionPanel;

		/**
		 * Replaces one component with another
		 */
		replace(currentComponent: (PackageCore.Component | number), newComponent: PackageCore.Component): AccordionPanel;

		/**
		 * Checks if component is contained in the AccordionPanel
		 */
		has(component: PackageCore.Component): boolean;

		/**
		 * Gets the AccordionPanelItem for a given component
		 */
		itemForComponent(component: PackageCore.Component): AccordionPanelItem;

		/**
		 * Gets item at a specific index
		 */
		itemAtIndex(index: number): AccordionPanelItem;

		/**
		 * Sets panel orientation
		 */
		setOrientation(orientation: AccordionPanel.Orientation): void;

		/**
		 * Sets flag if multiple items can be expanded in the same time
		 */
		setMultiple(multiple: boolean): void;

		/**
		 * Sets flag if can be all items collapsed in the same time
		 */
		setFullyCollapsible(value: boolean): void;

		/**
		 * Expand item
		 */
		expand(component: (PackageCore.Component | number)): void;

		/**
		 * Collapse item
		 */
		collapse(component: (PackageCore.Component | number)): void;

		/**
		 * Toggle state of item
		 */
		toggle(component: (PackageCore.Component | number)): void;

		/**
		 * Collapse all tabs
		 */
		collapseAll(): void;

		/**
		 * Expand all tabs
		 */
		expandAll(): void;

		/**
		 * Collapse all items except for one
		 */
		collapseOthers(component: (PackageCore.Component | number)): void;

		/**
		 * Check whether the item is expanded
		 */
		isExpanded(component: (PackageCore.Component | number)): boolean;

		/**
		 * Set panel decorator
		 */
		setDecorator(decorator: (PackageCore.Decorator | null)): void;

		/**
		 * Horizontal AccordionPanel factory method
		 */
		static horizontal(items?: (object | globalThis.Array<PackageCore.Component> | globalThis.Array<AccordionPanelItem.Options>)): AccordionPanel;

		/**
		 * Horizontal AccordionPanel for use in VDom/JSX
		 */
		static Horizontal(): PackageCore.JSX.Element;

		/**
		 * Vertical AccordionPanel factory method
		 */
		static vertical(items?: (object | globalThis.Array<PackageCore.Component> | globalThis.Array<AccordionPanelItem.Options>)): AccordionPanel;

		/**
		 * Vertical AccordionPanel for use in VDom/JSX
		 */
		static Vertical(): PackageCore.JSX.Element;

		/**
		 * AccordionPanel item JSX component
		 */
		static Item(props?: AccordionPanel.JsxItemProps): PackageCore.JSX.Element;

		static Event: AccordionPanel.EventTypes;

	}

	export namespace AccordionPanel {
		interface BaseItemProps {
			label?: string;

			actionControls?: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

			contextControls?: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

			expanded?: boolean;

			defaultExpanded?: boolean;

			icon?: Image.Source;

			expandedIcon?: Image.Source;

		}

		interface JsxItemProps extends AccordionPanel.BaseItemProps {
			key?: any;

		}

		interface ItemProps extends AccordionPanel.BaseItemProps {
		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			ITEM_ADDED: string;

			ITEM_REMOVED: string;

			ITEM_MOVED: string;

			ITEM_EXPANDED: string;

		}

		interface StructuredItemConfiguration {
			component: PackageCore.Component;

			options?: AccordionPanel.ItemProps;

		}

		interface FlatItemConfiguration extends AccordionPanel.ItemProps {
			component: PackageCore.Component;

		}

		type ItemConfiguration = (PackageCore.Component | AccordionPanel.StructuredItemConfiguration | AccordionPanel.FlatItemConfiguration);

		interface GapSizeObject {
			top?: AccordionPanel.GapSize;

			bottom?: AccordionPanel.GapSize;

			start?: AccordionPanel.GapSize;

			end?: AccordionPanel.GapSize;

			horizontal?: AccordionPanel.GapSize;

			vertical?: AccordionPanel.GapSize;

		}

		interface Options extends PackageCore.Component.Options {
			decorator?: PackageCore.Decorator;

			fullyCollapsible?: boolean;

			items?: (AccordionPanel.ItemConfiguration | globalThis.Array<AccordionPanel.ItemConfiguration>);

			multiple?: boolean;

			orientation?: AccordionPanel.Orientation;

			outerGap?: (AccordionPanel.GapSize | AccordionPanel.GapSizeObject);

			element?: AccordionPanel.Element;

			defaultItemOptions?: AccordionPanel.ItemProps;

		}

		export import VisualStyle = Self.AccordionVisualStyle;

		enum Orientation {
			VERTICAL,
			HORIZONTAL,
		}

		export import GapSize = Self.GapSize;

		export import Decorator = PackageCore.Decorator;

		export import Element = PackageCore.Html.Element.Section;

	}

	/**
	 * Accordion panel item
	 */
	export class AccordionPanelItem extends PackageCore.Component {
		/**
		 * Constructs AccordionPanelItem
		 */
		constructor(options: AccordionPanelItem.Options);

		/**
		 * Gets item component
		 */
		component: PackageCore.Component;

		/**
		 * Unique value identifying this item
		 */
		value: any;

		/**
		 * Alias for component property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Gets item header
		 */
		header: AccordionItemHeader;

		/**
		 * Gets expand state of item
		 */
		expanded: boolean;

		/**
		 * Gets icon of item
		 */
		icon: Image.Source;

		/**
		 * Gets expanded icon of item
		 */
		expandedIcon: Image.Source;

		/**
		 * Gets label
		 */
		label: (string | PackageCore.Translation);

		/**
		 * Context controls
		 */
		contextControls: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

		/**
		 * Action controls
		 */
		actionControls: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

		/**
		 * Set expanded state
		 */
		setExpanded(value: boolean): void;

		static Event: AccordionPanelItem.EventTypes;

	}

	export namespace AccordionPanelItem {
		interface Options {
			label?: (string | PackageCore.Translation);

			expanded?: boolean;

			icon?: Image.Source;

			expandedIcon?: Image.Source;

			contextControls?: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

			actionControls?: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

			value?: any;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			EXPANDED: string;

		}

	}

	enum AccordionVisualStyle {
		DEFAULT,
		LIGHT,
	}

	/**
	 * Action cell
	 */
	export class ActionCell extends GridCell {
		/**
		 * Constructs ActionCell
		 */
		constructor();

		/**
		 * List of actions
		 */
		actions: globalThis.Array<any>;

		/**
		 * List of default actions
		 */
		defaultActions: globalThis.Array<any>;

		/**
		 * List of menu actions
		 */
		menuActions: globalThis.Array<any>;

		/**
		 * Set cell actions
		 */
		setActions(actions: globalThis.Array<any>): void;

		/**
		 * Show/hide action
		 */
		showAction(actionId: string, visible: boolean): void;

		/**
		 * Enable/disable action
		 */
		enableAction(actionId: string, enabled: boolean): void;

		/**
		 * Open cell menu
		 */
		openMenu(): void;

		/**
		 * Close cell menu
		 */
		closeMenu(): void;

	}

	export namespace ActionCell {
	}

	/**
	 * Action column
	 */
	export class ActionColumn extends GridColumn {
		/**
		 * Constructs ActionColumn
		 */
		constructor(options: ActionColumn.Options);

		/**
		 * The list of actions
		 */
		actions: (globalThis.Array<ActionColumn.ActionDefinition> | ActionColumn.ActionProvider);

		/**
		 * Show/hide action
		 */
		showAction(actionId: string, visible: boolean): void;

		/**
		 * Enable/disable action
		 */
		enableAction(actionId: string, enabled: boolean): void;

	}

	export namespace ActionColumn {
		interface Options extends GridColumn.Options {
			actions?: (globalThis.Array<ActionColumn.ActionDefinition> | ActionColumn.ActionProvider);

		}

		type ActionProvider = (cell: GridCell) => globalThis.Array<ActionColumn.ActionDefinition>;

		interface ActionDefinition {
			id?: string;

			default?: boolean;

			icon?: Image.Source;

			label?: (string | PackageCore.Translation);

			action?: () => void;

			type?: Button.Type;

		}

		export import Cell = Self.ActionCell;

	}

	/**
	 * AdminDocs header
	 */
	class AdminDocsSystemHeader extends PackageCore.Component {
		/**
		 * Constructs AdminDocsSystemHeader
		 */
		constructor(options?: AdminDocsSystemHeader.Options);

		/**
		 * Grid panel
		 */
		grid: PackageCore.JSX.Element;

		/**
		 * Options for home button
		 */
		homeButtonOptions: Button.Options;

		/**
		 * Logos to display
		 */
		logos: globalThis.Array<PackageCore.JSX.Element>;

		/**
		 * Options for logout button
		 */
		logoutButtonOptions: Button.Options;

	}

	namespace AdminDocsSystemHeader {
		interface Options extends PackageCore.Component.Options {
			grid?: PackageCore.JSX.Element;

			homeButtonOptions?: Button.Options;

			logos?: globalThis.Array<PackageCore.JSX.Element>;

			logoutButtonOptions?: Button.Options;

		}

	}

	export class Agenda extends PackageCore.Component {
		constructor(options?: Agenda.Options);

		/**
		 * Day view configuration
		 */
		dayViewConfig: AgendaWeekTimeView.Options;

		/**
		 * Events
		 */
		events: globalThis.Array<any>;

		/**
		 * Highlight weekends
		 */
		highlightWeekends: boolean;

		/**
		 * Selected view
		 */
		selectedView: Agenda.CalendarView;

		/**
		 * Month view configuration
		 */
		monthViewConfig: AgendaMonthView.Options;

		/**
		 * Read only
		 */
		readOnly: boolean;

		/**
		 * View date
		 */
		viewDate: PackageCore.Date;

		/**
		 * Week view configuration
		 */
		weekViewConfig: AgendaWeekTimeView.Options;

		/**
		 * Add event to agenda and its views.
		 */
		addEvent(event?: object, options?: {reason?: Agenda.Reason}): void;

		/**
		 * Remove event from agenda and its views.
		 */
		removeEvent(event?: object, options?: {reason?: Agenda.Reason}): void;

		static Event: Agenda.EventTypes;

	}

	export namespace Agenda {
		interface EventData {
			name: (string | number | PackageCore.Translation);

			description?: (string | number | PackageCore.Translation);

			start: PackageCore.Date;

			end: PackageCore.Date;

			wholeDay?: boolean;

			color?: AgendaEvent.Color;

			badge?: (string | number | PackageCore.Translation);

		}

		interface Options extends PackageCore.Component.Options {
			viewDate?: PackageCore.Date;

			selectedView?: Agenda.CalendarView;

			events?: globalThis.Array<Agenda.EventData>;

			readOnly?: boolean;

			highlightWeekends?: boolean;

			monthViewConfig?: AgendaMonthView.Options;

			weekViewConfig?: AgendaWeekTimeView.Options;

			dayViewConfig?: AgendaWeekTimeView.Options;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			EVENT_ADD: symbol;

			EVENT_REMOVE: symbol;

		}

		export import Reason = Self.AgendaConstant.Reason;

		enum CalendarView {
			MONTH,
			WEEK,
			DAY,
			AGENDA,
		}

		export import View = Self.AgendaView;

		export import DayView = Self.AgendaDayView;

		export import MonthView = Self.AgendaMonthView;

		export import WeekTimeView = Self.AgendaWeekTimeView;

	}

	namespace AgendaConstant {
		enum Event {
			EVENT_ADD,
			EVENT_REMOVE,
		}

		enum Reason {
			USER_CALL,
			INTERNAL_CALL,
		}

	}

	/**
	 * Day time cell
	 */
	class AgendaDayTimeCell extends PackageCore.Component {
		constructor(options?: AgendaDayTimeCell.Options);

		/**
		 * Click action
		 */
		clickAction: (((date: PackageCore.Date) => void) | null);

		/**
		 * Time
		 */
		time: PackageCore.Date;

	}

	namespace AgendaDayTimeCell {
		interface Options extends PackageCore.Component.Options {
			time?: PackageCore.Date;

			clickAction?: (date: PackageCore.Date) => void;

		}

	}

	export class AgendaDayTimeGrid extends PackageCore.Component {
		constructor(options?: AgendaDayTimeGrid.Options);

		/**
		 * Background
		 */
		background: AgendaDayTimeGrid.Background;

		/**
		 * Time click action
		 */
		timeClickAction: (((time: (PackageCore.Date | PackageCore.Time)) => void) | null);

		/**
		 * Event click action
		 */
		eventClickAction: (((event: Agenda.EventData) => void) | null);

		/**
		 * Events
		 */
		events: globalThis.Array<Agenda.EventData>;

		/**
		 * Read only day
		 */
		readOnly: boolean;

		/**
		 * View date
		 */
		viewDate: PackageCore.Date;

		/**
		 * Adds event to day.
		 */
		addEvent(event?: object, options?: {reason?: AgendaDayTimeGrid.Reason}): void;

		/**
		 * Remove event from day.
		 */
		removeEvent(event?: object, options?: {reason?: AgendaDayTimeGrid.Reason}): void;

		static Event: Agenda.EventTypes;

	}

	export namespace AgendaDayTimeGrid {
		interface Options extends PackageCore.Component.Options {
			viewDate?: PackageCore.Date;

			events?: globalThis.Array<Agenda.EventData>;

			background?: AgendaDayTimeGrid.Background;

			readOnly?: boolean;

			timeClickAction?: (time: (PackageCore.Date | PackageCore.Time)) => void;

			eventClickAction?: (event: Agenda.EventData) => void;

		}

		export import Reason = Self.AgendaConstant.Reason;

		enum Background {
			WEAK,
			MEDIUM,
			STRONG,
		}

	}

	/**
	 * Agenda day view
	 */
	export class AgendaDayView extends PackageCore.Component {
		constructor(options?: AgendaDayView.Options);

		/**
		 * Background
		 */
		background: AgendaDayView.Background;

		/**
		 * Click action
		 */
		clickAction: (((date: PackageCore.Date) => void) | null);

		/**
		 * Event click action
		 */
		eventClickAction: (((event: Agenda.EventData) => void) | null);

		/**
		 * Description
		 */
		description: (string | number | PackageCore.Translation);

		/**
		 * Icon
		 */
		icon: Image.Source;

		/**
		 * Events
		 */
		events: globalThis.Array<Agenda.EventData>;

		/**
		 * Events limit
		 */
		eventsLimit: number;

		/**
		 * Show header
		 */
		showHeader: boolean;

		/**
		 * Show long variant of date
		 */
		showLongViewDate: boolean;

		/**
		 * Show more link action
		 */
		showMoreAction: (date: PackageCore.Date) => void;

		/**
		 * Summary
		 */
		summary: AgendaDayView.Summary;

		/**
		 * Read only
		 */
		readOnly: boolean;

		/**
		 * View date
		 */
		viewDate: PackageCore.Date;

		/**
		 * Adds event to day.
		 */
		addEvent(event?: object, options?: {reason?: AgendaDayView.Reason}): void;

		/**
		 * Remove event from day.
		 */
		removeEvent(event?: object, options?: {reason?: AgendaDayView.Reason}): void;

		static Event: Agenda.EventTypes;

	}

	export namespace AgendaDayView {
		interface Options extends PackageCore.Component.Options {
			viewDate?: PackageCore.Date;

			description?: (string | number | PackageCore.Translation);

			icon?: PackageCore.ImageMetadata;

			events?: globalThis.Array<Agenda.EventData>;

			summary?: AgendaDayView.Summary;

			background?: AgendaDayView.Background;

			eventsLimit?: number;

			showHeader?: boolean;

			showLongViewDate?: boolean;

			readOnly?: boolean;

			clickAction?: (date: PackageCore.Date) => void;

			eventClickAction?: (event: Agenda.EventData) => void;

			showMoreAction?: (date: PackageCore.Date) => void;

		}

		interface Summary {
			text: (string | PackageCore.Translation);

			action: (date: PackageCore.Date) => void;

		}

		export import Reason = Self.AgendaConstant.Reason;

		enum Background {
			WEAK,
			MEDIUM,
			STRONG,
		}

	}

	/**
	 * Agenda event
	 */
	export class AgendaEvent extends PackageCore.Component {
		constructor(options?: AgendaEvent.Options);

		/**
		 * Event
		 */
		event: Agenda.EventData;

		/**
		 * Event badge
		 */
		badge: (string | number | PackageCore.Translation);

		/**
		 * Click action
		 */
		clickAction: (((event: Agenda.EventData) => void) | null);

		/**
		 * Read only
		 */
		readOnly: boolean;

	}

	export namespace AgendaEvent {
		interface Options extends PackageCore.Component.Options {
			event?: Agenda.EventData;

			showDescription?: boolean;

			badge?: (string | number | PackageCore.Translation);

			clickAction?: (event: Agenda.EventData) => void;

		}

		enum Color {
			AZURE,
			RED,
			PINK,
			PURPLE,
			THEMED,
			NEUTRAL,
		}

	}

	/**
	 * Event placeholder
	 */
	class AgendaEventPlaceholder extends PackageCore.Component {
		constructor(options?: AgendaEventPlaceholder.Options);

		/**
		 * Dark theme for placeholders
		 */
		dark: boolean;

	}

	namespace AgendaEventPlaceholder {
		interface Options extends PackageCore.Component.Options {
			dark?: boolean;

		}

	}

	export class AgendaMonthView extends PackageCore.Component {
		constructor(options?: AgendaMonthView.Options);

		/**
		 * Days data
		 */
		daysConfig: (date: PackageCore.Date) => AgendaDayView.Options;

		/**
		 * Events
		 */
		events: globalThis.Array<Agenda.EventData>;

		/**
		 * Highlight weekends
		 */
		highlightWeekends: boolean;

		/**
		 * Show header
		 */
		showHeader: boolean;

		/**
		 * Month first day, 0 = SUNDAY; 6 = MONDAY
		 */
		startingDay: number;

		/**
		 * Read only
		 */
		readOnly: boolean;

		/**
		 * View date
		 */
		viewDate: PackageCore.Date;

		/**
		 * Number of weeks shown; null for whole month
		 */
		weeksCount: number;

		/**
		 * Day click action
		 */
		dayClickAction: (((date: PackageCore.Date) => void) | null);

		/**
		 * Event click action
		 */
		eventClickAction: (((event: Agenda.EventData) => void) | null);

		/**
		 * Show more link action
		 */
		showMoreAction: (((date: PackageCore.Date) => void) | null);

		/**
		 * Add event to month and day.
		 */
		addEvent(event?: object, options?: {reason?: AgendaMonthView.Reason}): void;

		/**
		 * Remove event from month and day.
		 */
		removeEvent(event?: object, options?: {reason?: AgendaMonthView.Reason}): void;

		/**
		 * Gets events from specific date
		 */
		getEventsFromDate(date?: PackageCore.Date): void;

		static Event: Agenda.EventTypes;

	}

	export namespace AgendaMonthView {
		interface Options extends PackageCore.Component.Options {
			viewDate?: PackageCore.Date;

			startingDay?: number;

			events?: globalThis.Array<Agenda.EventData>;

			showHeader?: boolean;

			highlightWeekends?: boolean;

			weeksCount?: number;

			dayClickAction?: (date: PackageCore.Date) => void;

			eventClickAction?: (event: Agenda.EventData) => void;

			showMoreAction?: (date: PackageCore.Date) => void;

			daysConfig?: (date: PackageCore.Date) => AgendaDayView.Options;

		}

		export import Reason = Self.AgendaConstant.Reason;

	}

	/**
	 * Agenda view
	 */
	export class AgendaView extends PackageCore.Component {
		constructor(options?: AgendaView.Options);

		/**
		 * Events
		 */
		events: globalThis.Array<Agenda.EventData>;

		/**
		 * Read only
		 */
		readOnly: boolean;

		/**
		 * Show date
		 */
		showDate: boolean;

		/**
		 * Show day
		 */
		showDay: boolean;

		/**
		 * View date
		 */
		viewDate: PackageCore.Date;

		/**
		 * Event click action
		 */
		eventClickAction: (((event: Agenda.EventData) => void) | null);

	}

	export namespace AgendaView {
		interface Options extends PackageCore.Component.Options {
			events?: globalThis.Array<Agenda.EventData>;

			viewDate?: PackageCore.Date;

			showDate?: boolean;

			showDay?: boolean;

			readOnly?: boolean;

			eventClickAction?: (event: Agenda.EventData) => void;

		}

	}

	/**
	 * Agenda view header
	 */
	export class AgendaViewHeader extends PackageCore.Component {
		constructor(options?: AgendaViewHeader.Options);

		/**
		 * Highlighted date
		 */
		highlightedDate: PackageCore.Date;

		/**
		 * Header length
		 */
		length: number;

		/**
		 * Show date
		 */
		showDate: boolean;

		/**
		 * Show day
		 */
		showDay: boolean;

		/**
		 * Start date
		 */
		startDate: PackageCore.Date;

	}

	export namespace AgendaViewHeader {
		interface Options extends PackageCore.Component.Options {
			startDate?: PackageCore.Date;

			length?: number;

			showDate?: boolean;

			showDay?: boolean;

			highlightedDate?: PackageCore.Date;

		}

	}

	/**
	 * Agenda week time view
	 */
	export class AgendaWeekTimeView extends PackageCore.Component {
		constructor(options?: AgendaWeekTimeView.Options);

		/**
		 * Days count
		 */
		daysCount: object;

		/**
		 * Days data
		 */
		daysConfig: (date: PackageCore.Date) => AgendaDayView.Options;

		/**
		 * Events
		 */
		events: globalThis.Array<Agenda.EventData>;

		/**
		 * Show header
		 */
		showHeader: boolean;

		/**
		 * Read only week
		 */
		readOnly: boolean;

		/**
		 * Week first day, 0 = SUNDAY; 6 = MONDAY
		 */
		startingDay: number;

		/**
		 * View date
		 */
		viewDate: PackageCore.Date;

		/**
		 * Time click action
		 */
		timeClickAction: (((date: PackageCore.Date) => void) | null);

		/**
		 * Day click action
		 */
		dayClickAction: (((date: PackageCore.Date) => void) | null);

		/**
		 * Event click action
		 */
		eventClickAction: (((event: Agenda.EventData) => void) | null);

		/**
		 * Add event to month and day.
		 */
		addEvent(event?: object, options?: {reason?: AgendaWeekTimeView.Reason}): void;

		/**
		 * Remove event from month and day.
		 */
		removeEvent(event?: object, options?: {reason?: AgendaWeekTimeView.Reason}): void;

		/**
		 * Gets events from specific date
		 */
		getEventsFromDate(date?: PackageCore.Date): void;

		static Event: Agenda.EventTypes;

	}

	export namespace AgendaWeekTimeView {
		interface Options extends PackageCore.Component.Options {
			viewDate?: PackageCore.Date;

			events?: globalThis.Array<Agenda.EventData>;

			showHeader?: boolean;

			readOnly?: boolean;

			startingDay?: number;

			daysCount?: number;

			timeClickAction?: (date: PackageCore.Date) => void;

			dayClickAction?: (date: PackageCore.Date) => void;

			eventClickAction?: (event: Agenda.EventData) => void;

			daysConfig?: (date: PackageCore.Date) => AgendaDayView.Options;

		}

		export import Reason = Self.AgendaConstant.Reason;

	}

	/**
	 * Application Header is responsible for the standard-looking NetSuite application header area (title, subtitle, status, icon, actions, links and tools) placed right below the System Header.
	 */
	export class ApplicationHeader extends PackageCore.Component {
		/**
		 * Constructs ApplicationHeader
		 */
		constructor(options?: ApplicationHeader.Options);

		/**
		 * Gets application title
		 */
		title: (string | number | PackageCore.Component | PackageCore.Translation);

		/**
		 * Gets application subtitle
		 */
		subtitle: (string | number | PackageCore.Component | PackageCore.Translation);

		/**
		 * Gets the badge-like status flowing right after the title
		 */
		badge: (string | number | PackageCore.Translation | Badge.Options);

		/**
		 * Gets the decorative icon representing the application
		 */
		icon: (object | globalThis.Array<any> | string | PackageCore.ImageMetadata | PackageCore.Component | PackageCore.VDom.Element);

		/**
		 * Gets list of actions to get represented within header
		 */
		actions: globalThis.Array<ApplicationHeader.ActionDefinition>;

		/**
		 * Gets list of links navigating away from this application
		 */
		links: globalThis.Array<ApplicationHeader.LinkDefinition>;

		/**
		 * Gets the supplementary component to be placed within the header area
		 */
		tools: PackageCore.Component;

		/**
		 * Gap on sides of the component
		 */
		outerGap: ApplicationHeader.GapSize;

		/**
		 * Sets application title
		 */
		setTitle(title: (string | number | PackageCore.Component | PackageCore.Translation)): void;

		/**
		 * Sets application subtitle
		 */
		setSubtitle(subtitle: (string | number | PackageCore.Component | PackageCore.Translation)): void;

		/**
		 * Sets the badge-like status flowing right after the title
		 */
		setBadge(badge: (string | number | PackageCore.Translation)): void;

		/**
		 * Sets the decorative icon representing the application
		 */
		setIcon(icon: (object | globalThis.Array<any> | string | PackageCore.ImageMetadata)): void;

		/**
		 * Sets list of links navigating away from this application
		 */
		setLinks(links: globalThis.Array<ApplicationHeader.LinkDefinition>): void;

		/**
		 * Sets list of actions to get represented within header.
		 */
		setActions(actions: globalThis.Array<ApplicationHeader.ActionDefinition>): void;

		/**
		 * Sets the supplementary component to be placed within the header area
		 */
		setTools(tools: PackageCore.Component): void;

		/**
		 * Returns handle for action of given id.
		 */
		getAction(actionId?: number): (ApplicationHeader.ActionHandle | null);

	}

	export namespace ApplicationHeader {
		interface LinkDefinition {
			label?: (string | PackageCore.Translation);

			url?: (string | PackageCore.Url);

			route?: (string | PackageCore.Route | Link.Route);

		}

		interface ActionDefinition {
			action?: () => void;

			enabled?: boolean;

			id?: string;

			label?: (string | PackageCore.Translation);

			type?: ApplicationHeader.ActionType;

			automationId?: string;

		}

		interface ActionHandle {
			setEnabled?: (enabled: boolean) => ApplicationHeader.ActionHandle;

			setLabel?: (label: (string | PackageCore.Translation)) => ApplicationHeader.ActionHandle;

		}

		interface GapSizeObject {
			top?: ApplicationHeader.GapSize;

			bottom?: ApplicationHeader.GapSize;

			start?: ApplicationHeader.GapSize;

			end?: ApplicationHeader.GapSize;

			horizontal?: ApplicationHeader.GapSize;

			vertical?: ApplicationHeader.GapSize;

		}

		interface Options extends PackageCore.Component.Options {
			actions?: globalThis.Array<ApplicationHeader.ActionDefinition>;

			icon?: (object | globalThis.Array<any> | string | PackageCore.ImageMetadata | PackageCore.Component | PackageCore.VDom.Element);

			links?: globalThis.Array<ApplicationHeader.LinkDefinition>;

			badge?: (string | number | PackageCore.Translation | Badge.Options);

			subtitle?: (string | number | PackageCore.Component | PackageCore.Translation);

			title?: (string | number | PackageCore.Component | PackageCore.Translation);

			tools?: PackageCore.Component;

			outerGap?: (ApplicationHeader.GapSize | ApplicationHeader.GapSizeObject);

		}

		enum ActionType {
			PRIMARY,
			SECONDARY,
			GHOST,
		}

		export import GapSize = Self.GapSize;

	}

	/**
	 * Avatar is a placeholder graphic for a visualization of a persona.
	 */
	export class Avatar extends PackageCore.Component {
		/**
		 * Constructs Avatar
		 */
		constructor(options?: Avatar.Options);

		/**
		 * Avatar content
		 */
		content: (string | PackageCore.Translation | PackageCore.ImageMetadata | PackageCore.ImageMetadata.Options);

		/**
		 * When true, the avatar is used for presentational purposes (affects accessibility)
		 */
		presentation: boolean;

		/**
		 * Avatar size
		 */
		size: Avatar.Size;

		/**
		 * Avatar color
		 */
		color: (Avatar.Color | Avatar.RefreshedColor | Avatar.RedwoodColor);

		/**
		 * Avatar border radius
		 */
		borderRadius: Avatar.BorderRadius;

		/**
		 * Sets content
		 */
		setContent(content: (string | PackageCore.Translation | object | PackageCore.ImageMetadata)): void;

		/**
		 * Sets avatar size
		 */
		setSize(size: Avatar.Size): void;

		/**
		 * Sets avatar color
		 */
		setColor(color: (Avatar.Color | Avatar.RefreshedColor | Avatar.RedwoodColor)): void;

		/**
		 * Sets image border radius
		 */
		setBorderRadius(borderRadius: Avatar.BorderRadius): void;

		/**
		 * Sets if the avatar is used for presentational purposes (affects accessibility)
		 */
		setPresentation(presentation: boolean): void;

	}

	export namespace Avatar {
		interface Options extends PackageCore.Component.Options {
			borderRadius?: Avatar.BorderRadius;

			content: (string | PackageCore.Translation | PackageCore.ImageMetadata | PackageCore.ImageMetadata.Options);

			presentation?: boolean;

			size?: Avatar.Size;

			color?: (Avatar.Color | Avatar.RefreshedColor | Avatar.RedwoodColor);

		}

		export import Size = PackageCore.ImageConstant.Size;

		/**
		 * Avatar semantic colors
		 */
		enum Color {
			DEFAULT,
			THEMED,
		}

		/**
		 * Avatar refreshed theme colors
		 */
		enum RefreshedColor {
			PURPLE,
			YELLOW,
			GREEN,
			PINK,
			TURQUOISE,
			BROWN,
			LIGHT,
		}

		/**
		 * Avatar redwood theme colors
		 */
		enum RedwoodColor {
			BLUE,
			GRAY,
			LILAC,
			TEAL,
			PINK,
			PURPLE,
			GREEN,
			SLATE,
		}

		export import BorderRadius = PackageCore.ImageConstant.BorderRadius;

	}

	/**
	 * Badge component
	 */
	export class Badge extends PackageCore.Component {
		constructor(options?: Badge.Options);

		/**
		 * Content
		 */
		content: (string | number | PackageCore.Translation | PackageCore.JSX.Element);

		/**
		 * Alias for content property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Type
		 */
		type: Badge.Type;

		/**
		 * Size
		 */
		size: Badge.Size;

		/**
		 * Straighten left badge corners
		 */
		start: boolean;

		/**
		 * Straighten right badge corners
		 */
		end: boolean;

		/**
		 * Set content
		 */
		setContent(content: (string | number | PackageCore.Translation)): void;

		/**
		 * Set type
		 */
		setType(type: Badge.Type): void;

		/**
		 * Set size
		 */
		setSize(size: Badge.Size): void;

		/**
		 * Toggle start badge
		 */
		setStart(start: boolean): void;

		/**
		 * Toggle end badge
		 */
		setEnd(end: boolean): void;

	}

	export namespace Badge {
		interface Options extends PackageCore.Component.Options {
			content?: (string | number | PackageCore.Translation);

			end?: boolean;

			type?: Badge.Type;

			size?: Badge.Size;

			start?: boolean;

		}

		enum Type {
			SOLID,
			SUBTLE,
		}

		enum Size {
			DEFAULT,
			SMALL,
		}

	}

	/**
	 * BannerMessage is a simple static component, that is used as a carrier of information important to user.
	 */
	export class BannerMessage extends PackageCore.Component {
		/**
		 * Constructs BannerMessage
		 */
		constructor(options?: BannerMessage.Options);

		/**
		 * BannerMessage type
		 */
		type: BannerMessage.Type;

		/**
		 * BannerMessage type
		 */
		layout: BannerMessage.Layout;

		/**
		 * Message title
		 */
		title: (string | PackageCore.Translation);

		/**
		 * BannerMessage content
		 */
		content: (string | PackageCore.Translation | PackageCore.Component);

		/**
		 * Alias for content property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * States if BannerMessage has close button
		 */
		showCloseButton: boolean;

		/**
		 * Closes the Banner Message
		 */
		close(options?: object): void;

		static Event: BannerMessage.EventTypes;

	}

	export namespace BannerMessage {
		interface Options extends PackageCore.Component.Options {
			content: (string | PackageCore.Translation | PackageCore.Component);

			layout?: BannerMessage.Layout;

			showCloseButton?: boolean;

			title?: (string | PackageCore.Translation);

			type?: BannerMessage.Type;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			CLOSED: string;

		}

		export import Type = PackageCore.UserMessageService.MessageType;

		enum Layout {
			DEFAULT,
			INLINE,
		}

		enum Reason {
			CALL,
			CLOSE_BUTTON,
		}

	}

	/**
	 * BannerPanel is a container for Banner Messages
	 */
	export class BannerPanel extends PackageCore.Component {
		/**
		 * Constructs BannerPanel
		 */
		constructor(options?: BannerPanel.Options);

		/**
		 * Gets array of messages
		 */
		messages: globalThis.Array<BannerMessage>;

		/**
		 * Toggle manual management of banner messages
		 */
		manual: boolean;

		/**
		 * Adds message(s) to the panel
		 */
		add(message: (BannerMessage | globalThis.Array<BannerMessage>)): void;

		/**
		 * Remove message from the panel
		 */
		remove(message: BannerMessage): void;

		/**
		 * Closes and removes all messages in panel
		 */
		clear(): void;

		/**
		 * Creates a Banner Message from user message
		 */
		createUserMessage(message: PackageCore.UserMessageService.MessageOptions): BannerMessage;

		/**
		 * Connect to user message service
		 */
		connect(service: PackageCore.UserMessageService): void;

		/**
		 * Disconnect from user message service
		 */
		disconnect(): void;

	}

	export namespace BannerPanel {
		interface Options extends PackageCore.Component.Options {
			messages?: globalThis.Array<BannerMessage>;

			position?: BannerPanel.Position;

			manual?: boolean;

		}

		enum Position {
			RELATIVE,
			ABSOLUTE,
		}

	}

	/**
	 * UIF Studio base bundle
	 */
	namespace BaseBundle {
	}

	/**
	 * Blank content
	 */
	class BlankPortlet extends PackageCore.Component {
		constructor(options?: BlankPortlet.Options);

	}

	namespace BlankPortlet {
		interface Options extends PackageCore.Component.Options {
		}

	}

	/**
	 * Divider component
	 */
	export class Breadcrumbs extends PackageCore.Component {
		/**
		 * Constructor
		 */
		constructor(options?: Breadcrumbs.Options);

		children: PackageCore.VDom.Children;

		items: globalThis.Array<BreadcrumbsItem.Options>;

		expanded: boolean;

		size: Breadcrumbs.Size;

		expandStrategy: Breadcrumbs.ExpandStrategy;

		overflowStrategy: Breadcrumbs.OverflowStrategy;

		separatorSymbol: (Breadcrumbs.SeparatorSymbol | string);

		/**
		 * Sets whether the component is expanded
		 */
		setExpanded(value: boolean): void;

		/**
		 * Toggles expanded state
		 */
		toggleExpanded(): void;

		/**
		 * Auto collapses the component if it is wider than its parent
		 */
		autoCollapse(): void;

		/**
		 * Parses JSX items into standard
		 */
		private parseChildren(children: PackageCore.VDom.Children): globalThis.Array<BreadcrumbsItem.Options>;

		/**
		 * Creates items for expanded state
		 */
		private createExpandedItems(): globalThis.Array<BreadcrumbsItem>;

		/**
		 * Creates items for collapsed state
		 */
		private createCollapsedItems(): globalThis.Array<BreadcrumbsItem>;

		/**
		 * Creates collapsed item
		 */
		private createCollapsedItem(): BreadcrumbsItem;

		/**
		 * Creates items
		 */
		private createItems(): globalThis.Array<BreadcrumbsItem>;

		static getStyles(): void;

		static getRefreshedStyles(): void;

		static getRedwoodStyles(): void;

		/**
		 * Breadcrumbs item JSX component
		 */
		static Item(props?: BreadcrumbsItem.BaseProps): PackageCore.JSX.Element;

	}

	export namespace Breadcrumbs {
		interface Options extends PackageCore.Component.Options {
			expandStrategy?: Breadcrumbs.ExpandStrategy;

			overflowStrategy?: Breadcrumbs.OverflowStrategy;

			size?: Breadcrumbs.Size;

			separatorSymbol?: (Breadcrumbs.SeparatorSymbol | string);

			items?: globalThis.Array<BreadcrumbsItem.Options>;

			expanded?: boolean;

		}

		export import Size = Self.BreadcrumbsItem.Size;

		export import SeparatorSymbol = Self.BreadcrumbsItem.SeparatorSymbol;

		export import IconPosition = Self.BreadcrumbsItem.IconPosition;

		export import ItemType = Self.BreadcrumbsItem.Type;

		enum ExpandStrategy {
			EXPAND,
			MENU,
			NONE,
		}

		enum OverflowStrategy {
			WRAP,
			COLLAPSE,
			NONE,
		}

	}

	/**
	 * Divider component
	 */
	export class BreadcrumbsItem extends PackageCore.Component {
		/**
		 * Constructor
		 */
		constructor(options?: Breadcrumbs.Options);

		label: (string | number | PackageCore.Translation);

		icon: Image.Source;

		iconPosition: BreadcrumbsItem.IconPosition;

		size: BreadcrumbsItem.Size;

		expandable: boolean;

		collapsible: boolean;

		separatorSymbol: (BreadcrumbsItem.SeparatorSymbol | string);

		url: (string | PackageCore.Url);

		route: (string | PackageCore.Route | Link.Route);

		type: BreadcrumbsItem.Type;

		menu: globalThis.Array<object>;

		/**
		 * Creates textual item
		 */
		private createTextItem(): globalThis.Array<PackageCore.JSX.Element>;

		/**
		 * Creates link item
		 */
		private createLinkItem(): PackageCore.JSX.Element;

		/**
		 * Creates collapsed item
		 */
		private createCollapsedItem(): PackageCore.JSX.Element;

		/**
		 * Creates separator
		 */
		private createSeparator(): PackageCore.JSX.Element;

		/**
		 * Creates menu button
		 */
		private createMenuButton(): PackageCore.JSX.Element;

		static getStyles(): void;

		static getRefreshedStyles(): void;

		static getRedwoodStyles(): void;

		static Event: BreadcrumbsItem.EventTypes;

	}

	export namespace BreadcrumbsItem {
		interface BaseProps extends PackageCore.Component.Options {
			icon?: Image.Source;

			iconPosition?: BreadcrumbsItem.IconPosition;

			collapsible?: boolean;

			url?: (string | PackageCore.Url);

			route?: (string | PackageCore.Route | Link.Route);

			type?: BreadcrumbsItem.Type;

			size?: BreadcrumbsItem.Size;

			expandable?: boolean;

			separatorSymbol?: BreadcrumbsItem.SeparatorSymbol;

			menu?: globalThis.Array<object>;

		}

		interface Options extends BreadcrumbsItem.BaseProps {
			label?: (string | number | PackageCore.Translation);

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			EXPANDED: symbol;

		}

		enum Type {
			TEXT,
			LINK,
			COLLAPSED,
		}

		enum Size {
			REGULAR,
			LARGE,
			LARGER,
		}

		enum IconPosition {
			START,
			END,
		}

		enum SeparatorSymbol {
			SLASH,
			DASH,
			GREATER_THAN,
		}

	}

	/**
	 * Simple clickable command button.
	 */
	export class Button extends PackageCore.Component {
		/**
		 * Constructs Button
		 */
		constructor(options?: Button.Options);

		/**
		 * Gets Button action
		 */
		action: Button.ActionCallback;

		/**
		 * Gets label text
		 */
		label: (null | string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Checks if the button has a text label
		 */
		hasLabel: boolean;

		/**
		 * Gets Button icon
		 */
		icon: (PackageCore.ImageMetadata | null);

		/**
		 * Checks if the button has an icon
		 */
		hasIcon: boolean;

		/**
		 * Gets icon position
		 */
		iconPosition: Button.IconPosition;

		/**
		 * Gets size of button
		 */
		size: Button.Size;

		/**
		 * Gets type of button
		 */
		type: Button.Type;

		/**
		 * Gets hierarchy of button
		 */
		hierarchy: Button.Hierarchy;

		/**
		 * Gets Button behavior
		 */
		behavior: Button.Behavior;

		/**
		 * Gets true if the button is toggled
		 */
		toggled: boolean;

		/**
		 * Gets true if the button has a badge
		 */
		hasBadge: boolean;

		/**
		 * Gets the button badge
		 */
		badge: (boolean | string | number | PackageCore.Translation | Button.BadgeDefinition);

		/**
		 * Sets label text
		 */
		setLabel(label: (null | string | number | PackageCore.Translation | PackageCore.Component)): void;

		/**
		 * Sets icon
		 */
		setIcon(icon: (object | null)): void;

		/**
		 * Sets badge
		 */
		setBadge(badge: (boolean | string | number | PackageCore.Translation | Button.BadgeDefinition)): void;

		/**
		 * Sets icon position
		 */
		setIconPosition(position: Button.IconPosition): void;

		/**
		 * Sets button size
		 */
		setSize(size: Button.Size): void;

		/**
		 * Sets button type
		 */
		setType(type: Button.Type): void;

		/**
		 * Sets button hierarchy
		 */
		setHierarchy(hierarchy: Button.Hierarchy): void;

		/**
		 * Invokes button click
		 */
		click(): void;

		/**
		 * Sets button toggle state
		 */
		setToggled(toggled: boolean, options?: object): void;

		/**
		 * Handle click
		 */
		protected _handleClicked(options: object): void;

		/**
		 * Creates a toggle button
		 */
		static toggle(options: Button.ToggleButtonOptions): Button;

		static Event: Button.EventTypes;

	}

	export namespace Button {
		interface BadgeDefinition {
			text: (string | number | PackageCore.Translation);

			status?: PackageCore.Component.Status;

		}

		interface Options extends PackageCore.Component.Options {
			action?: Button.ActionCallback;

			badge?: (boolean | string | number | PackageCore.Translation | Button.BadgeDefinition);

			behavior?: Button.Behavior;

			icon?: Image.Source;

			iconPosition?: Button.IconPosition;

			label?: (null | string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

			size?: Button.Size;

			toggled?: boolean;

			type?: Button.Type;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			CLICK: string;

			KEY_UP: string;

		}

		type ActionCallback = (args: Button.ActionArgs, sender: Button) => void;

		interface ActionArgs {
			toggled: boolean;

			reason: string;

			button: Button;

		}

		interface ToggleButtonOptions extends Button.Options {
		}

		enum Size {
			SMALL,
			MEDIUM,
			LARGE,
		}

		enum IconPosition {
			LEFT,
			RIGHT,
			ABOVE,
			BELOW,
		}

		enum Type {
			DEFAULT,
			PRIMARY,
			PURE,
			EMBEDDED,
			GHOST,
			DANGER,
			LINK,
		}

		enum ToggleType {
			DEFAULT,
			GHOST,
			PURE,
		}

		enum Hierarchy {
			PRIMARY,
			SECONDARY,
			DANGER,
		}

		enum Behavior {
			DEFAULT,
			TOGGLE,
		}

		enum VisualStyle {
			STANDALONE,
			EMBEDDED,
		}

		enum Reason {
			CLICK,
			KEY_UP,
		}

		enum I18N {
			ABORT,
			CANCEL,
			CLOSE,
			COLLAPSE,
			EXPAND,
			FILL_DOWN,
			MAXIMIZE,
			MINIMIZE,
			OK,
			SEARCH,
			YES,
			NO,
		}

	}

	/**
	 * Cached data provider
	 */
	class CachedDataProvider {
		/**
		 * Constructs CachedDataProvider
		 */
		constructor(options?: CachedDataProvider.Options);

		/**
		 * Loads data
		 */
		load(query: any): globalThis.Promise<any>;

	}

	namespace CachedDataProvider {
		interface Options {
			getData?: (test: string) => globalThis.Array<any>;

		}

	}

	/**
	 * Calendar component
	 */
	export class Calendar extends PackageCore.Component {
		/**
		 * Constructs Calendar
		 */
		constructor(options?: Calendar.Options);

		/**
		 * Get/set the selected date
		 */
		selectedDate: (PackageCore.Date | null);

		/**
		 * The range start date
		 */
		rangeStart: (PackageCore.Date | null);

		/**
		 * The range end date
		 */
		rangeEnd: (PackageCore.Date | null);

		/**
		 * The view date
		 */
		viewDate: PackageCore.Date;

		/**
		 * The view type
		 */
		viewType: Calendar.ViewType;

		/**
		 * The base view type of the calendar
		 */
		baseViewType: Calendar.ViewType;

		/**
		 * Today's date
		 */
		today: PackageCore.Date;

		/**
		 * The number of calendar views
		 */
		numberOfViews: number;

		/**
		 * First allowed date
		 */
		startDate: (PackageCore.Date | null);

		/**
		 * Last allowed date
		 */
		endDate: (PackageCore.Date | null);

		/**
		 * First day of week
		 */
		firstDayOfWeek: number;

		/**
		 * Mouse wheel scroll enabled state
		 */
		wheelScrollEnabled: boolean;

		/**
		 * Current active descendant
		 */
		activeDescendant: (PackageCore.Component | null);

		/**
		 * Set the selected date
		 */
		setSelectedDate(date: (PackageCore.Date | null), options?: {updateView?: boolean; reason?: string}): void;

		/**
		 * Set the range start
		 */
		setRangeStart(date: (PackageCore.Date | null), options?: {reason?: string}): boolean;

		/**
		 * Set the range end
		 */
		setRangeEnd(date: (PackageCore.Date | null), options?: {reason?: string}): boolean;

		/**
		 * Sets startDate and endDate properties
		 */
		setDateRange(options: {start?: (PackageCore.Date | null); end?: (PackageCore.Date | null)}): void;

		/**
		 * Set the view date
		 */
		setViewDate(date: PackageCore.Date): void;

		/**
		 * Set the view type
		 */
		setViewType(type: Calendar.ViewType): void;

		/**
		 * Navigate in the calendar
		 */
		navigate(navigationDirection: Calendar.NavigationDirection): void;

		/**
		 * Check if date is selected
		 */
		isDateSelected(date: PackageCore.Date): boolean;

		/**
		 * Check if date is selectable
		 */
		isDateSelectable(date: PackageCore.Date): boolean;

		/**
		 * Check if date is before the start date
		 */
		isBeforeStart(date: PackageCore.Date): boolean;

		/**
		 * Check if date is after the end date
		 */
		isAfterEnd(date: PackageCore.Date): boolean;

		/**
		 * Check if date is in the allowed range
		 */
		isInAllowedRange(date: PackageCore.Date): boolean;

		/**
		 * Check if date is enabled
		 */
		isDateEnabled(date: PackageCore.Date): boolean;

		/**
		 * Check if date is in the selected range
		 */
		isRangeInside(date: PackageCore.Date): boolean;

		/**
		 * Check if date is the range end
		 */
		isRangeEnd(date: PackageCore.Date): boolean;

		/**
		 * Check if the date can be selected as the range start or range end
		 */
		isRangeSelectable(date: PackageCore.Date): boolean;

		/**
		 * Checks if date fits date range and is not disabled. Returns either the original date or nearest date that doesn't violate the restrictions (can take direction of "cursor" movement into consideration).
		 */
		private _coerceDateRestrictions(date: PackageCore.Date, direction?: number): (PackageCore.Date | null);

		static Event: Calendar.EventTypes;

	}

	export namespace Calendar {
		interface Options extends PackageCore.Component.Options {
			ariaFormat?: string;

			ariaLabel?: string;

			baseViewType?: Calendar.ViewType;

			decadeView?: CalendarDecadeView.Options;

			endDate?: (PackageCore.Date | null);

			firstDayOfWeek?: number;

			monthView?: CalendarMonthView.Options;

			numberOfViews?: number;

			rangeEnd?: (PackageCore.Date | null);

			rangeStart?: (PackageCore.Date | null);

			selectedDate?: (PackageCore.Date | null);

			showNextMonth?: boolean;

			showPreviousMonth?: boolean;

			showWeekNumbers?: boolean;

			startDate?: (PackageCore.Date | null);

			titleMonthFormat?: string;

			titleYearFormat?: string;

			today?: (PackageCore.Date | null);

			viewDate?: (PackageCore.Date | null);

			viewType?: Calendar.ViewType;

			wheelScrollEnabled?: boolean;

			yearView?: CalendarYearView.Options;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			DATE_SELECTED: string;

			DATE_CLICKED: string;

			RANGE_START_SELECTED: string;

			RANGE_END_SELECTED: string;

		}

		export import Day = Self.CalendarDay;

		export import Month = Self.CalendarMonth;

		export import MonthView = Self.CalendarMonthView;

		export import Year = Self.CalendarYear;

		export import YearView = Self.CalendarYearView;

		export import DecadeView = Self.CalendarDecadeView;

		/**
		 * Calendar view types.
		 */
		enum ViewType {
			MONTH,
			YEAR,
			DECADE,
		}

		enum VisualStyle {
			DEFAULT,
			EMBEDDED,
		}

		enum NavigationDirection {
			PREVIOUS_VIEW,
			PREVIOUS_ROW,
			PREVIOUS_ITEM,
			NEXT_VIEW,
			NEXT_ROW,
			NEXT_ITEM,
			FIRST_ITEM,
			LAST_ITEM,
		}

	}

	export class CalendarDay extends PackageCore.Component {
		/**
		 * Constructs CalendarDay
		 */
		constructor(options: CalendarDay.Options);

		/**
		 * The associated date
		 */
		date: PackageCore.Date;

		/**
		 * True if the day is selected
		 */
		selected: boolean;

		/**
		 * True if the day is selectable
		 */
		selectable: boolean;

		/**
		 * True if the day is today
		 */
		today: boolean;

		/**
		 * True if the day is before the start date
		 */
		beforeStart: boolean;

		/**
		 * True if the day is after the end date
		 */
		afterEnd: boolean;

		/**
		 * True if the day is from previous month
		 */
		previousMonth: boolean;

		/**
		 * True if the day is from the next month
		 */
		nextMonth: boolean;

		/**
		 * True if the day is the range start
		 */
		rangeStart: boolean;

		/**
		 * True if the day is inside a selected range
		 */
		rangeInside: boolean;

		/**
		 * True if the day is the range end
		 */
		rangeEnd: boolean;

		/**
		 * Function called before render to customize day
		 */
		customizeDay: (CalendarDay.CustomizeCallback | null);

		static Event: CalendarDay.EventTypes;

	}

	export namespace CalendarDay {
		interface Options extends PackageCore.Component.Options {
			date?: PackageCore.Date;

			ariaLabel?: string;

			selected?: boolean;

			selectable?: boolean;

			today?: boolean;

			beforeStart?: boolean;

			afterEnd?: boolean;

			previousMonth?: boolean;

			nextMonth?: boolean;

			rangeStart?: boolean;

			rangeInside?: boolean;

			rangeEnd?: boolean;

			customizeDay?: CalendarDay.CustomizeCallback;

		}

		type CustomizeCallback = (args: {date: PackageCore.Date; day: CalendarDay}) => void;

		interface EventTypes extends PackageCore.Component.EventTypes {
			CLICKED: string;

		}

		enum DayStatus {
			SELECTED,
			SELECTABLE,
			TODAY,
			BEFORE_START,
			AFTER_END,
			PREVIOUS_MONTH,
			NEXT_MONTH,
			RANGE_START,
			RANGE_INSIDE,
			RANGE_END,
		}

	}

	/**
	 * Calendar decade view
	 */
	export class CalendarDecadeView extends PackageCore.Component {
		/**
		 * Constructs CalendarDecadeView
		 */
		constructor(options: CalendarDecadeView.Options);

		/**
		 * Sets/gets the date that is displayed
		 */
		viewDate: PackageCore.Date;

		/**
		 * Sets/gets the selected date
		 */
		selectedDate: (PackageCore.Date | null);

		/**
		 * Returns the today's date
		 */
		today: PackageCore.Date;

		/**
		 * The first allowed date
		 */
		startDate: (PackageCore.Date | null);

		/**
		 * The last allowed date
		 */
		endDate: (PackageCore.Date | null);

		/**
		 * The year aria format
		 */
		ariaFormat: string;

		/**
		 * The year title format
		 */
		yearFormat: string;

		/**
		 * The year disabled function
		 */
		isYearDisabled: (((date: PackageCore.Date) => void) | null);

		/**
		 * The year customize function
		 */
		customizeYear: (CalendarYear.CustomizeCallback | null);

		/**
		 * Set the view date
		 */
		setViewDate(date: PackageCore.Date): void;

		/**
		 * Set the selected date
		 */
		setSelectedDate(date: (PackageCore.Date | null), options: {reason?: string}): void;

		/**
		 * Set a selected date range
		 */
		setDateRange(options: {start: (PackageCore.Date | null); end: (PackageCore.Date | null)}): void;

		/**
		 * Return the year for a given date
		 */
		yearForDate(date: PackageCore.Date): (CalendarYear | null);

		/**
		 * Return true if the year is selected
		 */
		isYearSelected(date: PackageCore.Date): boolean;

		/**
		 * Returns true if the year is selectable
		 */
		isYearSelectable(date: PackageCore.Date): boolean;

		/**
		 * Returns true if the year is before the start date
		 */
		isBeforeStart(date: PackageCore.Date): boolean;

		/**
		 * Returns true if the year is after the end date
		 */
		isAfterEnd(date: PackageCore.Date): boolean;

		/**
		 * Returns true if the year is in a selectable range
		 */
		isInAllowedRange(date: PackageCore.Date): boolean;

		/**
		 * Returns true if year is enabled
		 */
		isYearEnabled(date: PackageCore.Date): boolean;

		static decadeStart(date: PackageCore.Date): void;

		static Event: CalendarDecadeView.EventTypes;

	}

	export namespace CalendarDecadeView {
		interface Options extends PackageCore.Component.Options {
			viewDate: PackageCore.Date;

			ariaFormat: string;

			selectedDate?: PackageCore.Date;

			today?: PackageCore.Date;

			startDate?: PackageCore.Date;

			endDate?: PackageCore.Date;

			isYearDisabled?: (date: PackageCore.Date) => boolean;

			customizeYear?: CalendarYear.CustomizeCallback;

			yearFormat?: string;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			YEAR_SELECTED: string;

			YEAR_CLICKED: string;

		}

	}

	/**
	 * Calendar month
	 */
	export class CalendarMonth extends PackageCore.Component {
		/**
		 * Constructs CalendarMonth
		 */
		constructor(options: CalendarMonth.Options);

		/**
		 * The associated date
		 */
		date: PackageCore.Date;

		/**
		 * Label of the month
		 */
		label: string;

		/**
		 * True if the month is selected
		 */
		selected: boolean;

		/**
		 * True if the month is selectable
		 */
		selectable: boolean;

		/**
		 * True if this is the current month
		 */
		today: boolean;

		/**
		 * True if the month is before the start date
		 */
		beforeStart: boolean;

		/**
		 * True if the month is after the end date
		 */
		afterEnd: boolean;

		/**
		 * Function called before render to customize month
		 */
		customizeMonth: (CalendarMonth.CustomizeCallback | null);

		/**
		 * Make this month selected
		 */
		setSelected(value: boolean): void;

		/**
		 * Make this month selectable
		 */
		setSelectable(value: boolean): void;

		/**
		 * Mark this month as before the start date
		 */
		setBeforeStart(value: boolean): void;

		/**
		 * Mark this month as after the end date
		 */
		setAfterEnd(value: boolean): void;

		static Event: CalendarMonth.EventTypes;

	}

	export namespace CalendarMonth {
		interface Options extends PackageCore.Component.Options {
			date: PackageCore.Date;

			label: string;

			selected: boolean;

			selectable: boolean;

			today: boolean;

			beforeStart: boolean;

			afterEnd: boolean;

			customizeMonth: CalendarMonth.CustomizeCallback;

		}

		type CustomizeCallback = (args: {date: PackageCore.Date; month: CalendarMonth}) => void;

		interface EventTypes extends PackageCore.Component.EventTypes {
			CLICKED: string;

		}

	}

	/**
	 * Calendar month view
	 */
	export class CalendarMonthView extends PackageCore.Component {
		/**
		 * Constructs CalendarMonthView
		 */
		constructor(options: CalendarMonthView.Options);

		/**
		 * Sets/gets the date that is displayed
		 */
		viewDate: PackageCore.Date;

		/**
		 * Sets/gets the selected date
		 */
		selectedDate: (PackageCore.Date | null);

		/**
		 * Get/set the range start date
		 */
		rangeStart: (PackageCore.Date | null);

		/**
		 * Get/set the range end date
		 */
		rangeEnd: (PackageCore.Date | null);

		/**
		 * Returns the today's date
		 */
		today: PackageCore.Date;

		/**
		 * Start date
		 */
		startDate: (PackageCore.Date | null);

		/**
		 * End date
		 */
		endDate: (PackageCore.Date | null);

		/**
		 * The day labels
		 */
		dayLabels: globalThis.Array<any>;

		/**
		 * Show previous month
		 */
		showPreviousMonth: boolean;

		/**
		 * Show next month
		 */
		showNextMonth: boolean;

		/**
		 * Show week numbers
		 */
		showWeekNumbers: boolean;

		/**
		 * First day of week
		 */
		firstDayOfWeek: number;

		/**
		 * The month aria formatter
		 */
		ariaFormatter: (((date: PackageCore.Date) => string) | null);

		/**
		 * Customize day callback
		 */
		customizeDay: (CalendarDay.CustomizeCallback | null);

		/**
		 * Disabled day callback
		 */
		isDayDisabled: (((date: PackageCore.Date) => boolean) | null);

		/**
		 * Set the view date
		 */
		setViewDate(date: PackageCore.Date): void;

		/**
		 * Set the selected date
		 */
		setSelectedDate(date: (PackageCore.Date | null), options: {reason?: string}): void;

		/**
		 * Set the range start date
		 */
		setRangeStart(date: (PackageCore.Date | null)): void;

		/**
		 * Set the range end date
		 */
		setRangeEnd(date: (PackageCore.Date | null)): void;

		/**
		 * Set the start date and end date
		 */
		setDateRange(options: {start?: (PackageCore.Date | null); end?: (PackageCore.Date | null)}): void;

		/**
		 * Get the day for a particular date
		 */
		dayForDate(date: PackageCore.Date): (CalendarDay | null);

		/**
		 * Returns true if day is selected
		 */
		isDaySelected(date: PackageCore.Date): boolean;

		/**
		 * Returns true if day is selectable
		 */
		isDaySelectable(date: PackageCore.Date): boolean;

		/**
		 * Returns true if day is before the start date
		 */
		isBeforeStart(date: PackageCore.Date): boolean;

		/**
		 * Returns true if day is after the end date
		 */
		isAfterEnd(date: PackageCore.Date): boolean;

		/**
		 * Returns true if day is in the allowed range
		 */
		isInAllowedRange(date: PackageCore.Date): boolean;

		/**
		 * Returns true if day is the range start
		 */
		isRangeStart(date: PackageCore.Date): boolean;

		/**
		 * Returns true if day is inside a selected range
		 */
		isRangeInside(date: PackageCore.Date): boolean;

		/**
		 * Returns true if day is the range end
		 */
		isRangeEnd(date: PackageCore.Date): boolean;

		/**
		 * Returns true if day selectable as a range start or range end
		 */
		isRangeSelectable(date: PackageCore.Date): boolean;

		/**
		 * Returns true if day is enabled
		 */
		isDayEnabled(date: PackageCore.Date): boolean;

		static Event: CalendarMonthView.EventTypes;

	}

	export namespace CalendarMonthView {
		interface Options extends PackageCore.Component.Options {
			viewDate: PackageCore.Date;

			selectedDate?: PackageCore.Date;

			today?: PackageCore.Date;

			rangeStart?: PackageCore.Date;

			rangeEnd?: PackageCore.Date;

			startDate?: PackageCore.Date;

			endDate?: PackageCore.Date;

			dayLabels: globalThis.Array<string>;

			firstDayOfWeek?: number;

			showWeekNumbers?: boolean;

			showPreviousMonth?: boolean;

			showNextMonth?: boolean;

			isDayDisabled?: (date: PackageCore.Date) => boolean;

			ariaFormatter?: (date: PackageCore.Date) => string;

			customizeDay?: CalendarDay.CustomizeCallback;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			DAY_SELECTED: string;

			DAY_CLICKED: string;

		}

		enum I18N {
			WEEK,
		}

	}

	/**
	 * Calendar picker
	 */
	export class CalendarPicker extends Picker {
		/**
		 * Constructs CalendarPicker
		 */
		constructor(options: CalendarPicker.Options);

		/**
		 * The inner picker component - Calendar
		 */
		calendar: Calendar;

		/**
		 * Handles selection of a date
		 */
		private _handleDateSelected(args: object, currentDate: PackageCore.Date, oldDate: PackageCore.Date, reason: string): void;

		/**
		 * Handles click on a date
		 */
		private _handleDateClicked(args: {date: PackageCore.Date; viewType: Calendar.ViewType}): void;

		/**
		 * Sets active descendant
		 */
		private _setActiveDescendant(): void;

	}

	export namespace CalendarPicker {
		interface Options extends Picker.Options {
			calendar?: (Calendar | Calendar.Options);

			closeOnSelection?: boolean;

			returnSingleValue?: boolean;

		}

	}

	/**
	 * Calendar year
	 */
	export class CalendarYear extends PackageCore.Component {
		/**
		 * Constructs CalendarYear
		 */
		constructor(options: CalendarYear.Options);

		/**
		 * The associated date
		 */
		date: PackageCore.Date;

		/**
		 * True if the year is selected
		 */
		selected: boolean;

		/**
		 * True if the year is selectable
		 */
		selectable: boolean;

		/**
		 * True if this is the current year
		 */
		today: boolean;

		/**
		 * True if the year is before the start date
		 */
		beforeStart: boolean;

		/**
		 * True if the year is after the end date
		 */
		afterEnd: boolean;

		/**
		 * Format how to display year
		 */
		yearFormat: string;

		/**
		 * Function called before render to customize year
		 */
		customizeYear: CalendarYear.CustomizeCallback;

		/**
		 * Select the year
		 */
		setSelected(value: boolean): void;

		/**
		 * Make the year selectable
		 */
		setSelectable(value: boolean): void;

		/**
		 * Mark the year as before the start date
		 */
		setBeforeStart(value: boolean): void;

		/**
		 * Mark the year as after the end date
		 */
		setAfterEnd(value: boolean): void;

		static Event: CalendarYear.EventTypes;

	}

	export namespace CalendarYear {
		interface Options extends PackageCore.Component.Options {
			date: PackageCore.Date;

			selected: boolean;

			selectable: boolean;

			today: boolean;

			beforeStart: boolean;

			afterEnd: boolean;

			yearFormat: string;

			customizeYear: CalendarYear.CustomizeCallback;

		}

		type CustomizeCallback = (args: {date: PackageCore.Date; year: CalendarYear}) => void;

		interface EventTypes extends PackageCore.Component.EventTypes {
			CLICKED: string;

		}

	}

	/**
	 * Calendar year view
	 */
	export class CalendarYearView extends PackageCore.Component {
		/**
		 * Constructs CalendarYearView
		 */
		constructor(options: CalendarYearView.Options);

		/**
		 * Sets/gets the date that is displayed
		 */
		viewDate: PackageCore.Date;

		/**
		 * Sets/gets the selected date
		 */
		selectedDate: (PackageCore.Date | null);

		/**
		 * Returns the today's date
		 */
		today: PackageCore.Date;

		/**
		 * Start date
		 */
		startDate: (PackageCore.Date | null);

		/**
		 * End date
		 */
		endDate: (PackageCore.Date | null);

		/**
		 * The month labels
		 */
		monthLabels: globalThis.Array<any>;

		/**
		 * Disabled month callback
		 */
		isMonthDisabled: (((date: PackageCore.Date) => boolean) | null);

		/**
		 * The month aria formatter
		 */
		ariaFormatter: (((date: PackageCore.Date) => string) | null);

		/**
		 * The customize month callback
		 */
		customizeMonth: (CalendarMonth.CustomizeCallback | null);

		/**
		 * Set the view date
		 */
		setViewDate(date: PackageCore.Date): void;

		/**
		 * Set the selected date
		 */
		setSelectedDate(date: (PackageCore.Date | null), options: {reason?: string}): void;

		/**
		 * Set the start date and end date
		 */
		setDateRange(options: {start?: (PackageCore.Date | null); end?: (PackageCore.Date | null)}): void;

		/**
		 * Get the month for a particular date
		 */
		monthForDate(date: PackageCore.Date): (CalendarMonth | null);

		/**
		 * Returns true if month is selected
		 */
		isMonthSelected(date: PackageCore.Date): boolean;

		/**
		 * Returns true if month is selectable
		 */
		isMonthSelectable(date: PackageCore.Date): boolean;

		/**
		 * Returns true if month is before the start date
		 */
		isBeforeStart(date: PackageCore.Date): boolean;

		/**
		 * Returns true if month is after the end date
		 */
		isAfterEnd(date: PackageCore.Date): boolean;

		/**
		 * Returns true if month is in allowed range
		 */
		isInRange(date: PackageCore.Date): boolean;

		/**
		 * Returns true if month is enabled
		 */
		isMonthEnabled(date: PackageCore.Date): boolean;

		static Event: CalendarYearView.EventTypes;

	}

	export namespace CalendarYearView {
		interface Options extends PackageCore.Component.Options {
			viewDate: PackageCore.Date;

			selectedDate?: PackageCore.Date;

			today?: PackageCore.Date;

			startDate?: PackageCore.Date;

			endDate?: PackageCore.Date;

			monthLabels?: globalThis.Array<string>;

			isMonthDisabled?: (date: PackageCore.Date) => boolean;

			ariaFormatter?: (date: PackageCore.Date) => string;

			customizeMonth?: CalendarMonth.CustomizeCallback;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			MONTH_SELECTED: string;

			MONTH_CLICKED: string;

		}

	}

	/**
	 * Card
	 */
	export class Card extends PackageCore.Component {
		/**
		 * Card component
		 */
		constructor(options?: Card.Options);

		/**
		 * Get card action
		 */
		action: ((() => void) | null);

		/**
		 * Get card decorator
		 */
		decorator: (PackageCore.Decorator | null);

		/**
		 * Get card image
		 */
		image: (Image | null);

		/**
		 * Image size
		 */
		imageSize: Card.ImageSize;

		/**
		 * Get title text
		 */
		title: (string | null);

		/**
		 * Get main text description
		 */
		text: (string | null);

		/**
		 * Text property alias for VDom
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Get additional tools
		 */
		tools: (PackageCore.Component | null);

		/**
		 * Get card mode
		 */
		mode: Card.Mode;

		/**
		 * True if the card has an action
		 */
		hasAction: boolean;

		/**
		 * True if the card has an image
		 */
		hasImage: boolean;

		/**
		 * True if the card has a text
		 */
		hasText: boolean;

		/**
		 * True if the card has a title
		 */
		hasTitle: boolean;

		/**
		 * True if the card has tools section
		 */
		hasTools: boolean;

		/**
		 * Update card action
		 */
		setAction(action: ((() => void) | null)): void;

		/**
		 * Update card image
		 */
		setImage(image: (string | PackageCore.Url | Image | null)): void;

		/**
		 * Update card title
		 */
		setTitle(title: (string | null)): void;

		/**
		 * Update card text
		 */
		setText(text: (string | null)): void;

		/**
		 * Update tools section
		 */
		setTools(tools: (PackageCore.Component | null)): void;

		/**
		 * Set card mode
		 */
		setMode(mode: Card.Mode): void;

		/**
		 * Set card decorator
		 */
		setDecorator(decorator: (PackageCore.Decorator | null)): void;

		/**
		 * Decorator to use on draggable cards.
		 */
		static draggableDecorator(options: object): PackageCore.Decorator;

		/**
		 * Default decorator
		 */
		static defaultDecorator(options?: object): PackageCore.Decorator;

		/**
		 * Factory function for creating Metric Card
		 */
		static metric(title: (string | number | PackageCore.Translation), metric: (string | number | PackageCore.Translation), metadata?: (string | number | PackageCore.Translation), description?: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element), toolbar?: (PackageCore.Component | PackageCore.JSX.Element | globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>), action?: () => void, cardOptions?: Card.Options): Card;

		/**
		 * Factory function for creating Metric Card for use in VDom/JSX
		 */
		static Metric(title: (string | number | PackageCore.Translation), metric: (string | number | PackageCore.Translation), metadata?: (string | number | PackageCore.Translation), children?: PackageCore.VDom.Children, toolbar?: (PackageCore.Component | PackageCore.JSX.Element | globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>), action?: () => void, cardOptions?: Card.Options): PackageCore.JSX.Element;

	}

	export namespace Card {
		interface ImageSize {
			aspectRatio?: number;

			height?: string;

			width?: string;

		}

		interface Options extends PackageCore.Component.Options {
			decorator?: PackageCore.Decorator;

			image?: (string | PackageCore.Url | Image);

			imageSize?: Card.ImageSize;

			mode?: Card.Mode;

			text?: string;

			title?: string;

			tools?: PackageCore.Component;

			action?: () => void;

		}

		enum Mode {
			VERTICAL,
			HORIZONTAL,
		}

	}

	/**
	 * Field facade for a DataGrid cell
	 */
	export class CellField extends PackageCore.Component {
		/**
		 * Constructs CellField
		 */
		constructor(options?: CellField.Options);

		/**
		 * The associated Cell
		 */
		cell: GridCell;

		/**
		 * Field value
		 */
		value: any;

		/**
		 * Field editability. By default field is editable if cell is editable.
		 */
		editable: boolean;

		/**
		 * Mandatory flag
		 */
		mandatory: boolean;

		/**
		 * Field size
		 */
		size: Field.Size;

		/**
		 * Field orientation
		 */
		orientation: Field.Orientation;

		/**
		 * Reserve fixed space on the right side of the control for validity icon and helper buttons.
		 */
		offset: boolean;

		/**
		 * Assistive content component
		 */
		assistiveContent: (PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Inline option. Special type of field usable for standalone Checkbox or RadioButton.
		 */
		inline: boolean;

		/**
		 * Field level help
		 */
		fieldLevelHelp: (Field.FieldLevelHelpCallback | HelpService.FieldLevelHelpOptions | null);

		/**
		 * Focus the field input
		 */
		activate(): void;

		/**
		 * Commit changes from the field to the cell
		 */
		acceptChanges(): void;

		/**
		 * Discard current changes in the field
		 */
		discardChanges(): void;

		/**
		 * Enable/disable field editing
		 */
		setEditable(value: boolean): void;

	}

	export namespace CellField {
		interface Options extends PackageCore.Component.Options {
			cell: GridCell;

			size?: Field.Size;

			orientation?: Field.Orientation;

			offset?: boolean;

			mandatory?: boolean;

			fieldLevelHelp?: (Field.FieldLevelHelpCallback | HelpService.FieldLevelHelpOptions);

			assistiveContent?: PackageCore.Component;

			acceptChangesOnFocusOut?: boolean;

			inline?: boolean;

		}

		export import Size = Self.Field.Size;

	}

	/**
	 * Chart component render series of data into graphs
	 */
	export class Chart extends PackageCore.Component {
		/**
		 * Constructs Chart
		 */
		constructor(options?: Chart.Options);

		/**
		 * Get custom highcharts definition
		 */
		definition: (object | null);

		/**
		 * Gets highlightFunction
		 */
		highlightFunction: (((data: Chart.PointData) => boolean) | null);

		/**
		 * Gets legend
		 */
		legend: boolean;

		/**
		 * Gets title
		 */
		title: (null | string | number | PackageCore.Translation);

		/**
		 * Gets point tooltip
		 */
		pointTooltip: Chart.Tooltip;

		/**
		 * Gets chart type
		 */
		type: Chart.Type;

		/**
		 * Gets graph series
		 */
		series: globalThis.Array<Chart.Series>;

		/**
		 * Gets stacking option
		 */
		stacking: (Chart.Stacking | null);

		/**
		 * Gets subtitle
		 */
		subtitle: (null | string | number | PackageCore.Translation);

		/**
		 * Gets x-axis
		 */
		xAxis: (Chart.Axis | globalThis.Array<Chart.Axis>);

		/**
		 * Gets y-axis
		 */
		yAxis: (Chart.Axis | globalThis.Array<Chart.Axis>);

		/**
		 * Updates specified chart options and redraws it immediately.
		 */
		update(definition: object): void;

		/**
		 * Perform operation with the raw Highcharts handle. Note that chart rendering is asynchronous so the operation may be queued and executed asynchronously. Does nothing if the chart is not rendered.
		 * Usage of this method is not recommended since we cannot guarantee compatibility with future Highcharts versions.
		 */
		withRawHandle(callback: (chart: any) => void): void;

		/**
		 * Redraws chart. Needs to be called after changing chart definition.
		 */
		redraw(): void;

	}

	export namespace Chart {
		interface PointData {
			x?: number;

			y?: number;

		}

		interface TooltipData {
			seriesName?: string;

			x?: number;

			y?: number;

		}

		interface Tooltip {
			enabled?: boolean;

			formatter?: (data: Chart.TooltipData) => Chart.TooltipData;

		}

		interface Label {
			formatter?: (label: string) => string;

		}

		interface PlotLine {
			value?: number;

			text?: (null | string | number | PackageCore.Translation);

		}

		interface Axis {
			title?: (null | string | number | PackageCore.Translation);

			categories?: (globalThis.Array<string> | globalThis.Array<number>);

			min?: number;

			max?: number;

			opposite?: boolean;

			label?: Chart.Label;

			plotLines?: globalThis.Array<Chart.PlotLine>;

		}

		interface Series {
			name?: (null | string | number | PackageCore.Translation);

			data?: globalThis.Array<number>;

			type?: Chart.Type;

			connectNulls?: boolean;

			dataLabels?: boolean;

			yAxis?: number;

			xAxis?: number;

			stack?: string;

			lineType?: Chart.SeriesLineType;

			symbol?: Chart.SeriesSymbol;

			highlightFunction?: (data: Chart.PointData) => boolean;

		}

		interface Options extends PackageCore.Component.Options {
			type?: Chart.Type;

			title?: (null | string | number | PackageCore.Translation);

			subtitle?: (null | string | number | PackageCore.Translation);

			xAxis?: (Chart.Axis | globalThis.Array<Chart.Axis>);

			yAxis?: (Chart.Axis | globalThis.Array<Chart.Axis>);

			series?: globalThis.Array<Chart.Series>;

			legend?: boolean;

			stacking?: Chart.Stacking;

			pointTooltip?: Chart.Tooltip;

			highlightFunction?: (data: Chart.PointData) => boolean;

			definition?: object;

			modules?: globalThis.Array<Chart.Module>;

		}

		enum Module {
			MORE,
			ACCESSIBILITY,
			ANNOTATIONS,
			ANNOTATIONS_ADVANCED,
			ARROW_SYMBOLS,
			BOOST,
			BOOST_CANVAS,
			BROKEN_AXIS,
			BULLET,
			COLORAXIS,
			CURRENT_DATE_INDICATOR,
			CYLINDER,
			DATA,
			DATAGROUPING,
			DEBUGGER,
			DEPENDENCY_WHEEL,
			DOTPLOT,
			DRAG_PANES,
			DRAGGABLE_POINTS,
			DRILLDOWN,
			DUMBBELL,
			EXPORT_DATA,
			EXPORTING,
			FULL_SCREEN,
			FUNNEL,
			FUNNEL3D,
			GANTT,
			GRID_AXIS,
			HEATMAP,
			HISTOGRAM_BELLCURVE,
			ITEM_SERIES,
			LOLLIPOP,
			MARKER_CLUSTERS,
			NETWORKGRAPH,
			NO_DATA_TO_DISPLAY,
			OFFLINE_EXPORTING,
			OLDIE,
			ORGANIZATION,
			OVERLAPPING_DATALABELS,
			PARALLEL_COORDINATES,
			PARETO,
			PATHFINDER,
			PATTERN_FILL,
			PRICE_INDICATOR,
			PYRAMID3D,
			SANKEY,
			SERIES_LABEL,
			SOLID_GAUGE,
			SONIFICATION,
			STATIC_SCALE,
			STOCK,
			STOCK_TOOLS,
			STREAMGRAPH,
			SUNBURST,
			TILEMAP,
			TIMELINE,
			TREEGRID,
			TREEMAP,
			VARIABLE_PIE,
			VARIWIDE,
			VECTOR,
			VENN,
			WINDBARB,
			WORDCLOUD,
			XRANGE,
		}

		enum Type {
			AREA,
			BAR,
			COLUMN,
			LINE,
			SPLINE,
		}

		enum Stacking {
			NORMAL,
			PERCENT,
		}

		enum SeriesSymbol {
			CIRCLE,
			SQUARE,
			DIAMOND,
			TRIANGLE,
			TRIANGLE_DOWN,
		}

		enum SeriesLineType {
			SOLID,
			DASH,
		}

		enum Color {
			ORANGE,
			PINK,
			PURPLE,
			BLUE_LIGHT,
			AZURE,
			BLUE,
			RED,
			BROWN,
			GREEN,
			GREEN_MOSS,
			YELLOW,
			BLACK,
		}

		enum ColorIndex {
		}

	}

	/**
	 * Highcharts handle
	 */
	class ChartHandle {
	}

	namespace ChartHandle {
	}

	/**
	 * Chart manager for loading additional modules
	 */
	class ChartManager {
	}

	namespace ChartManager {
	}

	/**
	 * Chart portlet
	 */
	export class ChartPortlet extends PackageCore.Component {
		constructor(options?: ChartPortlet.Options);

	}

	export namespace ChartPortlet {
		interface Options extends PackageCore.Component.Options {
		}

	}

	/**
	 * Checkbox input field
	 */
	export class CheckBox extends PackageCore.Component implements PackageCore.InputComponent {
		/**
		 * Constructs CheckBox
		 */
		constructor(options?: CheckBox.Options);

		/**
		 * Get/set the label text
		 */
		label: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element | null);

		/**
		 * Get/set the label position
		 */
		labelPosition: CheckBox.LabelPosition;

		/**
		 * Gets the checkbox value
		 */
		value: (boolean | null);

		/**
		 * True if the checkbox value is defined (true or false)
		 */
		defined: boolean;

		/**
		 * True if clicking the checkbox label should also toggle the checkbox
		 */
		clickableLabel: boolean;

		/**
		 * True if the checkbox label is empty
		 */
		emptyLabel: boolean;

		/**
		 * Check box is read only
		 */
		readOnly: boolean;

		/**
		 * This is the id of the input element. Can be used in Label component.
		 */
		inputId: string;

		/**
		 * Returns attributes of the input element
		 */
		inputAttributes: PackageCore.HtmlAttributeList;

		/**
		 * True if the check is empty
		 */
		empty: boolean;

		/**
		 * Returns true if the input is mandatory
		 */
		mandatory: boolean;

		/**
		 * Next value provider
		 */
		nextValue: (CheckBox.NextValueProvider | null);

		/**
		 * Toggle action
		 */
		action: (CheckBox.ActionCallback | null);

		/**
		 * Set check box value
		 */
		setValue(value: (boolean | null), options?: {reason?: string}): void;

		/**
		 * Set check box label
		 */
		setLabel(label: string): void;

		/**
		 * Set position of check box label
		 */
		setLabelPosition(position: CheckBox.LabelPosition): void;

		/**
		 * Set read only mode
		 */
		setReadOnly(value: boolean): void;

		/**
		 * Toggle the checkbox
		 */
		toggle(options?: {reason?: string}): void;

		static Event: CheckBox.EventTypes;

	}

	export namespace CheckBox {
		interface Options extends PackageCore.Component.Options {
			clickableLabel?: boolean;

			label?: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

			labelPosition?: CheckBox.LabelPosition;

			readOnly?: boolean;

			value?: (boolean | null);

			nextValue?: CheckBox.NextValueProvider;

			mandatory?: boolean;

			action?: CheckBox.ActionCallback;

		}

		type ActionCallback = (args: CheckBox.ActionArgs, sender: CheckBox) => void;

		interface ActionArgs {
			value: (boolean | null);

			previousValue: (boolean | null);

			reason: string;

		}

		type NextValueProvider = (value: (boolean | null)) => (boolean | null);

		interface EventTypes extends PackageCore.Component.EventTypes {
			TOGGLED: string;

		}

		enum VisualStyle {
			CHECK,
			TOGGLE,
		}

		enum LabelPosition {
			LEFT,
			RIGHT,
			ABOVE,
			BELOW,
		}

		enum Reason {
			CLICK,
			KEYPRESS,
		}

	}

	/**
	 * Check box cell
	 */
	export class CheckBoxCell extends GridCell {
		/**
		 * Constructs CheckBoxCell
		 */
		constructor(options?: object);

		/**
		 * Check box reference
		 */
		checkBox: (CheckBox | null);

		/**
		 * CheckBox options
		 */
		widgetOptions: (CheckBox.Options | GridCell.WidgetOptionsCallback<CheckBox.Options>);

	}

	export namespace CheckBoxCell {
	}

	/**
	 * Check box column
	 */
	export class CheckBoxColumn extends GridColumn {
		/**
		 * Constructs CheckBoxColumn
		 */
		constructor(options: CheckBoxColumn.Options);

		/**
		 * CheckBox options
		 */
		widgetOptions: (CheckBox.Options | GridColumn.WidgetOptionsCallback<CheckBox.Options> | null);

	}

	export namespace CheckBoxColumn {
		interface Options extends GridColumn.Options {
			widgetOptions?: (CheckBox.Options | GridColumn.WidgetOptionsCallback<CheckBox.Options>);

		}

		export import Cell = Self.CheckBoxCell;

	}

	/**
	 * Check box picker
	 */
	export class CheckBoxPicker extends Picker {
		/**
		 * Constructor
		 */
		constructor(options?: CheckBoxPicker.Options);

		/**
		 * The inner component - CheckBox
		 */
		checkBox: CheckBox;

		/**
		 * Handles change of CheckBoc state
		 */
		private _handleSelectionChanged(args: CheckBox.ActionArgs & {reason: string}): void;

	}

	export namespace CheckBoxPicker {
		interface Options extends PackageCore.Component.Options {
			checkBoxOptions: CheckBox.Options;

		}

	}

	/**
	 * Code component
	 */
	export class Code extends PackageCore.Component {
		constructor(options?: Code.Options);

		/**
		 * Sets code content
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Controls if user can change the content
		 */
		editable: boolean;

		/**
		 * Sets code content
		 */
		content: string;

		/**
		 * Sets code content
		 */
		setContent(content: string, options?: {reason?: string}): void;

		/**
		 * Inserts content on cursor position
		 */
		insertContent(content: string): void;

		/**
		 * Create code editor
		 */
		static editor(options: Code.Options): Code;

		static Event: Code.EventTypes;

	}

	export namespace Code {
		interface Options extends PackageCore.Component.Options {
			content?: string;

			language?: Code.Language;

			display?: Code.Display;

			background?: Code.Background;

			highlight?: boolean;

			editable?: boolean;

			showLIneNumbers?: boolean;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			CONTENT_CHANGED: symbol;

		}

		enum Language {
			TEXT,
			JAVASCRIPT,
			CSS,
			HTML,
			JAVA,
		}

		enum Background {
			DEFAULT,
			THEME,
			SUCCESS,
			WARNING,
			ERROR,
			INFO,
		}

		enum Display {
			BLOCK,
			INLINE,
		}

		enum Reason {
			INPUT,
		}

	}

	/**
	 * Component allowing for selection of a color from a 2D canvas and a Slider(s)
	 */
	export class ColorCanvas extends PackageCore.Component {
		/**
		 * Constructs ColorCanvas
		 */
		constructor(options?: ColorCanvas.Options);

		/**
		 * Selected color
		 */
		color: (PackageCore.Color | PackageCore.Color.HEX | null);

		/**
		 * Display mode
		 */
		mode: ColorCanvas.Mode;

		/**
		 * Display size
		 */
		size: ColorCanvas.Size;

		/**
		 * State of visibility of the alpha selector
		 */
		withAlpha: boolean;

		/**
		 * Sets the selected color
		 */
		setColor(hexOrColor: (PackageCore.Color | PackageCore.Color.HEX | null), args: {reason?: symbol}): void;

		/**
		 * Sets new size
		 */
		setSize(newSize: ColorCanvas.Size): void;

		/**
		 * Sets mode
		 */
		setMode(newMode: ColorCanvas.Mode): void;

		/**
		 * Sets the visibility of alpha selector
		 */
		setWithAlpha(visible: boolean): void;

		/**
		 * Parses size into individual precomputed properties
		 */
		private parseSize(): object;

		/**
		 * Returns current color
		 */
		private getCurrentColor(): PackageCore.Color;

		/**
		 * Draws all canvases
		 */
		private drawCanvas(): void;

		/**
		 * Draws an indicator of current position on the canvas
		 */
		private drawIndicator(x: number, y: number): void;

		/**
		 * Draws square (saturation-value) canvas
		 */
		private drawSquareCanvas(context: object): void;

		/**
		 * Draws triangle (saturation-value) canvas
		 */
		private drawTriangleCanvas(context: object): void;

		/**
		 * Draws rainbow (hue-saturation) canvas
		 */
		private drawRainbowCanvas(context: object): void;

		/**
		 * Generates rainbow canvas image data
		 */
		private generateRainbowCanvasImageData(context: object): ImageData;

		/**
		 * Draws wheel (hue-saturation) canvas
		 */
		private drawWheelCanvas(context: object): void;

		/**
		 * Generates wheel canvas image data
		 */
		private generateWheelCanvasImageData(context: object): ImageData;

		/**
		 * Returns indicator position in canvas
		 */
		private getIndicatorPosition(): (object | null);

		/**
		 * Translates position on square canvas to saturation and value
		 */
		private getColorFromSquareCanvasPosition(x: number, y: number): PackageCore.Color;

		/**
		 * Translates saturation and value values to position on square canvas
		 */
		private getSquareCanvasIndicatorPosition(saturation: number, value: number): object;

		/**
		 * Translates position on triangle canvas to saturation and value
		 */
		private getColorFromTriangleCanvasPosition(x: number, y: number): PackageCore.Color;

		/**
		 * Translates saturation and value values to position on triangle canvas
		 */
		private getTriangleCanvasIndicatorPosition(saturation: number, value: number): {x: number; y: number};

		/**
		 * Translates position on rainbow canvas to hue and saturation
		 */
		private getColorFromRainbowCanvasPosition(x: number, y: number): PackageCore.Color;

		/**
		 * Translates hue and saturation values on rainbow canvas to position on rainbow canvas
		 */
		private getRainbowCanvasIndicatorPosition(hue: number, saturation: number): object;

		/**
		 * Translates position on wheel canvas to hue and saturation
		 */
		private getColorFromWheelCanvasPosition(x: number, y: number): PackageCore.Color;

		/**
		 * Transforms hue and saturation values to position on wheel canvas
		 */
		private getWheelCanvasIndicatorPosition(hue: number, saturation: number): object;

		/**
		 * Translates position to polar coordinates
		 */
		private coordinatesToPolar(x: number, y: number, cX?: number, cY?: number): object;

		/**
		 * Translates radians to degrees
		 */
		private radiansToDegrees(rad: number): number;

		/**
		 * Translates degrees to radians
		 */
		private degreesToRadians(deg: number): number;

		/**
		 * Round float number to 3 decimal places
		 */
		private roundFloat(float: number): number;

		/**
		 * Checks if a point is positioned inside a triangle (barycentric coordinate method)
		 */
		private isPointInTriangle(x: number, y: number): boolean;

		/**
		 * Handles interaction with the canvas, not applicable in grayscale mode
		 */
		private handleClick(message: {position: {element: {x: number; y: number}}}, result: object): void;

		/**
		 * Render canvases
		 */
		private createCanvas(): PackageCore.JSX.Element;

		/**
		 * Render slider depending to current mode
		 */
		private createSlider(): object;

		/**
		 * Render alpha slider
		 */
		private createAlphaSlider(): object;

		static Event: ColorCanvas.EventTypes;

	}

	export namespace ColorCanvas {
		interface Options extends PackageCore.Component.Options {
			color?: (PackageCore.Color | PackageCore.Color.HEX | null);

			mode?: ColorCanvas.Mode;

			size?: ColorCanvas.Size;

			withAlpha?: boolean;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			SELECTED_COLOR_CHANGED: symbol;

		}

		enum Mode {
			SQUARE,
			TRIANGLE,
			WHEEL,
			RAINBOW,
			GRAYSCALE,
		}

		enum Reason {
			CALL,
			COLOR_SELECTED,
			UPDATE,
		}

		enum Source {
			CANVAS,
			GRAYSCALE_SLIDER,
			HUE_SLIDER,
			VALUE_SLIDER,
			ALPHA_SLIDER,
		}

		enum Size {
			SMALL,
			MEDIUM,
			LARGE,
		}

	}

	/**
	 * Comparators for different color models
	 */
	enum ColorComparator {
	}

	/**
	 * Component allowing for adjustment of color via manipulation of its channels
	 */
	export class ColorModifier extends PackageCore.Component {
		/**
		 * Constructs ColorModifier
		 */
		constructor(options?: ColorModifier.Options);

		/**
		 * Selected color
		 */
		color: (PackageCore.Color.HEX | PackageCore.Color | null);

		/**
		 * Modifier models
		 */
		models: globalThis.Array<ColorModifier.Model>;

		/**
		 * TextBoxes visibility
		 */
		showTextBoxes: boolean;

		/**
		 * Sliders visibility
		 */
		showSliders: boolean;

		/**
		 * Sets the selected color
		 */
		setColor(value: (PackageCore.Color.HEX | PackageCore.Color | null), args?: {reason?: symbol; source?: any}): void;

		/**
		 * Sets the modifier models
		 */
		setModels(models: globalThis.Array<ColorModifier.Model>): void;

		/**
		 * Sets the visibility of TextBoxes
		 */
		setTextBoxesVisibility(visibility: boolean): void;

		/**
		 * Sets the visibility of Sliders
		 */
		setSlidersVisibility(visibility: boolean): void;

		/**
		 * Creates hexadecimal modifier
		 */
		private createHexModifier(): GridPanel;

		/**
		 * Hex modifier handler
		 */
		private handleHexChannelChange(_: any, options: {text: (string | null)}): void;

		/**
		 * Generic color channel change handler
		 */
		private handleColorChannelChange(options: object): (PackageCore.Color | null);

		/**
		 * Creates RGB modifier
		 */
		private createRgbModifier(): object;

		/**
		 * Creates RGB channel modifier
		 */
		private createRgbChannelModifier(colorChannel: string, value: (string | null), text: string): object;

		/**
		 * RGB modifier handler
		 */
		private handleRgbChannelChange(colorChannel: string, newValue: (string | null)): (PackageCore.Color | null);

		/**
		 * Creates CMYK modifier
		 */
		private createCmykModifier(): object;

		/**
		 * Creates CMYK channel modifier
		 */
		private createCmykChannelModifier(colorChannel: string, value: (string | null), text: string): object;

		/**
		 * CMYK modifier handler
		 */
		private handleCmykChannelChange(colorChannel: string, newValue: (string | null)): (PackageCore.Color | null);

		/**
		 * Creates HSL modifier
		 */
		private createHslModifier(): object;

		/**
		 * Creates HSL channel modifier
		 */
		private createHslChannelModifier(colorChannel: string, value: (string | null), text: string): object;

		/**
		 * HSL modifier handler
		 */
		private handleHslChannelChange(colorChannel: string, newValue: (string | null)): (PackageCore.Color | null);

		/**
		 * Creates HSV modifier
		 */
		private createHsvModifier(): object;

		/**
		 * Creates HSV channel modifier
		 */
		private createHsvChannelModifier(colorChannel: string, value: (string | null), text: string): object;

		/**
		 * HSV modifier handler
		 */
		private handleHsvChannelChange(colorChannel: string, newValue: (string | null)): (PackageCore.Color | null);

		/**
		 * Creates HWB modifier
		 */
		private createHwbModifier(): object;

		/**
		 * Creates HWB channel modifier
		 */
		private createHwbChannelModifier(colorChannel: string, value: (string | null), text: string): object;

		/**
		 * HWB modifier handler
		 */
		private handleHwbChannelChange(colorChannel: string, newValue: (string | null)): (PackageCore.Color | null);

		/**
		 * Creates grayscale modifier
		 */
		private createGrayscaleModifier(): object;

		/**
		 * Creates alpha modifier
		 */
		private createAlphaModifier(): object;

		/**
		 * Creates label
		 */
		private createLabel(text: string): Text;

		/**
		 * Creates id of label
		 */
		private createLabelId(model: string, channel: (string | null)): string;

		/**
		 * Creates TextBox for byte values
		 */
		private createByteChannelTextBox(value: (string | null), handler: (modifier: ColorModifier.Modifier, args: object) => void, labelId: string): TextBox;

		/**
		 * Creates TextBox for degrees values
		 */
		private createDegreesChannelTextBox(value: (string | null), handler: (modifier: ColorModifier.Modifier, args: object) => void, labelId: string): TextBox;

		/**
		 * Creates TextBox for integer values
		 */
		private createIntegerChannelTextBox(value: (string | null), handler: (modifier: ColorModifier.Modifier, args: object) => void, labelId: string, maximum: number): TextBox;

		/**
		 * Creates TextBox for float values
		 */
		private createFloatChannelTextBox(value: (string | null), handler: (modifier: ColorModifier.Modifier, args: object) => void, labelId: string): TextBox;

		/**
		 * Creates TextBox for hexadecimal values
		 */
		private createHexTextBox(value: (string | null), handler: (modifier: ColorModifier.Modifier, args: object) => void, labelId: string): TextBox;

		/**
		 * Creates TextBox
		 */
		private createTextBox(value: (string | null), handler: (modifier: ColorModifier.Modifier, args: object) => void, type: ColorModifier.TextBoxType, textValidator: TextBox.TextValidatorCallback, keyValidator: TextBox.KeyValidatorCallback, revertHandler: (((textBox: TextBox) => void) | null), labelId: string): TextBox;

		/**
		 * Creates Slider for values between 0 - 255
		 */
		private createByteChannelSlider(value: (number | null), handler: (modifier: ColorModifier.Modifier, args: object) => void, labelId: string): Slider;

		/**
		 * Creates Slider for values between 0 - 360
		 */
		private createDegreesChannelSlider(value: (number | null), handler: (modifier: ColorModifier.Modifier, args: object) => void, labelId: string): Slider;

		/**
		 * Creates Slider for values between 0 - 1
		 */
		private createFloatChannelSlider(value: (number | null), handler: (modifier: ColorModifier.Modifier, args: object) => void, labelId: string): Slider;

		/**
		 * Creates Slider
		 */
		private createSlider(value: (number | null), handler: (modifier: ColorModifier.Modifier, args: object) => void, labelId: string, items: Slider.ValuesObject): Slider;

		/**
		 * Handles change of integer value
		 */
		private handleIntegerChannelChanged(value: (string | null), type: ColorModifier.Model, colorModifier: (modifier: number) => (PackageCore.Color | null), modifier: ColorModifier.Modifier, args: object, maximum: object): void;

		/**
		 * Gets new value from integer modifier
		 */
		private getNewValueFromIntegerModifier(modifier: ColorModifier.Modifier, args: object): (number | null);

		/**
		 * Handles change of byte value
		 */
		private handleByteChannelChanged(type: ColorModifier.Model, colorModifier: (modifier: number) => (PackageCore.Color | null), modifier: ColorModifier.Modifier, args: object): void;

		/**
		 * Handles change of degrees value
		 */
		private handleDegreesChannelChanged(type: ColorModifier.Model, colorModifier: (modifier: number) => (PackageCore.Color | null), modifier: ColorModifier.Modifier, args: object): void;

		/**
		 * Handles change of float value
		 */
		private handleFloatChannelChanged(type: ColorModifier.Model, colorModifier: (modifier: number) => (PackageCore.Color | null), modifier: ColorModifier.Modifier, args: object): void;

		/**
		 * Gets new value from float modifier
		 */
		private getNewValueFromFloatModifier(modifier: ColorModifier.Modifier, args: object): (number | null);

		/**
		 * Creates Grid for n-channel modifier
		 */
		private createModifierGrid(items: globalThis.Array<object>, channelCount: number): object;

		/**
		 * Creates components for specific model
		 */
		private createModel(model: ColorModifier.Model): object;

		static Event: ColorModifier.EventTypes;

	}

	export namespace ColorModifier {
		interface Options extends PackageCore.Component.Options {
			color?: (PackageCore.Color.HEX | PackageCore.Color);

			models?: (globalThis.Array<ColorModifier.Model>);

			orientation?: ColorModifier.Orientation;

			modifierOrientation?: ColorModifier.Orientation;

			showTextBoxes?: boolean;

			showSliders?: boolean;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			SELECTED_COLOR_CHANGED: symbol;

		}

		enum Reason {
			CALL,
			SLIDER_UPDATE,
			TEXT_BOX_UPDATE,
		}

		enum Model {
			HEX,
			RGB,
			CMYK,
			HSL,
			HSV,
			HWB,
			GRAYSCALE,
			ALPHA,
		}

		enum TextBoxType {
			HEX,
			INTEGER,
			FLOAT,
		}

		enum Orientation {
			HORIZONTAL,
			VERTICAL,
		}

		enum Modifier {
			SLIDER,
			TEXTBOX,
		}

	}

	/**
	 * Component featuring set of colors from which user can pick one, add new ones or delete them
	 */
	export class ColorPalette extends PackageCore.Component {
		/**
		 * Constructs ColorPalette
		 */
		constructor(options?: ColorPalette.Options);

		/**
		 * Selected color
		 */
		selectedColor: ColorPalette.ColorValue;

		/**
		 * Palettes
		 */
		palettes: globalThis.Array<object>;

		/**
		 * Palettes panel
		 */
		palettesPanel: AccordionPanel;

		/**
		 * Sets selected color
		 */
		setSelectedColor(color: ColorPalette.ColorValue, args: {reason?: symbol}): void;

		/**
		 * Parses palettes
		 */
		private parsePalettes(palettes: globalThis.Array<any>): globalThis.Array<ColorPalette.PaletteConfig>;

		/**
		 * Creates palette
		 */
		private createPalette(palette: ColorPalette.PaletteConfig, paletteIndex: number): StackPanel;

		/**
		 * Creates color
		 */
		private createColor(paletteIndex: number, colorIndex: number): ColorPaletteBox;

		/**
		 * Creates add button
		 */
		private createAddButton(paletteIndex: number): Button;

		/**
		 * Generates add button tooltip content and aria label depending on the current state
		 */
		private getAddButtonTooltipContent(selectedColorInPalette: boolean): PackageCore.Translation;

		/**
		 * Handles selection of a color
		 */
		private handleColorSelected(args: {color: ColorPalette.ColorValue; selected: boolean; reason: symbol}): void;

		/**
		 * Handles deletion of a color
		 */
		private handleColorDeleted(paletteIndex: number, colorIndex: number, args: {reason: ColorPaletteBox.Reason}): void;

		/**
		 * Check if a color is in palette
		 */
		private colorIsInPalette(color: PackageCore.Color, palette: ColorPalette.PaletteConfig): object;

		/**
		 * Handles click on add button
		 */
		private handleAddButtonClicked(paletteIndex: number): void;

		/**
		 * Focuses colorBox that is distant from currently focused by given distance
		 */
		private focusColorBoxByDistance(distance: number): boolean;

		static Event: ColorPalette.EventTypes;

	}

	export namespace ColorPalette {
		type ColorType = (null | PackageCore.Color.HEX | PackageCore.Color);

		type ColorValue = (undefined | ColorPalette.ColorType);

		interface PaletteConfig {
			label?: (number | string | PackageCore.Translation);

			addButton?: boolean;

			deletable?: boolean;

			colors?: globalThis.Array<ColorPalette.ColorType>;

			expanded?: boolean;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			COLOR_SELECTED: symbol;

			SELECTED_COLOR_CHANGED: symbol;

			PALETTES_CHANGED: symbol;

			PALETTE_EXPANDED: symbol;

		}

		interface Options extends PackageCore.Component.Options {
			palettes?: globalThis.Array<ColorPalette.PaletteConfig>;

			selectedColor?: ColorPalette.ColorValue;

		}

		enum Reason {
			CALL,
			COLOR_SELECTED,
			COLOR_ADDED,
			COLOR_DELETED,
			UPDATE,
		}

		enum I18n {
			ADD_BUTTON_ENABLED,
			ADD_BUTTON_DISABLED,
			ADD_BUTTON_NO_COLOR_SELECTED,
		}

		enum Palette {
			NEUTRAL,
			COLOR_500,
			COLOR_100,
		}

	}

	/**
	 * Component representing its internal color value as a box with the defined color background
	 */
	export class ColorPaletteBox extends PackageCore.Component {
		/**
		 * Constructs ColorPaletteBox
		 */
		constructor(options?: ColorPaletteBox.Options);

		/**
		 * Color of the box
		 */
		color: (PackageCore.Color | PackageCore.Color.HEX | null);

		/**
		 * Selected state
		 */
		selected: boolean;

		/**
		 * Selectable state
		 */
		selectable: boolean;

		/**
		 * Deletable state
		 */
		deletable: boolean;

		/**
		 * Size of ColorPaletteBox
		 */
		size: number;

		/**
		 * Sets color
		 */
		setColor(color: (PackageCore.Color | PackageCore.Color.HEX | null), args: {reason?: symbol}): void;

		/**
		 * Sets selected state
		 */
		setSelected(selected: boolean, args: {reason?: symbol}): void;

		/**
		 * Sets deletable state
		 */
		setDeletable(deletable: boolean): void;

		/**
		 * Fires delete event
		 */
		delete(): void;

		/**
		 * Returns style depending on color
		 */
		private createColorClass(): globalThis.Array<PackageCore.Style>;

		/**
		 * Handles activation of the color palette box (click or enter)
		 */
		private handleActivated(options: {reason: any}): void;

		static Event: ColorPaletteBox.EventTypes;

	}

	export namespace ColorPaletteBox {
		interface Options extends PackageCore.Component.Options {
			color?: (PackageCore.Color | PackageCore.Color.HEX | null);

			selected?: boolean;

			selectable?: boolean;

			deletable?: boolean;

			size?: number;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			COLOR_SELECTED: symbol;

			COLOR_DELETED: symbol;

			COLOR_CHANGED: symbol;

			COLOR_ACTIVATED: symbol;

		}

		enum Reason {
			ENTER,
			DELETE,
			CLICK,
			CONTEXT_MENU,
			CALL,
		}

		enum I18n {
			DELETE,
			NO_COLOR,
		}

	}

	/**
	 * Component allowing for entering a color value or picking one from ColorSelector
	 */
	export class ColorPicker extends PackageCore.Component implements PackageCore.InputComponent {
		/**
		 * Constructs ColorPicker
		 */
		constructor(options?: ColorPicker.Options);

		/**
		 * Selected color
		 */
		color: (PackageCore.Color | PackageCore.Color.HEX | null);

		/**
		 * ColorPicker mode
		 */
		mode: ColorPicker.Mode;

		/**
		 * ColorPicker display mode
		 */
		displayType: ColorPicker.DisplayType;

		/**
		 * True if the input is empty
		 */
		empty: boolean;

		/**
		 * Returns true if the input is mandatory
		 */
		mandatory: boolean;

		/**
		 * Informs if the picker is opened
		 */
		opened: boolean;

		/**
		 * Globally unique input id
		 */
		inputId: string;

		/**
		 * Returns attributes of the input element
		 */
		inputAttributes: PackageCore.HtmlAttributeList;

		/**
		 * Size of the component
		 */
		size: ColorPicker.Size;

		/**
		 * Color changed callback
		 */
		onColorChanged: (ColorPicker.ColorChangedCallback | null);

		/**
		 * Sets selected color
		 */
		setColor(value: ColorPalette.ColorValue, args: {reason?: ColorPicker.Reason}): void;

		/**
		 * Sets mandatory flag of input
		 */
		setMandatory(newValue: boolean): void;

		/**
		 * Sets if the picker is opened
		 */
		setOpened(): void;

		/**
		 * Opens color selector picker
		 */
		openColorSelectorPicker(): void;

		/**
		 * Closes color selector picker
		 */
		closeColorSelectorPicker(): void;

		/**
		 * Toggles color selector picker
		 */
		toggleColorSelectorPicker(): void;

		/**
		 * Creates TextBox
		 */
		private createTextBox(): TextBox;

		/**
		 * Returns text value of a color
		 */
		private colorToText(): string;

		/**
		 * Handles accepted text
		 */
		private handleTextBoxTextAccepted(args: {reason: symbol}): void;

		/**
		 * Creates palette icon
		 */
		private createIcon(): Image;

		/**
		 * Creates color box
		 */
		private createColorBox(): ColorPaletteBox;

		/**
		 * Handles click on icon or color box
		 */
		private handleToggleClicked(): void;

		/**
		 * Creates ColorSelectorPicker
		 */
		private createColorSelectorPicker(): ColorSelectorPicker;

		/**
		 * Handles change of ColorSelectorPicker selected color
		 */
		private handleColorSelectorPickerSelectionChanged(args: {selectedItems: (PackageCore.Color | PackageCore.Color.HEX | null); source: symbol; reason: symbol}): void;

		/**
		 * Creates ColorPicker with default options
		 */
		static default(args: {options?: ColorPicker.Options; customColors?: globalThis.Array<(PackageCore.Color | PackageCore.Color.HEX)>; withNull?: boolean}): ColorPicker;

		/**
		 * ColorPicker with default options
		 */
		static Default(props: ColorPicker.Options & {customColors?: globalThis.Array<(PackageCore.Color | PackageCore.Color.HEX)>; withNull?: boolean}): PackageCore.JSX.Element;

		/**
		 * Creates ColorPicker without the custom color palette
		 */
		static withoutCustomColors(args: {options?: ColorPicker.Options; withNull?: boolean}): ColorPicker;

		/**
		 * ColorPicker without the custom color palette
		 */
		static WithoutCustomColors(props: ColorPicker.Options & {withNull?: boolean}): PackageCore.JSX.Element;

		/**
		 * Creates ColorPicker without the custom color palette
		 */
		static onlyPalette(args: {options?: ColorPicker.Options; withNull?: boolean}): ColorPicker;

		/**
		 * ColorPicker without the custom color palette
		 */
		static OnlyPalette(props: ColorPicker.Options & {withNull?: boolean}): PackageCore.JSX.Element;

		static Event: ColorPicker.EventTypes;

		/**
		 * Default palette options
		 */
		static createDefaultPaletteOptions(customColors?: globalThis.Array<(PackageCore.Color | PackageCore.Color.HEX)>): ColorPalette.Options;

		/**
		 * Palette only palette options
		 */
		static createPaletteOnlyPaletteOptions(): ColorPalette.Options;

	}

	export namespace ColorPicker {
		interface Options extends PackageCore.Component.Options {
			color: (PackageCore.Color | PackageCore.Color.HEX | null);

			colorSelector: ColorSelector.Options;

			displayType?: ColorPicker.DisplayType;

			mandatory?: boolean;

			mode?: ColorPicker.Mode;

			palettes: globalThis.Array<ColorPalette.PaletteConfig>;

			size?: ColorPicker.Size;

			onColorChanged?: ColorPicker.ColorChangedCallback;

		}

		type ColorChangedCallback = (args: ColorPicker.ColorChangedArgs, sender: ColorPicker) => void;

		interface ColorChangedArgs {
			color: (PackageCore.Color | null);

			previousColor: (PackageCore.Color | null);

			reason: ColorPicker.Reason;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			COLOR_CHANGED: symbol;

		}

		enum DisplayType {
			INPUT,
			COLOR_SWATCH,
		}

		export import Mode = Self.ColorSelector.Mode;

		enum Reason {
			CALL,
			VALID_COLOR,
			INVALID_COLOR,
			TEXT_BOX,
		}

		export import Palette = Self.ColorPalette.Palette;

		enum I18N {
			OPEN_SELECTION,
		}

		export import Size = Self.InputSize;

	}

	/**
	 * Component allowing to pick a color or adjust current one
	 */
	export class ColorSelector extends PackageCore.Component {
		/**
		 * Constructs ColorSelector
		 */
		constructor(options?: ColorSelector.Options);

		/**
		 * Selected color
		 */
		color: (PackageCore.Color | PackageCore.Color.HEX | null);

		/**
		 * ColorSelector mode
		 */
		mode: ColorSelector.Mode;

		/**
		 * State of collapseWithLastPalette property
		 */
		collapseWithLastPalette: boolean;

		/**
		 * ColorPalette Options
		 */
		colorPalette: object;

		/**
		 * ColorCanvas Options
		 */
		colorCanvas: object;

		/**
		 * ColorModifier Options
		 */
		colorModifier: object;

		/**
		 * ColorPalette
		 */
		colorPaletteComponent: ColorPalette;

		/**
		 * ColorCanvas
		 */
		colorCanvasComponent: ColorCanvas;

		/**
		 * ColorModifier
		 */
		colorModifierComponent: ColorModifier;

		/**
		 * Color selected callback
		 */
		onColorChanged: (ColorSelector.ColorChangedCallback | null);

		/**
		 * Sets color
		 */
		setColor(value: (PackageCore.Color | PackageCore.Color.HEX | null), args: {reason?: string}): void;

		/**
		 * Sets mode of the ColorSelector
		 */
		setMode(mode: ColorSelector.Mode): void;

		/**
		 * Sets modifiers and canvas to be expanded
		 */
		setModifiersExpanded(expanded: boolean): void;

		/**
		 * Creates color palette
		 */
		private createColorPalette(): ColorPalette;

		/**
		 * Creates ColorCanvas
		 */
		private createColorCanvas(): ColorCanvas;

		/**
		 * Creates ColorModifier
		 */
		private createColorModifier(): ColorModifier;

		/**
		 * Default palette options
		 */
		static createDefaultPaletteOptions(options?: (globalThis.Array<(PackageCore.Color | PackageCore.Color.HEX | null)> | {customColors: globalThis.Array<(PackageCore.Color | PackageCore.Color.HEX | null)>; withNull: boolean})): ColorPalette.Options;

		/**
		 * Palette only palette options
		 */
		static createPaletteOnlyPaletteOptions(options?: {withNull?: boolean}): ColorPalette.Options;

		static Event: ColorSelector.EventTypes;

	}

	export namespace ColorSelector {
		interface Options extends PackageCore.Component.Options {
			collapseWithLastPalette?: boolean;

			color: (PackageCore.Color | PackageCore.Color.HEX | null);

			colorCanvas: ColorCanvas.Options;

			colorModifier: ColorModifier.Options;

			colorPalette: ColorPalette.Options;

			mode: ColorSelector.Mode;

			onColorChanged?: ColorSelector.ColorChangedCallback;

		}

		type ColorChangedCallback = (args: ColorSelector.ColorChangedArgs, sender: ColorSelector) => void;

		interface ColorChangedArgs {
			color: (PackageCore.Color | null);

			previousColor: (PackageCore.Color | null);

			source: (ColorSelector.Source | null);

			reason: (ColorSelector.Reason | null);

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			COLOR_SELECTED: symbol;

			SELECTED_COLOR_CHANGED: symbol;

			PALETTES_CHANGED: symbol;

		}

		enum Reason {
			CALL,
			COLOR_SELECTED,
			UPDATE,
		}

		enum Source {
			COLOR_PALETTE,
			COLOR_CANVAS,
			COLOR_MODIFIER,
		}

		enum Mode {
			PALETTE_ONLY,
			COMPLETE,
		}

		enum I18n {
			CUSTOM_COLORS,
			PREDEFINED_COLORS,
		}

		export import Canvas = Self.ColorCanvas;

		export import Palette = Self.ColorPalette;

		export import PaletteBox = Self.ColorPaletteBox;

		export import Modifier = Self.ColorModifier;

	}

	/**
	 * ColorSelector picker
	 */
	export class ColorSelectorPicker extends Picker {
		/**
		 * Constructs ColorSelectorPicker
		 */
		constructor(options: ColorSelectorPicker.Options);

		/**
		 * The inner picker component - ColorSelector
		 */
		colorSelector: ColorSelector;

		/**
		 * Sets color
		 */
		setColor(color: (PackageCore.Color | PackageCore.Color.HEX), options?: {modifiersExpanded: boolean; reason: symbol}): void;

		/**
		 * Handles color selection
		 */
		private _handleColorSelected(args: {selectedColor: PackageCore.Color; previousColor: PackageCore.Color; source: ColorSelector.Source; reason: symbol}): void;

		/**
		 * Handles color change
		 */
		private _handleSelectedColorChanged(args: ColorSelector.ColorChangedArgs): void;

		/**
		 * Handles change of the palettes
		 */
		private _handlePalettesChanged(args: object): void;

	}

	export namespace ColorSelectorPicker {
		interface Options extends Picker.Options {
			colorSelector?: (ColorSelector | ColorSelector.Options);

		}

	}

	/**
	 * This will populate matrix, where every cell contains reference to hierarchical column that does belong to this cell according to column hierarchy.
	 * This is better explained on example. Imagine this tree that represents column hierarchy:
	 * ROOT | +-----------------+-----------------+ |                 |                 | A                 B                 C |                 | +----+            +--+--+ |    |            |     | AA    AB            BA    BB | +-+-+ |   | AAA  AAB
	 * And we want to create matrix which will allow us to check which column does belong to which cell (aka for [0,0] it's A)
	 * We will create this matrix as follows: 1) Visit every row 2) Visit every cell 3) If cell has not been yet determined to which column it belongs, do this 3.a) Get parent column definition by looking one row higher to the same column index. If you are at the first row, use root column 3.b) For every child in parent column do this 3.b.1) Mark current cell with this child column 3.b.2) If this child column is leaf, then mark all cell below this one with this child column 3.b.3) Mark every cell right from this one for child_column.width - 1 and increment column index
	 * It will work this way: 1) We start with empty table 6x3 .  .  .  .  .  . .  .  .  .  .  . .  .  .  .  .  . 2) We check parent column. It's root because we are at the row 0 3) Child columns are A.B.C 4) We begin with A 5) As per 3.b.1, we mark colum A  .  .  .  .  . .  .  .  .  .  . .  .  .  .  .  . 6) A is not leaf, so we skip 3.b.2 7) A has width of 3, so we mark 2 cell to the right (3 - 1) as per 3.b.3 A  A  A  .  .  . .  .  .  .  .  . .  .  .  .  .  . 8) We apply the same to B A  A  A  B  B  . .  .  .  .  .  . .  .  .  .  .  . 9) And C. Since C is leaf, we apply 3.b.2 A  A  A  B  B  C .  .  .  .  .  C .  .  .  .  .  C 10) Next row is the same A  A  A  B  B  C AA AA AB BA BB  C .  . AB BA BB  C 11) Finally we get entire matrix A  A  A  B  B  C AA AA AB BA BB  C AAAAAB AB BA BB  C
	 */
	class ColumnHitMap {
	}

	namespace ColumnHitMap {
	}

	/**
	 * Column resizer
	 */
	class ColumnResizer {
		/**
		 * Constructs ColumnResizer
		 */
		constructor();

	}

	namespace ColumnResizer {
	}

	/**
	 * Component parser
	 */
	class ComponentParser {
		/**
		 * Constructs ComponentParser
		 */
		constructor();

		/**
		 * Parse a UIF Studio value
		 */
		parseValue(value: {bundleId?: string; type?: string}): any;

	}

	namespace ComponentParser {
	}

	/**
	 * Single component container with lazy rendering
	 */
	export class ContentPanel extends PackageCore.Component {
		/**
		 * Constructs ContentPanel
		 */
		constructor(options?: ContentPanel.Options);

		/**
		 * ContentPanel content
		 */
		content: (PackageCore.Component | PackageCore.JSX.Element | null);

		/**
		 * Root element type
		 */
		element: ContentPanel.Element;

		/**
		 * Content horizontal alignment
		 */
		horizontalAlignment: ContentPanel.HorizontalAlignment;

		/**
		 * Content vertical alignment
		 */
		verticalAlignment: ContentPanel.VerticalAlignment;

		/**
		 * Space around content
		 */
		outerGap: (ContentPanel.GapSize | ContentPanel.GapSizeObject);

		/**
		 * Panel decorator
		 */
		decorator: (PackageCore.Decorator | null);

		/**
		 * Alias for content property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Set ContentPanel content
		 */
		setContent(content: (PackageCore.Component | null)): void;

		/**
		 * Change horizontal alignment of the content
		 */
		setHorizontalAlignment(value: ContentPanel.HorizontalAlignment): void;

		/**
		 * Change vertical alignment of the content
		 */
		setVerticalAlignment(value: ContentPanel.VerticalAlignment): void;

		/**
		 * Sets space around content
		 */
		setOuterGap(value: ContentPanel.GapSize): void;

		/**
		 * Set panel decorator
		 */
		setDecorator(decorator: (PackageCore.Decorator | null)): void;

	}

	export namespace ContentPanel {
		interface Options extends PackageCore.Component.Options {
			content?: (PackageCore.Component | PackageCore.JSX.Element);

			decorator?: PackageCore.Decorator;

			horizontalAlignment?: ContentPanel.HorizontalAlignment;

			outerGap?: (ContentPanel.GapSize | ContentPanel.GapSizeObject);

			verticalAlignment?: ContentPanel.VerticalAlignment;

			element?: ContentPanel.Element;

		}

		interface GapSizeObject {
			top?: ContentPanel.GapSize;

			bottom?: ContentPanel.GapSize;

			start?: ContentPanel.GapSize;

			end?: ContentPanel.GapSize;

			horizontal?: ContentPanel.GapSize;

			vertical?: ContentPanel.GapSize;

		}

		enum HorizontalAlignment {
			START,
			END,
			CENTER,
			STRETCH,
		}

		enum VerticalAlignment {
			START,
			END,
			CENTER,
			STRETCH,
		}

		export import GapSize = Self.GapSize;

		export import Decorator = PackageCore.Decorator;

		export import Element = PackageCore.Html.Element.Section;

	}

	/**
	 * Context menu
	 */
	export class ContextMenu {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: PackageCore.EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: PackageCore.EventSource.EventName, listener: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: PackageCore.EventSource.EventName): void;

		/**
		 * Constructs ContextMenu
		 */
		constructor(options: ContextMenu.Options);

		/**
		 * True if the context menu is opened
		 */
		opened: boolean;

		/**
		 * ContextMenu menu
		 */
		menu: Menu;

		/**
		 * Reference to opened window
		 */
		window: Window;

		/**
		 * Owner component
		 */
		owner: (PackageCore.Component | PackageCore.VDomRef);

		/**
		 * Opens context menu
		 */
		open(args?: object): void;

		/**
		 * Closes context menu
		 */
		close(reason?: string): void;

		static Event: ContextMenu.EventTypes;

	}

	export namespace ContextMenu {
		interface Options {
			owner: (PackageCore.Component | PackageCore.VDomRef);

			items?: globalThis.Array<MenuItem.ItemDefinition>;

			menu?: Menu.Options;

			window?: Window.Options;

			on?: PackageCore.EventSource.ListenerMap;

		}

		interface EventTypes {
			OPENED: string;

			CLOSED: string;

		}

	}

	export class Dashboard extends PackageCore.Component {
		constructor(options?: Dashboard.Options);

		/**
		 * Scrolls containing ScrollPanel
		 */
		scroll(options: PackageCore.ScrollController.ScrollOptions): boolean;

	}

	export namespace Dashboard {
		interface Options extends PackageCore.Component.Options {
		}

		export import Breakpoint = Self.ResponsivePanel.Breakpoint;

	}

	/**
	 * Data grid
	 */
	export class DataGrid extends DataSourceComponent {
		/**
		 * Constructs DataGrid
		 */
		constructor(options?: DataGrid.Options);

		/**
		 * Returns a list of columns from left, body and right sections concatenated into a single array
		 */
		columns: globalThis.Array<GridColumn>;

		/**
		 * Returns a list of header rows
		 */
		headerRows: globalThis.Array<GridHeaderRow>;

		/**
		 * Returns a list of data rows
		 */
		dataRows: globalThis.Array<GridDataRow>;

		/**
		 * Returns a flat list of data rows
		 */
		flatDataRows: globalThis.Array<GridDataRow>;

		/**
		 * Returns a list of data rows on the current page
		 */
		pageDataRows: globalThis.Array<GridDataRow>;

		/**
		 * Returns a flat list of page data rows
		 */
		flatPageDataRows: globalThis.Array<GridDataRow>;

		/**
		 * Returns a list of dirty rows
		 */
		dirtyRows: globalThis.Array<GridDataRow>;

		/**
		 * Top root column
		 */
		topRootColumn: GridColumn;

		/**
		 * Left root column
		 */
		leftRootColumn: GridColumn;

		/**
		 * List of columns in the left section
		 */
		leftColumns: globalThis.Array<GridColumn>;

		/**
		 * Body root column
		 */
		bodyRootColumn: GridColumn;

		/**
		 * List of columns in the body section
		 */
		bodyColumns: globalThis.Array<GridColumn>;

		/**
		 * Right root column
		 */
		rightRootColumn: GridColumn;

		/**
		 * List of columns in the right section
		 */
		rightColumns: globalThis.Array<GridColumn>;

		/**
		 * Returns the root columns for all 3 column sections
		 */
		sectionRootColumn: {left: GridColumn; body: GridColumn; right: GridColumn; top: GridColumn};

		/**
		 * Shows/hides header
		 */
		showHeader: boolean;

		/**
		 * Cursor information
		 */
		cursor: {cell: (GridCell | null); row: (GridRow | null); column: (GridColumn | null)};

		/**
		 * Cell under the cursor
		 */
		cursorCell: (GridCell | null);

		/**
		 * Row under the cursor
		 */
		cursorRow: (GridRow | null);

		/**
		 * Selected range of cells
		 */
		rangeSelection: (GridCellRange | null);

		/**
		 * Enable/disable automatic column stretching
		 */
		columnStretch: boolean;

		/**
		 * Enables/disables column resizing
		 */
		resizableColumns: boolean;

		/**
		 * Enables/disables row resizing
		 */
		resizableRows: boolean;

		/**
		 * Enables/disables column dragging
		 */
		draggableColumns: boolean;

		/**
		 * Enables/disables row dragging
		 */
		draggableRows: boolean;

		/**
		 * Enables/disables cell editing
		 */
		editable: boolean;

		/**
		 * Enables/disables paging
		 */
		paging: boolean;

		/**
		 * Get/set page size
		 */
		pageSize: number;

		/**
		 * Get/set current page number
		 */
		pageNumber: number;

		/**
		 * Current input controller
		 */
		inputController: GridInputController;

		/**
		 * Default cell input mode
		 */
		inputMode: DataGrid.InputMode;

		/**
		 * Enable/disable sticky segments
		 */
		stickySegments: {left: boolean; right: boolean; header: boolean; footer: boolean};

		/**
		 * Enable/disable sticky scrollbars
		 */
		stickyScrollbars: {horizontal: boolean; vertical: boolean};

		/**
		 * Enable/disable virtualization
		 */
		virtualization: boolean;

		/**
		 * Enable/disable sorting (may be overridden on column level)
		 */
		sortable: boolean;

		/**
		 * Get the list of sorted columns
		 */
		sortDirections: globalThis.Array<DataGrid.ColumnSortDirection>;

		/**
		 * loader for the data section
		 */
		dataLoader: (Loader | null);

		/**
		 * Get/set the empty grid placeholder
		 */
		placeholder: (string | PackageCore.Translation | PackageCore.Component);

		/**
		 * Action bar component
		 */
		actionBar: (PackageCore.Component | PackageCore.JSX.Element | null);

		/**
		 * Action bar height
		 */
		actionBarHeight: (number | null);

		/**
		 * Action bar visibility
		 */
		actionBarVisible: boolean;

		/**
		 * Enable/disable sticky behavior of action bar
		 */
		stickyActionBar: boolean;

		/**
		 * Enable/disable status icons in cells
		 */
		showStatusIcon: boolean;

		/**
		 * Row cursor
		 */
		rowCursor: boolean;

		/**
		 * Row cursor
		 */
		cellCursor: boolean;

		/**
		 * Flag whether user can reorder columns or not
		 */
		columnReorder: boolean;

		/**
		 * Flag whether user can reorder rows or not
		 */
		rowReorder: boolean;

		/**
		 * Cursor visibility
		 */
		cursorVisibility: DataGrid.CursorVisibility;

		/**
		 * Scroll offset
		 */
		scrollOffset: {x: number; y: number};

		/**
		 * Scrollability
		 */
		scrollability: PackageCore.Scrollable.Scrollability;

		/**
		 * Sort callback
		 */
		onSort: DataGrid.SortCallback;

		/**
		 * Add column to the data grid
		 */
		addColumn(columnDefinition: (DataGrid.ColumnDefinition | GridColumn), options?: {index?: number; section?: DataGrid.ColumnSection; parentColumn?: GridColumn; reason?: string}): GridColumn;

		/**
		 * Remove column from the data grid
		 */
		removeColumn(columnId: (string | GridColumn)): GridColumn;

		/**
		 * Move column to a different parent column or index
		 */
		moveColumn(columnId: (string | GridColumn), options: {parentColumn?: GridColumn; section?: DataGrid.ColumnSection; index: number}): GridColumn;

		/**
		 * Get column instance
		 */
		getColumn(columnId: (string | GridColumn)): (GridColumn | null);

		/**
		 * Remove all columns
		 */
		clearColumns(): void;

		/**
		 * Set new columns that will replace the current ones
		 */
		setColumns(columns: (globalThis.Array<GridColumn> | {left: globalThis.Array<GridColumn>; body: globalThis.Array<GridColumn>; right: globalThis.Array<GridColumn>})): void;

		/**
		 * Enable/disable cell editing
		 */
		setEditable(value: boolean): void;

		/**
		 * Enable/disable sorting
		 */
		setSortable(value: boolean): void;

		/**
		 * Enable/disable column resizing
		 */
		setResizableColumns(value: boolean): void;

		/**
		 * Enable/disable row resizing
		 */
		setResizableRows(value: boolean): void;

		/**
		 * Enable/disable column dragging. Column drag source has to be set for this to have effect.
		 */
		setDraggableColumns(value: boolean): void;

		/**
		 * Enable/disable row dragging. Row drag source has to be set for this to have effect.
		 */
		setDraggableRows(value: boolean): void;

		/**
		 * Enable/disable paging
		 */
		setPaging(paging: boolean): void;

		/**
		 * Configure page size
		 */
		setPageSize(pageSize: number): void;

		/**
		 * Set current page number
		 */
		setPageNumber(pageNumber: number): void;

		/**
		 * Set sort directions
		 */
		setSortDirections(directions: globalThis.Array<DataGrid.ColumnSortDirection>): void;

		/**
		 * Set placeholder that is displayed when grid is empty
		 */
		setPlaceholder(placeholder: (string | PackageCore.Translation | PackageCore.Component)): void;

		/**
		 * Enabled/disable row cursor
		 */
		setRowCursor(value: boolean): void;

		/**
		 * Enabled/disable cell cursor
		 */
		setCellCursor(value: boolean): void;

		/**
		 * Set cursor visibility
		 */
		setCursorVisibility(value: DataGrid.CursorVisibility): void;

		/**
		 * Create a new synthetic row
		 */
		createSyntheticRow(args?: GridSyntheticRow.Options): GridSyntheticRow;

		/**
		 * Create a new synthetic cell
		 */
		createSyntheticCell(args: GridSyntheticCell.Options): GridSyntheticCell;

		/**
		 * Create a new data cell
		 */
		createDataCell(args: any): GridCell;

		/**
		 * Add a new synthetic row to the grid
		 */
		addSyntheticRow(row: GridSyntheticRow, args: {masterRow?: GridRow; section?: string; inside?: boolean; above?: boolean; order?: number}): GridSyntheticRow;

		/**
		 * Remove synthetic row
		 */
		removeSyntheticRow(syntheticRow: GridSyntheticRow): void;

		/**
		 * Pin row to header or footer. Only top-level rows can be pinned.
		 */
		pinRow(row: GridDataRow, section: DataGrid.RowSection): void;

		/**
		 * Move grid cursor by offset
		 */
		moveCursorByOffset(args: {x?: number; y?: number; predicate?: (cell: GridCell) => boolean; reason?: DataGrid.CursorUpdateReason}): boolean;

		/**
		 * Move cursor to a specific row. By default this function will try to preserve the column but if there is no cell for that column on the selected row then first cell will be used.
		 */
		moveCursorToRow(row: GridRow, options?: {reason?: string}): boolean;

		/**
		 * Move cursor to a specific cell.
		 */
		moveCursorToCell(cell: GridCell, options?: {reason?: string}): boolean;

		/**
		 * Move cursor to a particular cell
		 */
		setCursorCell(cell: GridCell, args?: {scrollIntoView?: boolean; reason?: string}): boolean;

		/**
		 * Reset cursor
		 */
		resetCursor(args?: {reason?: string}): void;

		/**
		 * Set cell range selection
		 */
		setRangeSelection(range: (GridCellRange | null)): void;

		/**
		 * Scroll to cell/row/column
		 */
		scrollTo(args: {cell?: GridCell; column?: GridColumn; row?: GridRow; element?: Element}): void;

		/**
		 * Automatically set row height or column width. If no options are used then both width and height are calculated for all sections.
		 */
		autoSize(options?: {header?: boolean; body?: boolean; footer?: boolean; width?: boolean; height?: boolean}): void;

		/**
		 * Calculate column width to fit cell content
		 */
		autoSizeWidth(): void;

		/**
		 * Compute the width/height of header cells to fit content
		 */
		autoSizeHeader(options: {width?: boolean; height?: object}): void;

		/**
		 * Force auto-sizing calculation
		 */
		flushAutoSize(): void;

		/**
		 * Force column stretch to fit grid width
		 */
		stretchColumns(): void;

		/**
		 * Get the data row associated with the data item
		 */
		rowForDataItem(dataItem: any): (GridDataRow | null);

		/**
		 * Get the cell containing the element
		 */
		cellForElement(element: Element): (GridCell | null);

		/**
		 * Get the target cell for a message
		 */
		cellForMessage(message: PackageCore.RoutedMessage): (GridCell | null);

		/**
		 * Refresh all cells in the column
		 */
		refreshColumnCells(column: GridColumn): void;

		/**
		 * Reload all cells in the column
		 */
		reloadColumnCells(column: GridColumn): void;

		/**
		 * Invoke a callback for all columns
		 */
		visitColumns(callback: (column: GridColumn) => (boolean | null)): void;

		/**
		 * Invoke a callback for all rows
		 */
		visitRows(callback: (row: GridRow) => void): void;

		/**
		 * Invoke a callback for all rows in a given section
		 */
		visitSectionRows(section: DataGrid.RowSection, callback: (row: GridRow) => void): void;

		/**
		 * Invoke a callback for all data rows
		 */
		visitDataRows(callback: (row: GridDataRow) => (boolean | null)): void;

		/**
		 * Invoke a callback for all data rows on the current page
		 */
		visitPageDataRows(callback: (row: GridDataRow) => (boolean | null)): void;

		/**
		 * Invoke a callback for all cells in a column
		 */
		visitColumnCells(column: GridColumn, callback: (cell: GridCell) => void): void;

		/**
		 * Invoke a callback for all data cells in a column
		 */
		visitColumnDataCells(column: GridColumn, callback: (cell: GridCell) => void): void;

		/**
		 * Get the list of data rows on a given page
		 */
		getPageDataRows(pageNumber: number): globalThis.Array<GridDataRow>;

		/**
		 * Find first cell in the data grid, possibly matching a predicate
		 */
		findFirstCell(args: {predicate?: (cell: GridCell) => boolean}): (GridCell | null);

		/**
		 * Find last cell in the data grid, possibly matching a predicate
		 */
		findLastCell(args: {predicate?: (cell: GridCell) => boolean}): (GridCell | null);

		/**
		 * Find cell using a starting cell and an offset
		 */
		findCellByOffset(cell: GridCell, args: {x?: number; y?: number; predicate?: (cell: GridCell) => boolean}): (GridCell | null);

		/**
		 * Find next cell in given direction, possibly matching a predicate
		 */
		findNextCell(cell: GridCell, args: {direction?: number; predicate?: (cell: GridCell) => boolean}): (GridCell | null);

		/**
		 * Create row/column/cell overlay
		 */
		createOverlay(args: object): GridOverlay;

		/**
		 * Close editing of the current cell and start editing of a new cell
		 */
		editCell(cell: GridCell, activate: boolean, reason: DataGrid.CursorUpdateReason): boolean;

		/**
		 * Start cell editing
		 */
		startEditing(cell: GridCell, activate: boolean, reason: DataGrid.CursorUpdateReason): void;

		/**
		 * Close cell editing
		 */
		closeEditing(focusGrid: boolean): void;

		/**
		 * Accept changes on currently edited cell
		 */
		acceptChanges(): void;

		/**
		 * Discard changes on currently edited cell
		 */
		discardChanges(): void;

		/**
		 * Reload data rows
		 */
		reload(): void;

		/**
		 * Load all rows in a hierarchical DataGrid
		 */
		loadAll(): globalThis.Promise<any>;

		/**
		 * Load and expand all rows in a hierarchical DataGrid
		 */
		expandAll(): globalThis.Promise<any>;

		/**
		 * Get the physical size of a particular row section
		 */
		getRowSectionPhysicalSize(rowSection: DataGrid.RowSection): number;

		/**
		 * Get the physical size of a particular column section
		 */
		getColumnSectionPhysicalSize(columnSection: DataGrid.ColumnSection): number;

		/**
		 * Called for every data item. This method should generate all associated rows for given data item. At least one {@link GridDataRow} instance should be created for every data item. You can also create synthetic rows.
		 */
		protected createRowSet(): object;

		/**
		 * This should configure data row. Please note that {@link GridCell} are not instantiated yet for this particular row.
		 */
		protected bindDataRow(args: {dataRow: GridRow; dataStoreEntry: object}): void;

		/**
		 * Default population strategy for label rows
		 */
		private configureHeaderCells(overlapCells: globalThis.Map<any, any>, level: number, row: GridRow, column: GridColumn): GridCell;

		/**
		 * Default cell population strategy for data rows.
		 */
		private configureDataCells(row: GridRow, column: GridColumn): GridCell;

		static Event: DataGrid.EventTypes;

	}

	export namespace DataGrid {
		interface StretchStrategyOptions {
			ignoreMaxWidth?: boolean;

		}

		interface Options extends DataSourceComponent.Options {
			actionBar?: (PackageCore.Component | PackageCore.JSX.Element);

			actionBarHeight?: number;

			actionBarVisible?: boolean;

			allowUnsort?: boolean;

			allowRangeSelection?: boolean;

			autoSize?: DataGrid.SizingStrategy;

			autoSizeHeader?: boolean;

			bindingController?: GridBindingController;

			cellCursor?: boolean;

			columnDragSource?: PackageCore.DataExchange.DragSourceProvider;

			columnReorder?: boolean;

			columns?: (globalThis.Array<DataGrid.ColumnDefinition> | {left: globalThis.Array<DataGrid.ColumnDefinition>; body: globalThis.Array<DataGrid.ColumnDefinition>; right: globalThis.Array<DataGrid.ColumnDefinition>});

			columnStretch?: boolean;

			customizeHeaderRow?: DataGrid.CustomizeHeaderRowCallback;

			customizeRow?: DataGrid.CustomizeRowCallback;

			dataLoader?: (Loader | null);

			dataRowHeight?: number;

			directWrite?: boolean;

			draggableColumns?: boolean;

			draggableRows?: boolean;

			editable?: boolean;

			headerContent?: GridHeaderCell.ContentCallback;

			headerRowHeight?: number;

			inputController?: GridInputController;

			editingMode?: DataGrid.EditingMode;

			inputMode?: DataGrid.InputMode;

			keepSelection?: boolean;

			maxViewportHeight?: number;

			maxViewportWidth?: number;

			multiColumnSort?: boolean;

			pageNumber?: number;

			pageSize?: number;

			paging?: boolean;

			placeholder?: (string | PackageCore.Translation | PackageCore.Component);

			preload?: DataGrid.Preload;

			resizableColumns?: boolean;

			resizableRows?: boolean;

			rowCursor?: boolean;

			rowDragSource?: PackageCore.DataExchange.DragSourceProvider;

			rowReorder?: boolean;

			showHeader?: boolean;

			showStatusIcon?: boolean;

			sortable?: boolean;

			stretchStrategy?: (((args: object) => void) | DataGrid.StretchStrategyOptions);

			stripedRows?: boolean;

			virtualization?: boolean;

			defaultColumnOptions?: Partial<GridColumn.Options>;

			cursorVisibility?: DataGrid.CursorVisibility;

			beforeEditCell?: GridSelectEditInputController.BeforeEditCellCallback;

			lockedLevels?: number;

			onSort?: DataGrid.SortCallback;

		}

		type SortCallback = (args: DataGrid.SortArgs, sender: DataGrid) => void;

		interface SortArgs {
			directions: globalThis.Array<{column: GridColumn; direction: DataGrid.SortDirection}>;

			previousDirections: globalThis.Array<{column: GridColumn; direction: DataGrid.SortDirection}>;

		}

		type CustomizeHeaderRowCallback = (args: {index: number; row: GridHeaderRow}) => void;

		type CustomizeRowCallback = (args: DataGrid.CustomizeRowCallbackArgs) => void;

		interface CustomizeRowCallbackArgs {
			dataGrid: DataGrid;

			row: GridDataRow;

			dataItem: any;

			index: number;

			level: number;

		}

		type ColumnDefinition = (ActionColumn.Options | CheckBoxColumn.Options | DatePickerColumn.Options | DropdownColumn.Options | GrabColumn.Options | LinkColumn.Options | MultiselectDropdownColumn.Options | SelectionColumn.Options | TemplatedColumn.Options | TextAreaColumn.Options | TextBoxColumn.Options | TimePickerColumn.Options | TreeColumn.Options);

		interface EventTypes extends DataSourceComponent.EventTypes {
			ROW_UPDATE: string;

			COLUMN_UPDATE: string;

			CELL_UPDATE: string;

			ROW_SELECTION_CHANGED: string;

			CURSOR_UPDATED: string;

			SCROLLABILITY_CHANGED: string;

			SORT: string;

		}

		interface ColumnSortDirection {
			column: GridColumn;

			direction: DataGrid.SortDirection;

		}

		enum SizingStrategy {
			MANUAL,
			INITIAL_WIDTH,
		}

		export import RowSection = Self.GridConstants.RowSection;

		export import Row = Self.GridRow;

		export import HeaderRow = Self.GridMasterRow;

		export import MasterRow = Self.GridMasterRow;

		export import DataRow = Self.GridDataRow;

		export import SyntheticRow = Self.GridSyntheticRow;

		export import ColumnSection = Self.GridConstants.ColumnSection;

		export import ColumnType = Self.GridConstants.ColumnType;

		export import Column = Self.GridColumn;

		export import TextBoxColumn = Self.TextBoxColumn;

		export import TextAreaColumn = Self.TextAreaColumn;

		export import TreeColumn = Self.TreeColumn;

		export import DetailColumn = Self.TreeColumn;

		export import GrabColumn = Self.GrabColumn;

		export import CheckBoxColumn = Self.CheckBoxColumn;

		export import DropdownColumn = Self.DropdownColumn;

		export import MultiselectDropdownColumn = Self.MultiselectDropdownColumn;

		export import DatePickerColumn = Self.DatePickerColumn;

		export import TimePickerColumn = Self.TimePickerColumn;

		export import ActionColumn = Self.ActionColumn;

		export import TemplatedColumn = Self.TemplatedColumn;

		export import LinkColumn = Self.LinkColumn;

		export import SelectionColumn = Self.SelectionColumn;

		export import Cell = Self.GridCell;

		export import HeaderCell = Self.GridHeaderCell;

		export import SyntheticCell = Self.GridSyntheticCell;

		export import TextBoxCell = Self.TextBoxCell;

		export import TextAreaCell = Self.TextAreaCell;

		export import TreeCell = Self.TreeCell;

		export import GrabCell = Self.GrabCell;

		export import CheckBoxCell = Self.CheckBoxCell;

		export import DropdownCell = Self.DropdownCell;

		export import MultiselectDropdownCell = Self.MultiselectDropdownCell;

		export import DatePickerCell = Self.DatePickerCell;

		export import TimePickerCell = Self.TimePickerCell;

		export import ActionCell = Self.ActionCell;

		export import TemplatedCell = Self.TemplatedCell;

		export import LinkCell = Self.LinkCell;

		export import SelectionCell = Self.SelectionCell;

		export import DataExchange = Self.GridDataExchange;

		export import InputMode = Self.GridConstants.InputMode;

		enum EditingMode {
			CELL,
			ROW,
		}

		export import Selection = Self.GridSelection;

		export import SelectionStrategy = Self.GridSelectionStrategy;

		export import SingleSelection = Self.GridSingleSelection;

		export import SingleSelectionStrategy = Self.GridSingleSelectionStrategy;

		export import MultiSelection = Self.GridMultiSelection;

		export import MultiSelectionStrategy = Self.GridMultiSelectionStrategy;

		export import HelperButtonMode = Self.GridConstants.HelperButtonMode;

		export import SortDirection = Self.GridConstants.SortDirection;

		enum VisualStyle {
			DEFAULT,
			EMBEDDED,
		}

		enum RowUpdateReason {
			DATA_UNBIND,
			ITEM_ADDED,
			ITEM_REMOVED,
			ITEM_MOVED,
		}

		export import CursorUpdateReason = Self.GridConstants.CursorUpdateReason;

		enum SelectionUpdateReason {
			DATA_UNBIND,
			ROWS_REMOVED,
		}

		enum Preload {
			ALL,
			VISIBLE,
			NONE,
		}

		enum CursorVisibility {
			FOCUS,
			ALWAYS,
		}

		export import Reason = Self.DataSourceComponent.UnbindReason;

	}

	/**
	 * Data source component base class
	 */
	export abstract class DataSourceComponent extends PackageCore.Component {
		/**
		 * Constructs DataSourceComponent
		 */
		protected constructor(options?: DataSourceComponent.Options);

		/**
		 * Gets data source for this component. This data source will be used as data provided for all items that are managed by this component.
		 */
		dataSource: PackageCore.DataSource;

		/**
		 * Returns true if component is in data-bound mode
		 */
		dataBound: boolean;

		/**
		 * Returns true if the component is currently binding to a data source
		 */
		bindingData: boolean;

		/**
		 * Returns true if the component is currently unbinding from a data source
		 */
		unbindingData: boolean;

		/**
		 * Is true whenever data source is being accessed
		 */
		dataAccess: boolean;

		/**
		 * True if automatic binding is enabled
		 */
		autoBind: boolean;

		/**
		 * Automatically show loader when widget is loading data
		 */
		showLoaderOnDataAccess: boolean;

		/**
		 * Change the data source. If autoBind is enabled and the component is initialized then dataBind is called automatically.
		 */
		setDataSource(dataSource: (PackageCore.DataSource | null), options?: {reason?: string}): globalThis.Promise<any>;

		/**
		 * Binds this component to the associated {@link DataSource}
		 */
		dataBind(): globalThis.Promise<any>;

		/**
		 * Unbinds this component from {@link DataSource}
		 */
		dataUnbind(): void;

		/**
		 * Overload to implement binding to a data source
		 */
		protected _onBindToDataSource(args: {dataSource: PackageCore.DataSource}): void;

		/**
		 * Invoked when binding to a data source is finished
		 */
		protected _onDataBound(args: {dataSource: PackageCore.DataSource}): void;

		/**
		 * Overload to implement unbinding from the data source
		 */
		protected _onUnbindFromDataSource(args: {dataSource: PackageCore.DataSource}): void;

		/**
		 * Invoked when data source is unbound
		 */
		protected _onDataUnbound(args: {dataSource: PackageCore.DataSource}): void;

		/**
		 * Invoked when data source is updated
		 */
		protected _onDataSourceUpdated(update: {cause: PackageCore.DataSource.UpdateType; args: object}): void;

		/**
		 * Invoked when data access is started
		 */
		protected _onDataAccessStarted(): void;

		/**
		 * Invoked when data access is finished
		 */
		protected _onDataAccessFinished(): void;

		/**
		 * Gets value from dataItem
		 */
		static getValueMember(dataItem: object, valueMember: (DataSourceComponent.ValueMemberCallback | string)): any;

		/**
		 * Gets displayed value from item
		 */
		static getDisplayMember(dataItem: object, displayMember: (DataSourceComponent.DisplayMemberCallback | string)): (PackageCore.Translation | string);

		static Event: DataSourceComponent.EventTypes;

	}

	export namespace DataSourceComponent {
		interface Options extends PackageCore.Component.Options {
			showLoaderOnDataAccess?: boolean;

			autoBind?: boolean;

			dataSource?: PackageCore.DataSource;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			DATA_BOUND: string;

			DATA_UNBOUND: string;

			DATA_ACCESS_STARTED: string;

			DATA_ACCESS_FINISHED: string;

		}

		type DisplayMemberCallback = (dataItem: any) => any;

		type ValueMemberCallback = (dataItem: any) => any;

		enum UnbindReason {
			DATA_UNBIND,
			DISPOSE,
		}

	}

	/**
	 * Date/DateTime picker component
	 */
	export class DatePicker extends PackageCore.Component implements PackageCore.InputComponent {
		/**
		 * Constructs DatePicker
		 */
		constructor(options: DatePicker.Options);

		/**
		 * The selected date
		 */
		date: (PackageCore.Date | null);

		/**
		 * The time component of the date
		 */
		time: (PackageCore.Time | null);

		/**
		 * Returns true if the input is empty
		 */
		empty: boolean;

		/**
		 * Returns true if the input is mandatory
		 */
		mandatory: boolean;

		/**
		 * The text displayed in the date picker. This property is accessible only in text mode.
		 */
		inputText: string;

		/**
		 * This is the id of the input element. Can be used in Label component.
		 */
		inputId: string;

		/**
		 * Returns attributes of the input element
		 */
		inputAttributes: PackageCore.HtmlAttributeList;

		/**
		 * Date format
		 */
		format: (string | null);

		/**
		 * Date formatter
		 */
		formatter: (DatePicker.FormatterCallback | null);

		/**
		 * Date parser
		 */
		parser: (DatePicker.ParserCallback | null);

		/**
		 * First allowed date
		 */
		startDate: (PackageCore.Date | null);

		/**
		 * Last allowed date
		 */
		endDate: (PackageCore.Date | null);

		/**
		 * Initial view date
		 */
		viewDate: (PackageCore.Date | null);

		/**
		 * Consider empty value as valid/invalid
		 */
		allowEmptyValue: boolean;

		/**
		 * Date comparator
		 */
		comparator: (left: PackageCore.Date, right: PackageCore.Date) => number;

		/**
		 * True if the date drop down is opened
		 */
		datePickerOpened: boolean;

		/**
		 * True if the time dropdown is opened
		 */
		timePickerOpened: boolean;

		/**
		 * Get calendar settings
		 */
		calendar: Calendar.Options;

		/**
		 * Time picker options
		 */
		timePickerOptions: object;

		/**
		 * Allow user input.
		 */
		allowUserInput: boolean;

		/**
		 * First day of week
		 */
		firstDayOfWeek: number;

		/**
		 * Show next month
		 */
		showNextMonth: boolean;

		/**
		 * Show previous month
		 */
		showPreviousMonth: boolean;

		/**
		 * Show week numbers
		 */
		showWeekNumbers: boolean;

		/**
		 * Icon position
		 */
		iconPosition: DatePicker.IconPosition;

		/**
		 * Placeholder
		 */
		placeholder: (string | null);

		/**
		 * Size of the component
		 */
		size: DatePicker.Size;

		/**
		 * Date changed callback
		 */
		onDateChanged: (DatePicker.DateChangedCallback | null);

		/**
		 * Force conversion of the input string to a date value and fire date changed event and delegate
		 */
		acceptChanges(): void;

		/**
		 * Set the date value
		 */
		setDate(date: (PackageCore.Date | null), options: {reason?: string; inputText?: string}): void;

		/**
		 * Set the input text
		 */
		setInputText(text: string, options: {reason?: string; acceptChanges?: boolean}): void;

		/**
		 * Set format string
		 */
		setFormat(format: (string | null)): void;

		/**
		 * Set formatter function
		 */
		setFormatter(formatter: (((date: (PackageCore.Date | null)) => string) | null)): void;

		/**
		 * Set parser function
		 */
		setParser(parser: (((text: string) => (PackageCore.Date | null)) | null)): void;

		/**
		 * Set the first allowed date
		 */
		setStartDate(date: (PackageCore.Date | null)): void;

		/**
		 * Set the last allowed date
		 */
		setEndDate(date: (PackageCore.Date | null)): void;

		/**
		 * Set initial date
		 */
		setViewDate(date: (PackageCore.Date | null)): void;

		/**
		 * Consider empty value as valid/invalid
		 */
		setAllowEmptyValue(value: boolean): void;

		/**
		 * Open the date picker
		 */
		openDatePicker(): boolean;

		/**
		 * Close the date picker
		 */
		closeDatePicker(): void;

		/**
		 * Toggle the date picker
		 */
		toggleDatePicker(): void;

		/**
		 * Open the time picker
		 */
		openTimePicker(): boolean;

		/**
		 * Close the time picker
		 */
		closeTimePicker(): void;

		/**
		 * Toggle the time picker
		 */
		toggleTimePicker(): void;

		/**
		 * Select the whole text
		 */
		selectAll(): void;

		/**
		 * Check if two dates are considered equal by the DatePicker
		 */
		dateEquals(left: (PackageCore.Date | null), right: (PackageCore.Date | null)): boolean;

		static Event: DatePicker.EventTypes;

	}

	export namespace DatePicker {
		interface Options extends PackageCore.Component.Options {
			allowEmptyValue?: boolean;

			calendar?: Calendar.Options;

			comparator?: DatePicker.ComparatorCallback;

			validator?: DatePicker.ValidatorCallback;

			date?: PackageCore.Date;

			datePickerType?: Calendar.ViewType;

			endDate?: PackageCore.Date;

			firstDayOfWeek?: number;

			format?: string;

			formatter?: DatePicker.FormatterCallback;

			iconPosition?: DatePicker.IconPosition;

			parser?: DatePicker.ParserCallback;

			placeholder?: (string | PackageCore.Translation);

			showNextMonth?: boolean;

			showPreviousMonth?: boolean;

			showWeekNumbers?: boolean;

			startDate?: PackageCore.Date;

			timeline?: object;

			withDatePicker?: boolean;

			withTimePicker?: boolean;

			mandatory?: boolean;

			allowUserInput?: boolean;

			timePickerOptions?: object;

			size?: DatePicker.Size;

			onDateChanged?: DatePicker.DateChangedCallback;

		}

		type DateChangedCallback = (args: DatePicker.DateChangedArgs, sender: DatePicker) => void;

		interface DateChangedArgs {
			date: (PackageCore.Date | null);

			previousDate: (PackageCore.Date | null);

			reason: DatePicker.Reason;

		}

		type ComparatorCallback = (left: PackageCore.Date, right: PackageCore.Date) => number;

		type ValidatorCallback = (args: {empty: boolean; inputText: string; date: (PackageCore.Date | null)}) => void;

		type FormatterCallback = (date: (PackageCore.Date | null)) => string;

		type ParserCallback = (text: string) => (PackageCore.Date | null);

		interface EventTypes extends PackageCore.Component.EventTypes {
			DATE_CHANGED: string;

			INPUT_TEXT_CHANGED: string;

			INPUT_TEXT_ACCEPTED: string;

		}

		enum IconPosition {
			START,
			END,
		}

		enum Reason {
			AFTER,
			BEFORE,
			CLEAR,
			DATE_CHANGED,
			DATE_FORMATTED,
			DATE_PICKED,
			DISABLED,
			EMPTY,
			ENTER,
			INVALID_INPUT,
			PICKER_SELECTION_CHANGED,
			TEXT_CHANGED,
			TEXT_ACCEPTED,
			TIME_PICKED,
		}

		export import Size = Self.InputSize;

		enum I18N {
			OPEN_SELECTION,
		}

		export import DatePickerType = Self.Calendar.ViewType;

	}

	/**
	 * Date picker cell
	 */
	export class DatePickerCell extends GridCell {
		/**
		 * Constructs DatePickerCell
		 */
		constructor();

		/**
		 * Date format
		 */
		format: string;

		/**
		 * Formatter function
		 */
		formatter: (((data: (PackageCore.Date | null)) => string) | null);

		/**
		 * Parser function
		 */
		parser: (((text: string) => (PackageCore.Date | null)) | null);

		/**
		 * True if time picker is shown
		 */
		withTimePicker: boolean;

		/**
		 * DatePicker reference
		 */
		datePicker: (DatePicker | null);

		/**
		 * Toggle binding to date vs inputText
		 */
		bindToText: boolean;

		/**
		 * DatePicker options
		 */
		widgetOptions: (DatePicker.Options | GridCell.WidgetOptionsCallback<DatePicker.Options>);

	}

	export namespace DatePickerCell {
	}

	/**
	 * Date picker column
	 */
	export class DatePickerColumn extends GridColumn {
		/**
		 * Constructs DatePickerColumn
		 */
		constructor(options?: DatePickerColumn.Options);

		/**
		 * Date format
		 */
		format: (string | null);

		/**
		 * Formatter function
		 */
		formatter: (DatePicker.FormatterCallback | null);

		/**
		 * Parser function
		 */
		parser: (DatePicker.ParserCallback | null);

		/**
		 * True if time picker is shown
		 */
		withTimePicker: boolean;

		/**
		 * Toggle binding to date vs inputText
		 */
		bindToText: boolean;

		/**
		 * DatePicker options
		 */
		widgetOptions: (DatePicker.Options | GridColumn.WidgetOptionsCallback<DatePicker.Options> | null);

		/**
		 * Default comparator function
		 */
		static defaultComparator(cell: DatePickerCell, oldValue: (PackageCore.Date | string), newValue: (PackageCore.Date | string)): boolean;

	}

	export namespace DatePickerColumn {
		interface Options extends GridColumn.Options {
			format?: string;

			formatter?: DatePicker.FormatterCallback;

			parser?: DatePicker.ParserCallback;

			withTimePicker?: boolean;

			bindToText?: boolean;

			widgetOptions?: (DatePicker.Options | GridColumn.WidgetOptionsCallback<DatePicker.Options>);

		}

		export import Cell = Self.DatePickerCell;

	}

	/**
	 * Date range component
	 */
	export class DateRange extends PackageCore.Component {
		/**
		 * Constructs DateRange
		 */
		constructor(options?: DateRange.Options);

		/**
		 * Gets start DatePicker, undefined before first render
		 */
		start: (DatePicker | null);

		/**
		 * Returns the virtual DOM ref to the start date picker
		 */
		startRef: PackageCore.VDomRef;

		/**
		 * Gets end DatePicker, undefined before first render
		 */
		end: (DatePicker | null);

		/**
		 * Returns the virtual DOM ref to the end date picker
		 */
		endRef: PackageCore.VDomRef;

		/**
		 * Gets currently selected date range
		 */
		range: DateRange.Range;

		/**
		 * Range start date
		 */
		rangeStart: (PackageCore.Date | null);

		/**
		 * Range end date
		 */
		rangeEnd: (PackageCore.Date | null);

		/**
		 * Sets default interval between start and end date
		 */
		defaultInterval: (((date: PackageCore.Date) => PackageCore.Date) | null);

		/**
		 * Common options for both DatePickers
		 */
		inputOptions: DatePicker.Options;

		/**
		 * Specific start DatePicker options
		 */
		startOptions: DatePicker.Options;

		/**
		 * Specific end DatePicker options
		 */
		endOptions: DatePicker.Options;

		/**
		 * Date changed callback
		 */
		onRangeChanged: (DateRange.RangeChangedCallback | null);

		/**
		 * Sets date range.
		 */
		setRange(value: DateRange.Range, options?: {reason?: string}): void;

		/**
		 * Set start date
		 */
		setRangeStart(startDate: (PackageCore.Date | null), options?: {reason?: string}): void;

		/**
		 * Set end date
		 */
		setRangeEnd(endDate: (PackageCore.Date | null), options?: {reason?: string}): void;

		/**
		 * Compare date ranges for equality
		 */
		static rangeEquals(left: (DateRange.Range | null), right: (DateRange.Range | null)): boolean;

		static Event: DateRange.EventTypes;

	}

	export namespace DateRange {
		interface Options extends PackageCore.Component.Options {
			defaultInterval?: (date: PackageCore.Date) => PackageCore.Date;

			endOptions?: DatePicker.Options;

			inputOptions?: DatePicker.Options;

			range?: DateRange.Range;

			startOptions?: DatePicker.Options;

			startRef?: PackageCore.VDomRef;

			endRef?: PackageCore.VDomRef;

			onRangeChanged?: DateRange.RangeChangedCallback;

		}

		interface Range {
			startDate: (PackageCore.Date | null);

			endDate: (PackageCore.Date | null);

		}

		type RangeChangedCallback = (args: DateRange.RangeChangedArgs, sender: DateRange) => void;

		interface RangeChangedArgs {
			range: (DateRange.Range | null);

			previousRange: (DateRange.Range | null);

			reason: DateRange.Reason;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			RANGE_CHANGED: string;

		}

		enum Reason {
			DATE_CHANGED,
			INTERVAL,
		}

		/**
		 * @deprecated Not used internally anymore 
		 */
		enum DatePart {
			START,
			END,
		}

	}

	/**
	 * Date range picker
	 */
	export class DateRangePicker extends Picker {
		/**
		 * Constructs DateRangePicker
		 */
		constructor(options: DateRangePicker.Options);

		/**
		 * The inner picker component - DateRange
		 */
		dateRange: DateRange;

		/**
		 * Handles selection of a range
		 */
		private _handleRangeSelected(args: DateRange.RangeChangedArgs): void;

	}

	export namespace DateRangePicker {
		interface Options extends Picker.Options {
			dateRange?: DateRange.Options;

		}

	}

	/**
	 * Deprecation panel component
	 */
	function DeprecationPanel(props: {classList: (string | PackageCore.Style | globalThis.Array<string> | globalThis.Array<PackageCore.Style>); children: PackageCore.VDom.Children}): PackageCore.JSX.Element;

	/**
	 * Divider component
	 */
	export class Divider extends PackageCore.Component {
		/**
		 * Constructor
		 */
		constructor(options?: Divider.Options);

		/**
		 * Get orientation
		 */
		orientation: Divider.Orientation;

		/**
		 * Get inset
		 */
		inset: Divider.Inset;

		/**
		 * Get gap
		 */
		gap: Divider.Gap;

		/**
		 * Set orientation
		 */
		setOrientation(orientation: Divider.Orientation): void;

		/**
		 * Set inset
		 */
		setInset(inset: Divider.Inset): void;

		/**
		 * Set gap
		 */
		setGap(gap: Divider.Gap): void;

		/**
		 * Horizontal divider
		 */
		static Horizontal(props: Divider.Options): PackageCore.JSX.Element;

		/**
		 * Vertical divider
		 */
		static Vertical(props: Divider.Options): PackageCore.JSX.Element;

		static getStyles(): void;

	}

	export namespace Divider {
		interface Options extends PackageCore.Component.Options {
			orientation?: Divider.Orientation;

			inset?: Divider.Inset;

			gap?: Divider.Gap;

		}

		/**
		 * Divider orientation
		 */
		enum Orientation {
			HORIZONTAL,
			VERTICAL,
		}

		/**
		 * Divider inset
		 */
		enum Inset {
			NONE,
			START,
			END,
			BOTH,
		}

		/**
		 * Divider gap
		 */
		enum Gap {
			NONE,
			START,
			END,
			BOTH,
		}

	}

	/**
	 * Dropdown
	 */
	export class Dropdown extends DataSourceComponent implements PackageCore.InputComponent {
		/**
		 * Constructs Dropdown
		 */
		constructor(options: Dropdown.Options);

		/**
		 * Gets selected item
		 */
		selectedItem: any;

		/**
		 * Gets selected index
		 */
		selectedIndex: number;

		/**
		 * Gets selected text
		 */
		selectedText: string;

		/**
		 * Gets selected value
		 */
		selectedValue: any;

		/**
		 * returns true if the dropdown is opened
		 */
		dropDownOpened: boolean;

		/**
		 * Gets the input text
		 */
		inputText: string;

		/**
		 * This is the id of the input element. Can be used in Label component.
		 */
		inputId: string;

		/**
		 * Returns attributes of the input element
		 */
		inputAttributes: PackageCore.HtmlAttributeList;

		/**
		 * True if the input is empty
		 */
		empty: boolean;

		/**
		 * Returns true if the input is mandatory
		 */
		mandatory: boolean;

		/**
		 * Gets if Dropdown allows for empty value
		 */
		allowEmpty: boolean;

		/**
		 * Gets the picker
		 */
		picker: (Picker | null);

		/**
		 * Size of the component
		 */
		size: Dropdown.Size;

		/**
		 * Selected item changed callback
		 */
		onSelectionChanged: (Dropdown.SelectionChangedCallback | null);

		/**
		 * Selects value
		 */
		select(args: object): void;

		/**
		 * Unselects item
		 */
		unselect(options?: {reason?: string}): void;

		/**
		 * Opens the dropdown
		 */
		openDropDown(args: object): void;

		/**
		 * Closes the dropdown
		 */
		closeDropDown(args?: object): void;

		/**
		 * Toggles the dropdown
		 */
		toggleDropDown(args: object): void;

		/**
		 * Accepts changes
		 */
		acceptChanges(): void;

		/**
		 * Sets if empty value is allowed
		 */
		setAllowEmpty(value: boolean): void;

		/**
		 * Select the whole content
		 */
		selectAll(): void;

		static Event: Dropdown.EventTypes;

	}

	export namespace Dropdown {
		interface Options extends DataSourceComponent.Options {
			acceptChangesOnFocusOut?: boolean;

			allowCustomItem?: boolean;

			allowCustomText?: boolean;

			allowEmpty?: boolean;

			autoSuggestOptions?: object;

			comparator?: Dropdown.ComparatorCallback;

			displayMember?: (string | DataSourceComponent.DisplayMemberCallback);

			filterable?: boolean;

			itemContent?: (item: ListItem, renderData: object) => (PackageCore.Component | PackageCore.JSX.Element);

			noDataMessage?: string;

			openDropDownOnClick?: boolean;

			openDropDownOnFocus?: boolean;

			picker?: (((dropdown: Dropdown) => Picker) | object | Picker);

			placeholder?: (string | PackageCore.Translation | PackageCore.Component);

			selectionContent?: (args: {selectedItem: any}) => PackageCore.JSX.Element;

			showLoaderOnDataAccess?: boolean;

			valueMember?: (string | DataSourceComponent.ValueMemberCallback);

			mandatory?: boolean;

			selectedItem?: any;

			selectedIndex?: number;

			selectedValue?: any;

			selectedText?: string;

			size?: Dropdown.Size;

			onSelectionChanged?: Dropdown.SelectionChangedCallback;

		}

		type SelectionChangedCallback = (args: Dropdown.SelectionChangedArgs, sender: Dropdown) => void;

		type ComparatorCallback = (left: any, right: any) => boolean;

		interface SelectionChangedArgs {
			item: any;

			previousItem: any;

			value: any;

			previousValue: any;

			text: any;

			previousText: any;

			index: (number | null);

			previousIndex: (number | null);

			reason: Dropdown.Reason;

		}

		interface EventTypes extends DataSourceComponent.EventTypes {
			SELECTED_ITEM_CHANGED: string;

			PICKER_OPENING: string;

			PICKER_OPENED: string;

			PICKER_CLOSING: string;

			PICKER_CLOSED: string;

		}

		enum VisualStyle {
			DEFAULT,
			EMBEDDED,
		}

		enum Reason {
			CALL,
			UNSELECT,
			ACCEPT,
			SELECTION_CHANGED,
			AUTO_SUGGEST,
			CLICK,
			DATA_LOADED,
			DATA_SOURCE_UNBOUND,
			RELOAD,
			CLEAR,
			INPUT,
			KEY_ARROW_DOWN,
			KEY_ARROW_UP,
		}

		enum I18N {
			OPEN_SELECTION,
			NO_DATA_AVAILABLE,
		}

		export import Size = Self.InputSize;

	}

	/**
	 * Dropdown cell
	 */
	export class DropdownCell extends GridCell {
		/**
		 * Constructs DropdownCell
		 */
		constructor(options: object);

		/**
		 * Cell data source
		 */
		dataSource: PackageCore.DataSource;

		/**
		 * Display member
		 */
		displayMember: (string | DataSourceComponent.DisplayMemberCallback);

		/**
		 * Value member
		 */
		valueMember: (string | DataSourceComponent.ValueMemberCallback);

		/**
		 * Set whether the cell value should bind to dropdown item or value
		 */
		bindToValue: boolean;

		/**
		 * When using bindToValue this is used to get the view mode text from the value
		 */
		valueDisplayMember: (string | DataSourceComponent.DisplayMemberCallback);

		/**
		 * Dropdown reference
		 */
		dropdown: (Dropdown | null);

		/**
		 * Widget options
		 */
		widgetOptions: (Dropdown.Options | GridCell.WidgetOptionsCallback<Dropdown.Options>);

		/**
		 * Set the cell data source
		 */
		setDataSource(dataSource: (PackageCore.DataSource | null)): void;

	}

	export namespace DropdownCell {
	}

	/**
	 * Dropdown column
	 */
	export class DropdownColumn extends GridColumn {
		/**
		 * Constructs DropdownColumn
		 */
		constructor(options: DropdownColumn.Options);

		/**
		 * Data source
		 */
		dataSource: (PackageCore.DataSource | null);

		/**
		 * Display member
		 */
		displayMember: (string | DataSourceComponent.DisplayMemberCallback | null);

		/**
		 * Value member
		 */
		valueMember: (string | DataSourceComponent.ValueMemberCallback | null);

		/**
		 * Set whether the column value should bind to dropdown item or value
		 */
		bindToValue: boolean;

		/**
		 * When using bindToValue this is used to get the view mode text from the value
		 */
		valueDisplayMember: (string | DataSourceComponent.DisplayMemberCallback | null);

		/**
		 * Dropdown options
		 */
		widgetOptions: (Dropdown.Options | GridColumn.WidgetOptionsCallback<Dropdown.Options> | null);

	}

	export namespace DropdownColumn {
		interface Options extends GridColumn.Options {
			dataSource?: PackageCore.DataSource;

			valueMember?: (string | DataSourceComponent.ValueMemberCallback);

			displayMember?: (string | DataSourceComponent.DisplayMemberCallback);

			bindToValue?: boolean;

			valueDisplayMember?: (string | DataSourceComponent.DisplayMemberCallback);

			widgetOptions?: (Dropdown.Options | GridColumn.WidgetOptionsCallback<Dropdown.Options>);

			dataSourceConfigurator?: DropdownColumn.DataSourceConfiguratorCallback;

		}

		type DataSourceConfiguratorCallback = (row: GridDataRow) => (PackageCore.DataSource | null);

		export import Cell = Self.DropdownCell;

	}

	/**
	 * Helper that creates tooltip with a content for truncated text with ellipsis
	 */
	export class EllipsisTooltip {
		/**
		 * Constructs EllipsisTooltip
		 */
		constructor(options?: EllipsisTooltip.Options);

		/**
		 * Check if ellipsis helper assistance controls are shown
		 */
		shown: boolean;

		/**
		 * Attaches the helper to its parent component
		 */
		attach(args: object): void;

		/**
		 * Detach ellipsis helper from its parent component
		 */
		detach(): void;

		/**
		 * Show ellipsis helper assistance controls
		 */
		show(): void;

		/**
		 * Hide ellipsis helper assistance controls
		 */
		hide(): void;

	}

	export namespace EllipsisTooltip {
		interface Options {
			content: any;

		}

	}

	/**
	 * Favorite component
	 */
	export class Favorite extends PackageCore.Component {
		constructor(options?: Favorite.Options);

		/**
		 * Current value
		 */
		value: boolean;

		/**
		 * Displayed icon
		 */
		icon: Favorite.Icon;

		/**
		 * Icon size
		 */
		size: Favorite.Size;

		/**
		 * Icon color
		 */
		color: Favorite.Color;

		/**
		 * Toggled callback
		 */
		onToggled: (Favorite.ToggledCallback | null);

		/**
		 * Sets value
		 */
		setValue(value: boolean, args?: {reason?: (symbol | string)}): void;

		/**
		 * Toggles value
		 */
		toggle(args?: {reason?: (symbol | string)}): void;

		/**
		 * Favorite event
		 */
		static Event: Favorite.EventTypes;

	}

	export namespace Favorite {
		interface Options extends PackageCore.Component.Options {
			value?: boolean;

			icon?: Favorite.Icon;

			size?: Favorite.Size;

			color?: Favorite.Color;

			onToggled?: Favorite.ToggledCallback;

		}

		type ToggledCallback = (args: Favorite.ToggledArgs, sender: Favorite) => void;

		interface ToggledArgs {
			value: boolean;

			previousValue: boolean;

			reason: Favorite.Reason;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			TOGGLED: string;

		}

		/**
		 * Favorite icon
		 */
		enum Icon {
			STAR,
			HEART,
		}

		/**
		 * Favorite size
		 */
		enum Size {
			SMALL,
			DEFAULT,
			LARGE,
		}

		/**
		 * Favorite color
		 */
		enum Color {
			DEFAULT,
			NEUTRAL,
			THEMED,
			INFO,
			SUCCESS,
			WARNING,
			ERROR,
		}

		/**
		 * Favorite reason
		 */
		enum Reason {
			ENTER,
			SPACE,
			ESCAPE,
			CLICK,
			CALL,
		}

	}

	/**
	 * Field component renders a field-like view consisting of a label, control and an optional assistive content. It supports field level help and info icons in the label and validity indicator and helper buttons in the control section. A special type of Field is inline that is specifically tailored for use with CheckBox and RadioButton controls.
	 */
	export class Field extends PackageCore.Component {
		/**
		 * Constructor
		 */
		constructor(options?: Field.Options);

		/**
		 * Inline option. Special type of field usable for standalone Checkbox or RadioButton.
		 */
		inline: boolean;

		/**
		 * Label options.
		 */
		label: (string | number | PackageCore.Translation | null);

		/**
		 * Control component(s).
		 */
		control: (PackageCore.Component | PackageCore.JSX.Element | Field.ControlOptions | null);

		/**
		 * Alias for control property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Active control component according to current mode.
		 */
		activeControl: (PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Assistive content component.
		 */
		assistiveContent: (PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Field mode - edit or view. Ignored in JSX.
		 */
		mode: Field.Mode;

		/**
		 * Show or hide mandatory asterisk next to the field label.
		 */
		mandatory: boolean;

		/**
		 * Visibility of individual views - label, control, assistiveContent.
		 * @deprecated 
		 */
		visibility: Field.Visibility;

		/**
		 * An array of informative icons displayed next to the label.
		 */
		infoIcons: globalThis.Array<(Image | PackageCore.JSX.Element)>;

		/**
		 * An array of helper button options (label, icon, action).
		 */
		helperButtons: globalThis.Array<Field.ButtonOption>;

		/**
		 * Maximal size of control component
		 */
		size: Field.Size;

		/**
		 * Reserve fixed space on the right side of the control for validity icon and helper buttons.
		 */
		offset: boolean;

		/**
		 * Field orientation
		 */
		orientation: Field.Orientation;

		/**
		 * Label justification
		 */
		labelJustification: Field.LabelJustification;

		/**
		 * Label wrap
		 */
		labelWrap: (boolean | number);

		/**
		 * Field level help
		 */
		fieldLevelHelp: (Field.FieldLevelHelpCallback | HelpService.FieldLevelHelpOptions);

		/**
		 * Set inline option. Special type of field usable for standalone Checkbox or RadioButton.
		 */
		setInline(value: boolean): void;

		/**
		 * Get label options.
		 * @deprecated 
		 */
		getLabel(): (string | number | PackageCore.Translation);

		/**
		 * Set new label.
		 */
		setLabel(value: (string | number | PackageCore.Translation)): void;

		/**
		 * Get control component or control options.
		 * @deprecated 
		 */
		getControl(): (PackageCore.Component | PackageCore.JSX.Element | Field.ControlOptions | null);

		/**
		 * Set control
		 */
		setControl(value: (PackageCore.Component | PackageCore.JSX.Element | Field.ControlOptions)): void;

		/**
		 * Get active control component according to current mode.
		 * @deprecated 
		 */
		getActiveControl(): (PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Get assistive content component.
		 * @deprecated 
		 */
		getAssistiveContent(): (PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Set new assistive content component.
		 */
		setAssistiveContent(value: (PackageCore.Component | PackageCore.JSX.Element)): void;

		/**
		 * Return current mode.
		 * @deprecated 
		 */
		getMode(): Field.Mode;

		/**
		 * Set field mode.
		 */
		setMode(value: Field.Mode): void;

		/**
		 * True if field is mandatory.
		 * @deprecated 
		 */
		isMandatory(): boolean;

		/**
		 * Set field as mandatory.
		 */
		setMandatory(value: boolean): void;

		/**
		 * Return visibility state of individual views.
		 * @deprecated 
		 */
		getVisibility(): Field.Visibility;

		/**
		 * Set visibility for individual views of the field.
		 * @deprecated 
		 */
		setVisibility(value: Field.Visibility): void;

		/**
		 * Get information icons.
		 * @deprecated 
		 */
		getInfoIcons(): globalThis.Array<Image>;

		/**
		 * Set information icons.
		 */
		setInfoIcons(value: globalThis.Array<(Image | PackageCore.JSX.Element)>): void;

		/**
		 * Add information icon.
		 * @deprecated 
		 */
		addInfoIcon(icon: Image, index: number): void;

		/**
		 * Remove information icon.
		 * @deprecated 
		 */
		removeInfoIcon(icon: PackageCore.Component): void;

		/**
		 * Get helper buttons.
		 * @deprecated 
		 */
		getHelperButtons(): globalThis.Array<Field.ButtonOption>;

		/**
		 * Set helper buttons.
		 */
		setHelperButtons(buttons: globalThis.Array<Field.ButtonOption>): void;

		/**
		 * Add helper button.
		 * @deprecated 
		 */
		addHelperButton(button: Field.ButtonOption, index: number): void;

		/**
		 * Remove helper button.
		 * @deprecated 
		 */
		removeHelperButton(button: Field.ButtonOption): void;

		/**
		 * Get validation status.
		 * @deprecated 
		 */
		getStatus(): Field.Status;

		/**
		 * Reset validation status.
		 */
		clearStatus(): void;

		/**
		 * Set successful validation state without performing the validation.
		 */
		success(message: (string | PackageCore.Translation | PackageCore.Component)): void;

		/**
		 * Set informative validation state without performing the validation.
		 */
		info(message: (string | PackageCore.Translation | PackageCore.Component)): void;

		/**
		 * Set warning validation state without performing the validation.
		 */
		warning(message: (string | PackageCore.Translation | PackageCore.Component)): void;

		/**
		 * Set erroneous validation state without performing the validation.
		 */
		error(message: (string | PackageCore.Translation | PackageCore.Component)): void;

		/**
		 * Set pending validation state without performing the validation.
		 */
		pending(message: (string | PackageCore.Translation | PackageCore.Component)): void;

		/**
		 * Get status message.
		 * @deprecated 
		 */
		getStatusMessage(): (string | PackageCore.Translation | PackageCore.Component);

		/**
		 * Get field size.
		 * @deprecated 
		 */
		getSize(): Field.Size;

		/**
		 * Set field size.
		 */
		setSize(size: Field.Size): void;

		/**
		 * Get field offset.
		 * @deprecated 
		 */
		getOffset(): boolean;

		/**
		 * Set field offset.
		 */
		setOffset(offset: boolean): void;

		/**
		 * Get field orientation.
		 * @deprecated 
		 */
		getOrientation(): Field.Orientation;

		/**
		 * Set field orientation.
		 */
		setOrientation(value: Field.Orientation): void;

		/**
		 * Get label justification.
		 * @deprecated 
		 */
		getLabelJustification(): Field.LabelJustification;

		/**
		 * Set label justification.
		 */
		setLabelJustification(value: Field.LabelJustification): void;

		/**
		 * Get control by mode
		 */
		protected _selectControlByMode(mode: Field.Mode): (PackageCore.Component | PackageCore.JSX.Element | Field.ControlOptions | null);

		/**
		 * Handle control change
		 */
		protected _onControlChange(): void;

		/**
		 * Render a horizontal Field
		 */
		static Horizontal(props: Field.Options): PackageCore.JSX.Element;

		/**
		 * Render a vertical Field
		 */
		static Vertical(props: Field.Options): PackageCore.JSX.Element;

		/**
		 * Render an inline Field
		 */
		static Inline(props: Field.Options): PackageCore.JSX.Element;

		static Event: Field.EventTypes;

	}

	export namespace Field {
		interface ControlOptions {
			editable: PackageCore.Component;

			readOnly: PackageCore.Component;

		}

		interface ButtonOption {
			icon: Image.Source;

			label: (string | PackageCore.Translation);

			action: () => void;

		}

		interface Visibility {
			label?: boolean;

			control?: boolean;

			assistiveContent?: boolean;

		}

		interface Options extends PackageCore.Component.Options {
			label?: (string | number | PackageCore.Translation);

			control?: (PackageCore.Component | PackageCore.JSX.Element | Field.ControlOptions);

			assistiveContent?: (PackageCore.Component | PackageCore.JSX.Element);

			mode?: Field.Mode;

			mandatory?: boolean;

			infoIcons?: globalThis.Array<(Image | PackageCore.JSX.Element)>;

			helperButtons?: globalThis.Array<Field.ButtonOption>;

			fieldLevelHelp?: (Field.FieldLevelHelpCallback | HelpService.FieldLevelHelpOptions);

			size?: Field.Size;

			offset?: boolean;

			orientation?: Field.Orientation;

			labelJustification?: Field.LabelJustification;

			labelWrap?: (boolean | number);

			visibility?: Field.Visibility;

			inline?: boolean;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			MODE_CHANGED: string;

		}

		type FieldLevelHelpCallback = (label: Label) => void;

		enum Mode {
			EDIT,
			VIEW,
		}

		enum Orientation {
			HORIZONTAL,
			VERTICAL,
		}

		enum LabelJustification {
			START,
			END,
		}

		enum Size {
			AUTO,
			SMALL,
			MEDIUM,
			LARGE,
			XLARGE,
			XXLARGE,
			STRETCH,
		}

		export import Status = PackageCore.Component.Status;

		enum VisualStyle {
			DEFAULT,
		}

	}

	/**
	 * FieldGroup component
	 */
	export class FieldGroup extends PackageCore.Component {
		constructor(options?: FieldGroup.Options);

		/**
		 * Content
		 */
		content: (PackageCore.JSX.Element | PackageCore.Component);

		/**
		 * Alias for content property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Group title
		 */
		title: (string | number | PackageCore.Translation | null);

		/**
		 * Title background
		 */
		color: FieldGroup.Color;

	}

	export namespace FieldGroup {
		interface Options extends PackageCore.Component.Options {
			title: (string | number | PackageCore.Translation);

			color?: FieldGroup.Color;

		}

		enum Color {
			THEMED,
			NEUTRAL,
		}

	}

	/**
	 * File input widget. Files can be selected by the standard system dialog or by drag & dropping the files onto the component.
	 */
	export class FilePicker extends PackageCore.Component implements PackageCore.InputComponent {
		/**
		 * Constructs FilePicker
		 */
		constructor(options?: FilePicker.Options);

		/**
		 * File types offered by file picker as default. This is not taken into account during validation nor acceptance of the file.
		 */
		fileTypes: (string | globalThis.Array<string>);

		/**
		 * Multiple files can be entered at once (using CTRL or SHIFT key) if set to true.
		 */
		multiSelect: boolean;

		/**
		 * Show tooltip containing file names if more than one file has been selected.
		 */
		tooltipEnabled: boolean;

		/**
		 * Default text displayed next to the button when no file is selected.
		 */
		emptyText: string;

		/**
		 * Function that takes the list of selected files and returns the label to show
		 */
		labelText: (((files: globalThis.Array<File>) => string) | null);

		/**
		 * Validator of selected files.
		 */
		valueValidator: (FilePicker.ValueValidatorCallback | null);

		/**
		 * True if files not passing validation can be accepted.
		 */
		acceptInvalidValue: boolean;

		/**
		 * Button position.
		 */
		buttonPosition: FilePicker.ButtonPosition;

		/**
		 * Button options
		 */
		buttonOptions: Button.Options;

		/**
		 * Show/hide clear button.
		 */
		clearButton: boolean;

		/**
		 * An array of selected files.
		 */
		selectedFiles: globalThis.Array<File>;

		/**
		 * True if no file is selected.
		 */
		empty: boolean;

		/**
		 * Returns true if the input is mandatory
		 */
		mandatory: boolean;

		/**
		 * Globally unique id of the input element. Can be used in Label component.
		 */
		inputId: string;

		/**
		 * Returns attributes of the input element
		 */
		inputAttributes: PackageCore.HtmlAttributeList;

		/**
		 * Timeout for message
		 */
		messageTimeout: number;

		/**
		 * Files changed callback
		 */
		onFilesChanged: (FilePicker.FilesChangedCallback | null);

		/**
		 * Setter of file types offered by file picker.
		 */
		setFileTypes(value: (string | globalThis.Array<string>)): void;

		/**
		 * Setter of multiSelect option.
		 */
		setMultiSelect(value: boolean): void;

		/**
		 * Setter of tooltipEnabled option.
		 */
		setTooltipEnabled(value: boolean): void;

		/**
		 * Setter of button options.
		 */
		setButtonOptions(options: Button.Options): void;

		/**
		 * Setter of button position.
		 */
		setButtonPosition(value: FilePicker.ButtonPosition): void;

		/**
		 * Setter of default label text for empty selection.
		 */
		setEmptyText(value: (string | PackageCore.Translation)): void;

		/**
		 * Setter of label text function
		 */
		setLabel(value: (files: globalThis.Array<File>) => string): void;

		/**
		 * Setter of selected files validator.
		 */
		setValueValidator(value: FilePicker.ValueValidatorCallback): void;

		/**
		 * Setter of acceptInvalidValue option.
		 */
		setAcceptInvalidValue(value: boolean): void;

		/**
		 * Set mandatory falg of the input component
		 */
		setMandatory(value: boolean): void;

		/**
		 * Open file chooser window.
		 */
		open(): void;

		/**
		 * Clear file input.
		 */
		clear(options?: {reason?: string}): void;

		/**
		 * Transform an array of fileTypes into the value that can be set as file input accept property.
		 */
		private _getAcceptValue(): string;

		/**
		 * Create tooltip.
		 */
		private _createTooltip(): void;

		/**
		 * Updates selected files. This is private because of security restriction of file input element.
		 */
		private _updateFiles(options: {files: globalThis.Array<File>; reason?: string}): void;

		/**
		 * Validate files
		 */
		private _validate(files: globalThis.Array<File>): globalThis.Promise<any>;

		/**
		 * Sets selected files
		 */
		private _setFiles(options: {files: globalThis.Array<File>; reason: string}): globalThis.Promise<any>;

		/**
		 * Create file input element which provides a file picker when clicked on.
		 */
		private _renderInput(): void;

		/**
		 * Create button that activates file input element upon click.
		 */
		private _renderButton(): void;

		/**
		 * Create clear button that allows user to reset file input into empty state.
		 */
		private _renderClearButton(): void;

		static Event: FilePicker.EventTypes;

	}

	export namespace FilePicker {
		interface Options extends PackageCore.Component.Options {
			acceptInvalidValue?: boolean;

			buttonOptions?: Button.Options;

			buttonPosition?: FilePicker.ButtonPosition;

			clearButton?: boolean;

			emptyText?: (string | PackageCore.Translation);

			fileTypes?: globalThis.Array<string>;

			labelText?: (files: globalThis.Array<File>) => string;

			messageTimeout?: number;

			multiSelect?: boolean;

			tooltipEnabled?: boolean;

			valueValidator?: FilePicker.ValueValidatorCallback;

			mandatory?: boolean;

			onFilesChanged?: FilePicker.FilesChangedCallback;

		}

		type FilesChangedCallback = (args: FilePicker.FilesChangedArgs, sender: FilePicker) => void;

		interface FilesChangedArgs {
			files: globalThis.Array<File>;

			previousFiles: globalThis.Array<File>;

			reason: FilePicker.ChangeReason;

		}

		type ValueValidatorCallback = (previousFiles: globalThis.Array<File>, newFiles: globalThis.Array<File>) => (globalThis.Promise<boolean> | boolean);

		interface EventTypes extends PackageCore.Component.EventTypes {
			FILES_CHANGED: string;

		}

		interface Validation {
			acceptInvalidValue?: boolean;

			valueValidator?: FilePicker.ValueValidatorCallback;

		}

		interface ValidationResult {
			valid: boolean;

			message: string;

		}

		enum FileType {
			AUDIO,
			VIDEO,
			IMAGE,
			MEDIA,
		}

		enum ButtonPosition {
			START,
			END,
		}

		enum OpenReason {
			OPEN_CALL,
			BUTTON_CLICK,
		}

		enum ChangeReason {
			SELECT,
			DROP,
			CLEAR_BUTTON,
			CLEAR_CALL,
		}

		enum I18N {
			BUTTON_LABEL_STANDARD,
			BUTTON_LABEL_UPLOADING,
			LABEL_EMPTY,
			LABEL_FILE_NOT_ACCEPTED,
			LABEL_FILE_ATTACHED,
			LABEL_0_FILES_SELECTED,
			LABEL_FILETYPE_NOT_SUPPORTED,
		}

	}

	/**
	 * FilterChip is a component that allows to pick a single or multiple values from a picker that displays when user clicks on the chip.
	 */
	export class FilterChip extends PackageCore.Component {
		/**
		 * Constructs FilterChip
		 */
		constructor(options: FilterChip.Options);

		/**
		 * Selected value
		 */
		selectedValue: any;

		/**
		 * Label
		 */
		label: (string | PackageCore.Component | PackageCore.Translation);

		/**
		 * Function that transforms raw picker value to what is displayed in the FilterChip
		 */
		valueFormatter: FilterChip.ValueFormatterCallback;

		/**
		 * Function that decides if two values are equal
		 */
		valueComparator: FilterChip.ValueComparatorCallback;

		/**
		 * The instance of a picker window
		 */
		picker: (Picker | null);

		/**
		 * Size
		 */
		size: FilterChip.Size;

		/**
		 * True if the picker is opened
		 */
		pickerOpened: boolean;

		/**
		 * Value that is considered as an empty value
		 */
		emptyValue: any;

		/**
		 * True if the FilterChip is activated
		 */
		activated: boolean;

		/**
		 * Value changed callback
		 */
		onValueChanged: (FilterChip.ValueChangedCallback | null);

		/**
		 * Value accepted callback
		 */
		onValueAccepted: (FilterChip.ValueAcceptedCallback | null);

		/**
		 * Handles change of selected value
		 */
		setSelectedValue(value: any, options?: {reason?: symbol; accept?: boolean}): void;

		/**
		 * Clears the current selection and turns FilterChip into enabled state
		 */
		clear(options?: {reason?: symbol}): boolean;

		/**
		 * Sets FilterChip size
		 */
		setSize(value: FilterChip.Size): void;

		/**
		 * Opens picker
		 */
		openPicker(args?: object): void;

		/**
		 * Closes picker
		 */
		closePicker(args?: object): void;

		/**
		 * Toggles picker
		 */
		togglePicker(args?: object): void;

		/**
		 * Creates panel for the separator, displayed representation of a value and clear button
		 */
		private createValuePanel(): PackageCore.JSX.Element;

		/**
		 * Creates separator
		 */
		private createSeparator(): PackageCore.JSX.Element;

		/**
		 * Creates a representation of a selected value, that is displayed in the FilterChip
		 */
		private createValue(selectedValue: any): (PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Creates Text component from string
		 */
		private createValueFromString(text: string): PackageCore.JSX.Element;

		/**
		 * Creates clear button
		 */
		private createClearButton(): PackageCore.JSX.Element;

		/**
		 * Creates label
		 */
		private createLabel(): PackageCore.JSX.Element;

		/**
		 * Creates picker and binds handler to its events
		 */
		private createPicker(definition: FilterChip.PickerCallback): Picker;

		/**
		 * (Un)assigns guid of the value panel to the root component's describedBy property
		 */
		private assignDescribedByProperty(): void;

		/**
		 * Handles picker opening
		 */
		private handlePickerOpened(args: object): void;

		/**
		 * Handles picker closing
		 */
		private handlePickerClosed(args?: object): void;

		/**
		 * Handles picker update
		 */
		private handlePickerUpdated(): void;

		/**
		 * Returns true if the FilterChip is enabled
		 */
		private isActivated(selectedValue: any): boolean;

		/**
		 * Default empty value comparator
		 */
		static defaultValueComparator(selectedValue: any, emptyValue: any, filterChip: FilterChip): boolean;

		/**
		 * Default picker - multi selection from a ListBox
		 */
		static defaultPicker(options: object): FilterChip.PickerCallback;

		/**
		 * Single picker - single selection from a ListBox
		 */
		static singlePicker(options: object): FilterChip.PickerCallback;

		/**
		 * Default valueFormatter for FilterChip.defaultPicker, FilterChip.singlePicker
		 */
		static defaultValueFormatter(options?: FilterChip.DefaultValueFormatterOptions): FilterChip.ValueFormatterCallback;

		/**
		 * Factory function for creating FilterChip with defaultPicker and defaultValueFormatter
		 */
		static default(filterChipOptions: FilterChip.FactoryOptions, pickerOptions: object, valueFormatterOptions?: object): FilterChip;

		/**
		 * Factory function for creating FilterChip with defaultPicker and defaultValueFormatter for use in VDom/JSX
		 */
		static Default(props: FilterChip.FactoryOptions & {pickerOptions?: object; valueFormatterOptions?: object}): PackageCore.JSX.Element;

		/**
		 * Factory function for creating FilterChip with singlePicker and defaultValueFormatter
		 */
		static single(filterChipOptions: FilterChip.FactoryOptions, pickerOptions: object, valueFormatterOptions?: object): FilterChip;

		/**
		 * Factory function for creating FilterChip with singlePicker and defaultValueFormatter for use in VDom/JSX
		 */
		static Single(props: FilterChip.FactoryOptions & {pickerOptions?: object; valueFormatterOptions?: object}): PackageCore.JSX.Element;

		/**
		 * Date picker - single date selection from a Calendar
		 */
		static datePicker(options?: object): FilterChip.PickerCallback;

		/**
		 * valueFormatter for FilterChip.datePicker
		 */
		static dateValueFormatter(formatOrFormatter?: (string | FilterChip.FormatterCallback)): FilterChip.ValueFormatterCallback;

		/**
		 * Factory function for creating FilterChip with datePicker and dateValueFormatter
		 */
		static date(filterChipOptions: FilterChip.FactoryOptions, pickerOptions?: object, formatOrFormatter?: (string | FilterChip.FormatterCallback)): FilterChip;

		/**
		 * Factory function for creating FilterChip with datePicker and dateValueFormatter for use in VDom/JSX
		 */
		static Date(props: FilterChip.FactoryOptions & {pickerOptions?: object; formatOrFormatter?: (string | FilterChip.FormatterCallback)}): PackageCore.JSX.Element;

		/**
		 * Date Range Picker - date range selection from two Calendars
		 */
		static dateRangePicker(options?: object): FilterChip.PickerCallback;

		/**
		 * valueFormatter for FilterChip.dateRangePicker
		 */
		static dateRangeValueFormatter(formatOrFormatter?: (string | FilterChip.FormatterCallback)): FilterChip.ValueFormatterCallback;

		/**
		 * Factory function for creating FilterChip with dateRangePicker and dateRangeValueFormatter
		 */
		static dateRange(filterChipOptions: FilterChip.FactoryOptions, pickerOptions?: object, formatOrFormatter?: (string | FilterChip.FormatterCallback)): FilterChip;

		/**
		 * Factory function for creating FilterChip with dateRangePicker and dateRangeValueFormatter for use in VDom/JSX
		 */
		static DateRange(props: FilterChip.FactoryOptions & {pickerOptions?: object; formatOrFormatter?: (string | FilterChip.FormatterCallback)}): PackageCore.JSX.Element;

		/**
		 * Time picker - single time selection from a TimePicker
		 */
		static timePicker(options?: object): FilterChip.PickerCallback;

		/**
		 * valueFormatter for FilterChip.timePicker
		 */
		static timeValueFormatter(formatOrFormatter?: (string | FilterChip.FormatterCallback)): FilterChip.ValueFormatterCallback;

		/**
		 * Factory function for creating FilterChip with timePicker and timeValueFormatter
		 */
		static time(filterChipOptions: FilterChip.FactoryOptions, pickerOptions?: object, formatOrFormatter?: (string | FilterChip.FormatterCallback)): FilterChip;

		/**
		 * Factory function for creating FilterChip with timePicker and timeValueFormatter for use in VDom/JSX
		 */
		static Time(props: FilterChip.FactoryOptions & {pickerOptions?: object; formatOrFormatter?: (string | FilterChip.FormatterCallback)}): PackageCore.JSX.Element;

		/**
		 * Time Range Picker - time range selection from a TimeRange
		 */
		static timeRangePicker(options?: object): FilterChip.PickerCallback;

		/**
		 * valueFormatter for FilterChip.timeRangePicker
		 */
		static timeRangeValueFormatter(formatOrFormatter?: (string | FilterChip.FormatterCallback)): FilterChip.ValueFormatterCallback;

		/**
		 * Factory function for creating FilterChip with timeRangePicker and timeRangeValueFormatter
		 */
		static timeRange(filterChipOptions: FilterChip.FactoryOptions, pickerOptions?: object, formatOrFormatter?: (string | FilterChip.FormatterCallback)): FilterChip;

		/**
		 * Factory function for creating FilterChip with timeRangePicker and timeRangeValueFormatter for use in VDom/JSX
		 */
		static TimeRange(props: FilterChip.FactoryOptions & {pickerOptions?: object; formatOrFormatter?: (string | FilterChip.FormatterCallback)}): PackageCore.JSX.Element;

		/**
		 * Text Box Picker - text input field
		 */
		static textBoxPicker(options?: object): FilterChip.PickerCallback;

		/**
		 * valueFormatter for TextBoxPicker
		 */
		static textBoxValueFormatter(): FilterChip.ValueFormatterCallback;

		/**
		 * Factory function for creating FilterChip with textBoxPicker and textBoxValueFormatter
		 */
		static textBox(filterChipOptions: FilterChip.FactoryOptions, pickerOptions?: object): FilterChip;

		/**
		 * Factory function for creating FilterChip with textBoxPicker and textBoxValueFormatter for use in VDom/JSX
		 */
		static TextBox(props: FilterChip.FactoryOptions & {pickerOptions?: object}): PackageCore.JSX.Element;

		/**
		 * Check Box Picker - checkbox
		 */
		static checkBoxPicker(options?: object): FilterChip.PickerCallback;

		/**
		 * valueFormatter for CheckBoxPicker
		 */
		static checkBoxValueFormatter(): FilterChip.ValueFormatterCallback;

		/**
		 * Factory function for creating FilterChip with checkBoxPicker and checkBoxValueFormatter
		 */
		static checkBox(filterChipOptions: FilterChip.FactoryOptions, pickerOptions?: object): FilterChip;

		/**
		 * Factory function for creating FilterChip with checkBoxPicker and checkBoxValueFormatter for use in VDom/JSX
		 */
		static CheckBox(props: FilterChip.FactoryOptions & {pickerOptions?: object}): PackageCore.JSX.Element;

		/**
		 * Factory function for creating FilterChip with togglePicker and checkBoxValueFormatter
		 */
		static toggle(filterChipOptions: FilterChip.FactoryOptions): FilterChip;

		/**
		 * Factory function for creating FilterChip with togglePicker and checkBoxValueFormatter for use in VDom/JSX
		 */
		static Toggle(props: FilterChip.FactoryOptions): PackageCore.JSX.Element;

		/**
		 * FilterChip events
		 */
		static Event: FilterChip.EventTypes;

		/**
		 * Default FilterChip picker options
		 */
		static DEFAULT_PICKER_OPTIONS: object;

	}

	export namespace FilterChip {
		type ValueComparatorCallback = (selectedValue: any, emptyValue: any, filterChip: FilterChip) => boolean;

		type PickerCallback = (filterChip: FilterChip) => Picker;

		type ValueFormatterCallback = (selectedValue: any, filterChip: FilterChip) => (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

		type FormatterCallback = (value: any, filterChip: FilterChip, formatService: PackageCore.FormatService) => (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

		interface Options extends PackageCore.Component.Options {
			emptyValue?: any;

			valueComparator?: FilterChip.ValueComparatorCallback;

			label: (string | PackageCore.Component | PackageCore.Translation);

			picker: FilterChip.PickerCallback;

			selectedValue?: any;

			size?: FilterChip.Size;

			valueFormatter?: (FilterChip.ValueFormatterCallback | string);

			multiselectable?: boolean;

			role?: PackageCore.AriaRole;

			onValueChanged?: FilterChip.ValueChangedCallback;

			onValueAccepted?: FilterChip.ValueAcceptedCallback;

		}

		interface FactoryOptions extends PackageCore.Component.Options {
			emptyValue?: any;

			valueComparator?: FilterChip.ValueComparatorCallback;

			label: (string | PackageCore.Component | PackageCore.Translation);

			selectedValue?: any;

			size?: FilterChip.Size;

		}

		type ValueChangedCallback = (args: FilterChip.ValueChangedArgs, sender: FilterChip) => void;

		interface ValueChangedArgs {
			value: any;

			previousValue: any;

			reason: FilterChip.Reason;

		}

		type ValueAcceptedCallback = (args: FilterChip.ValueAcceptedArgs, sender: FilterChip) => void;

		interface ValueAcceptedArgs {
			value: any;

			previousValue: any;

			reason: FilterChip.Reason;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			SELECTED_VALUE_CHANGED: string;

			SELECTED_VALUE_ACCEPTED: string;

			ACTIVATED_STATE_CHANGED: string;

			PICKER_OPENING: string;

			PICKER_OPENED: string;

			PICKER_CLOSING: string;

			PICKER_CLOSED: string;

		}

		interface DefaultValueFormatterOptions {
			displayMember?: (string | DataSourceComponent.DisplayMemberCallback);

		}

		/**
		 * FilterChip reason enum
		 */
		enum Reason {
			CALL,
			CLEAR,
			CLEAR_BUTTON,
			CLEAR_KEY,
			PICKER,
			PICKER_UPDATE,
			CLICK,
			KEY_ARROW_DOWN,
			KEY_ARROW_UP,
			KEY_ESCAPE,
			KEY_ENTER,
		}

		/**
		 * FilterChip sizes
		 */
		enum Size {
			SMALL,
			MEDIUM,
		}

		/**
		 * FilterChip translations
		 */
		enum I18n {
			CLEAR_FILTER,
			ALL,
			CHECKBOX_YES,
			CHECKBOX_NO,
		}

	}

	/**
	 * Default FilterChip picker
	 */
	export class FilterChipPicker extends Picker {
		/**
		 * Constructs FilterChipPicker
		 */
		constructor(options: FilterChipPicker.Options);

		/**
		 * Picker dataSource
		 */
		dataSource: PackageCore.DataSource;

		/**
		 * The inner picker component - ListBox
		 */
		listBox: ListBox;

		/**
		 * Display member
		 */
		displayMember: (string | DataSourceComponent.DisplayMemberCallback | null);

		/**
		 * Search member
		 */
		searchMember: (string | DataSourceComponent.ValueMemberCallback | null);

		/**
		 * Handles picked value from ListBox
		 */
		private handleSelectionChanged(args: ListBox.SelectionChangedArgs): void;

		/**
		 * Closes the picker after selection when in single selection mode
		 */
		private handleListItemClicked(args: {buttons: object}): void;

		/**
		 * Handles when a list cursor is moved
		 */
		private handleListCursorMoved(args: {currentItem: PackageCore.Component}): void;

		/**
		 * Forwards message to the ListBox
		 */
		private forwardMessageToList(message: PackageCore.RoutedMessage, result: object): void;

	}

	export namespace FilterChipPicker {
		interface Options extends Picker.Options {
			listBox?: ListBox.Options;

			displayMember?: (string | DataSourceComponent.DisplayMemberCallback);

			searchMember?: (string | DataSourceComponent.ValueMemberCallback);

			comparator?: (left: any, right: any) => boolean;

		}

	}

	export namespace FilterFactory {
		type FilterPredicateCallback = (item: any, value: any) => boolean;

		interface Filter {
			id: any;

			filterPredicate: FilterFactory.FilterPredicateCallback;

			filterChip: FilterChip;

		}

		/**
		 * Creates a checkBox type filter
		 */
		function createCheckBoxFilter(options: {automationId?: string; id: string; label: string; binding?: string; filterPredicate?: FilterFactory.FilterPredicateCallback; value?: boolean}): FilterFactory.Filter;

		/**
		 * Creates a toggle type filter
		 */
		function createToggleFilter(options: {automationId?: string; id: string; label: string; binding?: string; filterPredicate?: FilterFactory.FilterPredicateCallback; value?: boolean}): FilterFactory.Filter;

		/**
		 * Creates a textBox type filter
		 */
		function createTextBoxFilter(options: {automationId?: string; id: string; label: string; binding?: string; filterPredicate?: FilterFactory.FilterPredicateCallback; value?: string; matchingOperator?: FilterFactoryConstant.TextBoxFilterMatchingOperator}): FilterFactory.Filter;

		/**
		 * Creates a dropdown type filter
		 */
		function createDropdownFilter(options: {automationId?: string; id: string; label: string; dataProvider: () => PackageCore.DataSource; valueMember: string; displayMember: string; binding?: string; filterPredicate?: FilterFactory.FilterPredicateCallback; value?: object}): FilterFactory.Filter;

		/**
		 * Creates a multi-select dropdown type filter
		 */
		function createMultiselectDropdownFilter(options: {automationId?: string; id: string; label: string; dataProvider: () => PackageCore.DataSource; valueMember: string; displayMember: string; binding?: string; filterPredicate?: FilterFactory.FilterPredicateCallback; value?: globalThis.Array<object>}): FilterFactory.Filter;

		/**
		 * Creates a datepicker type filter
		 */
		function createDateFilter(options: {automationId?: string; id: string; label: string; binding?: (string | ((item: any) => PackageCore.Date)); filterPredicate?: FilterFactory.FilterPredicateCallback; value?: PackageCore.Date}): FilterFactory.Filter;

		/**
		 * Creates a dateRange type filter
		 */
		function createDateRangeFilter(options: {automationId?: string; id: string; label: string; binding?: (string | ((item: any) => PackageCore.Date)); filterPredicate?: FilterFactory.FilterPredicateCallback; value?: {rangeStart: PackageCore.Date; rangeEnd: PackageCore.Date}}): FilterFactory.Filter;

		/**
		 * Creates a time picker type filter.
		 */
		function createTimeFilter(options: {id: string; label: string; binding?: (string | ((item: any) => PackageCore.Time)); format?: string; filterPredicate?: FilterFactory.FilterPredicateCallback; value?: PackageCore.Time}): FilterFactory.Filter;

		/**
		 * Creates a time range type filter
		 */
		function createTimeRangeFilter(options: {id: string; label: string; binding?: (string | ((item: any) => PackageCore.Time)); format?: string; filterPredicate?: FilterFactory.FilterPredicateCallback; value?: {start: PackageCore.Time; end: PackageCore.Time}}): FilterFactory.Filter;

		/**
		 * Creates a filter of a given type
		 */
		function create(type: FilterFactoryConstant.FilterType, options: object): FilterFactory.Filter;

	}

	export namespace FilterFactoryConstant {
		enum FilteringAreaPlacement {
			TOP,
			SIDE,
		}

		enum FilterType {
			TEXT_BOX,
			DROPDOWN,
			MULTISELECT_DROPDOWN,
			CHECK_BOX,
			DATE,
			TIME,
			DATE_RANGE,
			TIME_RANGE,
		}

		enum TextBoxFilterMatchingOperator {
			STARTS_WITH,
			ENDS_WITH,
			CONTAINS,
		}

	}

	/**
	 * Filter panel
	 */
	export class FilterPanel extends PackageCore.Component {
		/**
		 * Constructor
		 */
		constructor(options: FilterPanel.Options);

		/**
		 * Filter panel state
		 */
		state: object;

		filters: globalThis.Array<FilterPanel.Filter>;

		filtersVisibilityToggle: Button;

		showClearAll: boolean;

		isAnyFilterActive(): boolean;

		static Event: FilterPanel.EventTypes;

	}

	export namespace FilterPanel {
		interface Filter {
			filterChip: FilterChip;

			id: any;

		}

		interface Options extends PackageCore.Component.Options {
		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			STATE_UPDATED: string;

		}

		enum Reason {
			VISIBILITY_CHANGED,
			FILTER_VALUE_CHANGED,
			CLEAR_ALL,
			FILTERS_SETTER,
		}

		enum Orientation {
			VERTICAL,
			HORIZONTAL,
		}

	}

	/**
	 * Layout with BannerPanel on top that stretches the content to fill the whole window
	 */
	export function FixedLayout(props?: {children?: PackageCore.VDom.Children}): PackageCore.JSX.Element;

	/**
	 * Form context
	 */
	export class FormContext {
	}

	export namespace FormContext {
	}

	/**
	 * Formatted text component - creates a block of formatted text enclosed in span tag
	 */
	export class FormattedText extends PackageCore.Component {
		/**
		 * Constructs FormattedText
		 */
		constructor(options?: (FormattedText.Options | string | number | PackageCore.Translation));

		/**
		 * Formatted text content
		 */
		text: (string | number | PackageCore.Translation);

		/**
		 * Text property alias for VDom
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Formatter
		 */
		formatter: FormattedText.Formatter;

		/**
		 * Formatter options
		 */
		options: FormattedText.FormatterOptions;

		/**
		 * Formatted text decorator
		 */
		decorator: (PackageCore.Decorator | null);

		/**
		 * Gets state of wrapping
		 */
		wrap: (boolean | number);

		/**
		 * Gets state of whitespace
		 */
		whitespace: boolean;

		/**
		 * Sets formatted text content
		 */
		setText(text: (string | number | PackageCore.Translation)): void;

		/**
		 * Sets formatter
		 */
		setFormatter(formatter: FormattedText.Formatter): void;

		/**
		 * Sets formatter options
		 */
		setOptions(options: FormattedText.FormatterOptions): void;

		/**
		 * Sets formatted text decorator
		 */
		setDecorator(decorator: (PackageCore.Decorator | null)): void;

		/**
		 * Set wrapping
		 */
		setWrap(value: (boolean | number)): void;

		/**
		 * Set whitespace value
		 */
		setWhitespace(value: boolean): void;

		/**
		 * Sets formatter and its options
		 */
		setFormatterAndOptions(formatter: FormattedText.Formatter, options: FormattedText.FormatterOptions): void;

		/**
		 * Attaches ellipsis tooltip
		 */
		private _attachEllipsisHelper(i18n: PackageCore.I18n): void;

		/**
		 * Gets formatted items
		 */
		private _getFormattedItems(i18n: PackageCore.I18n): any;

		/**
		 * Creates new formatted text component with text formatted by markdown
		 */
		static markdown(text?: (string | number | PackageCore.Translation), options?: FormattedText.Options): FormattedText;

		/**
		 * Markdown FormattedText for use in VDom/JSX
		 */
		static Markdown(): PackageCore.JSX.Element;

		/**
		 * Creates new formatted text component with bold text parts
		 */
		static bold(text?: (string | number | PackageCore.Translation), formatterOptions?: FormattedText.FormatterOptions, options?: FormattedText.Options): FormattedText;

		/**
		 * Bold FormattedText for use in VDom/JSX
		 */
		static Bold(): PackageCore.JSX.Element;

		/**
		 * Creates new formatted text component with italic text parts
		 */
		static italic(text?: (string | number | PackageCore.Translation), formatterOptions?: FormattedText.FormatterOptions, options?: FormattedText.Options): FormattedText;

		/**
		 * Italic FormattedText for use in VDom/JSX
		 */
		static Italic(): PackageCore.JSX.Element;

		/**
		 * Creates new formatted text component with link text parts
		 */
		static link(text?: (string | number | PackageCore.Translation), formatterOptions?: FormattedText.FormatterOptions, options?: FormattedText.Options): FormattedText;

		/**
		 * Link FormattedText for use in VDom/JSX
		 */
		static Link(): PackageCore.JSX.Element;

		static getStyles(): void;

	}

	export namespace FormattedText {
		interface FormatterOptions {
			highlights?: (globalThis.Array<string> | globalThis.Array<number> | globalThis.Array<PackageCore.Translation> | globalThis.Array<FormattedText.LinkHighlight>);

			ignoreCase?: boolean;

			multiMatch?: boolean;

			linkOptions?: Link.Options;

			textOptions?: Text.Options;

		}

		interface LinkHighlight {
			content?: (string | number | PackageCore.Translation);

			url?: string;

		}

		interface Options extends PackageCore.Component.Options {
			decorator?: PackageCore.Decorator;

			formatter?: FormattedText.Formatter;

			options?: FormattedText.FormatterOptions;

			text?: (string | number | PackageCore.Translation);

			whitespace?: boolean;

			wrap?: (boolean | number);

		}

		/**
		 * Formatter used to utilize the text content
		 */
		enum Formatter {
			NONE,
			BOLD,
			ITALIC,
			LINK,
			MARKDOWN,
			ACCESS_KEY,
		}

	}

	export enum GapSize {
		NONE,
		XXXXS,
		XXXS,
		XXS,
		XS,
		S,
		M,
		L,
		XL,
		XXL,
		XXXL,
		XXXXL,
		SMALL,
		MEDIUM,
		LARGE,
	}

	namespace GapSizeHelper {
		interface SizeObject {
			top: (GapSize | null);

			bottom: (GapSize | null);

			start: (GapSize | null);

			end: (GapSize | null);

			horizontal: (GapSize | null);

			vertical: (GapSize | null);

		}

		interface SizeDefinition {
			top: GapSize;

			bottom: GapSize;

			start: GapSize;

			end: GapSize;

		}

		interface SizeClassObject {
			top: GapSizeHelper.SideClassObject;

			bottom: GapSizeHelper.SideClassObject;

			start: GapSizeHelper.SideClassObject;

			end: GapSizeHelper.SideClassObject;

		}

		interface SideClassObject {
			xxxxs: PackageCore.Style;

			xxxs: PackageCore.Style;

			xxs: PackageCore.Style;

			xs: PackageCore.Style;

			s: PackageCore.Style;

			m: PackageCore.Style;

			l: PackageCore.Style;

			xl: PackageCore.Style;

			xxl: PackageCore.Style;

			xxxl: PackageCore.Style;

			xxxxl: PackageCore.Style;

			small: PackageCore.Style;

			medium: PackageCore.Style;

			large: PackageCore.Style;

		}

		enum CssProperty {
			PADDING,
			MARGIN,
		}

		enum Side {
			TOP,
			BOTTOM,
			START,
			END,
		}

		/**
		 * Parses gap size object to gap size definition
		 */
		function parseGapSize(gapSize?: (GapSizeHelper.SizeObject | GapSize)): GapSizeHelper.SizeDefinition;

		/**
		 * Returns array of classes for all sides of the gap property
		 */
		function getGapClasses(property: GapSizeHelper.SizeClassObject, value: (GapSizeHelper.SizeObject | GapSize)): globalThis.Array<PackageCore.Style>;

		/**
		 * Generates styles for all the sides and each of gapEnum values
		 */
		function generateGapClasses(cssProperty: GapSizeHelper.CssProperty, tokens: object): GapSizeHelper.SizeClassObject;

		/**
		 * Generates styles for one side
		 */
		function generateGapSideClass(cssProperty: GapSizeHelper.CssProperty, side: GapSizeHelper.Side, tokens: object): GapSizeHelper.SideClassObject;

		/**
		 * Returns object with data attributes for given gap property
		 */
		function getGapDataAttributes(value: GapSizeHelper.SizeObject): string;

		/**
		 * GapSize type checker. Takes a gap size enum and returns a checker that matches the enum values.
		 */
		function GapSizeType(gapEnum: object, gapEnumName?: string): PackageCore.Type.Matcher;

	}

	/**
	 * Grab cell
	 */
	export class GrabCell extends GridCell {
		/**
		 * Constructs GrabCell
		 */
		constructor();

		showDirtyFlag: boolean;

		showLineNumber: boolean;

		/**
		 * Resizability
		 */
		resizable: boolean;

		/**
		 * Effective resizability
		 */
		effectiveResizable: boolean;

		/**
		 * Update line number
		 */
		updateLineNumber(): void;

		/**
		 * Update dirty flag
		 */
		updateDirtyFlag(): void;

		/**
		 * Toggle row resizibility
		 */
		setResizable(value: boolean): void;

	}

	export namespace GrabCell {
	}

	/**
	 * Grab column
	 */
	export class GrabColumn extends GridColumn {
		/**
		 * Constructs GrabColumn
		 */
		constructor(options: GrabColumn.Options);

		/**
		 * Show dirty flag
		 */
		showDirtyFlag: boolean;

		/**
		 * Show line number
		 */
		showLineNumber: boolean;

	}

	export namespace GrabColumn {
		interface Options extends GridColumn.Options {
			showDirtyFlag?: boolean;

			showLineNumber?: boolean;

		}

		export import Cell = Self.GrabCell;

	}

	/**
	 * Binding controller interface
	 */
	export interface GridBindingController {
		/**
		 * Bind row and data item
		 */
		bindRow(row: GridDataRow, options: object): void;

		/**
		 * Unbind row and data item
		 */
		unbindRow(row: GridDataRow, options: object): void;

		/**
		 * Commit row changes to data item
		 */
		commitRow(row: GridDataRow, options: object): void;

		/**
		 * Rollback cell changes
		 */
		rollbackRow(row: GridDataRow, options: object): void;

		/**
		 * Reload row cells from data item
		 */
		reloadRow(row: GridDataRow, options: object): void;

		/**
		 * Reload cell value
		 */
		reloadCell(row: GridDataRow, options: object): void;

		/**
		 * Get initial cell options
		 */
		getCellParameters(row: GridDataRow, column: GridColumn): void;

		/**
		 * React to cell updates
		 */
		handleCellUpdate(update: object): void;

		/**
		 * Update bindings when columns are added or removed
		 */
		updateBindings(rootColumn: GridColumn): void;

	}

	export namespace GridBindingController {
	}

	/**
	 * Binding controller with dirty cache
	 */
	class GridBindingControllerWithCache extends GridObservingBindingController {
	}

	namespace GridBindingControllerWithCache {
	}

	/**
	 * Grid cell
	 */
	export class GridCell extends PackageCore.Component {
		/**
		 * Constructs GridCell
		 */
		constructor(options: GridCell.Options);

		/**
		 * Cell value
		 */
		value: any;

		/**
		 * Cell row
		 */
		row: GridRow;

		/**
		 * Cell column
		 */
		column: GridColumn;

		/**
		 * Get the associated data grid
		 */
		dataGrid: DataGrid;

		/**
		 * Property for storing custom data on the cell
		 */
		userData: object;

		/**
		 * Row overlap in number of rows
		 */
		rowOverlap: number;

		/**
		 * Column overlap in number of leaf columns
		 */
		columnOverlap: number;

		/**
		 * Input mode
		 */
		inputMode: GridCell.InputMode;

		/**
		 * Returns true if the cell is in edit mode
		 */
		editMode: boolean;

		/**
		 * True for cells that should be always in edit mode when editable
		 */
		editOnly: boolean;

		/**
		 * Enable/disable cell editing
		 */
		editable: boolean;

		/**
		 * Cell is effectively editable if it is editable and the owning row and column are editable.
		 */
		effectiveEditable: boolean;

		/**
		 * If true cell value changes are immediately propagated without waiting for the cell to be deactivated
		 */
		immediateUpdate: boolean;

		/**
		 * If true cell value changes are immediately propagated without waiting for the cell to be deactivated
		 */
		effectiveImmediateUpdate: boolean;

		/**
		 * Dirty state
		 */
		dirty: boolean;

		/**
		 * Cell render data object hold custom data that are valid only while the cell is rendered
		 */
		renderData: (object | null);

		/**
		 * Controls whether cell is draggable
		 */
		draggable: boolean;

		/**
		 * Cell is effectively draggable if it is draggable and it has a drag source
		 */
		effectiveDraggable: boolean;

		/**
		 * Cell under cursor
		 */
		cursor: boolean;

		/**
		 * Horizontal content alignment
		 */
		horizontalAlignment: GridColumn.HorizontalAlignment;

		/**
		 * Vertical content alignment
		 */
		verticalAlignment: GridColumn.VerticalAlignment;

		/**
		 * Value comparator
		 */
		comparator: (((left: any, right: any) => boolean) | null);

		/**
		 * Value validator
		 */
		validator: (GridCell.ValidatorCallback | null);

		/**
		 * Get the undecorated content of the cell
		 */
		content: (PackageCore.Component | null);

		/**
		 * Get the undecorated view mode component
		 */
		viewContent: (PackageCore.Component | null);

		/**
		 * Get the undecorated edit mode component
		 */
		editContent: (PackageCore.Component | null);

		/**
		 * Index of the cell in the row segment
		 */
		physicalIndex: (number | null);

		/**
		 * Informative icon
		 */
		informativeIcon: (Image | null);

		/**
		 * Enable/disable status icons in cells
		 */
		showStatusIcon: boolean;

		/**
		 * Effective state of status icon visibility
		 */
		effectiveShowStatusIcon: boolean;

		/**
		 * Helper buttons
		 */
		helperButtons: globalThis.Array<Button>;

		/**
		 * Toggles the range resizer on the cell
		 */
		showRangeResizer: boolean;

		/**
		 * Activate cell
		 */
		activate(scrollIntoView: boolean): void;

		/**
		 * Accept current cell value
		 */
		acceptChanges(): void;

		/**
		 * Discard cell value changes
		 */
		discardChanges(): void;

		/**
		 * Re-render cell content
		 */
		refresh(): void;

		/**
		 * Reload cell value from the data source
		 */
		reload(): void;

		/**
		 * Set cell value
		 */
		setValue(value: any, options?: {discardChanges?: boolean; reason?: string}): void;

		/**
		 * Enable/disable cell editing
		 */
		setEditable(value: boolean): void;

		/**
		 * Enable/disable the dragging of this cell
		 */
		setDraggable(value: boolean): void;

		/**
		 * Updates cursor state of the cell
		 */
		setCursor(value: boolean): void;

		/**
		 * Enable/disable immediate update of cell value
		 */
		setImmediateUpdate(value: boolean): void;

		/**
		 * Mark the cell as dirty
		 */
		setDirty(dirty: boolean, options?: {reason?: string}): void;

		/**
		 * Switch cell mode
		 */
		setEditMode(editMode: boolean, options?: {reason?: string}): void;

		/**
		 * Set horizontal alignment of the cell
		 */
		setHorizontalAlignment(value: GridCell.HorizontalAlignment): void;

		/**
		 * Set vertical alignment of the cell
		 */
		setVerticalAlignment(value: GridCell.VerticalAlignment): void;

		/**
		 * Set the physical index of this cell
		 */
		setPhysicalIndex(index: (number | null)): void;

		/**
		 * Set the physical position of the cell
		 */
		setPhysicalPosition(first: boolean, last: boolean): void;

		/**
		 * Set the physical size of the cell
		 */
		setColumnOverlap(columnOverlap: number): void;

		/**
		 * Set informative icon
		 */
		setInformativeIcon(icon: (Image | null)): void;

		/**
		 * Set helper buttons
		 */
		setHelperButtons(definition: (globalThis.Array<GridCell.HelperButton> | globalThis.Array<Button>)): void;

		/**
		 * Toggle range resizer
		 */
		setShowRangeResizer(value: boolean): void;

		/**
		 * Compare old and new cell value for equality
		 */
		compareValues(oldValue: any, newValue: any): boolean;

		/**
		 * Check cell value validity
		 */
		validateValue(args: object): void;

		/**
		 * Automatically compute size of the cell to fit its content. If invoked without arguments then both width and height are computed.
		 */
		autoSize(options?: {width?: boolean; height?: boolean}): void;

		/**
		 * Automatically compute the width of this cell to fit its content
		 */
		autoSizeWidth(): void;

		/**
		 * Create overlay over the cell
		 */
		createOverlay(options: object): GridOverlay;

		/**
		 * Layout cell in the view
		 */
		layout(layout: {left: number; width: number; height: number}): void;

		/**
		 * Returns the value to be used for copy/paste
		 */
		getCopyValue(): string;

		/**
		 * This should render the cell value in view mode
		 */
		protected _renderView(): void;

		/**
		 * This should render the cell value in edit mode
		 */
		protected _renderEdit(): void;

		/**
		 * Erase the view mode value
		 */
		protected _eraseView(): void;

		/**
		 * Erase the edit mode value
		 */
		protected _eraseEdit(): void;

		/**
		 * Update the displayed cell value in view mode from the current value.
		 */
		protected _updateView(): void;

		/**
		 * Update the displayed cell value in edit mode from the current value.
		 */
		protected _updateEdit(): void;

		static Event: GridCell.EventTypes;

		static RefProperty: string;

	}

	export namespace GridCell {
		interface Options extends PackageCore.Component.Options {
			row: GridRow;

			column: GridColumn;

			rowOverlap?: number;

			userData?: object;

			value?: any;

			horizontalAlignment?: GridCell.HorizontalAlignment;

			verticalAlignment?: GridCell.VerticalAlignment;

			inputMode?: DataGrid.InputMode;

			comparator?: (left: any, right: any) => boolean;

			dirty?: boolean;

			draggable?: boolean;

			editable?: boolean;

			immediateUpdate?: boolean;

			editMode?: boolean;

			icon?: Image;

			showStatusIcon?: boolean;

			helperButtons?: (globalThis.Array<GridCell.HelperButton> | globalThis.Array<Button>);

			showHelperButtonsInViewMode?: boolean;

		}

		type WidgetOptionsCallback<T> = (args: {cell: GridCell; external: boolean; columnOptions: T}) => T;

		type ValidatorCallback = (args: {cell: GridCell; currentValue: any; newValue: any}, reason: string, setValid: GridCell.SetValidCallback, discardChanges: () => void, reject: () => void) => void;

		type SetValidCallback = (valid: boolean, options?: {message?: (string | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element); reason?: string}) => void;

		interface EventTypes extends PackageCore.Component.EventTypes {
			VALUE_CHANGED: string;

			DIRTY_CHANGED: string;

			MODE_CHANGED: string;

			EFFECTIVE_DRAGGABLE_CHANGED: string;

			EFFECTIVE_EDITABLE_CHANGED: string;

		}

		interface HelperButton {
			icon: Image.Source;

			label: string;

			action: Button.ActionCallback;

		}

		export import InputMode = Self.GridConstants.InputMode;

		export import Status = PackageCore.Component.Status;

		enum ValueChangeReason {
			ACCEPT,
			INPUT,
		}

		export import VerticalAlignment = Self.GridConstants.VerticalAlignment;

		export import HorizontalAlignment = Self.GridConstants.HorizontalAlignment;

	}

	/**
	 * Cell range
	 */
	class GridCellRange {
		/**
		 * Constructs GridCellRange
		 */
		constructor(startCell: GridCell, endCell: GridCell);

		/**
		 * Start cell
		 */
		start: GridCell;

		/**
		 * Start cell
		 */
		end: GridCell;

		/**
		 * Returns the top left cell which is the start cell used when resizing the range by mouse
		 */
		dragStart: (GridCell | null);

		/**
		 * Check if two ranges are equal
		 */
		equals(range: (GridCellRange | null)): boolean;

		/**
		 * Visit cells contained in the range
		 */
		visit(callback: GridCellRange.VisitCallback): void;

	}

	namespace GridCellRange {
		type VisitCallback = (cell: GridCell, args: {rowIndex: number; columnIndex: number; startRow: boolean; endRow: boolean; startColumn: boolean; endColumn: boolean}) => void;

	}

	/**
	 * Data grid column
	 */
	export class GridColumn implements PackageCore.EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: PackageCore.EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: PackageCore.EventSource.EventName, listener: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: PackageCore.EventSource.EventName): void;

		/**
		 * Constructs GridColumn
		 */
		constructor(options: GridColumn.Options);

		/**
		 * Column type
		 */
		type: DataGrid.ColumnType;

		/**
		 * Column name
		 */
		name: string;

		/**
		 * Property for storing custom data on the column
		 */
		userData: object;

		/**
		 * Column width in pixels
		 */
		width: number;

		/**
		 * Minimum column width for the automatic sizing strategy
		 */
		minWidth: number;

		/**
		 * Maximum column width for the automatic sizing strategy
		 */
		maxWidth: number;

		/**
		 * If enabled the automatic sizing is disabled for this column
		 */
		manualWidth: boolean;

		/**
		 * Column stretch factor. Specifies what fraction of the available space should this column take. Must be non-zero for the column to be stretchable.
		 */
		stretchFactor: number;

		/**
		 * True if the column has stretch factor set to non-zero value
		 */
		stretchable: boolean;

		/**
		 * True if the column is stretchable and column stretch is enabled
		 */
		effectiveStretchable: boolean;

		/**
		 * Column visibility
		 */
		visible: boolean;

		/**
		 * Column is effectively visible if it is visible and all its parents are effectively visible
		 */
		effectiveVisible: boolean;

		/**
		 * Ability to drag and drop this column
		 */
		draggable: boolean;

		/**
		 * Column is effectively draggable if it is draggable and column drag is enabled on the owning data grid
		 */
		effectiveDraggable: boolean;

		/**
		 * Ability to resize this column
		 */
		resizable: boolean;

		/**
		 * Column is effectively resizable if it is resizable and column resizing is enabled on the owning data grid
		 */
		effectiveResizable: boolean;

		/**
		 * Enable/disable column editing
		 */
		editable: boolean;

		/**
		 * Column is effectively editable if it is editable and the owning grid is editable
		 */
		effectiveEditable: boolean;

		/**
		 * Cell changes are immediately propagated and do not wait for the cell to be deactivated
		 */
		immediateUpdate: boolean;

		/**
		 * Hierarchy level
		 */
		level: number;

		/**
		 * Column label
		 */
		label: string;

		/**
		 * Binding definition
		 */
		binding: (string | object);

		/**
		 * Binding logic
		 */
		binder: object;

		/**
		 * Child index
		 */
		index: number;

		/**
		 * Column section
		 */
		section: DataGrid.ColumnSection;

		/**
		 * Physical index
		 */
		physicalIndex: number;

		/**
		 * Parent column
		 */
		parentColumn: (GridColumn | null);

		/**
		 * Root column
		 */
		rootColumn: GridColumn;

		/**
		 * Child columns
		 */
		childColumns: globalThis.Array<GridColumn>;

		/**
		 * Child column count
		 */
		childCount: number;

		/**
		 * List of visible child columns
		 */
		visibleChildColumns: globalThis.Array<GridColumn>;

		/**
		 * Reference to the owning data grid
		 */
		dataGrid: DataGrid;

		/**
		 * Horizontal content alignment
		 */
		horizontalAlignment: GridColumn.HorizontalAlignment;

		/**
		 * vertical content alignment
		 */
		verticalAlignment: GridColumn.VerticalAlignment;

		/**
		 * Horizontal alignment of the header cell
		 */
		headerHorizontalAlignment: GridColumn.HorizontalAlignment;

		/**
		 * Horizontal alignment of the header cell
		 */
		headerVerticalAlignment: GridColumn.VerticalAlignment;

		/**
		 * Column class list
		 */
		classList: PackageCore.HtmlClassList;

		/**
		 * Header cell class list
		 */
		headerClassList: PackageCore.HtmlClassList;

		/**
		 * The number of leaf columns in this column
		 */
		leafCount: number;

		/**
		 * The number of visible leaf columns in this column
		 */
		visibleLeafCount: number;

		/**
		 * True if this is a leaf column
		 */
		leaf: boolean;

		/**
		 * True if this is effectively a leaf column (i.e. it has no visible child columns)
		 */
		effectiveLeaf: boolean;

		/**
		 * Enable/disable column
		 */
		enabled: boolean;

		/**
		 * True if enabled is true and the DataGrid is enabled
		 */
		effectiveEnabled: boolean;

		/**
		 * Header cell
		 */
		headerCell: GridHeaderCell;

		/**
		 * Minimum allowed width for manual resizing
		 */
		userMinWidth: number;

		/**
		 * Maximum allowed width for manual resizing
		 */
		userMaxWidth: number;

		/**
		 * Enable/disable column sorting
		 */
		sortable: boolean;

		/**
		 * Column is effectively sortable if it is sortable and data grid sorting is enabled
		 */
		effectiveSortable: boolean;

		/**
		 * Sorting direction
		 */
		sortDirection: (DataGrid.SortDirection | null);

		/**
		 * Sorting order
		 */
		sortOrder: (number | null);

		/**
		 * Set to true if this column has a default sorting
		 */
		sortDefault: boolean;

		/**
		 * Column menu. Note that this is just a shortcut for the headerHelperButtons property and will overwrite its value.
		 */
		menu: (globalThis.Array<object> | ((column: GridColumn) => globalThis.Array<object>));

		/**
		 * Column cell mode
		 */
		inputMode: GridColumn.InputMode;

		/**
		 * Value comparator for the column
		 */
		comparator: (((left: any, right: any) => boolean) | null);

		/**
		 * Value validator for the column
		 */
		validator: (GridCell.ValidatorCallback | null);

		/**
		 * Enable/disable status icons in cells
		 */
		showStatusIcon: boolean;

		/**
		 * Function that generates cell helper buttons
		 */
		helperButtons: (GridColumn.HelperButtonProvider | null);

		/**
		 * Show helper buttons in view/edit mode or always
		 */
		helperButtonMode: GridColumn.HelperButtonMode;

		/**
		 * Header helper buttons
		 */
		headerHelperButtons: (globalThis.Array<Button> | globalThis.Array<GridCell.HelperButton>);

		/**
		 * Show header cell helper buttons in view/edit mode or always
		 */
		headerHelperButtonMode: GridColumn.HelperButtonMode;

		/**
		 * Returns true if the column is mandatory
		 */
		mandatory: boolean;

		/**
		 * Create a new cell
		 */
		createCell(args: object): GridCell;

		/**
		 * Create a new header cell
		 */
		createHeaderCell(args: any): GridHeaderCell;

		/**
		 * Refresh all cells in this column
		 */
		refreshCells(): void;

		/**
		 * Reload all data cells in this column
		 */
		reloadCells(): void;

		/**
		 * Add child column
		 */
		addColumn(columnDefinition: (DataGrid.ColumnDefinition | GridColumn), options?: {index?: number; reason?: string}): GridColumn;

		/**
		 * Add child columns
		 */
		addColumns(columnDefinitions: (globalThis.Array<DataGrid.ColumnDefinition> | globalThis.Array<GridColumn>), options?: {index?: number; reason?: string}): globalThis.Array<GridColumn>;

		/**
		 * Remove a child column
		 */
		removeColumn(id: (string | GridColumn), options?: {reason?: string}): GridColumn;

		/**
		 * Remove child columns
		 */
		removeColumns(index: number, count: number, options?: {reason?: string}): globalThis.Array<GridColumn>;

		/**
		 * Remove all columns
		 */
		removeAll(options?: {reason?: string}): globalThis.Array<GridColumn>;

		/**
		 * Move column to a different parent/index
		 */
		moveColumn(columnId: (string | GridColumn), targetParent: GridColumn, options?: {index?: number; reason?: string}): GridColumn;

		/**
		 * Move child columns to a different parent/index
		 */
		moveColumns(index: number, count: number, targetParent: GridColumn, options?: {index?: number; reason?: string}): globalThis.Array<GridColumn>;

		/**
		 * Find child column
		 */
		findColumn(id: (string | number | ((column: GridColumn) => boolean) | GridColumn), deep?: boolean): (GridColumn | null);

		/**
		 * Set column visibility
		 */
		setVisible(visible: boolean): void;

		/**
		 * Enable/disable cells in the column
		 */
		setEnabled(value: boolean): void;

		/**
		 * Enable/disable cell editing in this column
		 */
		setEditable(value: boolean): void;

		/**
		 * Enable/disable dragging of this column
		 */
		setDraggable(value: boolean): void;

		/**
		 * Enable/disable resizing of this column
		 */
		setResizable(value: boolean): void;

		/**
		 * Enable/disable sorting of this column
		 */
		setSortable(value: boolean): void;

		/**
		 * Enable/disable immediateUpdate for cells in this column
		 */
		setImmediateUpdate(value: boolean): void;

		/**
		 * Change column label
		 */
		setLabel(label: string): void;

		/**
		 * Change column width
		 */
		setWidth(width: number, args?: {reason?: string}): void;

		/**
		 * Set horizontal alignment for cells in this column
		 */
		setHorizontalAlignment(value: GridColumn.HorizontalAlignment): void;

		/**
		 * Set vertical alignment for cells in this column
		 */
		setVerticalAlignment(value: GridColumn.HorizontalAlignment): void;

		/**
		 * Set horizontal alignment for the header cell
		 */
		setHeaderHorizontalAlignment(value: GridColumn.HorizontalAlignment): void;

		/**
		 * Set vertical alignment for the header cell
		 */
		setHeaderVerticalAlignment(value: GridColumn.HorizontalAlignment): void;

		/**
		 * Set header helper buttons
		 */
		setHeaderHelperButtons(buttons: (globalThis.Array<Button> | globalThis.Array<GridCell.HelperButton>)): void;

		/**
		 * Get the flat list of columns in this subtree
		 */
		getFlatColumns(): globalThis.Array<GridColumn>;

		/**
		 * Get the list of leaf columns
		 */
		getLeafColumns(): globalThis.Array<GridColumn>;

		/**
		 * Get the list of visible leaf columns
		 */
		getVisibleLeafColumns(): globalThis.Array<GridColumn>;

		/**
		 * Invoke callback for all columns in this subtree
		 */
		visit(callback: (column: GridColumn) => (boolean | null), self?: boolean): void;

		/**
		 * Invoke callback for this column and all its parents
		 */
		visitUp(callback: (column: GridColumn) => (boolean | null)): void;

		/**
		 * Invoke callback for all cells in this column
		 */
		visitCells(callback: (cell: GridCell) => void): void;

		/**
		 * Invoke callback for all data cells in this column
		 */
		visitDataCells(callback: (cell: GridCell) => void): void;

		/**
		 * Get cell value from raw data value
		 */
		unboxValue(row: GridRow, value: any): any;

		/**
		 * Convert cell value to raw data value
		 */
		boxValue(row: GridRow, value: any): any;

		/**
		 * Automatically compute size of cells in this column to fit their content. If invoked without arguments then both width and height are computed.
		 */
		autoSize(options?: {width?: boolean; height?: boolean}): void;

		/**
		 * Automatically compute the width of cells in this column to fit their content
		 */
		autoSizeWidth(): void;

		/**
		 * Create overlay over this column
		 */
		createOverlay(options: object): GridOverlay;

		/**
		 * Set sort direction
		 */
		setSortDirection(direction: DataGrid.SortDirection, options?: {reason?: string}): void;

		/**
		 * Set sort order
		 */
		setSortOrder(order: number, options?: {reason?: string}): void;

		/**
		 * Set default sorting
		 */
		setSortDefault(value: boolean, options?: {reason?: string}): void;

		/**
		 * Set column menu
		 */
		setMenu(menu: (globalThis.Array<object> | ((column: GridColumn) => globalThis.Array<object>))): void;

		/**
		 * Create cell based on the colummn type
		 */
		private _onCreateCell(args: object): GridCell;

		/**
		 * Register column type factory
		 */
		static registerColumnFactory(type: string, factory: {createInstance: (options: object) => GridColumn}): void;

		/**
		 * Get column factory
		 */
		static getColumnFactory(type: string): void;

		/**
		 * Create column instance
		 */
		static instantiateColumn(type: string, args: GridColumn.Options): GridColumn;

		/**
		 * Default cell value comparator
		 */
		static defaultComparator(cell: GridCell, oldValue: any, newValue: any): boolean;

		static Event: GridColumn.EventTypes;

	}

	export namespace GridColumn {
		interface Options {
			type: DataGrid.ColumnType;

			name: string;

			binding?: (string | object);

			label?: string;

			dataGrid?: DataGrid;

			userData?: object;

			width?: number;

			stretchFactor?: number;

			level?: number;

			horizontalAlignment?: GridColumn.HorizontalAlignment;

			verticalAlignment?: GridColumn.VerticalAlignment;

			headerHorizontalAlignment?: GridColumn.HorizontalAlignment;

			headerVerticalAlignment?: GridColumn.VerticalAlignment;

			minWidth?: number;

			maxWidth?: number;

			userMinWidth?: number;

			userMaxWidth?: number;

			sortable?: boolean;

			sortDirection?: DataGrid.SortDirection;

			sortOrder?: number;

			sortDefault?: boolean;

			inputMode?: DataGrid.InputMode;

			menu?: (globalThis.Array<object> | ((column: GridColumn) => globalThis.Array<object>));

			comparator?: (left: any, right: any) => boolean;

			validator?: GridCell.ValidatorCallback;

			customizeCell?: (cell: GridCell) => void;

			customizeHeaderCell?: (cell: GridHeaderCell) => void;

			messageFilter?: PackageCore.RoutedMessage.Filter;

			boxValue?: (row: GridDataRow, value: any) => any;

			unboxValue?: (row: GridDataRow, value: any) => any;

			headerContent?: GridHeaderCell.ContentCallback;

			visible?: boolean;

			draggable?: boolean;

			resizable?: boolean;

			editable?: boolean;

			enabled?: boolean;

			immediateUpdate?: boolean;

			classList?: (string | globalThis.Array<string>);

			headerClassList?: (string | globalThis.Array<string>);

			columns?: (globalThis.Array<DataGrid.ColumnDefinition> | globalThis.Array<GridColumn>);

			showStatusIcon?: boolean;

			helperButtons?: GridColumn.HelperButtonProvider;

			helperButtonMode?: boolean;

			headerHelperButtons?: (globalThis.Array<Button> | globalThis.Array<GridCell.HelperButton>);

			headerHelperButtonMode?: boolean;

			on?: PackageCore.EventSource.ListenerMap;

		}

		type WidgetOptionsCallback<T> = (args: {cell: GridCell; external: boolean; columnOptions: T}) => T;

		type HelperButtonProvider = (cell: GridCell) => (globalThis.Array<GridCell.HelperButton> | globalThis.Array<Button>);

		interface EventTypes {
			COLUMNS_ADDED: string;

			COLUMNS_REMOVED: string;

			COLUMNS_MOVED: string;

			RESIZED: string;

			SHOWN: string;

			EFFECTIVE_ENABLED_CHANGED: string;

			EFFECTIVE_EDITABLE_CHANGED: string;

			CLASS_LIST_CHANGED: string;

			LABEL_CHANGED: string;

			SORT_DIRECTION_CHANGED: string;

			SORT_ORDER_CHANGED: string;

			SORT_DEFAULT_CHANGED: string;

			CELL_UPDATE: string;

		}

		export import InputMode = Self.GridConstants.InputMode;

		export import HelperButtonMode = Self.GridConstants.HelperButtonMode;

		export import VerticalAlignment = Self.GridConstants.VerticalAlignment;

		export import HorizontalAlignment = Self.GridConstants.HorizontalAlignment;

		export import SortDirection = Self.GridConstants.SortDirection;

		/**
		 * Column width type
		 */
		enum Width {
			AUTO,
			DEFAULT,
		}

	}

	export namespace GridColumnDataExchange {
	}

	/**
	 * Grid column factory
	 */
	class GridColumnFactory {
		/**
		 * Constructs GridColumnFactory
		 */
		constructor();

		/**
		 * Register new column factory
		 */
		registerColumn(type: string, factory: {createInstance: (options: object) => GridColumn}): void;

		/**
		 * Get factory for column type
		 */
		getFactory(type: string): {createInstance: (options: object) => GridColumn};

		/**
		 * Create column based on the type
		 */
		instantiateColumn(type: string, args: object): (GridColumn | null);

		/**
		 * Clear the register
		 */
		clear(): void;

	}

	namespace GridColumnFactory {
	}

	namespace GridConstants {
		enum RowSection {
			HEADER,
			BODY,
			FOOTER,
		}

		enum ColumnSection {
			LEFT,
			BODY,
			RIGHT,
		}

		enum InputMode {
			DEFAULT,
			EDIT_ONLY,
		}

		enum HelperButtonMode {
			EDIT_ONLY,
			VIEW_ONLY,
			ALWAYS,
		}

		enum HorizontalAlignment {
			LEFT,
			CENTER,
			RIGHT,
			STRETCH,
		}

		enum VerticalAlignment {
			TOP,
			CENTER,
			BOTTOM,
			STRETCH,
		}

		enum SortDirection {
			NONE,
			ASCENDING,
			DESCENDING,
		}

		enum ColumnType {
			ACTION,
			CHECK_BOX,
			DROPDOWN,
			DATE_PICKER,
			TIME_PICKER,
			GRAB,
			LINK,
			TEMPLATED,
			TEXT_AREA,
			TEXT_BOX,
			TREE,
			DETAIL,
			MULTI_SELECT_DROPDOWN,
			SELECTION,
		}

		enum CursorUpdateReason {
			CALL,
			KEYPRESS,
			CLICK,
		}

	}

	/**
	 * DataGrid data exchange helpers
	 */
	export namespace GridDataExchange {
		export import Column = Self.GridColumnDataExchange;

		export import Row = Self.GridRowDataExchange;

	}

	/**
	 * Grid data row
	 */
	export class GridDataRow extends GridMasterRow {
		/**
		 * Constructs GridDataRow
		 */
		constructor(options?: GridDataRow.Options);

		/**
		 * The associated data store entry
		 */
		dataStoreEntry: PackageCore.DataStoreEntry;

		/**
		 * The associated data item
		 */
		dataItem: any;

		/**
		 * Returns true if the row is bound to data
		 */
		dataBound: boolean;

		/**
		 * True if child rows have been loaded
		 */
		loaded: boolean;

		/**
		 * True if child rows are currently being loaded
		 */
		loading: boolean;

		/**
		 * Dirty state
		 */
		dirty: boolean;

		/**
		 * Hint if there are child rows
		 */
		childRowHint: (boolean | null);

		/**
		 * Commit row
		 */
		commit(options: {reason?: string}): void;

		/**
		 * Rollback row
		 */
		rollback(options: {reason?: string}): void;

		/**
		 * Mark row as dirty
		 */
		setDirty(dirty: boolean, options?: {reason?: string}): void;

		/**
		 * Attach data item listener to the row. For internal use only.
		 */
		attachDataItemListener(observedItem: any, listener: (args: PackageCore.PropertyObservable.EventArgs, sender: any) => void): void;

		/**
		 * Detach data item listener. For internal use only.
		 */
		detachDataItemListener(): void;

		/**
		 * Load child rows
		 */
		load(): globalThis.Promise<any>;

		/**
		 * Loads all child rows recursively
		 */
		loadAll(): globalThis.Promise<any>;

		/**
		 * Load and expand all child rows recursively
		 */
		expandAll(): globalThis.Promise<any>;

		static Event: GridDataRow.EventTypes;

	}

	export namespace GridDataRow {
		interface Options extends GridMasterRow.Options {
		}

		interface EventTypes extends GridMasterRow.EventTypes {
			COMMITTED: string;

			ROLLBACKED: string;

			DIRTY_CHANGED: string;

			LOADING_STARTED: string;

			LOADING_FINISHED: string;

		}

	}

	/**
	 * Header cell
	 */
	export class GridHeaderCell extends GridCell {
		/**
		 * Constructs GridHeaderCell
		 */
		constructor(options?: GridHeaderCell.Options);

		/**
		 * Column label
		 */
		label: string;

		/**
		 * Returns true if the mandatory indicator should be shown
		 */
		mandatory: boolean;

		/**
		 * True if this columns is sortable by click
		 */
		sortable: boolean;

		/**
		 * Column sort direction
		 */
		sortDirection: (DataGrid.SortDirection | null);

		/**
		 * Column sort order
		 */
		sortOrder: (number | null);

		/**
		 * Set to true if this column has a default sorting
		 */
		sortDefault: boolean;

		/**
		 * Resizability flag
		 */
		resizable: boolean;

		effectiveResizable: boolean;

		/**
		 * Horizontal label alignment
		 */
		verticalAlignment: GridColumn.VerticalAlignment;

		/**
		 * Horizontal label alignment
		 */
		horizontalAlignment: GridColumn.HorizontalAlignment;

		/**
		 * Set column label
		 */
		setLabel(label: (string | PackageCore.Translation)): void;

		/**
		 * Show or hide the mandatory indicator
		 */
		setMandatory(value: boolean): void;

		/**
		 * Enable/disable sorting
		 */
		setSortable(sortable: boolean): void;

		/**
		 * Set sorting direction
		 */
		setSortDirection(direction: DataGrid.SortDirection): void;

		/**
		 * Set sort order
		 */
		setSortOrder(order: number): void;

		/**
		 * Mark column as default sorted
		 */
		setSortDefault(value: boolean): void;

		/**
		 * Enable/disable column resizing
		 */
		setResizable(value: boolean): void;

	}

	export namespace GridHeaderCell {
		interface Options extends GridCell.Options {
			label?: (string | PackageCore.Translation);

			sortDirection?: DataGrid.SortDirection;

			sortOrder?: number;

			sortDefault?: boolean;

			autoSizeHeight?: boolean;

			mandatory?: boolean;

			sortable?: boolean;

			resizable?: boolean;

			content?: GridHeaderCell.ContentCallback;

		}

		type ContentCallback = (args: {cell: GridHeaderCell; context: object}) => (PackageCore.Component | PackageCore.JSX.Element);

	}

	/**
	 * Header row
	 */
	export class GridHeaderRow extends GridSyntheticRow {
		/**
		 * Constructs GridHeaderRow
		 */
		constructor(options?: GridHeaderRow.Options);

	}

	export namespace GridHeaderRow {
		interface Options extends GridSyntheticRow.Options {
		}

	}

	export interface GridInputController {
		/**
		 * Attaches controller to the given component
		 */
		attach(component: PackageCore.Component): void;

		/**
		 * Detaches controller
		 */
		detach(): void;

		/**
		 * Resets controller
		 */
		reset(): void;

		/**
		 * Filters message
		 */
		filterMessage(message: object, result: object): void;

		/**
		 * Handles message
		 */
		handleMessage(message: object, result: object): void;

		/**
		 * Close editing of the current cell and start editing of a new cell
		 */
		editCell(cell: GridCell, activate: boolean, reason?: DataGrid.CursorUpdateReason): void;

		/**
		 * Start cell editing
		 */
		startEditing(cell: GridCell, activate?: boolean, reason?: DataGrid.CursorUpdateReason): void;

		/**
		 * Close cell editing
		 */
		closeEditing(focusGrid: boolean, nextEditedCell?: GridCell): void;

		/**
		 * Accept changes on currently edited cell
		 */
		acceptChanges(): void;

		/**
		 * Discard changes on currently edited cell
		 */
		discardChanges(): void;

		/**
		 * Handle row removal
		 */
		handleRowRemoved(row: GridRow): void;

	}

	export namespace GridInputController {
	}

	/**
	 * Class responsible for managing fit to content functionality
	 */
	class GridManualAutoSize {
		/**
		 * Constructs GridManualAutoSize
		 */
		constructor();

	}

	namespace GridManualAutoSize {
	}

	/**
	 * Grid master row
	 */
	export class GridMasterRow extends GridRow {
		/**
		 * Constructs GridMasterRow
		 */
		constructor(options?: GridMasterRow.Options);

		index: number;

		/**
		 * List of child rows
		 */
		childRows: globalThis.Array<GridRow>;

		/**
		 * Number of child rows
		 */
		childCount: number;

		/**
		 * True if the row is expanded
		 */
		expanded: boolean;

		/**
		 * True if the row is collapsed
		 */
		collapsed: boolean;

		/**
		 * List of inside above synthetic rows
		 */
		insideAboveSyntheticRows: globalThis.Array<GridSyntheticRow>;

		/**
		 * List of inside below synthetic rows
		 */
		insideBelowSyntheticRows: globalThis.Array<GridSyntheticRow>;

		/**
		 * List of outside above synthetic rows
		 */
		outsideAboveSyntheticRows: globalThis.Array<GridSyntheticRow>;

		/**
		 * List of outside below synthetic rows
		 */
		outsideBelowSyntheticRows: globalThis.Array<GridSyntheticRow>;

		/**
		 * True if the row has a detail row
		 */
		hasDetailRow: boolean;

		/**
		 * Detail row reference
		 */
		detailRow: (GridSyntheticRow | null);

		/**
		 * Detail row visibility state
		 */
		detailVisible: boolean;

		/**
		 * The first visible row in this row set
		 */
		firstPhysicalRowSetRow: GridRow;

		/**
		 * The last visible row in this row set
		 */
		lastPhysicalRowSetRow: GridRow;

		/**
		 * Returns false if this is the first row on the level
		 */
		hasPreviousRow: boolean;

		/**
		 * Returns false if this is the last row on the level
		 */
		hasNextRow: boolean;

		/**
		 * True if the row is pinned
		 */
		pinned: boolean;

		/**
		 * Add child row
		 */
		addRow(row: GridDataRow, options?: {index?: number; reason?: string}): GridRow;

		/**
		 * Add child rows
		 */
		addRows(rows: globalThis.Array<GridDataRow>, options?: {index?: number; reason?: string}): void;

		/**
		 * Remove child row
		 */
		removeRow(row: GridDataRow, options?: {reason?: string}): GridRow;

		/**
		 * Remove child rows
		 */
		removeRows(index: number, count?: number, options?: {reason?: string}): GridRow;

		/**
		 * Remove all child rows
		 */
		removeAll(options?: {reason?: string}): void;

		/**
		 * Add synthetic row
		 */
		addSyntheticRow(row: GridSyntheticRow, options?: {inside?: boolean; above?: boolean; order?: number; reason?: string}): void;

		/**
		 * Remove synthetic row
		 */
		removeSyntheticRow(row: GridSyntheticRow, options?: {reason?: string}): void;

		/**
		 * Get the list of synthetic rows
		 */
		getSyntheticRows(inside: boolean, above: boolean): globalThis.Array<GridSyntheticRow>;

		/**
		 * Assign a detail row to this row
		 */
		setDetailRow(row: (GridSyntheticRow | null)): void;

		/**
		 * Show/hide detail row
		 */
		showDetailRow(value: boolean, options?: {reason?: string}): void;

		/**
		 * Toggle detail row
		 */
		toggleDetailRow(): void;

		/**
		 * Expand/collapse the row
		 */
		setExpanded(value: boolean, options: {reason?: string}): void;

		/**
		 * Expand the row
		 */
		expand(): void;

		/**
		 * Collapse the row
		 */
		collapse(): void;

		/**
		 * Invoke callback for all master rows in this subtree
		 */
		visit(callback: (row: GridRow) => (boolean | null), self?: boolean): void;

		/**
		 * Visit all rows belonging to this row set, i.e. the master row and all its synthetic rows
		 */
		visitRowSet(callback: (row: GridRow) => void): void;

		/**
		 * Check if this row contains another master row
		 */
		containsRow(row: GridMasterRow): boolean;

		/**
		 * Create overlay over the row set
		 */
		createRowSetOverlay(options: object): GridOverlay;

		static Event: GridMasterRow.EventTypes;

	}

	export namespace GridMasterRow {
		interface Options extends GridRow.Options {
			index?: number;

			expanded?: boolean;

		}

		interface EventTypes extends GridRow.EventTypes {
			ROWS_ADDED: string;

			ROWS_REMOVED: string;

			EXPANDED: string;

			SYNTHETIC_ROW_ADDED: string;

			SYNTHETIC_ROW_REMOVED: string;

			DETAIL_ROW_TOGGLED: string;

		}

	}

	/**
	 * Grid multi selection
	 */
	export class GridMultiSelection implements GridSelection {
		/**
		 * Constructs GridMultiSelection
		 */
		constructor(options: object);

		/**
		 * Returns the list of selected items
		 */
		selectedItems: globalThis.Array<any>;

		/**
		 * Select/unselect item. Returns a new selection.
		 */
		select(item: any, value: boolean): GridMultiSelection;

		/**
		 * Select/unselect all items. Returns a new selection.
		 */
		selectAll(items: globalThis.Array<any>, value: boolean): GridMultiSelection;

		/**
		 * Returns true if data item is selected
		 */
		isSelected(item: any): boolean;

		/**
		 * Creates a selection containing specified items
		 */
		static of(items: globalThis.Array<any>): void;

		/**
		 * Empty selection
		 */
		static EMPTY: GridMultiSelection;

	}

	export namespace GridMultiSelection {
	}

	/**
	 * Multi selection strategy
	 */
	class GridMultiSelectionStrategy implements GridSelectionStrategy {
		/**
		 * Constructs GridMultiSelectionStrategy
		 */
		constructor(options: object);

	}

	namespace GridMultiSelectionStrategy {
	}

	/**
	 * Basic binding controller
	 */
	class GridObservingBindingController implements GridBindingController {
		/**
		 * Bind row and data item
		 */
		bindRow(row: GridDataRow, options: object): void;

		/**
		 * Unbind row and data item
		 */
		unbindRow(row: GridDataRow, options: object): void;

		/**
		 * Commit row changes to data item
		 */
		commitRow(row: GridDataRow, options: object): void;

		/**
		 * Rollback cell changes
		 */
		rollbackRow(row: GridDataRow, options: object): void;

		/**
		 * Reload row cells from data item
		 */
		reloadRow(row: GridDataRow, options: object): void;

		/**
		 * Reload cell value
		 */
		reloadCell(row: GridDataRow, options: object): void;

		/**
		 * Get initial cell options
		 */
		getCellParameters(row: GridDataRow, column: GridColumn): void;

		/**
		 * React to cell updates
		 */
		handleCellUpdate(update: object): void;

		/**
		 * Update bindings when columns are added or removed
		 */
		updateBindings(rootColumn: GridColumn): void;

	}

	namespace GridObservingBindingController {
	}

	/**
	 * DataGrid overlay
	 */
	class GridOverlay {
	}

	namespace GridOverlay {
	}

	export class GridPanel extends PackageCore.Component {
		/**
		 * Constructor
		 */
		constructor(options?: GridPanel.Options);

		/**
		 * Array of items in layout order
		 */
		items: globalThis.Array<GridPanelItem>;

		/**
		 * Returns the list of components in the order they appear on the screen
		 */
		components: globalThis.Array<PackageCore.Component>;

		/**
		 * Alias for components property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Get the number of items in the container
		 */
		length: number;

		/**
		 * Returns true if the container is empty
		 */
		empty: boolean;

		/**
		 * Row configuration
		 */
		rows: (number | string | globalThis.Array<string>);

		/**
		 * Column configuration
		 */
		columns: (number | string | globalThis.Array<string>);

		/**
		 * Area list
		 */
		areas: globalThis.Array<GridPanelArea>;

		/**
		 * Space between rows
		 */
		rowGap: GridPanel.GapSize;

		/**
		 * Space between columns
		 */
		columnGap: GridPanel.GapSize;

		/**
		 * Space around content
		 */
		outerGap: (GridPanel.GapSize | GridPanel.GapSizeObject);

		/**
		 * Gets/Sets default row height
		 */
		defaultRowHeight: string;

		/**
		 * Gets/Sets default column width
		 */
		defaultColumnWidth: string;

		/**
		 * Gets/Sets auto flow behaviour of grid
		 */
		autoFlow: string;

		/**
		 * Panel decorator
		 */
		decorator: (PackageCore.Decorator | null);

		/**
		 * Root element type
		 */
		element: GridPanel.Element;

		/**
		 * Default item options
		 */
		defaultItemOptions: GridPanel.ItemProps;

		/**
		 * Adds items
		 */
		add(component: (GridPanel.ItemConfiguration | globalThis.Array<GridPanel.ItemConfiguration>)): GridPanel;

		/**
		 * Removes items
		 */
		remove(componentOrIndex: (PackageCore.Component | number | globalThis.Array<(PackageCore.Component | number)>)): GridPanel;

		/**
		 * Moves item to a different area or at specific index
		 */
		move(args: {component: PackageCore.Component; area?: (string | GridPanelArea.Options | GridPanelArea); index?: number; reason?: string}): GridPanel;

		/**
		 * Removes all components
		 */
		clear(): GridPanel;

		/**
		 * Replaces one component with another
		 */
		replace(currentComponent: PackageCore.Component, newComponent: PackageCore.Component): GridPanel;

		/**
		 * Checks if component is contained in the container
		 */
		has(component: PackageCore.Component): boolean;

		/**
		 * Gets the GridPanelItem for a given component
		 */
		itemForComponent(component: PackageCore.Component): GridPanelItem;

		/**
		 * Gets item at a specific index
		 */
		itemAtIndex(index: number): GridPanelItem;

		/**
		 * Get row height
		 */
		getRowHeight(rowIndex: number): string;

		/**
		 * Set new height for a given row
		 */
		setRowHeight(rowIndex: number, rowHeight?: string): GridPanel;

		/**
		 * Get column width
		 */
		getColumnWidth(columnIndex: number): string;

		/**
		 * Set new width for a given column
		 */
		setColumnWidth(columnIndex: number, columnWidth?: string): GridPanel;

		/**
		 * Set spaces between rows
		 */
		setRowGap(value: GridPanel.GapSize): void;

		/**
		 * Set spaces between columns
		 */
		setColumnGap(value: GridPanel.GapSize): void;

		/**
		 * Set space around content
		 */
		setOuterGap(value: GridPanel.GapSize): void;

		/**
		 * Add area
		 */
		addArea(area: (GridPanelArea | object)): void;

		/**
		 * Remove area with given name
		 */
		removeArea(area: (GridPanelArea | string)): void;

		/**
		 * Check existence of area with given name
		 */
		hasArea(name: string): boolean;

		/**
		 * Get area with given name
		 */
		getArea(name: string): GridPanelArea;

		/**
		 * Sets auto flow behaviour of grid
		 */
		setAutoFlow(value: string): void;

		/**
		 * Set panel decorator
		 */
		setDecorator(decorator: (PackageCore.Decorator | null)): void;

		static Event: GridPanel.EventTypes;

		/**
		 * GridPanel item JSX component
		 */
		static Item(props?: GridPanel.JsxItemProps): PackageCore.JSX.Element;

	}

	export namespace GridPanel {
		interface BaseItemProps {
			alignment?: GridPanel.Alignment;

			justification?: GridPanel.Justification;

			area?: (string | GridPanelArea);

			columnIndex?: (number | null);

			columnSpan?: number;

			rowIndex?: (number | null);

			rowSpan?: number;

			horizontalShrink?: boolean;

			verticalShrink?: boolean;

		}

		interface ItemProps extends GridPanel.BaseItemProps {
		}

		interface JsxItemProps extends GridPanel.BaseItemProps {
			key?: any;

		}

		interface StructuredItemConfiguration {
			component: PackageCore.Component;

			options?: GridPanel.ItemProps;

		}

		interface FlatItemConfiguration extends GridPanel.ItemProps {
			component: PackageCore.Component;

		}

		type ItemConfiguration = (PackageCore.Component | GridPanel.StructuredItemConfiguration | GridPanel.FlatItemConfiguration);

		interface EventTypes extends PackageCore.Component.EventTypes {
			ITEM_ADDED: string;

			ITEM_REMOVED: string;

			ITEM_MOVED: string;

		}

		interface GapSizeObject {
			top?: GridPanel.GapSize;

			bottom?: GridPanel.GapSize;

			start?: GridPanel.GapSize;

			end?: GridPanel.GapSize;

			horizontal?: GridPanel.GapSize;

			vertical?: GridPanel.GapSize;

		}

		interface Options extends PackageCore.Component.Options {
			areas?: globalThis.Array<(GridPanelArea | GridPanelArea.Options)>;

			autoFlow?: AutoFlow;

			columns?: (number | string | globalThis.Array<string>);

			decorator?: PackageCore.Decorator;

			defaultColumnWidth?: string;

			defaultItemOptions?: GridPanel.ItemProps;

			defaultRowHeight?: string;

			items?: (GridPanel.ItemConfiguration | globalThis.Array<GridPanel.ItemConfiguration>);

			outerGap?: (GridPanel.GapSize | GridPanel.GapSizeObject);

			columnGap?: GridPanel.GapSize;

			rowGap?: GridPanel.GapSize;

			gap?: GridPanel.GapSize;

			element?: GridPanel.Element;

			rows?: (number | string | globalThis.Array<string>);

		}

		export import Justification = Self.GridPanelItem.Justification;

		export import Alignment = Self.GridPanelItem.Alignment;

		export import GapSize = Self.GapSize;

		enum AutoFlow {
			ROW,
			ROW_DENSE,
			COLUMN,
			COLUMN_DENSE,
		}

		enum VisualStyle {
			BLOCK,
			INLINE,
		}

		export import Decorator = PackageCore.Decorator;

		export import Element = PackageCore.Html.Element.Section;

	}

	export class GridPanelArea {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: PackageCore.EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: PackageCore.EventSource.EventName, listener: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: PackageCore.EventSource.EventName): void;

		constructor(options: GridPanelArea.Options);

		/**
		 * Name of area
		 */
		name: (string | null);

		/**
		 * Gets/Sets vertical placement index
		 */
		rowIndex: (number | null);

		/**
		 * Gets/Sets horizontal placement index
		 */
		columnIndex: (number | null);

		/**
		 * Gets/Sets height of item placement in number of cells of grid
		 */
		rowSpan: number;

		/**
		 * Gets/Sets width of item placement in number of cells of grid
		 */
		columnSpan: number;

		/**
		 * Sets vertical placement index of item
		 */
		setRowIndex(rowIndex: number): void;

		/**
		 * Sets horizontal placement index of item
		 */
		setColumnIndex(columnIndex: number): void;

		/**
		 * Sets height of item placement in number of grid cells
		 */
		setRowSpan(rowSpan: number): void;

		/**
		 * Sets width of item placement in number of grid cells
		 */
		setColumnSpan(columnSpan: number): void;

		/**
		 * Create GridPanelArea instance from definition
		 */
		static from(definition: (GridPanelArea.Options | GridPanelArea)): GridPanelArea;

	}

	export namespace GridPanelArea {
		interface Options {
			name: string;

			columnIndex?: (number | null);

			columnSpan?: number;

			rowIndex?: (number | null);

			rowSpan?: number;

		}

	}

	export class GridPanelItem {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: PackageCore.EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: PackageCore.EventSource.EventName, listener: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: PackageCore.EventSource.EventName): void;

		constructor(options: GridPanelItem.Options);

		/**
		 * Gets item component
		 */
		component: PackageCore.Component;

		/**
		 * Gets/Sets vertical placement index of item
		 */
		rowIndex: number;

		/**
		 * Gets/Sets horizontal placement index of item
		 */
		columnIndex: number;

		/**
		 * Gets/Sets height of item placement in number of cells of grid
		 */
		rowSpan: number;

		/**
		 * Gets/Sets width of item placement in number of cells of grid
		 */
		columnSpan: number;

		/**
		 * Gets/Sets justification of item (vertical alignment in item place)
		 */
		justification: GridPanelItem.Justification;

		/**
		 * Gets/Sets alignment of item (horizontal alignment in item place)
		 */
		alignment: GridPanelItem.Alignment;

		/**
		 * Enables/disables vertical shrink of item
		 */
		verticalShrink: boolean;

		/**
		 * Enables/disables horizontal shrink of item
		 */
		horizontalShrink: boolean;

		/**
		 * Gets/Sets new item placement
		 */
		area: GridPanelArea;

		/**
		 * Sets vertical placement index of item
		 */
		setRowIndex(rowIndex: number): void;

		/**
		 * Sets horizontal placement index of item
		 */
		setColumnIndex(columnIndex: number): void;

		/**
		 * Sets height of item placement in number of grid cells
		 */
		setRowSpan(rowSpan: number): void;

		/**
		 * Sets width of item placement in number of grid cells
		 */
		setColumnSpan(columnSpan: number): void;

		/**
		 * Sets justification of item (vertical alignment in item place)
		 */
		setJustification(justification: GridPanelItem.Justification): void;

		/**
		 * Sets alignment of item (horizontal alignment in item place)
		 */
		setAlignment(alignment: GridPanelItem.Alignment): void;

		/**
		 * Enables/disables vertical shrink of item
		 */
		setVerticalShrink(verticalShrink: boolean): void;

		/**
		 * Enables/disables horizontal shrink of item
		 */
		setHorizontalShrink(horizontalShrink: boolean): void;

		/**
		 * Sets new item placement
		 */
		setArea(area: GridPanelArea): void;

		static Event: GridPanelItem.EventTypes;

	}

	export namespace GridPanelItem {
		interface Options {
			component: PackageCore.Component;

			alignment?: GridPanelItem.Alignment;

			area: GridPanelArea;

			horizontalShrink?: boolean;

			justification?: GridPanel.Justification;

			verticalShrink?: boolean;

		}

		interface EventTypes {
			POSITION_CHANGED: string;

		}

		enum Justification {
			START,
			CENTER,
			END,
			STRETCH,
		}

		enum Alignment {
			START,
			CENTER,
			END,
			STRETCH,
		}

	}

	export class GridPortlet extends PackageCore.Component {
		constructor(options?: GridPortlet.Options);

	}

	export namespace GridPortlet {
		interface Options extends PackageCore.Component.Options {
		}

	}

	/**
	 * Range selection filter
	 */
	class GridRangeSelectionFilter implements PackageCore.MessageHandler {
		/**
		 * Constructs GridRangeSelectionFilter
		 */
		constructor(options: {dispatcher: PackageCore.PageMessageDispatcher; dataGrid: DataGrid; cell: GridCell; selecting: boolean});

		/**
		 * Process message.
		 */
		processMessage(next: PackageCore.RoutedMessage.Handler, message: PackageCore.RoutedMessage, result: PackageCore.RoutedMessage.Result): void;

	}

	namespace GridRangeSelectionFilter {
	}

	/**
	 * Filter that makes sure that the range selection is removed when user clicks anywhere on the page
	 */
	class GridRangeSelectionRemovalFilter implements PackageCore.MessageHandler {
		/**
		 * Constructs GridRangeSelectionRemovalFilter
		 */
		constructor(options: {dispatcher: PackageCore.PageMessageDispatcher; dataGrid: DataGrid});

		/**
		 * Process message.
		 */
		processMessage(next: PackageCore.RoutedMessage.Handler, message: PackageCore.RoutedMessage, result: PackageCore.RoutedMessage.Result): void;

	}

	namespace GridRangeSelectionRemovalFilter {
	}

	/**
	 * Grid resizer
	 */
	class GridResizer extends PackageCore.Component {
		/**
		 * Constructs GridResizer
		 */
		constructor(options?: GridResizer.Options);

	}

	namespace GridResizer {
		interface Options extends PackageCore.Component.Options {
			orientation?: GridResizer.Orientation;

			startResize?: (position: object) => void;

		}

		enum Orientation {
			HORIZONTAL,
			VERTICAL,
		}

	}

	/**
	 * Data grid row
	 */
	export class GridRow implements PackageCore.EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: PackageCore.EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: PackageCore.EventSource.EventName, listener: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: PackageCore.EventSource.EventName): void;

		/**
		 * Constructs GridRow
		 */
		constructor(options: GridRow.Options);

		/**
		 * Unique row id
		 */
		guid: string;

		/**
		 * Row section
		 */
		section: DataGrid.RowSection;

		/**
		 * Row physical index
		 */
		physicalIndex: (number | null);

		/**
		 * Property for storing custom data on the row
		 */
		userData: object;

		/**
		 * True if the row is enabled
		 */
		enabled: boolean;

		/**
		 * True if the row is enabled and the DataGrid is enabled.
		 */
		effectiveEnabled: boolean;

		/**
		 * True if this row is draggable
		 */
		draggable: boolean;

		/**
		 * True if the row is draggable and the row dragging is enabled on the owning data grid
		 */
		effectiveDraggable: boolean;

		/**
		 * True if the row is resizable
		 */
		resizable: boolean;

		/**
		 * True if the row is resizable and resizing is enabled on the owning data grid
		 */
		effectiveResizable: boolean;

		/**
		 * True if the row is editable
		 */
		editable: boolean;

		/**
		 * True if the row is editable and the owning data grid is editable
		 */
		effectiveEditable: boolean;

		/**
		 * Owning data grid instance
		 */
		dataGrid: (DataGrid | null);

		/**
		 * Row height in pixels
		 */
		height: (number | null);

		/**
		 * The rendered height in pixels
		 */
		heightType: GridRow.Height;

		/**
		 * Minimum row height for the automatic sizing strategy
		 */
		minHeight: number;

		/**
		 * Maximum row height for the automatic sizing strategy
		 */
		maxHeight: number;

		/**
		 * If enabled the automatic sizing is disabled for this row
		 */
		manualHeight: boolean;

		/**
		 * Parent row
		 */
		parentRow: (GridRow | null);

		/**
		 * Cell map
		 */
		cells: globalThis.Map<GridColumn, GridCell>;

		/**
		 * Row level
		 */
		level: number;

		/**
		 * Validity state
		 */
		valid: boolean;

		/**
		 * Row status
		 */
		status: GridRow.Status;

		/**
		 * True if the row has bottom border enabled
		 */
		showBorder: boolean;

		/**
		 * Cell configuration callback
		 */
		cellConfiguration: (row: GridRow, column: GridColumn) => (GridCell | null);

		/**
		 * Row root element attributes
		 */
		rootAttributes: PackageCore.HtmlAttributeList;

		/**
		 * Row root element class list
		 */
		classList: PackageCore.HtmlClassList;

		/**
		 * List of cells in view order
		 */
		cellLayout: {left: globalThis.Array<GridRow.CellLayout>; body: globalThis.Array<GridRow.CellLayout>; right: globalThis.Array<GridRow.CellLayout>};

		/**
		 * Row segments
		 */
		segment: {left: GridRowSegment; body: GridRowSegment; right: GridRowSegment};

		/**
		 * Row type
		 */
		type: GridRow.Type;

		/**
		 * Visit this row and parent rows
		 */
		visitUp(callback: (row: GridRow) => (boolean | null)): void;

		/**
		 * Get the cell corresponding to a given column
		 */
		getCell(column: (GridColumn | string)): (GridCell | null);

		/**
		 * Refresh all cells on the row
		 */
		refresh(): void;

		/**
		 * Reload all cells on the row
		 */
		reload(options: object): void;

		/**
		 * Reload cell from the data item
		 */
		reloadCell(cell: GridCell): void;

		/**
		 * Enable/disable the row
		 */
		setEnabled(enabled: boolean): void;

		/**
		 * Enable/disable row editing
		 */
		setEditable(value: boolean): void;

		/**
		 * Enable/disable row resizing
		 */
		setResizable(value: boolean): void;

		/**
		 * Enable/disable row dragging
		 */
		setDraggable(value: boolean): void;

		/**
		 * Show bottom border of the row
		 */
		setShowBorder(value: boolean): void;

		/**
		 * Mark this row as valid/invalid. Internally this is just a shorthand for changing the row status.
		 */
		setValid(valid: boolean, options?: {reason?: string}): void;

		/**
		 * Set row status
		 */
		setStatus(status: GridRow.Status, options?: {reason?: string}): void;

		/**
		 * Set row height
		 */
		setHeight(value: number, args?: {reason?: string}): void;

		/**
		 * Automatically compute size of cells on this row to fit their content. If invoked without arguments then both width and height are computed.
		 */
		autoSize(options?: {width?: boolean; height?: boolean}): void;

		/**
		 * Automatically compute the width of cells on this row to fit their content
		 */
		autoSizeWidth(): void;

		/**
		 * If row height is set to AUTO update its height
		 */
		applyAutoHeight(): void;

		/**
		 * Create overlay over this row
		 */
		createOverlay(options: object): GridOverlay;

		/**
		 * Switch all cells to edit mode
		 */
		openAllCellsForEditing(): void;

		/**
		 * Switch all cells to view mode
		 */
		closeAllCellsFromEditing(): void;

		/**
		 * Find the first cell on the row, possibly matching a predicate
		 */
		findFirstCell(args?: {predicate?: (cell: GridCell) => boolean}): (GridCell | null);

		/**
		 * Find the last cell on the row, possibly matching a predicate
		 */
		findLastCell(args?: {predicate?: (cell: GridCell) => boolean}): (GridCell | null);

		/**
		 * Execute a callback on a cell only if the cell already exists in the row
		 */
		lazyUpdateCell(column: (string | GridColumn), callback: (cell: GridCell) => void): void;

		/**
		 * Create row segment
		 */
		createSegment(columnSection: DataGrid.ColumnSection): void;

		/**
		 * Dispose row segment
		 */
		disposeSegment(columnSection: DataGrid.ColumnSection): void;

		/**
		 * Set the physical index of the row
		 */
		setPhysicalIndex(value: (number | null)): void;

		static Event: GridRow.EventTypes;

	}

	export namespace GridRow {
		interface Options {
			dataGrid: DataGrid;

			parentRow?: GridRow;

			level?: number;

			userData?: object;

			status?: GridRow.Status;

			cellConfiguration: (row: GridRow, column: GridColumn) => (GridCell | null);

			height?: (number | GridRow.Height);

			showBorder?: boolean;

			draggable?: boolean;

			resizable?: boolean;

			editable?: boolean;

			enabled?: boolean;

			classList?: (string | globalThis.Array<string>);

			rootAttributes?: object;

			section?: DataGrid.RowSection;

			on?: PackageCore.EventSource.ListenerMap;

		}

		interface EventTypes {
			RESIZED: string;

			STATUS_CHANGED: string;

			ENABLED_CHANGED: string;

			EFFECTIVE_ENABLED_CHANGED: string;

		}

		interface CellLayout {
			empty?: boolean;

			cell?: GridCell;

			id: number;

		}

		export import Status = PackageCore.Component.Status;

		enum Attribute {
			ROW_ID,
			PARENT_ROW_ID,
			MASTER_ROW_ID,
		}

		enum Type {
			ROW,
			DATA,
			SYNTHETIC,
			HEADER,
		}

		/**
		 * Row height type
		 */
		enum Height {
			AUTO,
			FIXED,
			DEFAULT,
		}

	}

	export namespace GridRowDataExchange {
	}

	/**
	 * @deprecated 
	 */
	class GridRowEditInputController extends GridSelectEditInputController implements GridInputController {
		/**
		 * Constructs GridRowEditInputController
		 */
		constructor();

	}

	namespace GridRowEditInputController {
	}

	/**
	 * Grid row segment
	 */
	class GridRowSegment extends PackageCore.Component {
		/**
		 * Constructs GridRowSegment
		 */
		constructor(options?: GridRowSegment.Options);

	}

	namespace GridRowSegment {
		interface Options extends PackageCore.Component.Options {
		}

	}

	/**
	 * Grid view segment
	 */
	class GridSegment extends PackageCore.Component {
		/**
		 * Constructs GridSegment
		 */
		constructor();

		/**
		 * Enable/disable virtualization
		 */
		virtualization: boolean;

		/**
		 * The table view update is performed in 3 phases: 1. Erase all rows/cells that were removed in all segments 2. Render new rows/cells and resize rows and cells in all segments This phased update is necessary to ensure that when rows/columns are moved between segments then they are first erased in their original segment and after that rendered in the new segment.
		 */
		planUpdate(): void;

	}

	namespace GridSegment {
	}

	class GridSelectEditInputController implements GridInputController {
		/**
		 * Constructor
		 */
		constructor(options: GridSelectEditInputController.Options);

		/**
		 * Attaches controller to the given component
		 */
		attach(component: PackageCore.Component): void;

		/**
		 * Detaches controller
		 */
		detach(): void;

		/**
		 * Resets controller
		 */
		reset(): void;

		/**
		 * Process message.
		 */
		processMessage(next: PackageCore.RoutedMessage.Handler, message: PackageCore.RoutedMessage, result: PackageCore.RoutedMessage.Result): void;

		/**
		 * Handle row removal
		 */
		handleRowRemoved(row: GridRow): void;

		/**
		 * Close editing of the current cell and start editing of a new cell
		 */
		editCell(cell: GridCell, activate: boolean, reason: DataGrid.CursorUpdateReason): void;

		/**
		 * Start cell editing
		 */
		startEditing(cell: GridCell, activate?: boolean, reason?: DataGrid.CursorUpdateReason): void;

		/**
		 * Close cell editing
		 */
		closeEditing(focusGrid: boolean, nextEditedCell?: GridCell): void;

		/**
		 * Accept changes on currently edited cell
		 */
		acceptChanges(): void;

		/**
		 * Discard changes on currently edited cell
		 */
		discardChanges(): void;

		/**
		 * Filters message
		 */
		filterMessage(message: object, result: object): void;

		/**
		 * Handles message
		 */
		handleMessage(message: object, result: object): void;

		private _moveRowDown(row: GridDataRow): void;

	}

	namespace GridSelectEditInputController {
		interface Options {
			editingMode?: boolean;

			beforeEditCell?: GridSelectEditInputController.BeforeEditCellCallback;

		}

		type BeforeEditCellCallback = (args: {cell: GridCell; reason: string}) => void;

	}

	export interface GridSelection {
		/**
		 * Select/unselect item. Returns a new selection.
		 */
		select(item: any, value: boolean): GridSelection;

		/**
		 * Returns true if data item is selected
		 */
		isSelected(item: any): boolean;

	}

	export namespace GridSelection {
		/**
		 * Multi-select modes
		 */
		enum Mode {
			ALL,
			PAGE,
		}

		/**
		 * Selection change reason
		 */
		enum ChangeReason {
			SELECTION_UPDATE,
			SELECT_ALL,
		}

	}

	interface GridSelectionStrategy {
	}

	namespace GridSelectionStrategy {
	}

	/**
	 * Grid single selection
	 */
	export class GridSingleSelection implements GridSelection {
		/**
		 * Constructs GridSingleSelection
		 */
		constructor(options: object);

		/**
		 * Returns the list of selected items
		 */
		selectedItem: globalThis.Array<any>;

		/**
		 * Select/unselect item. Returns a new selection.
		 */
		select(item: any, value: boolean): GridSingleSelection;

		/**
		 * Select/unselect all items. Returns a new selection.
		 */
		selectAll(items: globalThis.Array<any>, value: boolean): GridSingleSelection;

		/**
		 * Returns true if data item is selected
		 */
		isSelected(item: any): boolean;

		/**
		 * Creates a selection containing a given item
		 */
		static of(item: any): void;

		/**
		 * Empty selection
		 */
		static EMPTY: GridSingleSelection;

	}

	export namespace GridSingleSelection {
	}

	/**
	 * Single selection strategy
	 */
	class GridSingleSelectionStrategy implements GridSelectionStrategy {
		/**
		 * Constructs GridSingleSelectionStrategy
		 */
		constructor();

	}

	namespace GridSingleSelectionStrategy {
	}

	/**
	 * Synthetic cell
	 */
	export class GridSyntheticCell extends GridCell {
		/**
		 * Constructs GridSyntheticCell
		 */
		constructor(options?: GridSyntheticCell.Options);

	}

	export namespace GridSyntheticCell {
		interface Options extends GridCell.Options {
			content: (GridSyntheticCell.ContentCallback | PackageCore.Component);

			copyValueProvider?: (cell: GridSyntheticCell) => (string | Element);

		}

		type ContentCallback = (args: {cell: GridSyntheticCell; context: object}) => (PackageCore.Component | PackageCore.JSX.Element);

	}

	export class GridSyntheticRow extends GridRow {
		/**
		 * Constructs GridSyntheticRow
		 */
		constructor(options?: GridSyntheticRow.Options);

		/**
		 * The associated master row
		 */
		masterRow: GridDataRow;

		/**
		 * Order of this synthetic row
		 */
		order: number;

		/**
		 * Inside/outside synthetic row
		 */
		inside: boolean;

		/**
		 * Above/below synthetic row
		 */
		above: boolean;

	}

	export namespace GridSyntheticRow {
		interface Options extends GridRow.Options {
		}

	}

	/**
	 * Task helper used in GridView and GridSegment
	 */
	namespace GridTask {
	}

	/**
	 * GridView
	 */
	class GridView extends PackageCore.Component {
		/**
		 * Constructs GridView
		 */
		constructor();

		/**
		 * Row count
		 */
		rowCount: {header: number; body: number; footer: number};

		/**
		 * Row size index
		 */
		rowSize: PackageCore.StaticSizeIndex;

		/**
		 * Column count
		 */
		columnCount: {left: number; body: number; right: number};

		/**
		 * Column size index
		 */
		columnSize: PackageCore.StaticSizeIndex;

		/**
		 * Viewport size
		 */
		viewportSize: {x: number; y: number};

		/**
		 * Scroll controller
		 */
		scrollController: PackageCore.ScrollController;

		/**
		 * Scroll offset
		 */
		scrollOffset: {x: number; y: number};

		/**
		 * Scrollability
		 */
		scrollability: PackageCore.Scrollable.Scrollability;

		/**
		 * Enable/disable sticky segments
		 */
		stickySegments: {left: boolean; right: boolean; header: boolean; footer: boolean};

		/**
		 * Enable/disable sticky scrollbars
		 */
		stickyScrollbars: {horizontal: boolean; vertical: boolean};

		/**
		 * Is true when there are pending updates for the table view
		 */
		hasPendingUpdates: boolean;

		/**
		 * Enable/disable virtualization
		 */
		virtualization: boolean;

		/**
		 * Reference to a loader for the data section
		 */
		dataLoader: (Loader | null);

		/**
		 * Action bar component
		 */
		actionBar: (PackageCore.Component | PackageCore.VDomElement | null);

		/**
		 * Action bar height
		 */
		actionBarHeight: (number | null);

		/**
		 * Action bar visibility
		 */
		actionBarVisible: boolean;

		/**
		 * Enable/disable sticky behavior of action bar
		 */
		stickyActionBar: boolean;

		/**
		 * Placeholder row content
		 */
		placeholder: (PackageCore.Component | PackageCore.VDomElement | null);

		/**
		 * Show/hide placeholder
		 */
		placeholderVisible: boolean;

		static Event: GridView.EventTypes;

	}

	namespace GridView {
		interface EventTypes extends PackageCore.Component.EventTypes {
			WILL_SCHEDULE_UPDATE: string;

			DID_SCHEDULE_UPDATE: string;

			WILL_UPDATE: string;

			DID_UPDATE: string;

			VIEWPORT_RESIZE: string;

			SCROLLABILITY_CHANGED: string;

		}

	}

	/**
	 * Labeled group of widgets
	 */
	export class Group extends PackageCore.Component {
		/**
		 * Constructs Group
		 */
		constructor(options?: Group.Options);

		/**
		 * Gets content
		 */
		content: PackageCore.Component;

		/**
		 * Sets content
		 */
		setContent(content: PackageCore.Component): void;

	}

	export namespace Group {
		interface Options extends PackageCore.Component.Options {
			content?: PackageCore.Component;

			role?: Group.Role;

		}

		enum Role {
			GROUP,
			RADIO_GROUP,
		}

	}

	/**
	 * GrowlMessage
	 */
	export class GrowlMessage extends PackageCore.Component {
		/**
		 * Constructs GrowlMessage
		 */
		constructor(options: GrowlMessage.Options);

		/**
		 * Message title
		 */
		title: (string | PackageCore.Translation);

		/**
		 * Message content
		 */
		content: (string | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Alias for content property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Message type
		 */
		type: GrowlMessage.Type;

		/**
		 * Icon
		 */
		icon: Image.Source;

		/**
		 * Enable/disable close button
		 */
		showCloseButton: boolean;

		/**
		 * Enable/disable closing on click
		 */
		closeOnClick: boolean;

		/**
		 * Toggle content expanded
		 */
		expanded: boolean;

		/**
		 * Closes growl message
		 */
		close(): void;

		static Event: GrowlMessage.EventTypes;

	}

	export namespace GrowlMessage {
		interface Options extends PackageCore.Component.Options {
			title?: (string | PackageCore.Translation);

			content: (string | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

			icon?: Image.Source;

			showCloseButton?: boolean;

			closeOnClick?: boolean;

			type?: GrowlMessage.Type;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			CLOSING: string;

			CLOSED: string;

		}

		export import Type = PackageCore.UserMessageService.MessageType;

		enum I18n {
			COLLAPSE,
			CLOSE,
			EXPAND,
			INFO,
			SUCCESS,
			WARNING,
			ERROR,
		}

	}

	/**
	 * GrowlPanel is a container for Growl Messages
	 */
	export class GrowlPanel extends PackageCore.Component {
		/**
		 * Constructs GrowlPanel
		 */
		constructor(options?: GrowlPanel.Options);

		/**
		 * Gets GrowlPanel position
		 */
		position: GrowlPanel.Position;

		/**
		 * Gets array of messages
		 */
		messages: globalThis.Array<PackageCore.Component>;

		/**
		 * Toggle manual management of banner messages
		 */
		manual: boolean;

		/**
		 * Adds message(s) to the panel
		 */
		add(message: (GrowlMessage | globalThis.Array<GrowlMessage>)): void;

		/**
		 * Remove message from the panel
		 */
		remove(message: BannerMessage): void;

		/**
		 * Closes and removes all messages in panel
		 */
		clear(): void;

		/**
		 * Sets GrowlPanel position
		 */
		setPosition(position: GrowlPanel.Position): void;

		/**
		 * Creates a growl message
		 */
		createUserMessage(message: PackageCore.UserMessageService.MessageOptions): GrowlMessage;

		/**
		 * Connect to user message service
		 */
		connect(service: PackageCore.UserMessageService): void;

		/**
		 * Disconnect from user message service
		 */
		disconnect(): void;

	}

	export namespace GrowlPanel {
		interface Options extends PackageCore.Component.Options {
			messages?: globalThis.Array<GrowlMessage>;

			position?: GrowlPanel.Position;

			manual?: boolean;

		}

		enum Position {
			START,
			CENTER,
			END,
		}

	}

	export interface HeaderMenuOptions {
		icon?: Image.Source;

		label?: NetsuiteSystemHeader.HeaderMenuLabel;

		menuItems?: globalThis.Array<MenuItem>;

		url?: string;

	}

	export namespace HeaderNavigationEvent {
	}

	export interface HeaderNavigationOptions {
		getDynamicItems?: () => globalThis.Promise<any>;

		items?: globalThis.Array<MenuItem>;

	}

	/**
	 * Heading component - renders proper HTML heading
	 */
	export class Heading extends PackageCore.Component {
		/**
		 * Constructs Heading
		 */
		constructor(options?: Heading.Options);

		/**
		 * Gets heading content
		 */
		content: Heading.Content;

		/**
		 * Alias for content property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Gets heading type
		 */
		type: Heading.Type;

		/**
		 * Get heading kind
		 */
		kind: (Heading.Kind | null);

		/**
		 * Get heading weight
		 */
		weight: (Heading.Weight | null);

		/**
		 * Get heading size
		 */
		size: (Heading.Size | null);

		/**
		 * Get the semantic level
		 */
		level: (number | null);

		/**
		 * Display inline
		 */
		inline: boolean;

		/**
		 * Sets heading type
		 */
		setType(type: Heading.Type): void;

		/**
		 * Set heading kind
		 */
		setKind(kind: (Heading.Kind | null)): void;

		/**
		 * Set heading weight
		 */
		setWeight(weight: (Heading.Weight | null)): void;

		/**
		 * Set heading size
		 */
		setSize(size: (Heading.Size | null)): void;

		/**
		 * Set the semantic level
		 */
		setLevel(level: (number | null)): void;

		/**
		 * Sets heading content
		 */
		setContent(content: Heading.Content): void;

		/**
		 * Sets the display property to inline to allow for horizontal stacking
		 */
		setInline(inline: boolean): void;

	}

	export namespace Heading {
		type Content = (null | string | number | PackageCore.Component | PackageCore.JSX.Element | PackageCore.Translation);

		interface Options extends PackageCore.Component.Options {
			content?: Heading.Content;

			inline?: boolean;

			kind?: Heading.Kind;

			level?: number;

			size?: Heading.Size;

			type?: Heading.Type;

			weight?: Heading.Weight;

		}

		enum Type {
			PAGE_TITLE,
			PAGE_SUBTITLE,
			LARGE_HEADING,
			MEDIUM_HEADING,
			SMALL_HEADING,
		}

		enum Kind {
			PAGE,
			CONTENT,
		}

		enum Weight {
			DISPLAY,
			HEADING,
			SUBHEADING,
		}

		enum Size {
			XS,
			S,
			M,
			L,
			XL,
			XXL,
		}

		enum VisualStyle {
			STANDALONE,
			EMBEDDED,
		}

	}

	/**
	 * Help center service. Use this service to open a topic from the main NetSuite help.
	 */
	export class HelpCenterService {
		/**
		 * Constructor
		 */
		constructor(options?: HelpCenterService.Options);

		/**
		 * Set the default task id without opening the help
		 */
		setTopicId(topicId: string): void;

		/**
		 * Opens help window with previously set task ID or with the provided task ID
		 */
		openHelpTopic(taskId?: string): void;

	}

	export namespace HelpCenterService {
		interface Options {
			taskId?: string;

		}

	}

	/**
	 * Field level help service
	 */
	export class HelpService {
		/**
		 * Constructs HelpService
		 */
		constructor(options?: HelpService.Options);

		/**
		 * Creates field level help
		 */
		getFieldLevelHelp(options: HelpService.FieldLevelHelpOptions & {owner: (PackageCore.Component | PackageCore.VDomRef)}): globalThis.Promise<HelpService.FieldLevelHelp>;

	}

	export namespace HelpService {
		interface Options {
			showInternalId: boolean;

			taskId: string;

		}

		interface FieldLevelHelp {
			show: () => void;

		}

		interface FieldLevelHelpOptions {
			fieldId: string;

			parentId?: string;

			variantId?: string;

			isEdit?: boolean;

		}

	}

	/**
	 * Host is a root environment for hosting UIF components
	 */
	class Host {
		/**
		 * Create Host
		 */
		constructor(options?: {root?: HTMLElement; context?: object});

		/**
		 * Get the Host root element
		 */
		root: HTMLElement;

		/**
		 * Check whether the host is running
		 */
		running: boolean;

		/**
		 * Root context
		 */
		context: object;

		/**
		 * Initialize root
		 */
		run(options?: {waitDocumentReady?: boolean}): globalThis.Promise<any>;

		/**
		 * Render content
		 */
		render(element: (PackageCore.Component | PackageCore.JSX.Element), container?: HTMLElement, options?: {contextPortal?: PackageCore.Component}): Host.RootHandle;

		/**
		 * Erase all roots
		 */
		erase(): void;

		/**
		 * Dispose the host
		 */
		dispose(): void;

		/**
		 * Get context value
		 */
		getContext(type: string): any;

		/**
		 * Update context value
		 */
		setContext(type: string, value: any): void;

		/**
		 * Create a pseudo component around a DOM element. Can be used as an owner of windows in legacy where no other owner is available or as a component for tooltip.
		 */
		createElementComponent(element: Element): PackageCore.ElementComponent;

		/**
		 * Create a Host for a standard page
		 */
		static page(options?: {context?: object}): Host;

		/**
		 * Create a Host for use in test environment
		 */
		static testPage(options?: {context?: object}): Host;

		/**
		 * Create a root context
		 */
		static context(types?: object): object;

		/**
		 * Create a root context for tests
		 */
		static testContext(types?: object): object;

	}

	namespace Host {
		interface RootHandle {
			render: (element: PackageCore.JSX.Element) => void;

			dispose: () => void;

		}

	}

	/**
	 * Wraps dom content in a dummy Component
	 */
	export class HtmlWrapper extends PackageCore.Component {
		/**
		 * Constructs HtmlWrapper
		 */
		constructor(options?: (HtmlWrapper.ContentProvider | HtmlWrapper.Options));

		/**
		 * Get/set the content of the wrapper
		 */
		content: HtmlWrapper.ContentProvider;

		refresh(): void;

		/**
		 * Create HtmlWrapper of a DOM fragment. This fragment must not contain nested components.
		 */
		static ofElement(element: HTMLElement, options?: HtmlWrapper.Options): HtmlWrapper;

		/**
		 * Create HtmlWrapper of a virtual DOM element
		 */
		static ofVDom(element: PackageCore.JSX.Element, options?: HtmlWrapper.Options): HtmlWrapper;

		/**
		 * Create HtmlWrapper from a HTML string
		 */
		static ofHtmlString(string: string, options?: HtmlWrapper.Options): HtmlWrapper;

	}

	export namespace HtmlWrapper {
		type ContentProvider = () => (HTMLElement | PackageCore.JSX.Element | PackageCore.Component);

		interface Options extends PackageCore.Component.Options {
			content?: HtmlWrapper.ContentProvider;

		}

	}

	enum I18N {
		APPLY,
		CANCEL,
		CLEAR_1_FILTER,
		CLEAR_ALL_1_FILTERS,
		CLEAR_ALL_FILTERS,
		FILTERS,
		HIDE_FILTERS,
		OPEN_FILTERS_MODAL,
		OPEN_FILTERS_MODAL_1_FILTER_APPLIED,
		OPEN_FILTERS_MODAL_1_FILTERS_APPLIED,
		SHOW_FILTERS_ON_THE_SIDE,
		SHOW_FILTERS_ON_THE_SIDE_1,
		SHOW_FILTERS_ON_THE_TOP,
		SHOW_FILTERS_ON_THE_TOP_1,
	}

	export class IFrame extends PackageCore.Component {
		/**
		 * Constructs IFrame
		 */
		constructor(options?: IFrame.Options);

		/**
		 * URL of iframe
		 */
		url: string;

		/**
		 * Flag that indicates state of iframe loading
		 */
		loaded: boolean;

		/**
		 * Content of iframe
		 */
		content: Window;

		/**
		 * Load callback
		 */
		onLoad: IFrame.LoadCallback;

		/**
		 * Unload callback
		 */
		onUnload: IFrame.UnloadCallback;

	}

	export namespace IFrame {
		interface Options extends PackageCore.Component.Options {
			url?: string;

			onLoad?: IFrame.LoadCallback;

			onUnload?: IFrame.UnloadCallback;

		}

		type LoadCallback = () => void;

		type UnloadCallback = () => void;

	}

	/**
	 * Image Component
	 */
	export class Image extends PackageCore.Component {
		/**
		 * Constructs Image
		 */
		constructor(options?: (Image.Options | string | PackageCore.ImageMetadata));

		/**
		 * Image url/metadata
		 */
		image: Image.Source;

		/**
		 * Flag that determines if the image is used for presentational purposes (affects accessibility)
		 */
		presentation: boolean;

		/**
		 * Image scalability
		 */
		scalable: boolean;

		/**
		 * Image size
		 */
		size: Image.SizeDefinition;

		/**
		 * Border radius
		 */
		borderRadius: Image.BorderRadius;

		/**
		 * Image color
		 */
		color: (Image.Color | null);

		/**
		 * Color strength
		 */
		colorStrength: (Image.ColorStrength | null);

		/**
		 * Sets image
		 */
		setImage(image: Image.Source): void;

		/**
		 * Sets image size
		 */
		setSize(size: Image.SizeDefinition): void;

		/**
		 * Sets image border radius
		 */
		setBorderRadius(borderRadius: Image.BorderRadius): void;

		/**
		 * Sets if the image is used for presentational purposes (affects accessibility)
		 */
		setPresentation(presentation: boolean): void;

		/**
		 * Sets image scalability
		 */
		setScalable(scalable: boolean): void;

	}

	export namespace Image {
		interface SizeObject {
			height: (number | string);

			width: (number | string);

		}

		type SizeDefinition = (Image.Size | Image.SizeObject | string | number);

		type Source = (string | PackageCore.Url | PackageCore.ImageMetadata.Options | PackageCore.ImageMetadata);

		interface Options extends PackageCore.Component.Options {
			borderRadius?: Image.BorderRadius;

			image: Image.Source;

			presentation?: boolean;

			scalable?: boolean;

			size?: Image.SizeDefinition;

			color?: Image.Color;

			colorStrength?: Image.ColorStrength;

		}

		export import Size = PackageCore.ImageConstant.Size;

		export import BorderRadius = PackageCore.ImageConstant.BorderRadius;

		export import Color = PackageCore.ImageConstant.Color;

		export import ColorStrength = PackageCore.ImageConstant.ColorStrength;

	}

	/**
	 * Inline editor
	 */
	class InlineEditor extends PackageCore.Component {
		/**
		 * Constructs InlineEditor
		 */
		constructor(options: InlineEditor.Options);

		/**
		 * Checks if editor is in editing mode
		 */
		isEditing: boolean;

		/**
		 * Allow editor to be editable
		 */
		readOnly: boolean;

		/**
		 * Current text
		 */
		text: (string | PackageCore.Translation);

		/**
		 * Current text validator
		 */
		textValidator: (InlineEditor.TextValidatorCallback | null);

		/**
		 * The internal TextBox
		 */
		textBox: (TextBox | null);

		/**
		 * Icon that is shown when editor is invalid
		 */
		invalidIcon: Image;

		/**
		 * Options for the error status icon
		 */
		invalidIconOptions: object;

		/**
		 * Starts editor editing
		 */
		startEditing(args?: object): void;

		/**
		 * Finishes editor editing
		 */
		finishEditing(args?: object): void;

		/**
		 * Sets text in editor
		 */
		setText(text: (string | PackageCore.Translation), options?: object): void;

		/**
		 * Validates the current input based on given validator
		 */
		private _validate(validator: (InlineEditor.TextValidatorCallback | null), options: object): boolean;

		/**
		 * Handles change on TextBox text
		 */
		private _handleInputTextChanged(args: TextBox.TextChangedArgs): void;

		/**
		 * Handles change of TextBox validity
		 */
		private _handleInputValidityChanged(args: object): void;

		static Event: InlineEditor.EventTypes;

	}

	namespace InlineEditor {
		interface Options extends PackageCore.Component.Options {
			acceptInvalidValue?: boolean;

			createLabel?: (args: {text: string}) => PackageCore.JSX.Element;

			inputSize?: (number | null);

			keyValidator?: TextBox.KeyValidatorCallback;

			readOnly?: boolean;

			text?: string;

			textValidator?: InlineEditor.TextValidatorCallback;

			invalidIconOptions?: object;

		}

		type TextValidatorCallback = (args: InlineEditor.TextValidatorArgs) => boolean;

		interface TextValidatorArgs {
			text: string;

			previousText: string;

			reason: string;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			TEXT_CHANGED: string;

			EDITING_STARTED: string;

			EDITING_FINISHED: string;

		}

		enum VisualStyle {
			EMBEDDED,
		}

		enum Reason {
			CALL,
			CANCEL,
			CLICK,
			KEY_ENTER,
			KEY_ESCAPE,
			FOCUS_OUT,
			TEXT_SYNC,
		}

	}

	export enum InputSize {
		AUTO,
		XXS,
		XS,
		S,
		M,
		L,
		XL,
		XXL,
	}

	/**
	 * Kpi
	 */
	export class Kpi extends PackageCore.Component {
		constructor(options?: Kpi.Options);

		/**
		 * Kpi color
		 */
		color: Kpi.Color;

		/**
		 * Title
		 */
		title: (string | number | PackageCore.Translation);

		/**
		 * Value
		 */
		value: (string | number | PackageCore.Translation);

		/**
		 * Trend
		 */
		trend: Kpi.Trend;

		/**
		 * Justification
		 */
		justification: Kpi.Justification;

	}

	export namespace Kpi {
		interface Trend {
			value: (string | number | PackageCore.Translation);

			description: (string | number | PackageCore.Translation);

			direction: Kpi.TrendDirection;

		}

		interface Options extends PackageCore.Component.Options {
			color?: Kpi.Color;

			title?: (string | number | PackageCore.Translation);

			value?: (string | number | PackageCore.Translation);

			trend?: Kpi.Trend;

			justification?: Kpi.Justification;

		}

		enum Color {
			INFO,
			SUCCESS,
			WARNING,
			DANGER,
			PURPLE,
			YELLOW,
			GREEN,
			PINK,
			TURQUOISE,
			BROWN,
			NEUTRAL,
			THEMED,
			FOCUS,
		}

		enum TrendDirection {
			POSITIVE,
			NEGATIVE,
		}

		enum Justification {
			START,
			CENTER,
		}

	}

	/**
	 * Kpi portlet
	 */
	export class KpiPortlet extends PackageCore.Component {
		constructor(options?: KpiPortlet.Options);

	}

	export namespace KpiPortlet {
		interface Options extends PackageCore.Component.Options {
		}

	}

	/**
	 * Label html element
	 */
	export class Label extends PackageCore.Component {
		/**
		 * Constructs Label
		 */
		constructor(options?: Label.Options);

		/**
		 * Actual visible label content
		 */
		label: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Label property alias for VDom
		 */
		children: PackageCore.VDom.Children;

		/**
		 * ID of element the label belongs to
		 */
		for: (PackageCore.Component | PackageCore.VDomRef | string);

		/**
		 * Gets state of wrapping
		 */
		wrap: (boolean | number);

		/**
		 * Gets state of whitespace
		 */
		whitespace: boolean;

		/**
		 * Callback that is invoked on label click. By default, the input component is focused.
		 */
		clickHandler: (Label.ClickHandler | null);

		/**
		 * Gets ellipsis helper
		 */
		ellipsisHelper: EllipsisTooltip;

		/**
		 * Sets textual label
		 */
		setLabel(label: (null | string | number | PackageCore.Translation | PackageCore.Component)): void;

		/**
		 * Sets 'for' attribute
		 */
		setFor(value: (PackageCore.Component | PackageCore.VDomRef | string)): void;

	}

	export namespace Label {
		interface Options extends PackageCore.Component.Options {
			clickHandler?: Label.ClickHandler;

			for?: (string | PackageCore.VDomRef | PackageCore.Component);

			label?: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

			whitespace?: boolean;

			wrap?: (boolean | number);

		}

		type ClickHandler = (target: (PackageCore.Component | null), message: PackageCore.PointerMessage, label: Label) => boolean;

		enum VisualStyle {
			STANDALONE,
			BUTTON,
			EMBEDDED,
			GRID_HEADER,
		}

	}

	/**
	 * Single component container with lazy rendering
	 */
	export class LazyPanel extends PackageCore.Component {
		/**
		 * Constructs LazyPanel
		 */
		constructor(options?: LazyPanel.Options);

		/**
		 * LazyPanel content
		 */
		content: (PackageCore.Component | PackageCore.JSX.Element | null);

		/**
		 * Root element type
		 */
		element: LazyPanel.Element;

		/**
		 * Content horizontal alignment
		 */
		horizontalAlignment: LazyPanel.HorizontalAlignment;

		/**
		 * Content vertical alignment
		 */
		verticalAlignment: LazyPanel.VerticalAlignment;

		/**
		 * Space around content
		 */
		outerGap: (LazyPanel.GapSize | LazyPanel.GapSizeObject);

		/**
		 * Panel decorator
		 */
		decorator: (PackageCore.Decorator | null);

		/**
		 * Alias for content property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Set LazyPanel content
		 */
		setContent(content: (PackageCore.Component | PackageCore.JSX.Element | null)): void;

		/**
		 * Change horizontal alignment of the content
		 */
		setHorizontalAlignment(value: LazyPanel.HorizontalAlignment): void;

		/**
		 * Change vertical alignment of the content
		 */
		setVerticalAlignment(value: LazyPanel.VerticalAlignment): void;

		/**
		 * Sets space around content
		 */
		setOuterGap(value: LazyPanel.GapSize): void;

		/**
		 * Set panel decorator
		 */
		setDecorator(decorator: (PackageCore.Decorator | null)): void;

	}

	export namespace LazyPanel {
		interface Options extends PackageCore.Component.Options {
			content?: (LazyPanel.ContentProvider | PackageCore.Component | PackageCore.JSX.Element);

			decorator?: PackageCore.Decorator;

			horizontalAlignment?: LazyPanel.HorizontalAlignment;

			outerGap?: (LazyPanel.GapSize | LazyPanel.GapSizeObject);

			verticalAlignment?: LazyPanel.VerticalAlignment;

			element?: LazyPanel.Element;

		}

		type ContentProvider = (setContent: (content: (PackageCore.Component | PackageCore.JSX.Element)) => void) => (PackageCore.Component | PackageCore.JSX.Element | globalThis.Promise<(PackageCore.Component | PackageCore.JSX.Element)>);

		interface GapSizeObject {
			top?: LazyPanel.GapSize;

			bottom?: LazyPanel.GapSize;

			start?: LazyPanel.GapSize;

			end?: LazyPanel.GapSize;

			horizontal?: LazyPanel.GapSize;

			vertical?: LazyPanel.GapSize;

		}

		enum HorizontalAlignment {
			START,
			END,
			CENTER,
			STRETCH,
		}

		enum VerticalAlignment {
			START,
			END,
			CENTER,
			STRETCH,
		}

		export import GapSize = Self.GapSize;

		export import Decorator = PackageCore.Decorator;

		export import Element = PackageCore.Html.Element.Section;

	}

	/**
	 * Legend component
	 */
	export class Legend extends PackageCore.Component {
		/**
		 * Constructs Legend
		 */
		constructor(options?: Legend.Options);

		/**
		 * Label content
		 */
		label: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Marker color
		 */
		color: Legend.Color;

		/**
		 * Marker shape
		 */
		shape: Legend.Shape;

		/**
		 * Marker size
		 */
		size: Legend.Size;

	}

	export namespace Legend {
		interface Options extends PackageCore.Component.Options {
			label?: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

			color?: Legend.Color;

			shape?: Legend.Shape;

			wrap?: Legend.Size;

		}

		enum Color {
			NEUTRAL,
			INFO,
			SUCCESS,
			WARNING,
			ERROR,
			PURPLE,
			YELLOW,
			GREEN,
			PINK,
			TURQUOISE,
			BROWN,
			LIGHT_BLUE,
		}

		enum Size {
			SMALL,
			MEDIUM,
			LARGE,
		}

		enum Shape {
			SQUARE,
			ROUNDED_SQUARE,
			CIRCLE,
		}

	}

	/**
	 * Link component
	 */
	export class Link extends PackageCore.Component {
		/**
		 * Constructs Link
		 */
		constructor(options?: Link.Options);

		/**
		 * Link content
		 */
		content: (string | PackageCore.Translation | PackageCore.Component);

		/**
		 * Content property alias for VDom
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Link URL
		 */
		url: (string | PackageCore.Url | null);

		/**
		 * Link route
		 */
		route: (string | PackageCore.Route | Link.Route | null);

		/**
		 * Link target
		 */
		target: (string | Link.Target | null);

		/**
		 * Gets state of wrapping
		 */
		wrap: (boolean | number);

		/**
		 * Gets state of whitespace
		 */
		whitespace: boolean;

		/**
		 * Sets link content
		 */
		setContent(content: (null | string | number | PackageCore.Translation | PackageCore.Component)): void;

		/**
		 * Sets link URL
		 */
		setUrl(url: string): void;

		/**
		 * Link route
		 */
		setRoute(route: (string | PackageCore.Route | Link.Route)): void;

		/**
		 * Set link target frame
		 */
		setTarget(target: (string | Link.Target | null)): void;

		/**
		 * Invokes link click
		 */
		click(): void;

		/**
		 * Creates a Link component that contains defined image wrapped in Image component
		 */
		static fromImage(linkOptions: Link.Options, imageOptions: Image.Options): void;

		static Event: Link.EventTypes;

	}

	export namespace Link {
		interface Route {
			route: (string | PackageCore.Route);

			parameters?: object;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			ACTION: string;

		}

		interface Options extends PackageCore.Component.Options {
			content?: (string | number | PackageCore.Translation | PackageCore.Component | null);

			target?: Link.Target;

			url?: (string | PackageCore.Url);

			route?: (string | PackageCore.Route | Link.Route);

			whitespace?: boolean;

			wrap?: (boolean | number);

		}

		enum VisualStyle {
			DEFAULT,
			MENU,
		}

		enum Target {
			BLANK,
			SELF,
			PARENT,
			TOP,
		}

	}

	/**
	 * Link cell
	 */
	export class LinkCell extends GridCell {
		/**
		 * Constructs LinkCell
		 */
		constructor();

		/**
		 * Link reference
		 */
		link: (Link | null);

		/**
		 * Wrap text/link
		 */
		wrap: boolean;

		/**
		 * Link options
		 */
		widgetOptions: (Link.Options | GridCell.WidgetOptionsCallback<Link.Options>);

	}

	export namespace LinkCell {
	}

	/**
	 * Link column
	 */
	export class LinkColumn extends GridColumn {
		/**
		 * Constructs LinkColumn
		 */
		constructor(options: LinkColumn);

		/**
		 * Link options
		 */
		widgetOptions: (Link.Options | GridColumn.WidgetOptionsCallback<Link.Options> | null);

		/**
		 * Wrap text/link
		 */
		wrap: boolean;

	}

	export namespace LinkColumn {
		interface Options extends GridColumn.Options {
			wrap?: boolean;

			widgetOptions?: (Link.Options | GridColumn.WidgetOptionsCallback<Link.Options>);

		}

		export import Cell = Self.LinkCell;

	}

	/**
	 * Link portlet
	 */
	export class LinkPortlet extends PackageCore.Component {
		constructor(options?: LinkPortlet.Options);

	}

	export namespace LinkPortlet {
		interface Options extends PackageCore.Component.Options {
		}

	}

	/**
	 * Component for creating HTML lists
	 */
	export class List extends PackageCore.Component {
		/**
		 * Constructs List
		 */
		constructor(options?: List.Options);

		/**
		 * List type
		 */
		type: List.Type;

		/**
		 * List items
		 */
		items: globalThis.Array<any>;

		/**
		 * Alias for items property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Sets list type
		 */
		setType(type: List.Type): void;

		/**
		 * Sets list items
		 */
		setItems(items: globalThis.Array<any>): void;

		/**
		 * Initializes list items
		 */
		private _renderItems(): HTMLElement;

		/**
		 * Ordered list JSX component
		 */
		static Ordered(props: List.Options): PackageCore.JSX.Element;

		/**
		 * Definition list JSX component
		 */
		static Definition(props: List.Options): PackageCore.JSX.Element;

		/**
		 * List item
		 */
		static Item(classList?: (string | PackageCore.Style | globalThis.Array<(string | PackageCore.Style)>), rootStyle?: Record<string, string>, rootAttributes?: Record<string, string>): PackageCore.JSX.Element;

	}

	export namespace List {
		interface Options extends PackageCore.Component.Options {
			items?: (globalThis.Array<any> | null);

			type?: List.Type;

		}

		enum Type {
			UNORDERED,
			ORDERED,
			DEFINITION,
			NONE,
		}

		enum VisualStyle {
			STANDALONE,
			EMBEDDED,
		}

	}

	/**
	 * ListPresenter action panel
	 */
	class ListActionPanel extends PackageCore.Component {
		/**
		 * Constructor
		 */
		constructor(options: ListActionPanel.Options);

		/**
		 * True if there are no actions
		 */
		empty: boolean;

		visibleControlsNumber: number;

		/**
		 * Shows all controls - resets visibleControlsNumber to number of actions.
		 */
		showAllControls(): void;

	}

	namespace ListActionPanel {
		interface Options extends PackageCore.Component.Options {
		}

	}

	/**
	 * Data widget for displaying and selecting from long item lists
	 */
	export class ListBox extends DataSourceComponent {
		/**
		 * Constructs ListBox
		 */
		constructor(options?: ListBox.Options);

		/**
		 * Gets the list of selected items
		 */
		selectedItems: globalThis.Array<any>;

		/**
		 * Gets the list of selected list items
		 */
		selectedListItems: globalThis.Array<ListItem>;

		/**
		 * Gets the list of selected values
		 */
		selectedValues: globalThis.Array<any>;

		/**
		 * Gets the list of selected index paths
		 */
		selectedIndexes: globalThis.Array<ListBox.IndexPath>;

		/**
		 * Checks/Sets whether selection is allowed
		 */
		selectable: boolean;

		/**
		 * Gets the list of selectable list items
		 */
		selectableItems: globalThis.Array<ListItem>;

		/**
		 * Gets the maximum number of selected items
		 */
		maxSelectedItemsCount: (number | null);

		/**
		 * Enables/Disables drag & drop of list items
		 */
		draggable: boolean;

		/**
		 * Shows/Hides list selection bar
		 */
		showSelectionBar: boolean;

		/**
		 * Shows/hides 'View Selected' checkbox
		 */
		showSelectedOnlyCheckbox: boolean;

		/**
		 * Gets value of 'Selected Only' checkbox
		 */
		selectedOnly: boolean;

		/**
		 * Checks/Sets whether multiple selection is allowed
		 */
		multiSelect: boolean;

		/**
		 * Gets display member
		 */
		displayMember: (DataSourceComponent.DisplayMemberCallback | string);

		/**
		 * Gets value member
		 */
		valueMember: (DataSourceComponent.ValueMemberCallback | string);

		/**
		 * Shows/Hides check marks before item labels for selected items
		 */
		showCheckMarks: boolean;

		/**
		 * Allows/Disables to change cursor using typing letters (see onItemMatch)
		 */
		allowKeySearch: boolean;

		/**
		 * Gets the cursor position
		 */
		cursorItem: ListItem;

		/**
		 * Gets the cursor visibility
		 */
		cursorVisibility: ListBox.CursorVisibility;

		/**
		 * Gets hte initial cursor position
		 */
		initialCursorPosition: ListBox.InitialCursorPosition;

		/**
		 * Allows/Disables selection move along with cursor move
		 */
		moveSelectionWithCursor: boolean;

		/**
		 * Gets a list of list box items
		 */
		items: globalThis.Array<ListItem>;

		/**
		 * List of visible items
		 */
		visibleItems: globalThis.Array<ListItem>;

		/**
		 * Returns true if the list box does not contain any items
		 */
		empty: boolean;

		/**
		 * Gets placeholder text that is shown when list box is empty
		 */
		placeholder: (string | PackageCore.Translation | PackageCore.Component);

		/**
		 * If the ListBox was initialized with virtualization enabled this allows to toggle rendering of all items in the container vs only items in the visible region
		 */
		virtualization: boolean;

		/**
		 * Maximum viewport height in virtualized mode
		 */
		maxViewportHeight: number;

		/**
		 * Enable/disable sticky group headers
		 */
		stickyGroupHeaders: boolean;

		/**
		 * Gets drop placeholder item
		 */
		dropPlaceholder: ListItem;

		/**
		 * Gets/sets drop placeholder item index
		 */
		dropPlaceholderIndex: (number | null);

		/**
		 * Gets root item
		 */
		rootItem: ListItem;

		/**
		 * Gets item content renderer
		 */
		itemContent: (((item: ListItem, renderData: object) => (PackageCore.Component | PackageCore.JSX.Element)) | null);

		/**
		 * Filter predicate for filtering items
		 */
		filterPredicate: ((() => boolean));

		/**
		 * Selection changed callback
		 */
		onSelectionChanged: (ListBox.SelectionChangedCallback | null);

		/**
		 * Name of dataItem property to be used as automationId for groups
		 */
		groupAutomationIdMember: (string | null);

		/**
		 * Returns list item at given index path
		 */
		itemAtIndex(indexPath: ListBox.IndexPath): (ListItem | null);

		/**
		 * Gets list item containing given HTML element
		 */
		itemForElement(element: Element): (ListItem | null);

		/**
		 * Finds list item associated with a given data item
		 */
		itemForDataItem(dataItem: any): (ListItem | null);

		/**
		 * Sets over which item the cursor will appear
		 */
		setCursorItem(item: (ListItem | null), options?: object): void;

		/**
		 * Sets cursor visibility
		 */
		setCursorVisibility(cursorVisibility: boolean): void;

		/**
		 * Set item content callback
		 */
		setItemContent(value: (((item: ListItem, renderData: object) => (PackageCore.Component | PackageCore.JSX.Element)) | null)): void;

		/**
		 * Selects items
		 */
		select(options: {items?: globalThis.Array<any>; listItems?: globalThis.Array<ListItem>; indexes?: globalThis.Array<any>; values?: globalThis.Array<any>; append?: boolean; unselect?: boolean; reason?: string}): void;

		/**
		 * Unselects items
		 */
		unselect(options: object): void;

		/**
		 * Selects all items
		 */
		selectAll(options: object): void;

		/**
		 * Selects all visible items
		 */
		selectAllVisible(options: object): void;

		/**
		 * Unselects all items
		 */
		unselectAll(options: object): void;

		/**
		 * Filters items
		 */
		filter(predicate: any): void;

		/**
		 * Scrolls to item
		 */
		scrollTo(args: object): void;

		/**
		 * Scrolls to selection
		 */
		scrollToSelection(): void;

		/**
		 * Set if the listbox is selectable
		 */
		setSelectable(value: boolean, options: object): void;

		/**
		 * Sets maximum of selected items
		 */
		setMaxSelectedItemsCount(value: number): void;

		/**
		 * Sets if the list is draggable
		 */
		setDraggable(value: boolean, args: object): void;

		/**
		 * Sets if listbox is in multiselect mode
		 */
		setMultiSelect(value: object): void;

		/**
		 * Sets if the selection bar is visible
		 */
		setShowSelectionBar(value: boolean): void;

		/**
		 * Gets next selectable item
		 */
		getNextSelectableItem(from: ListItem, step: number, circular: boolean): (ListItem | null);

		/**
		 * Sets placeholder
		 */
		setPlaceholder(value: string): void;

		/**
		 * Sets drop placeholder index
		 */
		setDropPlaceholderIndex(index: number): void;

		/**
		 * Visits list items
		 */
		visit(callback: (item: ListItem) => (boolean | null)): void;

		/**
		 * Searches for key
		 */
		private _keySearch(message: object): boolean;

		static Event: ListBox.EventTypes;

	}

	export namespace ListBox {
		type IndexPath = globalThis.Array<number>;

		interface Options extends DataSourceComponent.Options {
			displayMember?: (string | DataSourceComponent.DisplayMemberCallback);

			valueMember?: (string | DataSourceComponent.ValueMemberCallback);

			groupAutomationIdMember?: string;

			itemDragSource?: PackageCore.DataExchange.DragSourceProvider;

			keepSelection?: boolean;

			moveSelectionWithCursor?: boolean;

			multiSelect?: boolean;

			placeholder?: (string | PackageCore.Translation | PackageCore.Component);

			selectable?: boolean;

			selectedIndexes?: (number | globalThis.Array<number>);

			selectedItems?: any;

			selectedValues?: any;

			showCheckMarks?: boolean;

			withGroups?: boolean;

			itemContent?: (item: ListItem, renderData: object) => (PackageCore.Component | PackageCore.JSX.Element);

			cursorVisibility?: ListBox.CursorVisibility;

			onSelectionChanged?: ListBox.SelectionChangedCallback;

			customizeItem?: ListBox.CustomizeItemCallback;

		}

		type SelectionChangedCallback = (args: ListBox.SelectionChangedArgs, sender: ListBox) => void;

		type CustomizeItemCallback = (args: ListBox.CustomizeItemCallbackArgs) => void;

		interface CustomizeItemCallbackArgs {
			index: number;

			dataItem: any;

			listItem: ListItem;

		}

		interface SelectionChangedArgs {
			items: globalThis.Array<any>;

			previousItems: globalThis.Array<any>;

			addedItems: globalThis.Array<any>;

			removedItems: globalThis.Array<any>;

			reason: ListBox.Reason;

		}

		interface EventTypes extends DataSourceComponent.EventTypes {
			SELECTION_CHANGED: string;

			CURSOR_MOVED: string;

			ITEM_UPDATE: string;

			ITEM_CLICKED: string;

			SCROLL_TO_END: string;

		}

		enum VisualStyle {
			DEFAULT,
			EMBEDDED,
		}

		export import DataExchange = Self.ListDataExchange;

		export import Item = Self.ListItem;

		export import ItemVisualStyle = Self.ListItem.VisualStyle;

		enum Reason {
			CURSOR_SET,
			SELECT,
			INVALID_SELECTION,
			SET_MAX_SELECTED_ITEMS_COUNT,
			MULTI_SELECT_DISABLED,
			ITEMS_REMOVED,
			REMOVE_ITEM,
			MOVE_ITEM,
			DATA_RESET,
			NEW_DATA_ROW,
			DATA_BIND,
			DATA_LOADED,
			TOUCH,
			CLICK,
			DOUBLECLICK,
		}

		enum InitialCursorPosition {
			NONE,
			FIRST,
			FIRST_SELECTED,
		}

		enum CursorVisibility {
			FOCUS,
			ALWAYS,
		}

	}

	/**
	 * Default picker for Dropdown
	 */
	export class ListBoxPicker extends Picker {
		/**
		 * Constructs ListBoxPicker
		 */
		constructor(options: Picker.Options);

		/**
		 * Gets picker's data source
		 */
		dataSource: object;

		/**
		 * Picker's filter
		 */
		filter: (dataSource: PackageCore.DataSource, text: string) => PackageCore.DataSource;

		/**
		 * The inner picker component - ListBox
		 */
		listBox: ListBox;

		/**
		 * Debounce interval before filter callback
		 */
		debounce: number;

		/**
		 * Handles picked value from ListBox
		 */
		private _handleSelectionChanged(args: {addedItems: globalThis.Array<any>; removedItems: globalThis.Array<any>}, reason: string): void;

		/**
		 * Toggle change on click on selected item of singleSelect listbox
		 */
		private _handleListItemClicked(args: {buttons: object}): void;

		/**
		 * Forwards message to the ListBox
		 */
		private _forwardMessageToList(message: PackageCore.RoutedMessage, result: object): void;

		/**
		 * Creates filter
		 */
		private _createFilter(options: object): (dataSource: PackageCore.DataSource, text: string) => PackageCore.DataSource;

		/**
		 * Create item filter function
		 */
		static createItemFilter(): (dataSource: PackageCore.DataSource, text: string) => PackageCore.DataSource;

		/**
		 * Create formatted content
		 */
		static formattedContentCreator(): (text: string) => (item: ListItem) => PackageCore.JSX.Element;

	}

	export namespace ListBoxPicker {
		interface Options extends Picker.Options {
			dataSource: PackageCore.DataSource;

			filter?: (dataSource: PackageCore.DataSource, text: string) => PackageCore.DataSource;

			filterType?: FilterType;

			highlightItems?: boolean;

			caseSensitive?: boolean;

		}

		export import Reason = Self.Picker.Reason;

		enum FilterType {
			STARTS_WITH,
			CONTAINS,
		}

	}

	class ListComparatorSelection {
		/**
		 * Constructs ListComparatorSelection
		 */
		constructor();

	}

	namespace ListComparatorSelection {
	}

	export namespace ListDataExchange {
		/**
		 * Build a ListBox drag source based on supplied options
		 */
		function dragSource(options: object): PackageCore.DataExchange.DragSourceProvider;

		/**
		 * Build a ListBox drag target based on supplied options
		 */
		function dragTarget(options: object): PackageCore.DataExchange.DragTargetProvider;

	}

	class ListEqualitySelection {
		/**
		 * Constructs ListEqualitySelection
		 */
		constructor();

	}

	namespace ListEqualitySelection {
	}

	/**
	 * List item
	 */
	export class ListItem extends PackageCore.Component {
		/**
		 * Constructs ListItem
		 */
		constructor();

		/**
		 * Owning listbox
		 */
		listBox: ListBox;

		/**
		 * Parent list item
		 */
		parentItem: ListItem;

		/**
		 * Child items
		 */
		childItems: globalThis.Array<ListItem>;

		/**
		 * True if the item has no child items
		 */
		empty: boolean;

		/**
		 * List item index
		 */
		index: number;

		/**
		 * Item index path
		 */
		indexPath: ListBox.IndexPath;

		/**
		 * Visible index
		 */
		visibleIndex: number;

		/**
		 * Hierarchy level
		 */
		level: number;

		/**
		 * Reference to the data store entry
		 */
		dataEntry: object;

		/**
		 * Get reference to the associated data item
		 */
		dataItem: any;

		/**
		 * True if this item is bound to data
		 */
		dataBound: boolean;

		/**
		 * Change item height. This property is used only in virtualization mode.
		 */
		height: number;

		/**
		 * Property for storing custom data on the list item
		 */
		userData: any;

		/**
		 * Can be use to store data that are valid only while the component is rendered. The object is automatically reset when component is erased.
		 */
		renderData: (object | null);

		/**
		 * Get the bound value
		 */
		value: any;

		/**
		 * Get the bound text
		 */
		label: string;

		/**
		 * Item selectability
		 */
		selectable: boolean;

		/**
		 * Effective selectability
		 */
		effectiveSelectable: boolean;

		/**
		 * True if the item has cursor
		 */
		cursor: boolean;

		/**
		 * Content provider
		 */
		contentProvider: (((item: ListItem, renderData: object) => PackageCore.JSX.Element) | null);

		/**
		 * Item draggability
		 */
		draggable: boolean;

		/**
		 * Effective draggability
		 */
		effectiveDraggable: boolean;

		/**
		 * True if the item is selected
		 */
		selected: boolean;

		/**
		 * Effective visibility
		 */
		effectiveVisible: boolean;

		/**
		 * Returns the content component if rendered
		 */
		content: (PackageCore.Component | null);

		/**
		 * Returns if item has divider
		 */
		divider: boolean;

		/**
		 * Add child items
		 */
		addItems(items: globalThis.Array<ListItem>, options: {index: number; reason?: string}): void;

		/**
		 * Remove child items
		 */
		removeItems(index: number, count: number, options: {reason?: string}): void;

		/**
		 * Binds data
		 */
		bind(dataEntry: PackageCore.DataStoreEntry, delegate: (ListBox.CustomizeItemCallback | null)): void;

		/**
		 * Unbinds data
		 */
		unbind(): void;

		/**
		 * Refreshes
		 */
		refresh(): void;

		/**
		 * Sets item selectable state
		 */
		setSelectable(value: boolean, options: object): void;

		/**
		 * Sets item selected state
		 */
		setSelected(value: boolean, options: object): void;

		/**
		 * Sets cursor
		 */
		setCursor(value: boolean): void;

		/**
		 * Sets if item has divider
		 */
		setDivider(divider: boolean): void;

		/**
		 * Sets item draggable state
		 */
		setDraggable(value: boolean, options: object): void;

		/**
		 * Sets item height
		 */
		setHeight(value: number, options: object): void;

		/**
		 * Visit recursively all items
		 */
		visit(callback: (item: ListItem) => (boolean | null), self: ListItem): void;

		setupVirtualPosition(): void;

		/**
		 * Default ListItem content
		 */
		static defaultContent(item: ListItem): PackageCore.JSX.Element;

		/**
		 * Default highlighted ListItem content
		 */
		static highlightedContent(item: ListItem, options: object): PackageCore.JSX.Element;

		static Event: ListItem.EventTypes;

	}

	export namespace ListItem {
		interface EventTypes extends PackageCore.Component.EventTypes {
			SELECTED_CHANGED: string;

			SELECTABLE_CHANGED: string;

			EFFECTIVE_SELECTABLE_CHANGED: string;

			DRAGGABLE_CHANGED: string;

			EFFECTIVE_DRAGGABLE_CHANGED: string;

			VISIBLE_CHANGED: string;

			EFFECTIVE_VISIBLE_CHANGED: string;

			HEIGHT_CHANGED: string;

			ITEMS_ADDED: string;

			ITEMS_REMOVED: string;

		}

		enum VisualStyle {
			ITEM,
			GROUP,
		}

	}

	class ListMouseSelectionHandler implements PackageCore.MessageHandler {
		/**
		 * Constructs ListMouseSelectionHandler
		 */
		constructor(options: object);

		/**
		 * Attaches handler
		 */
		attach(): void;

		/**
		 * Detaches handler
		 */
		detach(): void;

		/**
		 * Processes message
		 */
		processMessage(next: PackageCore.RoutedMessage.Handler, message: PackageCore.RoutedMessage, result: PackageCore.RoutedMessage.Result): void;

	}

	namespace ListMouseSelectionHandler {
	}

	namespace ListPresenterConstant {
		enum ColumnName {
			SELECTION,
		}

		enum DataType {
			LIST_ACTION,
			ITEM_ACTION,
			SELECTION_ACTION,
			QUICK_SORT_OPTION,
			LINK_ACTION,
			TRANSLATION_OR_STRING,
		}

		enum ItemSelection {
			NONE,
			SINGLE,
			MULTIPLE,
		}

		/**
		 * List Presenter available layouts.
		 */
		enum Layout {
			TABLE,
			TABLE_DETAIL,
		}

		enum FiltersPosition {
			TOP,
			SIDE,
			NONE,
		}

		enum FilterType {
			TEXT_BOX,
			DROPDOWN,
			MULTISELECT_DROPDOWN,
			CHECK_BOX,
			TOGGLE,
			DATE,
			TIME,
			DATE_RANGE,
			TIME_RANGE,
		}

		enum TextBoxFilterMatchingOperator {
			STARTS_WITH,
			ENDS_WITH,
			CONTAINS,
		}

	}

	namespace ListResponsiveVisibility {
		enum VisibilityBreakpoint {
			XX_SMALL,
			X_SMALL,
			SMALL,
			MEDIUM,
			LARGE,
			X_LARGE,
		}

		enum Visibility {
			ABOVE,
			BELOW,
			FOR,
		}

	}

	export enum ListSelectReason {
		KEY_ARROW_UP,
		KEY_ARROW_DOWN,
		KEY_ENTER,
		KEY_SPACE,
		KEY_HOME,
		KEY_END,
		KEY_ALL,
		FOCUS_IN,
	}

	/**
	 * List selection bar
	 */
	class ListSelectionBar extends PackageCore.Component {
		/**
		 * Constructs ListSelectionBar
		 */
		constructor(options: ListSelectionBar.Options);

		/**
		 * Selected items count
		 */
		selectedItemsCount: number;

		/**
		 * Selectable items count
		 */
		selectableItemsCount: number;

		/**
		 * Max selectable items count
		 */
		maxSelectableItemsCount: number;

		/**
		 * Show only selected items
		 */
		selectedOnly: boolean;

		/**
		 * Show selected only check box
		 */
		showSelectedOnlyCheckbox: boolean;

		/**
		 * Select all callback
		 */
		onSelectAll: (value: boolean) => void;

		/**
		 * Selected only changed callback
		 */
		onSelectedOnlyChanged: (value: boolean) => void;

	}

	namespace ListSelectionBar {
		interface Options extends PackageCore.Component.Options {
			selectedItemsCount: number;

			selectableItemsCount: number;

			maxSelectableItemsCount: number;

			selectedOnly: boolean;

			showSelectedOnlyCheckbox: boolean;

			onSelectAll: (value: boolean) => void;

			onSelectedOnlyChanged: (value: boolean) => void;

		}

	}

	/**
	 * Table layout
	 */
	class ListTableLayout extends PackageCore.Component {
		/**
		 * Constructor
		 */
		constructor(options: ListTableLayout.Options);

		masterDetail: boolean;

		/**
		 * Returns the embedded data grid
		 */
		dataGrid: DataGrid;

		selectedItems: globalThis.Array<object>;

		/**
		 * Displays only items on the requested page. The dataSource contains all items. If no pageSize&pageIndex is set, current pageSize&pageIndex are used for the updated dataSource. Both properties have to be set to be applied.
		 */
		showPage(dataSource: PackageCore.DataSource, pageSize?: (number | null), pageIndex?: (number | null)): void;

		/**
		 * Displays all dataSource items.
		 */
		showData(dataSource: PackageCore.DataSource): void;

		/**
		 * Shows the error message in the Data Area.
		 */
		showError(errorMessage: string): void;

		/**
		 * Hides an error message.
		 */
		hideError(): void;

		/**
		 * ListTableLayout events.
		 */
		static Event: ListTableLayout.EventTypes;

	}

	namespace ListTableLayout {
		interface Options extends PackageCore.Component.Options {
		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			SELECTION_CHANGED: string;

			SORTING_CHANGED: string;

			MASTER_DETAIL_CLOSED: string;

			ROW_REORDERED: string;

			ITEM_EDITED: string;

		}

		/**
		 * Available master detail widths.
		 */
		enum MasterDetailWidth {
			EQUAL,
			SMALL_DETAIL,
			LARGE_DETAIL,
			CONTENT,
		}

	}

	/**
	 * List view
	 */
	export class ListView extends PackageCore.Component {
		/**
		 * Constructs ListView
		 */
		constructor(options: ListView.Options);

		/**
		 * List state
		 */
		state: object;

		/**
		 * Total number of items.
		 */
		totalItemsCount: number;

		/**
		 * Getter/setter for page segments - used only for segmented pagination.
		 */
		paginationSegments: globalThis.Array<{label: string}>;

		/**
		 * Getter/setter for selected page index
		 */
		selectedPageIndex: (number | null);

		/**
		 * Getter/setter for selected items.
		 */
		selectedItems: globalThis.Array<object>;

		filters: globalThis.Array<ListView.Filter>;

		/**
		 * Currently used data source. In case of the pagination is enabled (presenter keeps all the data and only switches pages), data source contains all data. In case the data are provided per page, the data source contains only current page items.
		 */
		dataSource: PackageCore.DataSource;

		/**
		 * Getter/setter for the filtering area placement.
		 */
		filtersPosition: ListView.FiltersPosition;

		/**
		 * Getter/setter for the loader visibility. If TRUE, the loader covers data area.
		 */
		loaderVisible: boolean;

		/**
		 * Get the layout component
		 */
		layout: ListTableLayout;

		/**
		 * Displays only items on the requested page. The dataSource contains all items. If no pageSize&pageIndex is set, current pageSize&pageIndex are used for the updated dataSource. Both properties have to be set to be applied.
		 */
		showPage(dataSource: PackageCore.DataSource, pageSize?: number, pageIndex?: number): void;

		/**
		 * Displays all dataSource items (usually used for segmented pagination where one page can contain different number of items)
		 */
		showData(dataSource: PackageCore.DataSource): void;

		/**
		 * Requests refresh.
		 */
		refresh(args?: {includeFilters?: boolean}): void;

		/**
		 * Shows the error message in the Data Area.
		 */
		showError(errorMessage: string): void;

		/**
		 * Hides an error message.
		 */
		hideError(): void;

		/**
		 * Create a ListView of static data
		 */
		static ofStaticData(args: StaticDataListViewFactory.Options): ListView;

		/**
		 * Create a ListView of paged data
		 */
		static ofPagedData(args: PagedDataListViewFactory.Options): ListView;

		/**
		 * List View events.
		 */
		static Event: ListView.EventTypes;

	}

	export namespace ListView {
		interface Filter {
			id: string;

			filterChip: FilterChip;

		}

		interface ColumnDefinition extends GridColumn {
			visibility?: globalThis.Array<ListView.VisibilityBreakpoint>;

		}

		interface TableLayoutOptions {
			columns: (globalThis.Array<ListView.ColumnDefinition> | {left: globalThis.Array<ListView.ColumnDefinition>; body: globalThis.Array<ListView.ColumnDefinition>; right: globalThis.Array<ListView.ColumnDefinition>});

			detailRowContent?: () => PackageCore.Component;

			detailRowHeight?: (number | GridRow.Height);

			masterDetailContent?: () => PackageCore.Component;

			masterDetailWidth?: ListView.TableMasterDetailWidth;

			gridOptions?: DataGrid.Options;

		}

		interface TableLayout {
			table?: boolean;

			tableDetail?: boolean;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			STATE_UPDATED: string;

			SELECTION_CHANGED: string;

			REFRESH_REQUESTED: string;

			ITEM_REORDERED: string;

			ITEM_EDITED: string;

			RENDERED: string;

		}

		interface Options extends PackageCore.Component.Options {
		}

		export import ColumnFactory = Self.ListViewColumnFactory;

		export import ItemSelection = Self.ListPresenterConstant.ItemSelection;

		export import FiltersPosition = Self.ListPresenterConstant.FiltersPosition;

		export import Visibility = Self.ListResponsiveVisibility.Visibility;

		export import VisibilityBreakpoint = Self.ListResponsiveVisibility.VisibilityBreakpoint;

		enum ResponsiveStrategy {
			ONE_LINE,
			TWO_LINES,
		}

		export import Pagination = Self.PaginationConfiguration;

		export import Layout = Self.ListPresenterConstant.Layout;

		export import TableMasterDetailWidth = Self.ListTableLayout.MasterDetailWidth;

		enum StateProperty {
			VIEW_SELECTED_ITEMS,
		}

	}

	/**
	 * ListView column factory
	 */
	export namespace ListViewColumnFactory {
		interface ColumnOptions extends GridColumn.Options {
			searchable?: boolean;

			searchPredicate?: (phrase: string, item: any, formatService: PackageCore.FormatService) => boolean;

		}

		/**
		 * Create column definition for Text column
		 */
		function createTextColumn(columnOptions: ListViewColumnFactory.ColumnOptions, widgetOptions?: object): object;

		/**
		 * Create column definition for Number column
		 */
		function createNumberColumn(columnOptions: ListViewColumnFactory.ColumnOptions, widgetOptions?: object): object;

		/**
		 * Create column definition for Time column
		 */
		function createTimeColumn(columnOptions: ListViewColumnFactory.ColumnOptions, widgetOptions?: object): object;

		/**
		 * Create column definition for Date column
		 */
		function createDateColumn(columnOptions: ListViewColumnFactory.ColumnOptions, widgetOptions?: object): object;

		/**
		 * Create column definition for DateTime column
		 */
		function createDateTimeColumn(columnOptions: ListViewColumnFactory.ColumnOptions, widgetOptions?: object): object;

		/**
		 * Create column definition for Check column
		 */
		function createCheckColumn(columnOptions: ListViewColumnFactory.ColumnOptions, widgetOptions?: object): object;

		/**
		 * Create column definition for Link column
		 */
		function createLinkColumn(columnOptions: ListViewColumnFactory.ColumnOptions, widgetOptions?: object): object;

		/**
		 * Create column definition for Image column
		 */
		function createImageColumn(columnOptions: ListViewColumnFactory.ColumnOptions, widgetOptions?: object): object;

		/**
		 * Create column definition for TextArea column
		 */
		function createTextAreaColumn(columnOptions: ListViewColumnFactory.ColumnOptions, widgetOptions?: object): object;

		/**
		 * Create column definition for EditView column
		 */
		function createEditViewColumn(columnOptions: ListViewColumnFactory.ColumnOptions, widgetOptions?: object): object;

		/**
		 * ListView column types
		 */
		enum ColumnType {
			CHECK,
			DATE,
			TIME,
			DATE_TIME,
			LINK,
			NUMBER,
			TEXT_BOX,
			TEXT_AREA,
			EDIT_VIEW,
			IMAGE,
		}

		/**
		 * Create a custom ListView column
		 */
		function create(columnType: ListViewColumnFactory.ColumnType, columnOptions: object, widgetOptions?: object): object;

	}

	/**
	 * Selection panel contains information message about current selection and a switch to display only selected items.
	 */
	class ListViewSelectionBar extends PackageCore.Component {
		/**
		 * Constructor
		 */
		constructor(options: ListViewSelectionBar.Options);

		totalItemsCount: number;

		selectedItemsCount: number;

		filtersApplied: boolean;

		ignoreFilters: boolean;

		/**
		 * ListViewSelectionBar events
		 */
		static Event: ListViewSelectionBar.EventTypes;

	}

	namespace ListViewSelectionBar {
		interface Options extends PackageCore.Component.Options {
		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			VIEW_SELECTED_TOGGLED: string;

			FILTERS_IGNORED_TOGGLED: string;

		}

	}

	namespace ListViewUtil {
		/**
		 * Creates a tooltip instance with above placement.
		 */
		function createTooltip(content: (string | PackageCore.Translation | PackageCore.Component)): Tooltip;

		/**
		 * Creates action control
		 */
		function createActionControl(actionDefinition: object): any;

	}

	/**
	 * Viewing tools
	 */
	class ListViewingTools extends PackageCore.Component {
		/**
		 * Constructor
		 */
		constructor(options: ListViewingTools.Options);

		pagination: Pagination;

		paginationState: object;

		activeLayout: ListPresenterConstant.Layout;

		totalItemsCount: number;

		/**
		 * Pagination segments
		 */
		paginationSegments: globalThis.Array<{label: string}>;

		/**
		 * Selected page index
		 */
		selectedPageIndex: (number | null);

		/**
		 * Sets total items count. If filtersApplied = true, pagination is hidden if all items are displayed on the first page.
		 */
		setTotalItemsCount(totalItemsCount: number, filtersApplied?: boolean): void;

		/**
		 * The total text is used only if all items are displayed on the first page (no pagination is needed).
		 */
		private _refreshTotalItemsText(): void;

		/**
		 * Returns pagination state in a form that's expected for the ListPresenter.
		 */
		private _getPaginationState(): ({currentPage: object; rowsPerPage: object; currentIndex: number} | null);

		/**
		 * Creates control for Quick Sort Options
		 */
		private _createQuickSortControl(quickSortOptions: globalThis.Array<object>): (MenuButton | null);

		/**
		 * ListViewingTools events
		 */
		static Event: ListViewingTools.EventTypes;

	}

	namespace ListViewingTools {
		interface Options extends PackageCore.Component.Options {
		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			LAYOUT_CHANGED: string;

			PAGINATION_WIDTH_CHANGED: string;

		}

	}

	/**
	 * Blocking overlay (curtain) with loader animation to prevent UI interaction with given target (with either raw HTMLElement or a Component).
	 */
	export class Loader extends PackageCore.Component {
		/**
		 * Constructs Loader
		 */
		constructor(options?: Loader.Options);

		/**
		 * Gets label text
		 */
		label: (string | number | PackageCore.Translation | PackageCore.Component);

		/**
		 * Gets start label text
		 */
		startLabel: (string | number | PackageCore.Translation | PackageCore.Component);

		/**
		 * Gets end label text
		 */
		endLabel: (string | number | PackageCore.Translation | PackageCore.Component);

		/**
		 * Gets icon of loader
		 */
		icon: (Image.Source | Loader.Icon | null);

		/**
		 * Gets vertical alignment of loader
		 */
		verticalAlignment: Loader.VerticalAlignment;

		/**
		 * Gets horizontal alignment of loader
		 */
		horizontalAlignment: Loader.HorizontalAlignment;

		/**
		 * Gets label alignment of loader
		 */
		labelAlignment: Loader.LabelAlignment;

		/**
		 * Gets size of loader
		 */
		size: Loader.Size;

		/**
		 * Show/hide curtain which covers target element
		 */
		showCurtain: boolean;

		/**
		 * True if progress value is indeterminate (valid only for Horizontal Loader)
		 */
		indeterminate: boolean;

		/**
		 * Gets progress value (valid only for Horizontal Loader)
		 */
		value: number;

		/**
		 * Gets progress maximum (valid only for Horizontal Loader)
		 */
		max: number;

		/**
		 * Gets if the Loader is embedded
		 */
		embedded: boolean;

		/**
		 * Parent border size
		 */
		parentBorderSize: number;

		/**
		 * Sets icon of loader
		 */
		setIcon(icon: Image.Source): void;

		/**
		 * Sets label text
		 */
		setLabel(label: (string | PackageCore.Translation | PackageCore.Component)): void;

		/**
		 * Sets start label text
		 */
		setStartLabel(label: (string | PackageCore.Translation | PackageCore.Component)): void;

		/**
		 * Sets start label text
		 */
		setEndLabel(label: (string | PackageCore.Translation | PackageCore.Component)): void;

		/**
		 * Sets vertical alignment of loader
		 */
		setVerticalAlignment(alignment: Loader.VerticalAlignment): void;

		/**
		 * Sets horizontal alignment of loader
		 */
		setHorizontalAlignment(alignment: Loader.HorizontalAlignment): void;

		/**
		 * Sets label alignment of loader
		 */
		setLabelAlignment(labelAlignment: Loader.LabelAlignment): void;

		/**
		 * Setter of progress value. (valid only for Horizontal Loader)
		 */
		setValue(value: number): void;

		/**
		 * Setter of progress maximum. (valid only for Horizontal Loader)
		 */
		setMax(max: number): void;

		/**
		 * Sets if the Loader is embedded
		 */
		setEmbedded(value: boolean): void;

		/**
		 * Sets size of loader
		 */
		setSize(size: Loader.Size): void;

		/**
		 * Show/hide curtain which covers target element
		 */
		setShowCurtain(showCurtain: boolean): void;

		/**
		 * Get percentage progress.
		 */
		private _getProgress(): number;

	}

	export namespace Loader {
		interface Options extends PackageCore.Component.Options {
			embedded?: boolean;

			label?: (string | number | PackageCore.Translation | PackageCore.Component);

			startLabel?: (string | number | PackageCore.Translation | PackageCore.Component);

			endLabel?: (string | number | PackageCore.Translation | PackageCore.Component);

			horizontalAlignment?: Loader.HorizontalAlignment;

			icon?: (Image.Source | Loader.Icon);

			labelAlignment?: Loader.LabelAlignment;

			max?: number;

			showCurtain?: boolean;

			size?: Loader.Size;

			target?: (HTMLElement | PackageCore.Component);

			value?: number;

			verticalAlignment?: Loader.VerticalAlignment;

			coverParent?: boolean;

			parentBorderSize?: number;

			parentHasStaticPosition?: boolean;

		}

		enum VisualStyle {
			DARK,
			LIGHT,
		}

		enum Icon {
			CIRCULAR,
			HORIZONTAL,
		}

		enum VerticalAlignment {
			TOP,
			MIDDLE,
			BOTTOM,
		}

		enum HorizontalAlignment {
			START,
			END,
			CENTER,
			STRETCH,
		}

		enum LabelAlignment {
			START,
			END,
			TOP,
			BOTTOM,
		}

		enum Size {
			SMALL,
			MEDIUM,
			LARGE,
			EXTRA_LARGE,
			EXTRA_EXTRA_LARGE,
		}

		enum DataAttribute {
			SIZE,
			HORIZONTAL_ALIGNMENT_,
			VERTICAL_ALIGNMENT,
			LABEL_ALIGNMENT,
			ICON,
			COVER_PARENT,
			EMBEDDED,
			CURTAIN,
			LABEL_TYPE,
			TARGET,
			ICON_OUTLINE,
			ICON_RUNNER,
		}

	}

	/**
	 * Immutable masked character wrapper
	 */
	export class MaskedCharacter {
		/**
		 * Constructor
		 */
		constructor(character: (string | null), rule: (MaskedCharacter.Rule | null));

		/**
		 * Get the input character or the placeholder character
		 */
		characterOrPlaceholder: string;

		/**
		 * Get the input character or the fill character
		 */
		characterOrFill: (string | null);

		/**
		 * Check equality
		 */
		equals(maskedCharacter: MaskedCharacter): boolean;

		/**
		 * Check if the position is empty
		 */
		isEmpty(): boolean;

		/**
		 * Check if this position is a terminal
		 */
		isTerminal(): boolean;

		/**
		 * Check if this position matches a character
		 */
		matches(character: string): boolean;

		/**
		 * Return a new masked character with the same rule but empty
		 */
		clear(): MaskedCharacter;

		/**
		 * Return a new masked character with the same rule and a given input character
		 */
		fill(character: string): MaskedCharacter;

		/**
		 * Create a terminal MaskedCharacter, i.e. a position in the masked text that is fixed and not modifiable by the user
		 */
		static terminal(character: string): MaskedCharacter;

		/**
		 * Create a non-terminal MaskedCharacter with a given rule and initialized to a specific character
		 */
		static filled(character: string, rule: MaskedCharacter.Rule): MaskedCharacter;

		/**
		 * Create an empty non-terminal MaskedCharacter with a given rule
		 */
		static empty(rule: MaskedCharacter.Rule): MaskedCharacter;

	}

	export namespace MaskedCharacter {
		interface Rule {
			match: (character: string) => boolean;

			fill?: string;

			placeholder?: string;

		}

	}

	/**
	 * Immutable masked text container
	 */
	export class MaskedText {
		/**
		 * Constructor
		 */
		constructor(value: globalThis.Array<MaskedCharacter>);

		/**
		 * Length of the text
		 */
		length: number;

		/**
		 * True if all mask positions are empty
		 */
		empty: boolean;

		/**
		 * Return the text from the non-terminal positions
		 */
		text: string;

		/**
		 * Returns the array of characters from non-terminal positions
		 */
		rawText: globalThis.Array<string>;

		/**
		 * Get the full text with placeholders
		 */
		maskedText: string;

		/**
		 * Compare two masked texts
		 */
		equals(maskedText: MaskedText): boolean;

		/**
		 * Get the character at index
		 */
		at(index: number): MaskedCharacter;

		/**
		 * Returns a new masked text with non-terminal positions set according to the raw text
		 */
		setRawText(text: globalThis.Array<string>): MaskedText;

		/**
		 * Inserts a text and returns a new MaskedText
		 */
		insertText(text: string, start: number, end: number): MaskedText;

		/**
		 * Clears the text in a given interval
		 */
		clearText(start: number, end: number): MaskedText;

		/**
		 * Creates a new masked text for a given mask and set of rules
		 */
		static create(mask: string, rules: Record<string, MaskedCharacter.Rule>): MaskedText;

	}

	export namespace MaskedText {
	}

	/**
	 * Text box component
	 */
	export class MaskedTextBox extends PackageCore.Component implements PackageCore.InputComponent {
		/**
		 * Constructs MaskedTextBox
		 */
		constructor(options?: MaskedTextBox.Options);

		/**
		 * Masked text data
		 */
		data: MaskedText;

		/**
		 * Get the filled text
		 */
		text: string;

		/**
		 * Get/set the raw text
		 */
		rawText: globalThis.Array<any>;

		/**
		 * The input text
		 */
		inputText: string;

		/**
		 * Accepted masked text data
		 */
		acceptedData: MaskedText;

		/**
		 * Last accepted text
		 */
		acceptedText: string;

		/**
		 * Raw accepted text
		 */
		acceptedRawText: string;

		/**
		 * Returns true if the displayed text is empty
		 */
		empty: boolean;

		/**
		 * Returns true if the input is mandatory
		 */
		mandatory: boolean;

		/**
		 * Gets current selection
		 */
		selection: MaskedTextBox.Selection;

		/**
		 * Gets current caret position
		 */
		caretPosition: number;

		/**
		 * Text alignment
		 */
		textAlignment: MaskedTextBox.TextAlignment;

		/**
		 * Show clear button
		 */
		clearButton: boolean;

		/**
		 * Gets inputSize of the input.
		 */
		inputSize: number;

		/**
		 * Globally unique input id
		 */
		inputId: string;

		/**
		 * Returns attributes of the input element
		 */
		inputAttributes: PackageCore.HtmlAttributeList;

		/**
		 * Size of the component
		 */
		size: MaskedTextBox.Size;

		/**
		 * Text changed callback
		 */
		onTextChanged: (MaskedTextBox.TextChangedCallback | null);

		/**
		 * Text accepted callback
		 */
		onTextAccepted: (MaskedTextBox.TextAcceptedCallback | null);

		/**
		 * Set text. The length of the text must match the count of empty positions in the mask.
		 */
		setText(text: string, options?: {reason?: string; accept?: boolean}): void;

		/**
		 * Set raw text. The length of the text must match the count of empty positions in the mask.
		 */
		setRawText(rawText: globalThis.Array<string>, options?: {reason?: string; accept?: boolean}): void;

		/**
		 * Sets selection
		 */
		setSelection(options: {start: number; end: number; direction?: string; reason?: string}): boolean;

		/**
		 * Set caret position
		 */
		setCaretPosition(position: number): void;

		/**
		 * Set the size of the input
		 */
		setInputSize(size: number): void;

		/**
		 * Set the text alignment
		 */
		setTextAlignment(alignment: MaskedTextBox.TextAlignment): void;

		/**
		 * Enable/disable the clear button
		 */
		setClearButton(value: boolean): void;

		/**
		 * Select the whole text
		 */
		selectAll(): boolean;

		/**
		 * Promote current text to accepted text
		 */
		acceptChanges(options: {reason?: string}): void;

		static Event: MaskedTextBox.EventTypes;

	}

	export namespace MaskedTextBox {
		interface Options extends PackageCore.Component.Options {
			acceptInvalidValue?: boolean;

			clearButton?: boolean;

			inputSize?: (number | null);

			mask?: string;

			rules: Record<string, MaskedCharacter.Rule>;

			text: (string | number);

			textAlignment?: MaskedTextBox.TextAlignment;

			mandatory?: boolean;

			size?: MaskedTextBox.Size;

			onTextChanged?: MaskedTextBox.TextChangedCallback;

			onTextAccepted?: MaskedTextBox.TextAcceptedCallback;

		}

		type TextChangedCallback = (args: MaskedTextBox.TextChangedArgs, sender: MaskedTextBox) => void;

		interface TextChangedArgs {
			text: string;

			previousText: string;

			rawText: string;

			previousRawText: string;

			reason: MaskedTextBox.TextChangeReason;

		}

		type TextAcceptedCallback = (args: MaskedTextBox.TextAcceptedArgs, sender: MaskedTextBox) => void;

		interface TextAcceptedArgs {
			text: string;

			previousText: string;

			rawText: string;

			previousRawText: string;

			reason: MaskedTextBox.TextAcceptedReason;

		}

		interface Selection {
			start: number;

			end: number;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			TEXT_CHANGED: string;

			TEXT_ACCEPTED: string;

			SELECTION_CHANGED: string;

			CARET_POSITION_CHANGED: string;

		}

		enum VisualStyle {
			DEFAULT,
			EMBEDDED,
		}

		enum TextAlignment {
			LEFT,
			RIGHT,
			CENTER,
		}

		enum TextChangeReason {
			INPUT,
			MAX_LENGTH,
		}

		enum TextAcceptedReason {
			FOCUS_OUT,
			ENTER,
			CALL,
		}

		enum SelectionChangeReason {
			SELECT_ALL,
			TEXT_CHANGED,
			REFRESH,
		}

		enum Reason {
			INSERT,
			CLEAR,
		}

		export import MaskedCharacter = Self.MaskedCharacter;

		export import MaskedText = Self.MaskedText;

		export import Size = Self.InputSize;

	}

	/**
	 * Matcher
	 */
	class Matcher {
		/**
		 * Add searchable elements
		 */
		addElements(elements: globalThis.Map<any, any>): void;

		/**
		 * Remove searchable element from Matcher
		 */
		removeElement(elementId: any): void;

	}

	namespace Matcher {
	}

	/**
	 * Menu
	 */
	export class Menu extends PackageCore.Component {
		/**
		 * Constructs Menu
		 */
		constructor(options?: Menu.Options);

		/**
		 * Aria role
		 */
		role: Menu.Role;

		/**
		 * Gets toolbar content
		 */
		items: globalThis.Array<MenuItem>;

		/**
		 * Alias for components property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * When action is executed then menu is closed
		 */
		collapseOnAction: boolean;

		/**
		 * Gets menu orientation
		 */
		orientation: Menu.Orientation;

		/**
		 * Gets menu size
		 */
		size: Menu.Size;

		/**
		 * Sets menu orientation
		 */
		setOrientation(orientation: Menu.Orientation): void;

		/**
		 * Sets menu size rules
		 */
		setSize(size: Menu.Size): void;

		/**
		 * Select item with value
		 */
		select(value: string): boolean;

		/**
		 * Highlight item with value
		 */
		highlight(value: string): boolean;

		/**
		 * Handles action
		 */
		private handleAction(args: object): void;

		/**
		 * Selects provided item
		 */
		private selectItem(item: MenuItem, reason?: string): boolean;

		/**
		 * Selects item after provided item or current selected
		 */
		private selectNextItem(item?: MenuItem, reason?: string): boolean;

		/**
		 * Selects item before provided item or current selected
		 */
		private selectPreviousItem(item?: MenuItem, reason?: string): boolean;

		/**
		 * Selects first item
		 */
		private selectFirstItem(reason?: string): boolean;

		/**
		 * Selects last item
		 */
		private selectLastItem(reason?: string): boolean;

		/**
		 * Checks if item has submenuItems - eg. can be opened
		 */
		private hasSubmenu(item: MenuItem): boolean;

		/**
		 * Checks if submenu is opened
		 */
		private isSubmenuOpened(item?: MenuItem): (boolean | null);

		/**
		 * Gets opened submenu of item (any if null)
		 */
		private getOpenedSubmenu(item?: MenuItem): (Menu | null);

		/**
		 * Opens submenu for item
		 */
		private openSubmenu(item: PackageCore.Component, reason?: string): (Menu | null);

		/**
		 * Close opened submenu
		 */
		private closeSubmenu(reason?: string): boolean;

		/**
		 * Open/close submenu for item
		 */
		private toggleSubmenu(item: PackageCore.Component, reason?: string): boolean;

		/**
		 * Finds menu item for component
		 */
		private findItemByComponent(component: PackageCore.Component, transitive?: boolean): (PackageCore.Component | null);

		/**
		 * Creates vertical menu
		 */
		static vertical(items: globalThis.Array<MenuItem>): void;

		/**
		 * Creates horizontal menu
		 */
		static horizontal(items: globalThis.Array<MenuItem>): void;

		/**
		 * Creates scrollable window with menu
		 */
		private static _createMenuWindow(menu: Menu, windowOptions?: Window.Options): Window;

		static Event: Menu.EventTypes;

		/**
		 * VDom item constructor
		 */
		static Item(props?: MenuItem.ItemDefinition): PackageCore.JSX.Element;

		/**
		 * VDom group constructor
		 */
		static Group(options?: MenuGroup.Options): PackageCore.JSX.Element;

	}

	export namespace Menu {
		interface Options extends PackageCore.Component.Options {
			items?: globalThis.Array<MenuItem.ItemDefinition>;

			circularSelection?: boolean;

			collapseOnAction?: boolean;

			orientation?: Menu.Orientation;

			role?: Menu.Role;

			size?: Menu.Size;

			stackIcon?: boolean;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			ITEM_ACTION: string;

			ITEM_SELECTED: string;

			SUBMENU_OPENED: string;

			SUBMENU_CLOSED: string;

		}

		export import Orientation = Self.MenuOptions.Orientation;

		export import Role = Self.MenuOptions.Role;

		export import Reason = Self.MenuOptions.Reason;

		export import Size = Self.MenuOptions.Size;

		export import VisualStyle = Self.MenuOptions.VisualStyle;

		enum ItemType {
			MENU_ITEM,
			ITEM,
			GROUP,
		}

	}

	export class MenuBar extends PackageCore.Component {
		/**
		 * Constructs MenuBar
		 */
		constructor(options?: MenuBar.Options);

	}

	export namespace MenuBar {
		interface Options extends PackageCore.Component.Options {
			items: globalThis.Array<MenuItem>;

			menu: Menu.Options;

			justification?: MenuBar.Justification;

		}

		enum Justification {
			START,
			END,
		}

	}

	/**
	 * Button with menu
	 */
	export class MenuButton extends Button {
		/**
		 * Constructs MenuButton
		 */
		constructor(options?: MenuButton.Options);

		/**
		 * True if the menu is opened
		 */
		menuOpened: boolean;

		/**
		 * Gets menu
		 */
		menu: (globalThis.Array<MenuItem.ItemDefinition> | Menu.Options);

		/**
		 * Gets hover menu opening behaviour
		 */
		openOnHover: boolean;

		/**
		 * Sets menu
		 */
		setMenu(menu: (globalThis.Array<MenuItem.ItemDefinition> | Menu)): void;

		/**
		 * Opens menu
		 */
		openMenu(args?: object): void;

		/**
		 * Closes opened menu
		 */
		closeMenu(args?: {reason: string}): void;

		/**
		 * Opens/Closes opened menu
		 */
		toggleMenu(args?: object): void;

		/**
		 * Create menu button with label
		 */
		static dropDown(options: MenuButton.Options): MenuButton;

		static Event: MenuButton.EventTypes;

	}

	export namespace MenuButton {
		interface Options extends Button.Options {
			menu: (globalThis.Array<MenuItem.ItemDefinition> | Menu.Options);

			openOnHover?: boolean;

		}

		interface EventTypes extends Button.EventTypes {
			MENU_OPENED: string;

			MENU_CLOSED: string;

		}

		export import Size = Self.Button.Size;

		export import IconPosition = Self.Button.IconPosition;

		export import Type = Self.Button.Type;

		export import Hierarchy = Self.Button.Hierarchy;

		export import VisualStyle = Self.Button.VisualStyle;

	}

	/**
	 * Menu group component.
	 */
	export class MenuGroup extends PackageCore.Component {
		/**
		 * Constructs MenuGroup
		 */
		constructor(options?: MenuGroup.Options);

		/**
		 * Alias for components property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Label text
		 */
		label: (string | PackageCore.Translation);

		/**
		 * Checks if the group has a text label
		 */
		private hasLabel: boolean;

		/**
		 * Group icon
		 */
		icon: (Image.Source | null);

		/**
		 * Checks if the group has an icon
		 */
		private hasIcon: boolean;

		/**
		 * Gets focusable menu group content
		 */
		focusableItems: globalThis.Array<PackageCore.Component>;

		/**
		 * Sets icon to group
		 */
		setIcon(icon: (Image.Source | null)): void;

		/**
		 * Sets label text
		 */
		setLabel(label: string): void;

	}

	export namespace MenuGroup {
		interface Options extends PackageCore.Component.Options {
			items?: globalThis.Array<PackageCore.Component>;

			label?: (string | PackageCore.Translation);

			icon?: Image.Source;

		}

	}

	export class MenuItem extends PackageCore.Component {
		/**
		 * Constructs MenuItem
		 */
		constructor(options?: MenuItem.Options);

		/**
		 * Item is selected
		 */
		selected: boolean;

		/**
		 * Item is highlighted
		 */
		highlighted: boolean;

		/**
		 * Submenu is opened
		 */
		opened: boolean;

		/**
		 * Opened submenu
		 */
		submenu: Menu;

		/**
		 * Item value
		 */
		value: (any | MenuItem);

		/**
		 * After action on item is executed this method SHOULD be called
		 */
		private _getActionHandler(): void;

		/**
		 * Create menuitem with callable action
		 */
		static ActionItem(definition: MenuItem.ActionItemDefinition): MenuItem;

		/**
		 * Create menuitem with link
		 */
		static LinkItem(definition: MenuItem.LinkItemDefinition): MenuItem;

	}

	export namespace MenuItem {
		interface Options extends PackageCore.Component.Options {
			content: PackageCore.Component;

			highlighted?: boolean;

			value?: any;

			submenuItems?: globalThis.Array<object>;

		}

		interface BaseItemDefinition {
			items?: globalThis.Array<MenuItem.ItemDefinition>;

			highlighted?: boolean;

			visible?: boolean;

			enabled?: boolean;

			classList?: globalThis.Array<string>;

		}

		interface SubmenuItemDefinition extends MenuItem.BaseItemDefinition {
			icon?: Image.Source;

			label?: (string | PackageCore.Translation);

		}

		interface ActionItemDefinition extends MenuItem.BaseItemDefinition {
			icon?: Image.Source;

			label?: (string | PackageCore.Translation);

			action: MenuItemButton.ActionCallback;

			shortcut?: globalThis.Array<globalThis.Array<string>>;

		}

		interface LinkItemDefinition extends MenuItem.BaseItemDefinition {
			icon?: Image.Source;

			label?: (string | PackageCore.Translation);

			url?: string;

			route?: (string | PackageCore.Route | Link.Route);

			target?: Link.Target;

			shortcut?: globalThis.Array<globalThis.Array<string>>;

		}

		type ItemDefinition = (MenuItem.SubmenuItemDefinition | MenuItem.ActionItemDefinition | MenuItem.LinkItemDefinition);

	}

	export class MenuItemButton extends PackageCore.Component {
		/**
		 * Constructs MenuItemButton
		 */
		constructor(options?: MenuItemButton.Options);

		/**
		 * Handle click
		 */
		protected _doAction(options: object): void;

		/**
		 * Invokes button click
		 */
		click(): void;

	}

	export namespace MenuItemButton {
		interface Options extends PackageCore.Component.Options {
			content: PackageCore.Component;

			action?: MenuItemButton.ActionCallback;

		}

		type ActionCallback = (args: {reason: string}) => (boolean | void);

		enum Reason {
			KEY_UP,
			CLICK,
			TAP,
		}

	}

	/**
	 * Content of menuitem link/button
	 */
	export class MenuItemContent extends PackageCore.Component {
		/**
		 * Constructs MenuItemContent
		 */
		constructor(options?: MenuItemContent.Options);

		/**
		 * Label text
		 */
		label: (string | PackageCore.Translation);

		/**
		 * Checks if the group has a text text
		 */
		hasLabel: boolean;

		/**
		 * Item icon
		 */
		icon: (Image.Source | null);

		/**
		 * Checks if the item has an icon
		 */
		hasIcon: boolean;

		/**
		 * Shortcut text
		 */
		shortcut: string;

		/**
		 * Checks if the item has a shortcut
		 */
		hasShortcut: boolean;

		/**
		 * Sets label text
		 */
		setLabel(label: string): void;

		/**
		 * Sets icon
		 */
		setIcon(icon: object): void;

		/**
		 * Sets shortcut text
		 */
		setShortcut(shortcut: string): void;

		static getRefreshedStyles(theme: PackageCore.RefreshedTheme): void;

	}

	export namespace MenuItemContent {
		interface Options extends PackageCore.Component.Options {
			label?: (string | PackageCore.Translation);

			icon?: Image.Source;

			shortcut?: string;

		}

	}

	namespace MenuOptions {
		enum Orientation {
			VERTICAL,
			HORIZONTAL,
		}

		enum NavigationMode {
			CIRCULAR,
			START_END,
		}

		enum Reason {
			SUBMENU_ITEM_SELECTED,
			KEY_PRESS,
			MOUSE_ENTER,
			MOUSE_LEAVE,
			MOUSE_CLICK,
			TOUCH_TAP,
			CALL,
			CLEAR,
			FOCUS,
			ACTION,
		}

		enum Role {
			MENU,
			MENUBAR,
		}

		enum Size {
			DEFAULT,
			LARGE,
		}

		enum VisualStyle {
			DEFAULT,
			THEMED,
		}

	}

	/**
	 * Metric
	 */
	export class Metric extends PackageCore.Component {
		/**
		 * Metric title
		 */
		title: (string | number | PackageCore.Translation);

		/**
		 * Metric metric
		 */
		metric: (string | number | PackageCore.Translation);

		/**
		 * Metric metadata
		 */
		metadata: (string | number | PackageCore.Translation);

		/**
		 * Metric description
		 */
		description: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Alias for description property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Metric toolbar
		 */
		toolbar: (PackageCore.Component | PackageCore.JSX.Element | globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>);

	}

	export namespace Metric {
		interface Options extends PackageCore.Component.Options {
			title: (string | number | PackageCore.Translation);

			metric: (string | number | PackageCore.Translation);

			metadata?: (string | number | PackageCore.Translation);

			description?: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

			toolbar?: (PackageCore.Component | PackageCore.JSX.Element | globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>);

		}

	}

	/**
	 * Modal dialog
	 */
	export class Modal extends Window {
		/**
		 * Constructs Modal
		 */
		constructor(options: Modal.Options);

		/**
		 * Check if the window has a title bar
		 */
		hasTitleBar: boolean;

		/**
		 * Window title bar
		 */
		titleBar: object;

		/**
		 * Show/hide title bar
		 */
		withTitleBar: boolean;

		/**
		 * Modal title
		 */
		title: (string | number | PackageCore.Translation);

		/**
		 * Title bar icon
		 */
		titleIcon: Image.Source;

		/**
		 * Show/hide close button in the title bar
		 */
		closeButton: boolean;

		/**
		 * Show/hide maximize button in the title bar
		 */
		maximizeButton: boolean;

		draggable: boolean;

		/**
		 * Modal size
		 */
		size: Modal.Size;

		static createAlert(args: Modal.AlertOptions): Modal;

		static createConfirm(args: Modal.ConfirmOptions): Modal;

		/**
		 * This is a special value to preserve backwards compatibility with legacy apps that create Modals without owner. Ideally these usages should be fixed. Do not use this in new code.
		 * @deprecated 
		 */
		static DeprecatedNoOwner: object;

	}

	export namespace Modal {
		interface Options extends Window.Options {
			withTitleBar?: boolean;

			title?: (string | number | PackageCore.Translation);

			titleIcon?: Image.Source;

			maximizeButton?: boolean;

			closeButton?: boolean;

			draggable?: boolean;

			size?: Modal.Size;

		}

		interface AlertOptions extends Modal.Options {
			onOk?: (args: Button.ActionArgs) => void;

		}

		interface ConfirmOptions extends Modal.Options {
			onOk?: (args: Button.ActionArgs) => void;

			onCancel?: (args: Button.ActionArgs) => void;

		}

		export import CloseStrategy = Self.WindowCloseStrategy;

		enum Size {
			DEFAULT,
			SMALL,
			MEDIUM,
			LARGE,
		}

		export import ButtonsJustification = Self.Window.ButtonsJustification;

		export import CloseReason = Self.Window.CloseReason;

		export import State = Self.Window.State;

		export import Event = Self.Window.Event;

		export import GapSize = Self.Window.GapSize;

	}

	/**
	 * MultiselectDropdown is a component, that allows user to select multiple items, that will be displayed as tags rendered next to the components TextBox
	 */
	export class MultiselectDropdown extends PackageCore.Component implements PackageCore.InputComponent {
		/**
		 * Constructs MultiselectDropdown
		 */
		constructor(options?: MultiselectDropdown.Options);

		/**
		 * Selected items
		 */
		selectedItems: globalThis.Array<any>;

		/**
		 * Picker data source
		 */
		dataSource: PackageCore.DataSource;

		/**
		 * Active tag index
		 */
		activeTagIndex: boolean;

		/**
		 * States id the picker is opened
		 */
		dropDownOpened: boolean;

		/**
		 * TextBox component
		 */
		textBox: (TextBox | null);

		/**
		 * Picker component
		 */
		picker: (PackageCore.Component | null);

		/**
		 * States if Picker opens on TextBox click
		 */
		openDropDownOnClick: boolean;

		/**
		 * States if Picker opens on component focus
		 */
		openDropDownOnFocus: boolean;

		/**
		 * Globally unique input id
		 */
		inputId: string;

		/**
		 * Returns root attributes of the input element
		 */
		inputAttributes: PackageCore.HtmlAttributeList;

		/**
		 * States if the input is empty
		 */
		empty: boolean;

		/**
		 * Sates if the input is mandatory
		 */
		mandatory: boolean;

		/**
		 * Size of the component
		 */
		size: MultiselectDropdown.Size;

		/**
		 * Selected items changed callback
		 */
		onSelectionChanged: (MultiselectDropdown.SelectionChangedCallback | null);

		/**
		 * Sets selected items
		 */
		setSelectedItems(items: (globalThis.Array<any> | any), options?: {reason?: string}): void;

		/**
		 * Sets active tag
		 */
		setActiveTagIndex(index: (number | null)): void;

		/**
		 * Adds items into selection
		 */
		add(items: (globalThis.Array<any> | any), options?: {reason?: string}): void;

		/**
		 * Removes items from selection
		 */
		remove(items: (globalThis.Array<any> | any), options?: {reason?: string}): void;

		/**
		 * Opens dropdown
		 */
		openDropDown(args?: MultiselectDropdown.ReasonObject): void;

		/**
		 * Closes dropdown
		 */
		closeDropDown(args?: MultiselectDropdown.ReasonObject): void;

		/**
		 * Toggles dropdown
		 */
		toggleDropDown(args?: MultiselectDropdown.ReasonObject): void;

		/**
		 * Accept the current picker selection
		 */
		acceptChanges(): void;

		/**
		 * Sets picker selection
		 */
		private setPickerSelection(items: (globalThis.Array<any> | null)): void;

		/**
		 * Creates tags box
		 */
		private createTagsBox(): PackageCore.JSX.Element;

		/**
		 * Handles removal of a tag from tags box
		 */
		private handleTagsBoxTagRemoved(args: {item: any; reason: (string | symbol)}): void;

		/**
		 * Handles change of an active tag in a tags box
		 */
		private handleTagsBoxSelectedTagIndexChanged(args: {index: (number | null); item: any; reason: (string | symbol)}): void;

		/**
		 * Creates Tag
		 */
		private createTag(value: object): object;

		/**
		 * Creates TextBox
		 */
		private createTextBox(): PackageCore.JSX.Element;

		/**
		 * Handles TextBox activation
		 */
		private handleTextBoxActivated(): void;

		/**
		 * Handle TextBox text change
		 */
		private handleTextBoxTextChanged(args: object): void;

		/**
		 * Creates Picker
		 */
		private createPicker(): Picker;

		/**
		 * Setups Picker
		 */
		private setupPicker(options: object): Picker;

		/**
		 * Creates the default Picker
		 */
		private createDefaultPicker(options: object): ListBoxPicker;

		/**
		 * Handles Picker opening routine
		 */
		private handlePickerOpening(): void;

		/**
		 * Handles Picker open routine
		 */
		private handlePickerOpened(): void;

		/**
		 * Handles Picker closing routine
		 */
		private handlePickerClosing(): void;

		/**
		 * Handles Picker closed routine
		 */
		private handlePickerClosed(): void;

		/**
		 * Handles picker value that defines added and removed values
		 */
		private handlePickerSelectionChanged(args: object): void;

		/**
		 * Creates dropdown chevron button
		 */
		private createChevron(): PackageCore.JSX.Element;

		/**
		 * Change current selection
		 */
		private changeSelection(selection: globalThis.Array<any>, args: {reason: (string | symbol)}): void;

		/**
		 * Adds given items that are not already selected into selection
		 */
		private selectItems(selection: globalThis.Array<any>, addedItems: globalThis.Array<any>): globalThis.Array<any>;

		/**
		 * Removes given items from selection
		 */
		private unselectItems(selection: globalThis.Array<any>, removedItems: globalThis.Array<any>): globalThis.Array<any>;

		/**
		 * Checks if array contains given item using given comparator
		 */
		private containsItem(array: globalThis.Array<any>, item: any, comparator: (left: any, right: any) => boolean): boolean;

		/**
		 * Compares if two selections are the same
		 */
		private compareSelections(left: globalThis.Array<any>, right: globalThis.Array<any>): boolean;

		static Event: MultiselectDropdown.EventTypes;

	}

	export namespace MultiselectDropdown {
		interface Options extends PackageCore.Component.Options {
			activeTagIndex?: (number | null);

			allowEmpty?: boolean;

			ariaLabel?: string;

			dataSource?: PackageCore.DataSource;

			displayMember?: (string | DataSourceComponent.DisplayMemberCallback);

			noDataMessage?: string;

			openDropDownOnClick?: boolean;

			openDropDownOnFocus?: boolean;

			placeholder?: string;

			selectedItems?: globalThis.Array<any>;

			showSelectionBar?: boolean;

			textBoxOptions?: TextBox.Options;

			valueMember?: (string | null);

			mandatory?: boolean;

			tagDisplayMember?: (string | DataSourceComponent.DisplayMemberCallback);

			tagMaxWidth?: number;

			size?: MultiselectDropdown.Size;

			onSelectionChanged?: MultiselectDropdown.SelectionChangedCallback;

			comparator?: MultiselectDropdown.ComparatorCallback;

		}

		type SelectionChangedCallback = (args: MultiselectDropdown.SelectionChangedArgs, sender: MultiselectDropdown) => void;

		type ComparatorCallback = (left: any, right: any) => boolean;

		interface SelectionChangedArgs {
			values: globalThis.Array<any>;

			previousValues: globalThis.Array<any>;

			reason: MultiselectDropdown.Reason;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			SELECTED_ITEMS_CHANGED: string;

			ACTIVE_TAG_INDEX_CHANGED: string;

			PICKER_OPENING: string;

			PICKER_OPENED: string;

			PICKER_CLOSING: string;

			PICKER_CLOSED: string;

		}

		interface SelectiveDataObject {
			addItems?: (any | globalThis.Array<any>);

			removeItems?: (any | globalThis.Array<any>);

			reason?: string;

		}

		interface ReasonObject {
			reason?: string;

		}

		enum VisualStyle {
			STANDALONE,
			EMBEDDED,
		}

		enum Reason {
			CALL,
			PICKER_CLOSED,
			AUTO_SUGGEST_DATA_CHANGED,
			COMPONENT_FOCUSED,
			API_INVOKED,
			TAG_REMOVED,
		}

		enum I18N {
			NO_DATA_AVAILABLE,
		}

		export import Size = Self.InputSize;

		export import Tag = Self.MultiselectDropdownTag;

		export import TagsBox = Self.MultiselectDropdownTagsBox;

	}

	/**
	 * Multiselect dropdown cell
	 */
	export class MultiselectDropdownCell extends GridCell {
		/**
		 * Constructs MultiselectDropdownCell
		 */
		constructor();

		/**
		 * Cell data source
		 */
		dataSource: PackageCore.DataSource;

		/**
		 * Display member
		 */
		displayMember: (string | DataSourceComponent.DisplayMemberCallback);

		/**
		 * Editor reference
		 */
		multiselectDropdown: (MultiselectDropdown | null);

		/**
		 * MultiSelectDropdown options
		 */
		widgetOptions: (MultiselectDropdown.Options | GridCell.WidgetOptionsCallback<MultiselectDropdown.Options> | null);

		/**
		 * Set cell data source
		 */
		setDataSource(dataSource: (PackageCore.DataSource | null)): void;

	}

	export namespace MultiselectDropdownCell {
	}

	/**
	 * Multiselect dropdown column
	 */
	export class MultiselectDropdownColumn extends GridColumn {
		/**
		 * Constructs MultiselectDropdownColumn
		 */
		constructor(options: MultiselectDropdownColumn.Options);

		/**
		 * Data source
		 */
		dataSource: (PackageCore.DataSource | null);

		/**
		 * Display member
		 */
		displayMember: (string | DataSourceComponent.DisplayMemberCallback | null);

		/**
		 * MultiSelectDropdown options
		 */
		widgetOptions: (MultiselectDropdown.Options | GridColumn.WidgetOptionsCallback<MultiselectDropdown.Options> | null);

	}

	export namespace MultiselectDropdownColumn {
		interface Options extends GridColumn.Options {
			dataSource?: PackageCore.DataSource;

			displayMember?: (string | DataSourceComponent.DisplayMemberCallback);

			widgetOptions?: (MultiselectDropdownColumn.Options | GridColumn.WidgetOptionsCallback<MultiselectDropdownColumn.Options>);

			dataSourceConfigurator?: MultiselectDropdownColumn.DataSourceConfiguratorCallback;

		}

		type DataSourceConfiguratorCallback = (row: GridDataRow) => (PackageCore.DataSource | null);

		export import Cell = Self.MultiselectDropdownCell;

	}

	/**
	 * Tag is a simple component for displaying primitive values. It is by default removable, which means it also renders a small remove icon, that fires custom onRender function.
	 */
	export class MultiselectDropdownTag extends PackageCore.Component {
		/**
		 * Constructs Tag
		 */
		constructor(options?: MultiselectDropdownTag.Options);

		/**
		 * Label
		 */
		label: string;

		/**
		 * Selected state
		 */
		selected: boolean;

		/**
		 * States if the tag is removable (has remove icon)
		 */
		removable: boolean;

		/**
		 * Sets selected value
		 */
		setSelected(value: boolean, options?: object): void;

		/**
		 * Selects the tag
		 */
		select(reason?: string): void;

		/**
		 * Unselects the tag
		 */
		unselect(reason?: string): void;

		/**
		 * Toggles the selected state
		 */
		toggle(reason?: string): void;

		/**
		 * Sets tag label
		 */
		setLabel(label: string): void;

		/**
		 * Toggles tag removable state
		 */
		toggleRemovable(): void;

		/**
		 * Sets if tag is removable
		 */
		setRemovable(value: boolean): void;

		/**
		 * Renders tag label
		 */
		private createLabel(): Text;

		/**
		 * Creates remove button
		 */
		private createRemoveButton(): Image;

		static Event: MultiselectDropdownTag.EventTypes;

	}

	export namespace MultiselectDropdownTag {
		interface Options extends PackageCore.Component.Options {
			clickable?: boolean;

			maxWidth?: number;

			label: (string | number | PackageCore.Translation);

			removable?: boolean;

			removeIconLabel?: (string | number | PackageCore.Translation | null);

			removeIconSize?: number;

			selected?: boolean;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			TOGGLED: string;

			REMOVED: string;

		}

		enum VisualStyle {
			STANDALONE,
			EMBEDDED,
		}

		enum ToggledReason {
			CALL,
			CLICK,
		}

		enum I18N {
			REMOVE_ICON_LABEL,
		}

	}

	/**
	 * MultiselectDropdownTagsBox is a part of {@link MultiselectDropdown} container for {@link MultiselectDropdownTag}s, where only one {@link MultiselectDropdownTag} can be selected.
	 */
	export class MultiselectDropdownTagsBox extends PackageCore.Component {
		/**
		 * Constructs MultiselectDropdownTagsBox
		 */
		constructor(options?: MultiselectDropdownTagsBox.Options);

		/**
		 * Tags
		 */
		tags: globalThis.Array<any>;

		/**
		 * Selected tag index
		 */
		selectedTagIndex: (number | null);

		/**
		 * Sets tags
		 */
		setTags(tags: globalThis.Array<any>): void;

		/**
		 * Sets selected tag index
		 */
		setSelectedTagIndex(index: (number | null), options?: object): void;

		/**
		 * Creates tags box
		 */
		private createTagsBox(): StackPanel;

		/**
		 * Creates tag
		 */
		private createTag(item: object, index: number): MultiselectDropdownTag;

		/**
		 * Handles removal of a tag
		 */
		private removeTag(index: number): void;

		/**
		 * Handles state toggle of a tag
		 */
		private handleTagToggled(index: number, args: object): void;

		/**
		 * Scrolls container to the selected tag
		 */
		private scrollToSelectedTag(): void;

		/**
		 * Notifies about removal of a tag
		 */
		private notifyTagRemoved(item: object, reason: string): void;

		/**
		 * Notifies about change of selected tag
		 */
		private notifySelectedTagIndexChanged(reason: string): void;

		static TAG_REMOVED_DEFAULT_REASON: string;

		static Event: MultiselectDropdownTagsBox.EventTypes;

	}

	export namespace MultiselectDropdownTagsBox {
		interface Options extends PackageCore.Component.Options {
			tags?: globalThis.Array<any>;

			selectedTagIndex?: (number | null);

			tagMaxWidth?: number;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			TAG_REMOVED: string;

			SELECTED_TAG_INDEX_CHANGED: string;

		}

		enum SelectedTagIndexChangedReason {
			DEFAULT,
			TAG_CLICKED,
		}

	}

	export class NavigationDrawer extends PackageCore.Component {
		/**
		 * Constructs NavigationDrawer
		 */
		constructor(options?: NavigationDrawer.Options);

		/**
		 * Definition of individual items
		 */
		items: globalThis.Array<NavigationDrawerItem>;

		/**
		 * Children passed down in VDom/JSX syntax
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Currently selected value
		 */
		selectedValue: (any | null);

		/**
		 * Currently selected item
		 */
		selectedItem: (NavigationDrawerItem | null);

		/**
		 * True if the drawer is collapsed
		 */
		collapsed: boolean;

		/**
		 * True if the drawer is collapsible
		 */
		collapsible: boolean;

		/**
		 * Component displayed in the header of NavigationDrawer
		 */
		header: (PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Alignment of the component displayed in the header of NavigationDrawer
		 */
		headerAlignment: NavigationDrawer.HeaderAlignment;

		/**
		 * Sets currently selected item
		 */
		setSelectedItem(selectedItem: (NavigationDrawerItem | null), options: {reason?: (string | symbol)}): void;

		/**
		 * Sets selected value
		 */
		setSelectedValue(value: any, options: {reason?: (string | symbol)}): void;

		/**
		 * Sets items
		 */
		setItems(items: globalThis.Array<NavigationDrawer.ItemOptions>): void;

		/**
		 * Visits all items and runs a callback function on each of them
		 */
		visitItems(callback: (item: NavigationDrawerItem) => void): void;

		/**
		 * Sets item expanded & highlighted properties
		 */
		private setItemIndexes(): void;

		/**
		 * Gets tooltip text for collapse button
		 */
		private getCollapseButtonTooltipText(): PackageCore.Translation;

		/**
		 * Creates collapse controller
		 */
		private renderCollapseButton(): PackageCore.JSX.Element;

		/**
		 * Creates NavigationDrawerItems from item definition
		 */
		private renderChildren(): globalThis.Array<PackageCore.JSX.Element>;

		/**
		 * Creates NavigationDrawerItem from item definition
		 */
		private renderChild(child: PackageCore.JSX.Element, level: number, isVisible: boolean): PackageCore.JSX.Element;

		/**
		 * Maps visible items to a Map structure by their value
		 */
		private mapVisibleItems(): void;

		/**
		 * Changes focus index to the currently selected value
		 */
		private setFocusIndex(): void;

		static Event: NavigationDrawer.EventTypes;

	}

	export namespace NavigationDrawer {
		interface Options extends PackageCore.Component.Options {
			collapsed?: boolean;

			collapsible?: boolean;

			items?: globalThis.Array<NavigationDrawer.ItemOptions>;

			selectedValue?: any;

		}

		interface ItemOptions {
			value: any;

			selected?: boolean;

			action?: () => void;

			url?: string;

			route?: (string | PackageCore.Route | Link.Route);

			items?: globalThis.Array<NavigationDrawer.ItemOptions>;

			badge?: (string | number | PackageCore.Translation);

			badgeStatus?: PackageCore.Component.Status;

			enabled?: boolean;

			icon?: Image.Source;

			separatorTop?: boolean;

			separatorBottom?: boolean;

			header?: (PackageCore.Component | PackageCore.JSX.Element);

			headerAlignment?: NavigationDrawer.HeaderAlignment;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			SELECTED_VALUE_CHANGED: symbol;

			ITEM_SELECTED: string;

			COLLAPSED: string;

		}

		enum VisualStyle {
			DEFAULT,
			LIGHT,
			DARK,
		}

		enum Reason {
			CALL,
			UPDATE,
		}

		enum HeaderAlignment {
			CENTER,
			START,
			END,
			STRETCH,
		}

		export import Item = Self.NavigationDrawerItem;

	}

	/**
	 * Item of NavigationDrawer.
	 */
	export class NavigationDrawerItem extends PackageCore.Component {
		/**
		 * Constructs NavigationDrawerItem
		 */
		constructor(options?: NavigationDrawerItem.Options);

		/**
		 * Child items
		 */
		items: globalThis.Array<NavigationDrawerItem>;

		/**
		 * Alias for items property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Unique item value
		 */
		value: any;

		/**
		 * Visible item label
		 */
		label: (string | number | PackageCore.Translation);

		/**
		 * Item url
		 */
		url: (string | null);

		/**
		 * Item url
		 * @deprecated Use url instead of link 
		 */
		link: (string | null);

		/**
		 * Item route
		 */
		route: (string | PackageCore.Route | Link.Route | null);

		/**
		 * Item action
		 */
		action: () => void;

		/**
		 * Item icon
		 */
		icon: Image.Source;

		/**
		 * Item badge content
		 */
		badge: (string | number | PackageCore.Translation);

		/**
		 * Item badge status
		 */
		badgeStatus: PackageCore.Component.Status;

		/**
		 * Selected state
		 */
		selected: boolean;

		/**
		 * Highlighted state
		 */
		highlighted: boolean;

		/**
		 * Item expanded state
		 */
		expanded: boolean;

		/**
		 * Item options
		 */
		dataItem: (NavigationDrawer.ItemOptions);

		/**
		 * Parent drawer item
		 */
		parent: (NavigationDrawerItem | null);

		/**
		 * Optional content displayed next to the label in expanded state
		 */
		content: (PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Sets selected state
		 */
		setSelected(selected: boolean, reason: symbol): void;

		/**
		 * Sets expanded state (if children are visible)
		 */
		private setExpanded(expanded: boolean, reason: symbol): void;

		/**
		 * Update multiple properties
		 */
		update(properties: object): void;

		/**
		 * Click the item
		 */
		click(): void;

		/**
		 * Returns true if the item is a top-level item
		 */
		isTopLevel(): boolean;

		/**
		 * Get top-level parent item
		 */
		getTopLevelParent(): NavigationDrawerItem;

		/**
		 * Scroll to this item
		 */
		scrollIntoView(alignment?: NavigationDrawerItem.ScrollAlignment): void;

		static Event: NavigationDrawerItem.EventTypes;

	}

	export namespace NavigationDrawerItem {
		interface Options extends PackageCore.Component.Options {
			value?: any;

			action?: () => void;

			badge?: (string | number | PackageCore.Translation);

			badgeStatus?: PackageCore.Component.Status;

			icon?: Image.Source;

			label?: (string | number | PackageCore.Translation);

			url?: string;

			route?: (string | PackageCore.Route | Link.Route);

			selected?: boolean;

			visible?: boolean;

			separatorTop?: boolean;

			separatorBottom?: boolean;

			content?: (PackageCore.Component | PackageCore.JSX.Element);

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			CLICKED: symbol;

			SELECTED: symbol;

			EXPANDED: symbol;

			HIGHLIGHTED: symbol;

		}

		enum ScrollAlignment {
			START,
			END,
			NEAREST,
		}

	}

	/**
	 * Netsuite header
	 */
	export class NetsuiteSystemHeader extends PackageCore.Component {
		constructor(options?: NetsuiteSystemHeader.Options);

	}

	export namespace NetsuiteSystemHeader {
		interface Options extends PackageCore.Component.Options {
			feedbackButtonOptions?: Button.Options;

			helpButtonOptions?: Button.Options;

			logos?: globalThis.Array<PackageCore.JSX.Element>;

			navigationMenuOptions?: HeaderNavigationOptions;

			quickMenuOptions?: HeaderMenuOptions;

			roleMenuOptions?: HeaderMenuOptions;

			searchOptions?: SystemSearch.Options;

		}

		interface HeaderMenuLabel {
			heading?: string;

			subHeading?: string;

		}

	}

	export interface NetsuiteSystemHeaderSearchOptions {
		options?: SystemSearch.Options;

		systemSearch?: SystemSearch;

		placeholder?: string;

	}

	export namespace OneLineResponsiveStrategy {
		/**
		 * Creates a toolbar panel
		 */
		function createToolbarPanel(itemSelection: ListPresenterConstant.ItemSelection, startPanel: StackPanel, actionPanel: StackPanel, viewingTools: StackPanel, toolbarPanelOptions: object): {toolbar: StackPanel; endPanel: StackPanel};

		/**
		 * Applies one-line responsive strategy
		 */
		function apply(options: {itemSelection: ListPresenterConstant.ItemSelection; searchBox: TextBox; searchBoxButton: Button; viewingTools: StackPanel; selectionPanel: StackPanel; sidePanel: StackPanel; startPanel: StackPanel; endPanel: StackPanel; viewWidth: number; filterPanel: PackageCore.Presenter; actionPanel: PackageCore.Presenter; updateSearchBoxVisibility: (visible: boolean) => void; hideAllFilters: () => void; filtersInModal: boolean; filtersPosition: ListView.FiltersPosition}): void;

		/**
		 * Resets the toolbar settings to a default state
		 */
		function reset(itemSelection: ListPresenterConstant.ItemSelection, endPanel: StackPanel, viewingTools: StackPanel, selectionPanel: StackPanel): void;

	}

	/**
	 * Page root provider component
	 */
	export function PageRoot(props: object): PackageCore.JSX.Element;

	export namespace PagedDataListViewFactory {
		/**
		 * Returns a datasource containing items for the requested page and optionally totalItemsCount (if this needs to be updated in the ListPresenter).
		 */
		type DataProvider = (state: any) => PagedDataListViewFactory.DataProviderResult;

		interface DataProviderResult {
			dataSource: PackageCore.DataSource;

			totalItemsCount?: number;

		}

		interface Options extends ListView.Options {
			parentContext?: PackageCore.Context;

			dataProvider: PagedDataListViewFactory.DataProvider;

		}

		/**
		 * Create ListView instance for paged data provider.
		 */
		function createView(ListView: ListView, options: PagedDataListViewFactory.Options): ListView;

	}

	/**
	 * Pagination component allows for selecting one of multiple available pages and defining how many rows a page has
	 */
	export class Pagination extends PackageCore.Component {
		/**
		 * Constructs Pagination
		 */
		constructor(options?: Pagination.Options);

		/**
		 * Selected page index (starts from 0)
		 */
		selectedPageIndex: number;

		/**
		 * Selected page
		 */
		selectedPage: object;

		/**
		 * Pages
		 */
		pages: Pagination.Pages;

		/**
		 * Page items
		 */
		pageItems: globalThis.Array<object>;

		/**
		 * Rows object
		 */
		rows: (object | null);

		/**
		 * Number of rows per page
		 */
		rowsPerPage: (number | null);

		/**
		 * Total number of rows
		 */
		rowsCount: (number | null);

		/**
		 * Rows per page selector
		 */
		rowsPerPageSelector: (Pagination.RowsPerPageSelectorObject | null);

		/**
		 * Navigation
		 */
		navigation: (Pagination.Navigation | null);

		/**
		 * Rows counter
		 */
		rowsCounter: (Pagination.RowsCounter | null);

		/**
		 * Load more button
		 */
		loadMore: (number | null);

		/**
		 * Page changed callback
		 */
		onPageSelected: (Pagination.PageSelectedCallback | null);

		/**
		 * Sets selected page index
		 */
		setSelectedPageIndex(pageIndex: number, options?: Pagination.SetterOptions): void;

		/**
		 * Sets number of rows per page
		 */
		setRowsPerPage(rowsPerPage: number, options?: Pagination.SetterOptions): void;

		/**
		 * Sets number of rows
		 */
		setRowsCount(rowsCount: number, options: Pagination.SetterOptions): void;

		/**
		 * Sets pages
		 */
		setPages(pages: Pagination.Pages, options: Pagination.SetterOptions): void;

		/**
		 * Handles change of pagination pages property
		 */
		private handlePaginationChanged(reason?: symbol, oldProperties?: object): void;

		/**
		 * Parses pages settings
		 */
		private parsePages(pages: Pagination.Pages): void;

		/**
		 * Parses rows settings
		 */
		private parseRowsSettings(pages: Pagination.Pages): (object | null);

		/**
		 * Parses page settings
		 */
		private parsePagesSettings(pages: Pagination.Pages): globalThis.Array<object>;

		/**
		 * Parses pages numeric value
		 */
		private parsePagesNumber(pageNumber: number): globalThis.Array<object>;

		/**
		 * Parses pages array value
		 */
		private parsePagesArray(pageArray: (globalThis.Array<string> | globalThis.Array<object>)): globalThis.Array<object>;

		/**
		 * Parses pages object value
		 */
		private parsePagesObject(pageObject: object): globalThis.Array<object>;

		/**
		 * Creates pagination layout
		 */
		private renderLayout(): globalThis.Array<PackageCore.Component>;

		/**
		 * Creates rows per page selector
		 */
		private renderRowsPerPageSelector(): (StackPanel | null);

		/**
		 * Creates rows per page selector as TextBox
		 */
		private renderRowsPerPageSelectorTextBox(): TextBox;

		/**
		 * Creates rows per page selector as Dropdown
		 */
		private renderRowsPerPageSelectorDropdown(): Dropdown;

		/**
		 * Creates data for rows per page selector Dropdown
		 */
		private renderRowsPerPageSelectorDropdownData(): PackageCore.ArrayDataSource;

		/**
		 * Creates navigation
		 */
		private renderNavigation(): (StackPanel | null);

		/**
		 * Creates navigation segmentation
		 */
		private renderNavigationSegmentation(): (StackPanel | null);

		/**
		 * Creates navigation page indicator
		 */
		private renderNavigationPageIndicator(): (Text | TextBox | Dropdown | null);

		/**
		 * Creates editable navigation page indicator
		 */
		private renderNavigationPageIndicatorEditable(): (TextBox | Dropdown);

		/**
		 * Creates navigation page indicator as Dropdown
		 */
		private renderNavigationPageIndicatorDropdown(): Dropdown;

		/**
		 * Creates navigation page indicator as TextBox
		 */
		private renderNavigationPageIndicatorTextBox(): TextBox;

		/**
		 * Creates static navigation page indicator
		 */
		private renderNavigationPageIndicatorStatic(): Text;

		/**
		 * Handles change of navigation page indicator as TextBox
		 */
		private handleNavigationPageIndicatorTextBoxEdited(args: object): void;

		/**
		 * Creates navigation buttons
		 */
		private renderNavigationButtons(): (StackPanel | null);

		/**
		 * Creates navigation total button
		 */
		private renderNavigationTotal(): (Text | Button);

		/**
		 * Creates navigation total button label
		 */
		private renderNavigationTotalLabel(): string;

		/**
		 * Creates navigation total button as Button
		 */
		private renderNavigationTotalButton(label: string, firstPage: boolean, lastPage: boolean): Button;

		/**
		 * Creates navigation total button as Text
		 */
		private renderNavigationTotalText(label: string): Text;

		/**
		 * Creates navigation buttons list
		 */
		private renderNavigationButtonsList(): (List | null);

		/**
		 * Creates navigation previous page button
		 */
		private renderNavigationButtonPrevious(): Button;

		/**
		 * Creates navigation next page button
		 */
		private renderNavigationButtonNext(): Button;

		/**
		 * Creates navigation page list
		 */
		private renderNavigationPageList(): globalThis.Array<PackageCore.JSX.Element>;

		/**
		 * Handles click on one of the navigation page list buttons
		 */
		private handleNavigationPageListClick(pageIndex: number): void;

		/**
		 * Creates rows counter
		 */
		private renderRowsCounter(): (Text | null);

		/**
		 * Creates rows counter - total
		 */
		private renderRowsCounterTotal(number?: number): Text;

		/**
		 * Creates rows counter - total text
		 */
		private renderRowsCounterTotalText(number?: any): string;

		/**
		 * Creates rows counter - complete
		 */
		private renderRowsCounterComplete(): Text;

		/**
		 * Creates rows counter - complete text
		 */
		private renderRowsCounterCompleteText(): string;

		/**
		 * Creates rows counter - unknown
		 */
		private renderRowsCounterUnknown(): Text;

		/**
		 * Creates rows counter - unknown text
		 */
		private renderRowsCounterUnknownText(): string;

		/**
		 * Creates load more button
		 */
		private renderLoadMoreButton(): (Button | null);

		/**
		 * Handles click on load more button
		 */
		private handleLoadMoreButtonClick(): void;

		/**
		 * Notifies about change of selected page index
		 */
		private notifySelectedPageIndexChanged(previousIndex: number, reason: string): void;

		/**
		 * Parses navigation settings
		 */
		private parseNavigationSettings(navigation: Pagination.Navigation): (Pagination.Navigation | null);

		/**
		 * Parse legacy navigation settings
		 */
		private parseLegacyNavigationSettings(navigation: object): void;

		/**
		 * Factory method - default options
		 */
		static default(pages: Pagination.Pages, options?: Pagination.Options): Pagination;

		/**
		 * Factory JSX method - default options
		 */
		static Default(props: Pagination.Options): Pagination;

		/**
		 * Factory method - default options with total number of rows
		 */
		static withTotal(pages: Pagination.Pages, options?: Pagination.Options): Pagination;

		/**
		 * Factory JSX method - default options with total number of rows
		 */
		static WithTotal(props: Pagination.Options): Pagination;

		/**
		 * Factory method - default options with editable page indicator
		 */
		static editable(pages: Pagination.Pages, options?: Pagination.Options): Pagination;

		/**
		 * Factory JSX method - default options with editable page indicator
		 */
		static Editable(props: Pagination.Options): Pagination;

		/**
		 * Factory method - only segmentation
		 */
		static segmentation(pages: Pagination.Pages, options?: Pagination.Options): Pagination;

		/**
		 * Factory JSX method - only segmentation
		 */
		static Segmentation(props: Pagination.Options): Pagination;

		/**
		 * Factory method - page indicator segmentation
		 */
		static pageIndicatorSegmentation(pages: Pagination.Pages, options?: Pagination.Options): Pagination;

		/**
		 * Factory JSX method - page indicator segmentation
		 */
		static PageIndicatorSegmentation(props: Pagination.Options): Pagination;

		/**
		 * Factory method - only page list with previous/next page buttons
		 */
		static pageList(pages: Pagination.Pages, options?: Pagination.Options): Pagination;

		/**
		 * Factory method - only page list with previous/next page buttons
		 */
		static PageList(props: Pagination.Options): Pagination;

		static Event: Pagination.EventTypes;

	}

	export namespace Pagination {
		type Pages = (number | Pagination.RowsObject | globalThis.Array<string> | globalThis.Array<object>);

		interface RowsObject {
			rowsCount: number;

			rowsPerPage: number;

		}

		interface RowsPerPageSelectorObject {
			all?: boolean;

			data?: globalThis.Array<number>;

			type: Pagination.RowsPerPageSelector;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			SELECTED_PAGE_CHANGED: symbol;

			PAGINATION_CHANGED: symbol;

		}

		interface Navigation {
			buttons?: (Pagination.NavigationButtons | boolean);

			pageIndicator?: (Pagination.NavigationPageIndicator | boolean);

			pageList?: boolean;

			segmentation?: boolean;

			type: Pagination.NavigationType;

			segmentationWidth: (number | string);

		}

		interface NavigationPageIndicator {
			editable: boolean;

		}

		interface NavigationButtons {
			firstPage: boolean;

			previousPage: boolean;

			nextPage: boolean;

			lastPage: boolean;

		}

		interface SetterOptions {
			reason?: symbol;

			focus?: NavigationPageListElement;

		}

		interface Options extends PackageCore.Component.Options {
			pages?: Pagination.Pages;

			rowsPerPageSelector?: Pagination.RowsPerPageSelectorObject;

			navigation?: Pagination.Navigation;

			rowsCounter?: (Pagination.RowsCounter | number);

			loadMore?: number;

			order?: globalThis.Array<Pagination.Section>;

			onPageSelected?: Pagination.PageSelectedCallback;

		}

		type PageSelectedCallback = (args: Pagination.PageSelectedArgs, sender: Pagination) => void;

		interface PageSelectedArgs {
			page: any;

			index: number;

			previousPage: any;

			previousIndex: number;

			reason: Pagination.Reason;

		}

		enum RowsCounter {
			COMPLETE,
			TOTAL,
			UNKNOWN,
			NONE,
		}

		enum RowsPerPageSelector {
			INPUT,
			LIST,
		}

		enum Reason {
			UPDATE,
			CALL,
		}

		enum NavigationType {
			PAGE,
			ROWS_RANGE,
		}

		enum NavigationPageListElement {
			PREVIOUS,
			NEXT,
			CURRENT,
		}

		enum I18N {
			OF,
			TOTAL,
			UNKNOWN,
			SHOW,
			GO_TO,
			LOAD_MORE,
			ALL,
			FIRST_PAGE,
			PREVIOUS_PAGE,
			NEXT_PAGE,
			LAST_PAGE,
		}

		enum Section {
			ROWS_PER_PAGE_SELECTOR,
			NAVIGATION,
			ROWS_COUNTER,
			LOAD_MORE_BUTTON,
		}

		enum VisualStyle {
			STANDALONE,
			EMBEDDED,
		}

	}

	namespace PaginationConfiguration {
		/**
		 * Provides basic pagination options
		 */
		function basic(totalItemsCount: number): object;

		/**
		 * Provides basic pagination options with customizable number of items per page
		 */
		function customizablePageSize(totalItemsCount: number): object;

		/**
		 * Provides segmented pagination options
		 */
		function segmented(segments: globalThis.Array<object>): object;

	}

	/**
	 * Paragraph component - renders proper HTML paragraph
	 */
	export class Paragraph extends PackageCore.Component {
		/**
		 * Constructs Paragraph
		 */
		constructor(options?: Paragraph.Options);

		/**
		 * Paragraph content
		 */
		content: (string | PackageCore.Component | globalThis.Array<(string | PackageCore.Component)>);

		/**
		 * Alias for content property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Paragraph type
		 */
		type: Paragraph.Type;

		/**
		 * Text alignment
		 */
		textAlignment: Paragraph.TextAlignment;

		/**
		 * Sets paragraph type
		 */
		setType(type: Paragraph.Type): void;

		/**
		 * Sets paragraph content
		 */
		setContent(content: (string | PackageCore.Component | globalThis.Array<(string | PackageCore.Component)>)): void;

	}

	export namespace Paragraph {
		interface Options extends PackageCore.Component.Options {
			content?: (null | string | PackageCore.Translation | PackageCore.Component | globalThis.Array<(string | PackageCore.Translation | PackageCore.Component)>);

			textAlignment?: Paragraph.TextAlignment;

			type?: Paragraph.Type;

		}

		enum Type {
			REGULAR,
			SMALL,
			LEAD,
			BOLD,
			WEAK,
		}

		enum TextAlignment {
			LEFT,
			CENTER,
			RIGHT,
			JUSTIFY,
		}

		enum VisualStyle {
			STANDALONE,
			EMBEDDED,
		}

	}

	/**
	 * Picker
	 */
	export class Picker implements PackageCore.EventSource, PackageCore.MessageHandler {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: PackageCore.EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: PackageCore.EventSource.EventName, listener: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: PackageCore.EventSource.EventName): void;

		/**
		 * Constructor
		 */
		constructor(options?: Picker.Options);

		/**
		 * References the picker window
		 */
		window: Window;

		/**
		 * References the content of the Picker window
		 */
		content: PackageCore.Component;

		/**
		 * True if the picker is opened
		 */
		opened: boolean;

		/**
		 * Activates picker
		 */
		open(args?: object): void;

		/**
		 * Deactivates picker
		 */
		close(args?: object): void;

		/**
		 * Resizes picker
		 */
		resize(args?: object): void;

		/**
		 * Disposes picker
		 */
		dispose(): void;

		/**
		 * Processes browser message
		 */
		processMessage(next: PackageCore.RoutedMessage.Handler, message: PackageCore.RoutedMessage, result: PackageCore.RoutedMessage.Result): void;

		/**
		 * Add attribute to the input element
		 */
		setInputAttribute(name: string, value: string): void;

		/**
		 * Remove attribute from the input element
		 */
		removeInputAttribute(name: string): void;

		/**
		 * Picks a value
		 */
		private _changeSelection(args?: object): void;

		/**
		 * Opens the picker window
		 */
		private _openWindow(args: (object | null)): void;

		/**
		 * Provides the picker component and initializes it
		 */
		protected _createContent(args: object): PackageCore.Component;

		/**
		 * Creates window and sets its event listeners
		 */
		private _createWindow(): Window;

		/**
		 * Checks whether the picker is working with up to date suggest text
		 */
		private _nextToken(): object;

		/**
		 * Handles opening Event
		 */
		private _handleWindowOpening(): void;

		/**
		 * Handles opened Event
		 */
		private _handleWindowOpened(): void;

		/**
		 * Handles closing Event
		 */
		private _handleWindowClosing(): void;

		/**
		 * Handles closed Event
		 */
		private _handleWindowClosed(): void;

		/**
		 * Handles update of the Picker
		 */
		private _handlePickerUpdated(): void;

		static Event: Picker.EventTypes;

	}

	export namespace Picker {
		interface Options {
			window?: Popover.Options;

			openConfiguration?: (options: Window.OpenArgs) => Window.OpenArgs;

			owner: PackageCore.Component;

			input?: PackageCore.Component;

			on?: PackageCore.EventSource.ListenerMap;

		}

		interface EventTypes {
			OPENING: string;

			OPENED: string;

			CLOSING: string;

			CLOSED: string;

			SELECTION_CHANGED: string;

			UPDATED: string;

		}

		enum Reason {
			CALL,
			DISPOSE,
			ESC,
			ENTER,
			UPDATE,
			CLEAR,
		}

		export import CloseReason = Self.WindowCloseReason;

	}

	export class Placeholder extends PackageCore.Component {
		constructor(options?: Placeholder.Options);

		/**
		 * Kpi color
		 */
		text: Kpi.Color;

	}

	export namespace Placeholder {
		interface Options extends PackageCore.Component.Options {
			text: string;

		}

	}

	/**
	 * Popover window
	 */
	export class Popover extends Window {
		/**
		 * Constructs Popover
		 */
		constructor(options: Popover.Options);

		/**
		 * Check if the window has a title bar
		 * @deprecated 
		 */
		hasTitleBar: boolean;

		/**
		 * Window title bar
		 * @deprecated 
		 */
		titleBar: object;

		/**
		 * Show/hide close button in the title bar
		 */
		closeButton: boolean;

		/**
		 * Size
		 */
		size: Popover.Size;

		/**
		 * Create Popover with OK button that closes the window
		 */
		static withOk(args: Popover.Options): void;

		/**
		 * Creates confirmation Popover
		 */
		static createAlert(args: Popover.AlertOptions): Popover;

		/**
		 * Creates alert Popover
		 */
		static createConfirm(args: Popover.ConfirmOptions): Popover;

		static DefaultPlacementOffset: number;

	}

	export namespace Popover {
		interface Options extends Window.Options {
			closeButton?: boolean;

			size?: Popover.Size;

		}

		interface AlertOptions extends Popover.Options {
			onOk?: Button.ActionCallback;

		}

		interface ConfirmOptions extends Popover.Options {
			onOk?: Button.ActionCallback;

			onCancel?: Button.ActionCallback;

		}

		enum Size {
			DEFAULT,
			SMALL,
			MEDIUM,
			MAX_SMALL,
			MAX_MEDIUM,
		}

		export import ButtonsJustification = Self.Window.ButtonsJustification;

		export import CloseStrategy = Self.WindowCloseStrategy;

		export import CloseReason = Self.Window.CloseReason;

		export import Event = Self.Window.Event;

		export import GapSize = Self.Window.GapSize;

	}

	/**
	 * Portlet
	 */
	export class Portlet extends PackageCore.Component {
		constructor(options?: Portlet.Options);

		/**
		 * Portlet title
		 */
		title: string;

		/**
		 * Portlet description
		 */
		description: string;

		/**
		 * Portlet icon
		 */
		icon: Image.Source;

		/**
		 * Portlet color
		 */
		color: Portlet.Color;

		/**
		 * Portlet content
		 */
		content: (PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Portlet controls
		 */
		controls: globalThis.Array<(Button.Options | MenuButton.Options)>;

		/**
		 * Enable or disable portlet collapsing
		 */
		collapsible: boolean;

		/**
		 * Collapse or expand the portlet
		 */
		collapsed: boolean;

		/**
		 * Alias for content property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * True if the portlet has a header
		 */
		hasHeader: boolean;

		static Event: Portlet.EventTypes;

	}

	export namespace Portlet {
		interface Options extends PackageCore.Component.Options {
			title?: (string | number | PackageCore.Translation);

			description?: (string | number | PackageCore.Translation);

			icon?: Image.Source;

			color?: Portlet.Color;

			controls?: globalThis.Array<(Button.Options | MenuButton.Options)>;

			collapsible?: boolean;

			collapsed?: boolean;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			COLLAPSED: string;

		}

		enum Color {
			NONE,
			THEMED,
			DANGER,
			WARNING,
			INFO,
			SUCCESS,
			PURPLE,
			YELLOW,
			GREEN,
			PINK,
			TURQUOISE,
			BROWN,
			PRIMARY,
			FOCUS,
		}

	}

	/**
	 * Project parser
	 */
	class ProjectParser {
		/**
		 * Constructs ProjectParser
		 */
		constructor();

	}

	namespace ProjectParser {
	}

	/**
	 * Input widget having binary value (on/off). Only single RadioButton could have ON value within a single group.
	 */
	export class RadioButton extends PackageCore.Component {
		/**
		 * Constructs RadioButton
		 */
		constructor(options?: RadioButton.Options);

		/**
		 * Gets the label text
		 */
		label: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element | null);

		/**
		 * Gets the Radio element
		 * @deprecated 
		 */
		radio: RadioButton;

		/**
		 * Gets the label position
		 */
		labelPosition: RadioButton.LabelPosition;

		/**
		 * Gets the radio value
		 */
		value: (boolean | null);

		/**
		 * True if clicking the radio label should also toggle the radio
		 */
		clickableLabel: boolean;

		/**
		 * True if the radio label is empty
		 */
		emptyLabel: boolean;

		/**
		 * Gets associated radio group
		 */
		group: (RadioGroup | null);

		/**
		 * Toggle action
		 */
		action: (RadioButton.ActionCallback | null);

		/**
		 * Unique value
		 */
		data: any;

		/**
		 * This is the id of the input element. Can be used in Label component.
		 */
		inputId: string;

		/**
		 * Returns attributes of the input element
		 */
		inputAttributes: PackageCore.HtmlAttributeList;

		/**
		 * Sets radio value
		 */
		setValue(value: (boolean | null), options?: {reason?: string}): void;

		/**
		 * Sets radio label
		 */
		setLabel(label: string): void;

		/**
		 * Sets the label position
		 */
		setLabelPosition(value: RadioButton.LabelPosition): void;

		/**
		 * Sets group
		 */
		setGroup(group: RadioGroup): void;

		static Event: RadioButton.EventTypes;

		/**
		 * RadioButton.Group for use in VDom/JSX
		 */
		static Group: PackageCore.JSX.Element;

	}

	export namespace RadioButton {
		interface Options extends PackageCore.Component.Options {
			clickableLabel?: boolean;

			group: RadioGroup;

			label?: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

			labelPosition?: RadioButton.LabelPosition;

			value?: boolean;

			action?: RadioButton.ActionCallback;

			data?: any;

		}

		type ActionCallback = (args: RadioButton.ActionArgs, sender: RadioButton) => void;

		interface ActionArgs {
			value: boolean;

			previousValue: boolean;

			reason: string;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			TOGGLED: string;

		}

		enum VisualStyle {
			DEFAULT,
		}

		enum LabelPosition {
			LEFT,
			RIGHT,
			ABOVE,
			BELOW,
		}

		enum Reason {
			CLICK,
			KEY_PRESS,
		}

	}

	/**
	 * Component for grouping RadioButton components
	 */
	export class RadioButtonGroup extends PackageCore.Component {
		/**
		 * Constructs RadioButtonGroup
		 */
		constructor(options?: RadioButtonGroup.Options);

		/**
		 * Child RadioButtons
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Gets data of currently selected item
		 */
		selectedData: any;

		/**
		 * Gap between columns
		 */
		columnGap: RadioButtonGroup.GapSize;

		/**
		 * Gap between rows
		 */
		rowGap: RadioButtonGroup.GapSize;

		/**
		 * Columns configuration
		 */
		columns: (number | string | globalThis.Array<string>);

		/**
		 * Rows configuration
		 */
		rows: (number | string | globalThis.Array<string>);

		/**
		 * Options for the underlying GridPanel
		 */
		gridOptions: GridPanel.Options;

		/**
		 * Selection changed callback
		 */
		onSelectionChanged: (RadioButtonGroup.SelectionChangedCallback | null);

		/**
		 * Renders individual RadioButton components
		 */
		private renderChild(child: PackageCore.JSX.Element): PackageCore.JSX.Element;

		/**
		 * Removes RadioButton from the RadioGroup
		 */
		private removeFromGroup(ref: PackageCore.VDom.Ref): void;

		/**
		 * Handles when toggle action is triggered
		 */
		private handleToggled(value: boolean, data: any, reason: (string | symbol)): void;

		/**
		 * Handles triggering of the selected item changed event
		 */
		private handleSelectedItemChanged(previousData: any, data: any, reason: (string | symbol)): void;

		static Event: RadioButtonGroup.EventTypes;

		/**
		 * Horizontal RadioButtonGroup for use in VDom/JSX
		 */
		static Horizontal(props: RadioButtonGroup.Options): PackageCore.JSX.Element;

		/**
		 * Vertical RadioButtonGroup for use in VDom/JSX
		 */
		static Vertical(props: RadioButtonGroup.Options): PackageCore.JSX.Element;

	}

	export namespace RadioButtonGroup {
		interface Options extends PackageCore.Component.Options {
			columns?: (number | string | globalThis.Array<string>);

			rows?: (number | string | globalThis.Array<string>);

			columnGap?: (number | string | globalThis.Array<string>);

			rowGap?: (number | string | globalThis.Array<string>);

			gridOptions?: GridPanel.Options;

			defaultItemOptions?: RadioButton.Options;

			onSelectionChanged?: RadioButtonGroup.SelectionChangedCallback;

		}

		type SelectionChangedCallback = (args: RadioButtonGroup.SelectionChangedArgs, sender: RadioButtonGroup) => void;

		interface SelectionChangedArgs {
			data: any;

			previousData: any;

			reason: (string | symbol);

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			SELECTED_ITEM_CHANGED: string;

		}

		export import GapSize = Self.GridPanel.GapSize;

	}

	/**
	 * RadioGroup
	 */
	export class RadioGroup implements PackageCore.EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: PackageCore.EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: PackageCore.EventSource.EventName, listener: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: PackageCore.EventSource.EventName): void;

		/**
		 * Constructs RadioGroup
		 */
		constructor(options?: RadioGroup.Options);

		/**
		 * Gets globally unique ID
		 */
		guid: string;

		/**
		 * Gets list of radio buttons in this group
		 */
		buttons: globalThis.Array<RadioButton>;

		/**
		 * Gets currently selected button
		 */
		selectedButton: (RadioButton | null);

		/**
		 * Adds radio button into the group
		 */
		add(button: RadioButton): RadioGroup;

		/**
		 * Removes radio button from the group
		 */
		remove(button: RadioButton): void;

		/**
		 * Moves focus to next/previous radio button in the group and selects it
		 */
		focusNext(button: RadioButton, direction: number): boolean;

		static Event: RadioGroup.EventTypes;

	}

	export namespace RadioGroup {
		interface Options {
			tabbable?: boolean;

			onToggled?: RadioGroup.ToggledCallback;

			on?: PackageCore.EventSource.ListenerMap;

		}

		type ToggledCallback = (args: RadioGroup.ToggledArgs, sender: RadioGroup) => void;

		interface ToggledArgs {
			button: RadioButton;

			previousButton: RadioButton;

			value: boolean;

			previousValue: boolean;

			data: any;

			reason: any;

		}

		interface EventTypes {
			BUTTON_REMOVED: string;

			BUTTON_ADDED: string;

			BUTTON_TOGGLED: string;

		}

		enum Reason {
			RADIO_GROUP_DESELECT,
		}

	}

	/**
	 * Default FilterChip picker
	 */
	export class RadioGroupPicker extends Picker {
		/**
		 * Constructs RadioGroupPicker
		 */
		constructor(options: RadioGroupPicker.Options);

		/**
		 * Picker dataSource
		 */
		dataSource: PackageCore.DataSource;

		/**
		 * The inner picker component - RadioGroup
		 */
		radioGroup: RadioGroup;

		/**
		 * Picker displayMember
		 */
		displayMember: (string | DataSourceComponent.DisplayMemberCallback);

		/**
		 * Handles picked value from ListBox
		 */
		private _handleSelectionChanged(item: any, args: RadioButton.ActionArgs): void;

		/**
		 * Forwards message to the ListBox
		 */
		private _forwardMessageToGroup(message: PackageCore.RoutedMessage, result: object): void;

		/**
		 * Selects first enabled button from top or bottom
		 */
		private _selectFirst(topOrBottom: number): void;

		/**
		 * Gets display member
		 */
		private _getDisplayMember(dataItem: object): any;

		/**
		 * Updates content of the picker
		 */
		private _updateContent(groupPanel: StackPanel): void;

		/**
		 * Creates placeholder for when there are no items
		 */
		private _createPlaceholder(): void;

		/**
		 * Creates individual RadioButton
		 */
		private _createRadioButton(group: RadioGroup, item: any): void;

		/**
		 * Applies selection on loaded data
		 */
		private _applySelection(selection: any): void;

	}

	export namespace RadioGroupPicker {
		interface Options extends Picker.Options {
			dataSource: PackageCore.ArrayDataSource;

			displayMember?: (string | DataSourceComponent.DisplayMemberCallback);

			comparator?: (left: any, right: any) => boolean;

			searchMember?: (string | DataSourceComponent.DisplayMemberCallback);

			noDataMessage?: (string | PackageCore.Translation);

		}

	}

	/**
	 * Helper for creating a group of RadioButtons with observable property holding current selection
	 */
	export class RadioList {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: PackageCore.EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: PackageCore.EventSource.EventName, listener: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: PackageCore.EventSource.EventName): void;

		/**
		 * Use this method to attach listeners to property changes
		 */
		onPropertyChanged(propertyName?: string, callback?: (args: PackageCore.PropertyObservable.EventArgs, sender: any) => void): any;

		/**
		 * Use this method to fire propertyChanged event
		 */
		protected _notifyPropertyChanged(propertyName: string, oldValue: any, newValue: any, reason?: (string | null)): void;

		/**
		 * Constructs RadioList
		 */
		constructor(options: object);

		/**
		 * The input data array
		 */
		data: globalThis.Array<any>;

		/**
		 * Array of created RadioButton controls
		 */
		radios: globalThis.Array<RadioButton>;

		/**
		 * The associated radio group
		 */
		group: RadioGroup;

		/**
		 * Observable property representing value of selected RadioButton based on it's matching value from data array. Null when none RadioButton is selected.
		 */
		selectedValue: any;

		/**
		 * Currently selected item
		 */
		selectedItem: any;

		/**
		 * Currently selected radio button
		 */
		selectedRadio: RadioButton;

		/**
		 * Calls attachTo for every created RadioButton within this group with.
		 */
		attachRadiosTo(element: HTMLElement): void;

		/**
		 * Sets selected value
		 */
		setSelectedValue(value: any): void;

		/**
		 * Gets item based on the given value
		 */
		itemForValue(value: any): (any | null);

		/**
		 * Gets radio based on the given value
		 */
		radioForValue(value: any): (RadioButton | null);

		static Event: RadioList.EventTypes;

	}

	export namespace RadioList {
		interface EventTypes {
			TOGGLED: string;

		}

	}

	/**
	 * Ratings is a component that enables to set rating.
	 */
	export class Ratings extends PackageCore.Component {
		/**
		 * Constructs Ratings
		 */
		constructor(options?: Ratings.Options);

		/**
		 * Current rating
		 */
		rating: number;

		/**
		 * Ratings icon size
		 */
		imageSize: Ratings.ImageSize;

		/**
		 * Ratings icon variant
		 */
		imageVariant: Ratings.ImageVariant;

		/**
		 * Ratings mode
		 */
		mode: Ratings.Mode;

		/**
		 * Ratings quantity
		 */
		quantity: Ratings.Quantity;

		/**
		 * Ratings tooltips
		 */
		tooltips: globalThis.Array<(PackageCore.Component | string | PackageCore.Translation | PackageCore.JSX.Element | null)>;

		/**
		 * Read only flag
		 */
		readOnly: boolean;

		/**
		 * Color
		 */
		color: Ratings.Color;

		/**
		 * Rating changed callback
		 */
		onRatingChanged: (Ratings.RatingChangedCallback | null);

		/**
		 * Sets current rating
		 */
		setRating(value: number, args?: {reason?: (string | symbol)}): void;

		/**
		 * Sets current color
		 */
		setColor(color: Ratings.Color): void;

		/**
		 * Sets readOnly flag
		 */
		setReadOnly(readOnly: boolean): void;

		/**
		 * Creates and object containing outlined and filled icons with tooltip and caption
		 */
		private _createIconPairs(quantity: Ratings.Quantity, imageVariant: Ratings.ImageVariant, tooltips: globalThis.Array<(PackageCore.Component | string | PackageCore.Translation | PackageCore.JSX.Element | null)>): globalThis.Array<Ratings.IconPair>;

		/**
		 * Creates and object containing outlined and filled icons
		 */
		private _createRawIconPairs(quantity: Ratings.Quantity, imageVariant: Ratings.ImageVariant): globalThis.Array<Ratings.IconPair>;

		/**
		 * Creates individual icon
		 */
		private _createImage(index: number, icons: Ratings.IconPair): PackageCore.JSX.Element;

		static Event: Ratings.EventTypes;

	}

	export namespace Ratings {
		interface Options extends PackageCore.Component.Options {
			color?: Ratings.Color;

			imageSize?: Ratings.ImageSize;

			imageVariant?: Ratings.ImageVariant;

			mode?: Ratings.Mode;

			quantity?: Ratings.Quantity;

			rating?: number;

			defaultRating?: number;

			readOnly?: boolean;

			tooltips?: globalThis.Array<(PackageCore.Component | string | PackageCore.Translation | PackageCore.JSX.Element | null)>;

			onRatingChanged?: Ratings.RatingChangedCallback;

		}

		type RatingChangedCallback = (args: Ratings.RatingChangedArgs, sender: Ratings) => void;

		interface RatingChangedArgs {
			value: number;

			previousValue: number;

			reason: Ratings.Reason;

		}

		interface IconPair {
			filled: PackageCore.ImageMetadata;

			outline: PackageCore.ImageMetadata;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			RATING_CHANGED: string;

		}

		/**
		 * Quantity of rating images
		 */
		enum Quantity {
			THREE,
			FOUR,
			FIVE,
		}

		/**
		 * Mode for ratings selection
		 */
		enum Mode {
			FULL,
			SINGLE,
		}

		/**
		 * Image variant for ratings images
		 */
		enum ImageVariant {
			STAR,
			HEART,
			FACE,
			NUMBER,
		}

		/**
		 * Image size for individual rating image
		 */
		enum ImageSize {
			M,
			L,
			XL,
		}

		/**
		 * Ratings color
		 */
		enum Color {
			DEFAULT,
			SUCCESS,
			WARNING,
			ERROR,
			INFO,
			ACCENT,
		}

		/**
		 * I18N translations constants
		 */
		enum I18n {
			POOR,
			OKAY,
			GOOD,
			GREAT,
			EXCELLENT,
		}

		/**
		 * Favorite reason
		 */
		enum Reason {
			KEY,
			CLICK,
			CALL,
		}

	}

	/**
	 * Record info portlet
	 */
	export class RecordInfoPortlet extends PackageCore.Component {
		constructor(options?: RecordInfoPortlet.Options);

	}

	export namespace RecordInfoPortlet {
		interface Options extends PackageCore.Component.Options {
		}

	}

	/**
	 * Reminder
	 */
	export class Reminder extends PackageCore.Component {
		constructor(options?: Reminder.Options);

		/**
		 * Reminder color
		 */
		color: Reminder.Color;

		/**
		 * Count
		 */
		count: (string | number | PackageCore.Translation | null);

		/**
		 * Description
		 */
		description: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

	}

	export namespace Reminder {
		interface Options extends PackageCore.Component.Options {
			color?: Reminder.Color;

			description: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

			count?: (string | number | PackageCore.Translation | null);

		}

		enum Color {
			NEUTRAL,
			THEMED,
			DANGER,
			WARNING,
			INFO,
			SUCCESS,
			PURPLE,
			YELLOW,
			GREEN,
			PINK,
			TURQUOISE,
			BROWN,
			FOCUS,
		}

	}

	/**
	 * Reminder portlet
	 */
	export class ReminderPortlet extends PackageCore.Component {
		constructor(options?: ReminderPortlet.Options);

	}

	export namespace ReminderPortlet {
		interface Options extends PackageCore.Component.Options {
		}

	}

	/**
	 * Responsive panel
	 */
	export class ResponsivePanel extends PackageCore.Component {
		/**
		 * Constructor
		 */
		constructor(options: ResponsivePanel.Options);

		/**
		 * Content component
		 */
		content: (PackageCore.Component | PackageCore.JSX.Element | globalThis.Array<ResponsivePanel.ItemObject> | null);

		/**
		 * Content property alias for VDom
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Current width breakpoint or null if not rendered
		 */
		widthBreakpoint: (ResponsivePanel.BreakpointKey | null);

		/**
		 * Width breakpoints
		 */
		widthBreakpoints: Record<ResponsivePanel.BreakpointKey, number>;

		/**
		 * Current height breakpoint or null if not rendered
		 */
		heightBreakpoint: (ResponsivePanel.BreakpointKey | null);

		/**
		 * Height breakpoints
		 */
		heightBreakpoints: Record<ResponsivePanel.BreakpointKey, number>;

		/**
		 * Parses children in VDom mode
		 */
		private parseChildren(children: PackageCore.VDom.Children): globalThis.Array<PackageCore.JSX.Element>;

		/**
		 * Parse content in OOP mode
		 */
		private parseContent(content: (PackageCore.JSX.Element | PackageCore.Component | globalThis.Array<ResponsivePanel.ItemObject>)): globalThis.Array<PackageCore.JSX.Element>;

		/**
		 * Parses breakpoints and sorts them into a Map
		 */
		private parseBreakpoints(breakpoints: Record<ResponsivePanel.BreakpointKey, number>): globalThis.Map<ResponsivePanel.BreakpointKey, number>;

		/**
		 * Gets breakpoint for given size
		 */
		private getBreakpoint(size: number, breakpoints: ResponsivePanel.BreakpointKey): (ResponsivePanel.BreakpointKey | null);

		/**
		 * Updates current width breakpoint
		 */
		private updateWidthBreakpoint(): void;

		/**
		 * Updates current height breakpoint
		 */
		private updateHeightBreakpoint(): void;

		/**
		 * Renders item
		 */
		private renderItem(): PackageCore.JSX.Element;

		/**
		 * Width breakpoint context
		 */
		static WidthBreakpointContext: string;

		/**
		 * Height breakpoint context
		 */
		static HeightBreakpointContext: string;

		static Event: ResponsivePanel.EventTypes;

	}

	export namespace ResponsivePanel {
		interface Options extends PackageCore.Component.Options {
			content?: (PackageCore.Component | PackageCore.JSX.Element);

			widthBreakpoints?: Record<string, number>;

			heightBreakpoints?: Record<string, number>;

		}

		type BreakpointKey = string;

		interface ItemObject {
			component: (PackageCore.Component | PackageCore.JSX.Element);

			minWidth: ResponsivePanel.BreakpointKey;

			maxWidth: ResponsivePanel.BreakpointKey;

			width: ResponsivePanel.BreakpointKey;

			minHeight: ResponsivePanel.BreakpointKey;

			maxHeight: ResponsivePanel.BreakpointKey;

			height: ResponsivePanel.BreakpointKey;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			WIDTH_BREAKPOINT_CHANGED: string;

			HEIGHT_BREAKPOINT_CHANGED: string;

		}

		/**
		 * Default breakpoint keys
		 */
		enum Breakpoint {
			XXL,
			XL,
			LG,
			MD,
			SM,
			XS,
		}

		/**
		 * Default breakpoint size values based on the Bootstrap library
		 */
		enum BootstrapBreakpoint {
			XXL,
			XL,
			LG,
			MD,
			SM,
			XS,
		}

		/**
		 * Default breakpoints definition based on the Bootstrap library
		 */
		enum BootstrapBreakpoints {
		}

	}

	/**
	 * Rich text editor
	 */
	export class RichTextEditor extends PackageCore.Component {
		/**
		 * Constructs RichTextEditor
		 */
		constructor(options: RichTextEditor.Options);

		/**
		 * Gets editor text
		 */
		text: string;

		/**
		 * Returns true if the displayed text is empty
		 */
		empty: boolean;

		/**
		 * Gets editor placeholder
		 */
		placeholder: string;

		/**
		 * Gets maximum length
		 */
		maxLength: number;

		/**
		 * Max length indicator
		 */
		maxLengthIndicator: boolean;

		/**
		 * Gets resizability of the richtext editor.
		 */
		resizable: boolean;

		/**
		 * Gets editor mode
		 */
		editorMode: RichTextEditor.EditorMode;

		/**
		 * Text changed callback
		 */
		onTextChanged: (RichTextEditor.TextChangedCallback | null);

		/**
		 * Sets editor text
		 */
		setText(text: string, options?: object): void;

		/**
		 * Sets maximum length
		 */
		setMaxLength(maxLength: number): void;

		/**
		 * Enable/disable max length indicator
		 */
		setMaxLengthIndicator(value: boolean): void;

		/**
		 * Sets editor mode
		 */
		setEditorMode(editorMode: RichTextEditor.EditorMode): void;

		static Event: RichTextEditor.EventTypes;

	}

	export namespace RichTextEditor {
		interface Options extends PackageCore.Component.Options {
			text?: string;

			maxLength?: (number | null);

			maxLengthIndicator?: boolean;

			placeholder?: (string | PackageCore.Translation);

			editorMode?: EditorMode;

			resizable?: boolean;

			resizeDirection?: boolean;

			defaultFontFamily?: string;

			defaultFontSize?: number;

			onTextChanged?: RichTextEditor.TextChangedCallback;

		}

		type TextChangedCallback = (args: RichTextEditor.TextChangedArgs, sender: RichTextEditor) => void;

		interface TextChangedArgs {
			text: string;

			previousText: string;

			reason: RichTextEditor.TextChangeReason;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			TEXT_CHANGED: string;

			EDITOR_RESIZED: string;

		}

		enum VisualStyle {
			DEFAULT,
			EMBEDDED,
		}

		enum ResizeDirection {
			BOTH,
			HORIZONTAL,
			VERTICAL,
		}

		enum FontFamily {
			ARIAL,
			COMIC_SANS,
			GEORGIA,
			GOTHIC,
			MYRIAD,
			OPEN_SANS,
			TAHOMA,
			TIMES_NEW_ROMAN,
			TREBUCHET,
			VERDANA,
		}

		enum EditorMode {
			SOURCE,
			WYSIWYG,
		}

		enum TextChangeReason {
			INPUT,
		}

	}

	/**
	 * Row resize handler
	 */
	class RowResizer implements PackageCore.MessageHandler {
		/**
		 * Constructs RowResizer
		 */
		constructor();

		/**
		 * Processes message
		 */
		processMessage(next: PackageCore.RoutedMessage.Handler, message: PackageCore.RoutedMessage, result: PackageCore.RoutedMessage.Result): void;

	}

	namespace RowResizer {
	}

	/**
	 * Button wrapper used in scroll container
	 */
	class ScrollButton extends PackageCore.Component {
		constructor(options: ScrollButton.Options);

	}

	namespace ScrollButton {
		interface Options extends PackageCore.Component.Options {
			buttonOptions: Button.Options;

			background: boolean;

		}

	}

	/**
	 * Scrolling layout with BannerPanel on top
	 */
	export function ScrollLayout(props?: {children?: PackageCore.VDom.Children}): PackageCore.JSX.Element;

	/**
	 * Panel that can handle scrolling
	 */
	export class ScrollPanel extends PackageCore.Component {
		/**
		 * Constructs ScrollPanel
		 */
		constructor(options: ScrollPanel.Options);

		/**
		 * Scroll controller that controls content of the panel
		 */
		scrollController: PackageCore.ScrollController;

		/**
		 * Gets the scroll offset
		 */
		scrollOffset: PackageCore.Scrollable.Offset;

		/**
		 * Gets the size of viewport
		 */
		viewportSize: PackageCore.Scrollable.Size;

		/**
		 * Gets the size of the content inside viewport
		 */
		contentSize: PackageCore.Scrollable.Size;

		/**
		 * Axis in which the scrolling is enabled
		 */
		orientation: ScrollPanel.Orientation;

		/**
		 * Content of the scroll panel
		 */
		content: (PackageCore.Component | PackageCore.JSX.Element | null);

		/**
		 * Alias for content property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Root element type
		 */
		element: ScrollPanel.Element;

		/**
		 * Type of scroll control
		 */
		scrollControl: ScrollPanel.ScrollControl;

		/**
		 * Position of scroll buttons relative to content
		 */
		scrollControlPosition: ScrollPanel.ScrollControlPosition;

		/**
		 * Amount of pixels for the scroll movement
		 */
		scrollAmount: number;

		/**
		 * Amount of pixels for the scroll movement on button hover
		 */
		hoverScrollAmount: number;

		/**
		 * Milliseconds between scrolls when hovering over the button
		 */
		hoverScrollRepeat: number;

		/**
		 * Buttons will scroll when they are hovered over
		 */
		hoverScrolls: boolean;

		/**
		 * Hide button if scroll is not possible
		 */
		autoHideButtons: ScrollPanel.AutoHide;

		/**
		 * Panel decorator
		 */
		decorator: (PackageCore.Decorator | null);

		/**
		 * Sets the content of the panel
		 */
		setContent(content: PackageCore.Component): void;

		/**
		 * Sets axis in which the scrolling is enabled
		 */
		setOrientation(orientation: ScrollPanel.Orientation): void;

		/**
		 * Set panel decorator
		 */
		setDecorator(decorator: (PackageCore.Decorator | null)): void;

		/**
		 * Scrolls into view
		 */
		scrollIntoView(args: {element: Element; reason?: string}): void;

		/**
		 * Scrolls the panel {ScrollController.ScrollOptions} options
		 */
		scroll(): boolean;

		/**
		 * Scroll to the top
		 */
		scrollToTop(options?: {reason?: any}): boolean;

		/**
		 * Scroll to the bottom
		 */
		scrollToBottom(options?: {reason?: any}): boolean;

		/**
		 * Creates scroll buttons
		 */
		private _createScrollButtons(): void;

		/**
		 * Create a new horizontal ScrollPanel
		 */
		static horizontal(options?: ScrollPanel.Options): ScrollPanel;

		/**
		 * Horizontal scroll panel component for use in VDom/JSX
		 */
		static Horizontal(): PackageCore.JSX.Element;

		/**
		 * Create a new vertical ScrollPanel
		 */
		static vertical(options?: ScrollPanel.Options): ScrollPanel;

		/**
		 * Vertical scroll panel component for use in VDom/JSX
		 */
		static Vertical(): PackageCore.JSX.Element;

	}

	export namespace ScrollPanel {
		interface Options extends PackageCore.Component.Options {
			allowWheelPassThrough?: boolean;

			content?: (PackageCore.Component | PackageCore.JSX.Element);

			decorator?: PackageCore.Decorator;

			hoverScrolls?: boolean;

			autoHideButtons?: ScrollPanel.AutoHide;

			orientation?: ScrollPanel.Orientation;

			scrollControlPosition?: ScrollPanel.ScrollControlPosition;

			scrollControl?: ScrollPanel.ScrollControl;

			scrollAmount?: number;

			hoverScrollAmount?: number;

			hoverScrollRepeat?: number;

			element?: ScrollPanel.Element;

		}

		enum ScrollControl {
			BAR,
			BUTTON,
		}

		enum Orientation {
			VERTICAL,
			HORIZONTAL,
			BOTH,
		}

		enum ScrollControlPosition {
			SIDE_CONTENT,
			OVER_CONTENT,
		}

		enum AutoHide {
			NONE,
			OWN_SCROLLABLE,
			AXIS_SCROLLABLE,
			ANY_SCROLLABLE,
		}

		export import Element = PackageCore.Html.Element.Section;

	}

	/**
	 * Scroll tab list
	 */
	export class ScrollTabList extends PackageCore.Component {
		/**
		 * Constructs ScrollTabList
		 */
		constructor(options?: ScrollTabList.Options);

		/**
		 * Items
		 */
		tabs: globalThis.Array<Tab>;

		/**
		 * Tab children
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Allow user to reorder tabs using drag & drop
		 */
		reorder: boolean;

		/**
		 * Justification of tabs
		 */
		justification: ScrollTabList.Justification;

		/**
		 * Position of tab list to tab content
		 */
		position: ScrollTabList.Position;

		/**
		 * Position of tab's color stripe
		 */
		stripePosition: ScrollTabList.StripePosition;

		/**
		 * True if this is a horizontal tab list
		 */
		horizontal: boolean;

		/**
		 * Hierarchy of tab list
		 */
		hierarchy: ScrollTabList.Hierarchy;

		/**
		 * Selected tab
		 */
		selectedValue: Tab;

		/**
		 * Get index of tab
		 */
		tabIndex(tab: Tab): (number | null);

		/**
		 * Sets position of tab list
		 */
		setPosition(position: ScrollTabList.Position): void;

		/**
		 * Sets tab's color stripe position
		 */
		setStripePosition(position: ScrollTabList.StripePosition): void;

		/**
		 * Sets hierarchy of tab list
		 */
		setHierarchy(hierarchy: ScrollTabList.Hierarchy): void;

		/**
		 * Sets justification of tab list
		 */
		setJustification(justification: ScrollTabList.Justification): void;

		/**
		 * Move tab
		 */
		move(item: Tab, options?: {index: number; reason?: string}): void;

	}

	export namespace ScrollTabList {
		interface Options extends PackageCore.Component.Options {
			position?: ScrollTabList.Position;

			stripePosition?: ScrollTabList.StripePosition;

			justification?: ScrollTabList.Justification;

			hierarchy?: ScrollTabList.Hierarchy;

			reorder?: boolean;

			items?: globalThis.Array<Tab>;

		}

		export import VisualStyle = Self.TabPanelOptions.VisualStyle;

		export import Position = Self.TabPanelOptions.TabPosition;

		export import StripePosition = Self.TabPanelOptions.TabStripePosition;

		export import Justification = Self.TabPanelOptions.TabJustification;

		export import Hierarchy = Self.TabPanelOptions.Hierarchy;

	}

	/**
	 * Scrollbar
	 */
	export class Scrollbar extends PackageCore.Component {
		/**
		 * Constructs Scrollbar
		 */
		constructor();

		/**
		 * Scroll controller
		 */
		scrollController: PackageCore.ScrollController;

		/**
		 * Track size
		 */
		trackSize: number;

		/**
		 * Content size
		 */
		contentSize: PackageCore.Scrollable.Size;

		/**
		 * Viewport size
		 */
		viewportSize: PackageCore.Scrollable.Size;

		/**
		 * Scroll offset in the main axis
		 */
		scrollOffset: number;

		/**
		 * Maximum scroll offset in the main axis
		 */
		maxScrollOffset: number;

		/**
		 * True if auto hide is enabled
		 */
		autoHide: boolean;

		/**
		 * True if the scrollbar is active (can be scrolled)
		 */
		isActive: boolean;

		/**
		 * Scrolls to next page
		 */
		nextPage(args: object): void;

		/**
		 * Scrolls to previous page
		 */
		previousPage(args: object): void;

	}

	export namespace Scrollbar {
		/**
		 * Scrollbar orientation
		 */
		enum Orientation {
			HORIZONTAL,
			VERTICAL,
		}

		enum VisualStyle {
			DOCKED,
		}

	}

	/**
	 * Drag listener
	 */
	export class ScrollbarDragListener {
		/**
		 * Constructs ScrollbarDragListener
		 */
		constructor();

		/**
		 * Attaches ScrollbarDragListener
		 */
		attach(): void;

		/**
		 * Detaches ScrollbarDragListener
		 */
		detach(): void;

		/**
		 * Processes message
		 */
		processMessage(next: PackageCore.RoutedMessage.Handler, message: PackageCore.RoutedMessage, result: PackageCore.RoutedMessage.Result): void;

	}

	export namespace ScrollbarDragListener {
	}

	/**
	 * SearchEngine
	 */
	class SearchEngine {
		/**
		 * Add searchable elements into the search engine
		 */
		addElements(elements: globalThis.Map<any, any>): void;

		/**
		 * Remove element from the search engine
		 */
		removeElement(elementId: string): void;

	}

	namespace SearchEngine {
	}

	/**
	 * Search item
	 */
	export class SearchItem extends PackageCore.Component {
		/**
		 * Constructs SearchItem
		 */
		constructor(options?: SearchItem.Options);

		/**
		 * The active link
		 */
		activeLink: Link;

		/**
		 * Handles key press
		 */
		handleKeyPress(): boolean;

		static getRefreshedStyles(theme: PackageCore.RefreshedTheme): void;

		static getRedwoodStyles(theme: PackageCore.RedwoodTheme): void;

	}

	export namespace SearchItem {
		interface Options extends PackageCore.Component.Options {
			link?: SearchItem.LinkItem;

			sublinks?: globalThis.Array<SearchItem.LinkItem>;

			type?: string;

		}

		interface LinkItem {
			description?: string;

			name?: string;

			url?: string;

		}

	}

	/**
	 * Category of searchable item
	 */
	enum SearchItemCategory {
		BUTTON,
		COLUMN,
		FIELD,
		FIELD_GROUP,
		LINK,
		MENU,
		SUB_TAB,
		TAB,
	}

	/**
	 * Search item types
	 */
	enum SearchItemType {
		ACTION,
		HEADER,
		RESULT,
		MORE,
		FEWER,
		BACK,
		LOADER,
		NO_RESULT,
	}

	export interface SearchableItem {
		id: string;

		label: string;

		action: () => void;

	}

	export interface SearchableItemOptions {
		category: SearchItemCategory;

		idProperty?: string;

		actionProperty?: string;

		labelProperty?: string;

		nestedArrayProperty?: string;

	}

	/**
	 * Selection cell
	 */
	export class SelectionCell extends GridCell {
		/**
		 * Constructs SelectionCell
		 */
		constructor(options?: object);

		/**
		 * Cell selectability
		 */
		selectable: boolean;

		/**
		 * CheckBox/Radio options
		 */
		widgetOptions: (CheckBox.Options | GridCell.WidgetOptionsCallback<CheckBox.Options>);

		/**
		 * True for single selection
		 */
		singleSelect: boolean;

		/**
		 * Toggle selectability of the cell
		 */
		setSelectable(value: boolean): void;

	}

	export namespace SelectionCell {
	}

	/**
	 * Selection column
	 */
	export class SelectionColumn extends GridColumn {
		/**
		 * Constructs SelectionColumn
		 */
		constructor(options: SelectionColumn.Options);

		/**
		 * True for single selection
		 */
		singleSelect: boolean;

		/**
		 * Radio group for the column
		 */
		radioGroup: RadioGroup;

		/**
		 * Selection strategy
		 */
		strategy: GridSelectionStrategy;

		/**
		 * Current selection
		 */
		selection: GridSelection;

		/**
		 * Check/Radio options
		 */
		widgetOptions: (CheckBox.Options | GridColumn.WidgetOptionsCallback<CheckBox.Options> | null);

		/**
		 * Change selection
		 */
		setSelection(selection: GridSelection, options?: {forceUpdate?: boolean; reason?: string}): void;

		/**
		 * Reset the selection
		 */
		clearSelection(options?: {reason?: string}): void;

		/**
		 * Select item based on a grid row
		 */
		selectRow(row: GridRow, value: boolean): void;

		/**
		 * Select a data item
		 */
		selectItem(item: any, value: boolean, options?: {reason?: string}): void;

		/**
		 * Select multiple data items
		 */
		selectMulti(mode: GridSelection.Mode, value: boolean, options?: {reason?: string}): void;

		/**
		 * Get the row selected state
		 */
		isRowSelected(row: GridDataRow): (boolean | null);

		/**
		 * Check if row is selectable
		 */
		isRowSelectable(row: GridDataRow): boolean;

		/**
		 * Set the isSelectable callback
		 */
		setIsSelectable(callback: (dataItem: any) => boolean): void;

		/**
		 * Force update of column cells
		 */
		forceUpdate(): void;

		/**
		 * Schedule column cell update
		 */
		update(): void;

		static Event: SelectionColumn.EventTypes;

	}

	export namespace SelectionColumn {
		interface Options extends GridColumn.Options {
			singleSelect?: boolean;

			selection?: GridSelection;

			isSelectable?: SelectionColumn.IsSelectableCallback;

			widgetOptions?: (CheckBox.Options | GridColumn.WidgetOptionsCallback<CheckBox.Options>);

			strategy?: GridSelectionStrategy;

		}

		type IsSelectableCallback = (dataItem: any) => boolean;

		interface EventTypes extends GridColumn.EventTypes {
			SELECTION_CHANGED: string;

		}

		export import Mode = Self.GridSelection.Mode;

		export import Cell = Self.SelectionCell;

	}

	/**
	 * Page shell
	 */
	export class Shell {
		/**
		 * Constructs Shell
		 */
		constructor(options?: Shell.Options);

		/**
		 * Gets shell layout behavior
		 */
		private layout: Shell.LayoutType;

		/**
		 * Current theme
		 */
		theme: PackageCore.Theme;

		/**
		 * Gets system header
		 */
		systemHeader: (PackageCore.Component | null);

		/**
		 * Gets application header
		 */
		applicationHeader: (PackageCore.Component | PackageCore.Presenter | null);

		/**
		 * Gets content
		 */
		content: (PackageCore.Presenter | PackageCore.Component | PackageCore.JSX.Element | null);

		/**
		 * Get the content root element
		 * @deprecated 
		 */
		contentRoot: HTMLElement;

		/**
		 * Set shell content
		 */
		setContent(content: (PackageCore.Presenter | PackageCore.Component | null)): void;

		/**
		 * Change active theme
		 */
		setTheme(theme: PackageCore.Theme): void;

		/**
		 * Initializes main layout
		 */
		private render(): void;

		/**
		 * Setups the Shell
		 */
		run(): void;

		/**
		 * Dispose the Shell
		 */
		dispose(): void;

	}

	export namespace Shell {
		interface Options {
			host: Host;

			applicationHeader?: (PackageCore.Presenter | PackageCore.Component);

			content?: (PackageCore.Presenter | PackageCore.Component | PackageCore.JSX.Element);

			router?: PackageCore.Router;

			systemHeader?: PackageCore.Component;

			layout?: Shell.LayoutType;

		}

		export import Layout = Self.ShellLayout;

		enum LayoutType {
			NATURAL,
			APPLICATION,
		}

	}

	/**
	 * Shell layout component
	 */
	function ShellLayout(props: {contentId: string; systemHeader?: (PackageCore.Component | PackageCore.JSX.Element); applicationHeader?: (PackageCore.Component | PackageCore.JSX.Element); children?: (PackageCore.Component | PackageCore.JSX.Element); appLayout?: boolean}): PackageCore.JSX.Element;

	/**
	 * Multipicker with advanced functionality
	 */
	export class ShuttleUI extends PackageCore.Component {
		/**
		 * Constructs ShuttleUI
		 */
		constructor(options?: ShuttleUI.Options);

		/**
		 * Get/Set source list label
		 */
		sourceLabel: string;

		/**
		 * Get/Set visibility of source search box
		 */
		sourceSearch: boolean;

		/**
		 * Get/Set visibility of source 'View Selected' checkbox
		 */
		sourceViewSelected: boolean;

		/**
		 * Get/Set datasource of source list
		 */
		sourceDataSource: PackageCore.DataSource;

		/**
		 * Get source ListBox
		 */
		sourceList: ListBox;

		/**
		 * Get/Set filters for source list
		 */
		sourceFilters: (object | null);

		/**
		 * Get/Set segmentation for source list
		 */
		sourceSegments: (object | PackageCore.ArrayDataSource | globalThis.Array<any> | null);

		/**
		 * Get/Set source filter loader state
		 */
		sourceLoading: boolean;

		/**
		 * Get/Set source selected items
		 */
		sourceSelectedItems: globalThis.Array<any>;

		/**
		 * Get/Set target label
		 */
		targetLabel: string;

		/**
		 * Get/Set visibility of target search box
		 */
		targetSearch: boolean;

		/**
		 * Get/Set visibility of target 'View Selected' checkbox
		 */
		targetViewSelected: boolean;

		/**
		 * Get/Set datasource of target list
		 */
		targetDataSource: PackageCore.DataSource;

		/**
		 * Get target ListBox
		 */
		targetList: ListBox;

		/**
		 * Get/Set filters for target list
		 */
		targetFilters: (object | null);

		/**
		 * Get/Set segmentation for target list
		 */
		targetSegments: (object | PackageCore.ArrayDataSource | globalThis.Array<any> | null);

		/**
		 * Get/Set target filter loader state
		 */
		targetLoading: boolean;

		/**
		 * Get/Set target list selected items
		 */
		targetSelectedItems: globalThis.Array<any>;

		/**
		 * Get/Set maximum selection limit
		 */
		maxSelection: number;

		/**
		 * Get/Set ability to drag & drop items
		 */
		dragAndDrop: boolean;

		/**
		 * Source and target filters (Dropdown components)
		 */
		filters: globalThis.Array<any>;

		/**
		 * Source and target segment (Dropdown component)
		 */
		segment: globalThis.Array<any>;

		/**
		 * Set new data for source list
		 */
		setSourceList(newData?: PackageCore.DataSource, options?: object): void;

		/**
		 * Set new data for target list
		 */
		setTargetList(newData?: PackageCore.DataSource, options?: object): void;

		/**
		 * Add selected items from source to target
		 */
		addSelectedItemsToTarget(): void;

		/**
		 * Remove selected items from target
		 */
		removeSelectedItemsFromTarget(): void;

		/**
		 * Add an item to target list
		 */
		addItemToTarget(item: object): void;

		/**
		 * Removes an item from target list
		 */
		removeItemFromTarget(item: object): void;

		/**
		 * Filter source list according to search field and selected segment/filters
		 */
		filterSourceList(): void;

		/**
		 * Filter source list according to search field and selected segment/filters
		 */
		filterTargetList(): void;

		/**
		 * Filter both source and target lists
		 */
		filterLists(): void;

		/**
		 * Find out if source list is DataGrid
		 */
		sourceIsDataGrid(): boolean;

		/**
		 * Find out if target list is DataGrid
		 */
		targetIsDataGrid(): boolean;

		static Event: ShuttleUI.EventTypes;

	}

	export namespace ShuttleUI {
		interface Options extends PackageCore.Component.Options {
			disableFilters?: boolean;

			disableFiltersAndSegments?: boolean;

			disableSegments?: boolean;

			dragAndDrop?: boolean;

			layout?: ShuttleUI.Layout;

			maxSelection?: (number | boolean);

			sourceDataSource?: (PackageCore.ArrayDataSource | null);

			sourceDisplayMember?: string;

			sourceFilters?: (object | null);

			sourceLabel?: string;

			sourceSearch?: boolean;

			sourceSegments?: (PackageCore.ArrayDataSource | globalThis.Array<any> | null);

			sourceShowSelectedOnlyCheckbox?: boolean;

			sourceValueMember?: string;

			targetDataSource?: (PackageCore.ArrayDataSource | null);

			targetDisplayMember?: string;

			targetFilters?: (object | null);

			targetLabel?: string;

			targetSearch?: boolean;

			targetSegments?: (PackageCore.ArrayDataSource | globalThis.Array<any> | null);

			targetShowSelectedOnlyCheckbox?: boolean;

			targetValueMember?: string;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			SELECTION_CHANGED: string;

			SEARCH_CHANGED: string;

			FILTERS_CHANGED: string;

			SEGMENT_CHANGED: string;

		}

		enum I18N {
			TYPE_TO_FILTER,
			NO_ITEMS_TO_SELECT,
			NO_SELECTIONS_MADE,
			BUTTON_ADD_TO_TARGET,
			BUTTON_REMOVE_FROM_TARGET,
			SEGMENTS,
			FILTER,
		}

		enum List {
			SOURCE,
			TARGET,
		}

		enum VisualStyle {
			DEFAULT,
			STANDALONE,
		}

		enum Layout {
			DEFAULT,
			EQUAL_LISTS,
		}

		enum Reason {
			CALL,
		}

	}

	/**
	 * Picker with a ShuttleUI as its content
	 */
	export class ShuttleUIPicker extends Picker {
		/**
		 * Constructs ShuttleUIPicker
		 */
		constructor(options?: ShuttleUIPicker.Options);

		/**
		 * Picker dataSource
		 */
		dataSource: PackageCore.DataSource;

		/**
		 * Picker filter
		 */
		filter: (dataSource: PackageCore.DataSource, text: string) => PackageCore.DataSource;

		/**
		 * Handles when a value in the picker content is picked
		 */
		private _handleSelectionChanged(args: {addedItems: globalThis.Array<any>; removedItems: globalThis.Array<any>}, reason: string): void;

		/**
		 * Forwards key down event to picker content so it can handle it
		 */
		private _forwardKeyDownToShuttle(): void;

	}

	export namespace ShuttleUIPicker {
		interface Options extends Picker.Options {
			dataSource: PackageCore.DataSource;

			filter: (dataSource: PackageCore.DataSource, text: string) => PackageCore.DataSource;

		}

		export import Reason = Self.Picker.Reason;

	}

	/**
	 * A placeholder component, alternative to a traditional loader
	 */
	export class Skeleton extends PackageCore.Component {
		constructor(options?: Skeleton.Options);

		/**
		 * Determines if skeleton should be animated
		 */
		animation: boolean;

		/**
		 * Skeleton width
		 */
		width: (number | string);

		/**
		 * Skeleton height
		 */
		height: (number | string);

		/**
		 * Skeleton icon
		 */
		icon: (Image.Source | null);

		/**
		 * Border radius
		 */
		borderRadius: (number | string);

		/**
		 * Factory function that creates rectangle skeleton
		 */
		static rectangle(options?: {width?: (number | string); height?: (number | string)}, settings?: Skeleton.Options): Skeleton;

		/**
		 * JSX function component that creates rectangle skeleton
		 */
		static Rectangle(options?: Skeleton.Options): PackageCore.JSX.Element;

		/**
		 * Factory function that creates square skeleton
		 */
		static square(options?: {size?: (number | string)}, settings?: Skeleton.Options): Skeleton;

		/**
		 * JSX function component that creates square skeleton
		 */
		static Square(options?: Skeleton.Options & {size?: (number | string)}): PackageCore.JSX.Element;

		/**
		 * Factory function that creates ellipse skeleton
		 */
		static ellipse(options?: {width?: (number | string); height?: (number | string)}, settings?: Skeleton.Options): Skeleton;

		/**
		 * JSX function component that creates ellipse skeleton
		 */
		static Ellipse(options?: Skeleton.Options): PackageCore.JSX.Element;

		/**
		 * Factory function that creates circle skeleton
		 */
		static circle(options?: {diameter?: (number | string)}, settings?: Skeleton.Options): Skeleton;

		/**
		 * JSX function component that creates circle skeleton
		 */
		static Circle(options?: Skeleton.Options & {diameter?: (number | string)}): PackageCore.JSX.Element;

		/**
		 * Factory function that creates line skeleton - rectangle skeleton with height in multiplies of 16px
		 */
		static line(options?: {width?: (number | string); height?: number}, settings?: Skeleton.Options): Skeleton;

		/**
		 * JSX function component that creates line skeleton - rectangle skeleton with height in multiplies of 16px
		 */
		static Line(options?: Skeleton.Options): PackageCore.JSX.Element;

		/**
		 * JSX function component that creates a compound skeleton depicting loading rows
		 */
		static lines(options?: {count?: number}, settings?: PackageCore.Component.Options): PackageCore.Component;

		/**
		 * JSX function component that creates a compound skeleton depicting loading rows
		 */
		static Lines(options: PackageCore.Component.Options & {count?: number}): PackageCore.JSX.Element;

		/**
		 * JSX function component that creates a compound skeleton depicting a loading paragraph of text
		 */
		static text(options: {count: number}, settings?: PackageCore.Component.Options): PackageCore.Component;

		/**
		 * JSX function component that creates a compound skeleton depicting a loading paragraph of text
		 */
		static Text(options: {count: number}): PackageCore.JSX.Element;

		/**
		 * Factory function that creates divider skeleton - rectangle skeleton with height of 2 px and full width
		 */
		static divider(settings?: Skeleton.Options): Skeleton;

		/**
		 * JSX function component that creates divider skeleton - rectangle skeleton with height of 2 px and full width
		 */
		static Divider(props?: Skeleton.Options): PackageCore.JSX.Element;

		/**
		 * Factory function that creates chart skeleton - rectangle skeleton with SystemIcon.CHART icon
		 */
		static chart(settings?: Skeleton.Options): Skeleton;

		/**
		 * JSX function component that creates chart skeleton - rectangle skeleton with SystemIcon.CHART icon
		 */
		static Chart(props?: Skeleton.Options): PackageCore.JSX.Element;

		/**
		 * Factory function that creates chart bar skeleton - rectangle skeleton with SystemIcon.CHART_COLUMN icon
		 */
		static chartBar(settings?: Skeleton.Options): Skeleton;

		/**
		 * JSX function component that creates chart bar skeleton - rectangle skeleton with SystemIcon.CHART_COLUMN icon
		 */
		static ChartBar(props?: Skeleton.Options): PackageCore.JSX.Element;

		/**
		 * Factory function that creates chart skeleton - rectangle skeleton with SystemIcon.CHART_LINE icon
		 */
		static chartLine(settings?: Skeleton.Options): Skeleton;

		/**
		 * JSX function component that creates chart skeleton - rectangle skeleton with SystemIcon.CHART_LINE icon
		 */
		static ChartLine(props?: Skeleton.Options): PackageCore.JSX.Element;

		/**
		 * Factory function that creates compound skeleton for table
		 */
		static table(options?: {rows?: number; columns?: number}, settings?: PackageCore.Component.Options): PackageCore.Component;

		/**
		 * JSX function component that creates compound skeleton for table
		 */
		static Table(props?: {rows?: number; columns?: number; settings?: GridPanel.Options}): PackageCore.JSX.Element;

		/**
		 * Factory function that creates compound skeleton for the Kpi component
		 */
		static kpi(options?: ContentPanel.Options): PackageCore.Component;

		/**
		 * JSX function component that creates compound skeleton for the Kpi component
		 */
		static Kpi(props?: ContentPanel.Options): PackageCore.JSX.Element;

		/**
		 * Factory function that creates compound skeleton for the Reminder component
		 */
		static reminder(options?: GridPanel.Options): PackageCore.Component;

		/**
		 * Factory function that creates compound skeleton for the Reminder component
		 */
		static Reminder(props?: GridPanel.Options): PackageCore.JSX.Element;

		/**
		 * Factory function that creates compound skeleton for a list of reminders
		 */
		static reminders(options: {count?: number}, settings?: PackageCore.Component.Options): PackageCore.Component;

		/**
		 * Factory function that creates compound skeleton for a list of reminders
		 */
		static Reminders(props?: {count?: number}): PackageCore.JSX.Element;

		/**
		 * Field skeleton
		 */
		static field(): PackageCore.Component;

		/**
		 * Field skeleton
		 */
		static Field(): PackageCore.JSX.Element;

		/**
		 * FieldGroup skeleton
		 */
		static fieldGroup(options: {content: PackageCore.Component}): PackageCore.Component;

		/**
		 * FieldGroup skeleton
		 */
		static FieldGroup(): PackageCore.JSX.Element;

		/**
		 * Grid skeleton
		 */
		static grid(options: {rows: number; columns: number; borderRadius?: (number | string)}, settings: PackageCore.Component.Options): PackageCore.Component;

		/**
		 * Grid skeleton
		 */
		static Grid(options: PackageCore.Component.Options & {rows: number; columns: number}): PackageCore.JSX.Element;

		/**
		 * ApplicationHeader skeleton
		 */
		static applicationHeader(options?: {icon?: boolean; subtitle?: boolean; actions?: number}): PackageCore.Component;

		/**
		 * ApplicationHeader skeleton
		 */
		static ApplicationHeader(props?: {icon?: boolean; subtitle?: boolean; actions?: number}): PackageCore.JSX.Element;

	}

	export namespace Skeleton {
		interface Options extends PackageCore.Component.Options {
			animation?: boolean;

			borderRadius?: (number | string);

			height?: (number | string);

			icon?: Image.Source;

			width?: (number | string);

		}

	}

	/**
	 * Slider is a component that enables selecting one value from a given range, that is rendered as a vertical or horizontal line.
	 */
	export class Slider extends PackageCore.Component {
		/**
		 * Constructs Slider
		 */
		constructor(options?: Slider.Options);

		/**
		 * Selected item
		 */
		selectedItem: (string | number | PackageCore.Translation | Slider.Item);

		/**
		 * Size of a big step
		 */
		bigStep: (number | null);

		/**
		 * States if selected value is editable through the selected item indicator
		 */
		editable: boolean;

		/**
		 * States if the Slider is readOnly
		 */
		readOnly: boolean;

		/**
		 * The track background color
		 */
		trackColor: string;

		/**
		 * States if the track has a checkerboard as a background
		 */
		trackBackgroundCheckerboard: boolean;

		/**
		 * Selection changed callback
		 */
		onSelectionChanged: (Slider.SelectionChangedCallback | null);

		/**
		 * Selects defined item as the selected value
		 */
		selectItem(item: (Slider.Item | string | number | PackageCore.Translation), reason?: string): void;

		/**
		 * Selects first item
		 */
		selectFirstItem(options?: {reason?: symbol}): void;

		/**
		 * Selects item next to the currently selected one
		 */
		selectNextItem(options?: {reason?: symbol}): void;

		/**
		 * Selects item previous to the currently selected one
		 */
		selectPreviousItem(options?: {reason?: symbol}): void;

		/**
		 * Selects item next to the current one with a distance of the big step
		 */
		selectNextItemWithBigStep(options?: {reason?: symbol}): void;

		/**
		 * Selects item previous to the current one with a distance of the big step
		 */
		selectPreviousItemWithBigStep(options?: object, reason?: symbol): void;

		/**
		 * Selects last item
		 */
		selectLastItem(options?: {reason?: symbol}): void;

		/**
		 * Selects item with defined index
		 */
		selectItemOnIndex(index: number, options?: {reason?: symbol}): void;

		/**
		 * Selects item on a location defined by the distance in given steps from the currently selected one
		 */
		selectItemByDistance(distance: number, options?: {reason?: symbol}): void;

		/**
		 * Sets track color
		 */
		setTrackColor(value: string): void;

		/**
		 * Sets if the track background is a checkerboard
		 */
		setTrackBackgroundCheckerboard(value: boolean): void;

		/**
		 * Handles incoming SELECTED_ITEM_CHANGED event from SliderRange
		 */
		private _handleSelectedItemChanged(handle: SliderRange.Handle, item: Slider.Item, previousItem: Slider.Item, reason: (symbol | string)): void;

		/**
		 * Handles incoming HANDLE_MOVED event from SliderRange
		 */
		private _handleHandleMoved(handle: SliderRange.Handle, position: number, data: SliderRange.HandleData, reason: (symbol | string)): void;

		static Event: Slider.EventTypes;

	}

	export namespace Slider {
		interface Item extends SliderRange.Item {
		}

		interface HandleData extends SliderRange.HandleData {
		}

		interface ValuesObject extends SliderRange.ValuesObject {
		}

		interface Options extends PackageCore.Component.Options {
			selectedItem?: (string | number | Slider.Item);

			trackStart?: (number | string | Slider.Item);

			items?: (object | globalThis.Array<any>);

			labelPosition?: Slider.LabelPosition;

			firstLabelPosition?: Slider.LabelPosition;

			lastLabelPosition?: Slider.LabelPosition;

			firstLabelVisible?: boolean;

			lastLabelVisible?: boolean;

			handleLabelVisible?: boolean;

			edgeLabelAlignment?: Slider.EdgeLabelAlignment;

			orientation?: Slider.Orientation;

			handleDisplayMember?: Slider.DisplayMember;

			labelDisplayMember?: Slider.DisplayMember;

			showSnapLines?: boolean;

			stickyDragging?: boolean;

			trackColor?: (string | PackageCore.Color);

			trackBackgroundCheckerboard?: boolean;

			editable?: boolean;

			readOnly?: boolean;

			bigStep?: number;

			decimalPrecision?: number;

			autoValue?: boolean;

			onSelectionChanged?: Slider.SelectionChangedCallback;

		}

		type SelectionChangedCallback = (args: Slider.SelectionChangedArgs, sender: Slider) => void;

		interface SelectionChangedArgs {
			item: Slider.Item;

			previousItem: Slider.Item;

			reason: (symbol | string);

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			SELECTED_ITEM_CHANGED: string;

			HANDLE_MOVED: symbol;

		}

		export import Orientation = Self.SliderRange.Orientation;

		export import LabelPosition = Self.SliderRange.LabelPosition;

		export import EdgeLabelAlignment = Self.SliderRange.EdgeLabelAlignment;

		export import SelectedItemMember = Self.SliderRange.DisplayMember;

		export import DisplayMember = Self.SliderRange.DisplayMember;

		export import DefaultEndItem = Self.SliderRange.DefaultEndItem;

		enum Reason {
			ITEM_SELECTED,
			CALL,
		}

	}

	/**
	 * SliderRange is a component that enables selecting one value from a given range, that is rendered as a vertical or horizontal line.
	 */
	export class SliderRange extends PackageCore.Component {
		/**
		 * Constructs SliderRange
		 */
		constructor(options?: SliderRange.Options);

		/**
		 * Selected range
		 */
		selectedRange: SliderRange.Range;

		/**
		 * Selected range start
		 */
		selectedRangeStart: SliderRange.Item;

		/**
		 * Selected range end
		 */
		selectedRangeEnd: SliderRange.Item;

		/**
		 * Size of a big step
		 */
		bigStep: (number | null);

		/**
		 * States if selected value is editable through the selected item indicator
		 */
		editable: boolean;

		/**
		 * States if the SliderRange is readOnly
		 */
		readOnly: boolean;

		/**
		 * States if the start handle is enabled
		 */
		startHandleEnabled: boolean;

		/**
		 * States if the end handle is enabled
		 */
		endHandleEnabled: boolean;

		/**
		 * The track background color
		 */
		trackColor: string;

		/**
		 * States if the track has a checkerboard as a background
		 */
		trackBackgroundCheckerboard: boolean;

		/**
		 * Range changed callback
		 */
		onRangeChanged: (SliderRange.RangeChangedCallback | null);

		/**
		 * Selects defined slider range
		 */
		selectRange(range: (globalThis.Array<SliderRange.Item> | globalThis.Array<string> | globalThis.Array<number> | globalThis.Array<PackageCore.Translation>), options?: {reason?: symbol}): boolean;

		/**
		 * Selects defined item as the selected value for given handle
		 */
		selectRangeItem(item: (SliderRange.Item | string | number | PackageCore.Translation | null), handle: SliderRange.Handle, options?: {reason?: symbol}): boolean;

		/**
		 * Selects defined item as the range start value
		 */
		selectRangeStart(item: (SliderRange.Item | string | number | PackageCore.Translation | null), options?: {reason?: symbol}): boolean;

		/**
		 * Selects defined item as the range end value
		 */
		selectRangeEnd(item: (SliderRange.Item | string | number | PackageCore.Translation | null), options?: {reason?: symbol}): boolean;

		/**
		 * Selects first item
		 */
		selectFirstItem(handle: SliderRange.Handle, options?: {reason?: symbol}): void;

		/**
		 * Selects item next to the currently selected one
		 */
		selectNextItem(handle: SliderRange.Handle, options?: {reason?: symbol}): void;

		/**
		 * Selects item next to the current one with a distance of the big step
		 */
		selectNextItemWithBigStep(handle: SliderRange.Handle, options?: {reason?: symbol}): void;

		/**
		 * Selects item previous to the currently selected one
		 */
		selectPreviousItem(handle: SliderRange.Handle, options?: {reason?: symbol}): void;

		/**
		 * Selects item previous to the current one with a distance of the big step
		 */
		selectPreviousItemWithBigStep(handle: SliderRange.Handle, options?: object, reason?: symbol): void;

		/**
		 * Selects last item
		 */
		selectLastItem(handle: SliderRange.Handle, options?: {reason?: symbol}): void;

		/**
		 * Selects item with defined index
		 */
		selectItemOnIndex(index: number, handle: SliderRange.Handle, options?: {reason?: symbol}): void;

		/**
		 * Selects item on a location defined by the distance in given steps from the currently selected one
		 */
		selectItemByDistance(distance: number, handle: SliderRange.Handle, options?: {reason?: symbol}): void;

		/**
		 * Sets track color
		 */
		setTrackColor(value: (string | PackageCore.Color)): void;

		/**
		 * Sets if the track background is a checkerboard
		 */
		setTrackBackgroundCheckerboard(value: boolean): void;

		/**
		 * Sets enabled state for given handle
		 */
		enableHandle(handle: SliderRange.Handle, value: boolean): void;

		/**
		 * Creates grid containing all the SliderRange parts
		 */
		private _createGridFractions(labelCount: number): globalThis.Array<string>;

		/**
		 * Creates the main grid
		 */
		private _createGridElement(items: globalThis.Array<PackageCore.JSX.Element>, gridFractions: globalThis.Array<string>): GridPanel;

		/**
		 * Adds selected item container to grid
		 */
		private _createHandlesLabelsAsGridItems(gridFractionsCount: number): void;

		/**
		 * Add track to the grid
		 */
		private _createTrackAsGridItem(gridFractionsCount: number): void;

		/**
		 * Creates grid containing all the SliderRange parts
		 */
		private _createItemsAsGridItems(gridFractionsCount: number): void;

		/**
		 * Adds label for an edge item to the grid
		 */
		private _createEdgeLabelGridItem(label: PackageCore.Component, fractionsCount: number, position: SliderRange.LabelPosition, edgeLabel: SliderRange.EdgeLabel): void;

		/**
		 * Adds label for an item to the grid
		 */
		private _createLabelGridItem(label: PackageCore.Component, index: number, fractionsCount: number): void;

		/**
		 * Creates label component
		 */
		private _createLabelComponent(labelValue: (number | string | PackageCore.Translation | PackageCore.ImageMetadata | PackageCore.Component), firstOrLast?: SliderRange.EdgeLabel, position?: SliderRange.LabelPosition): PackageCore.Component;

		/**
		 * Creates container for handle label of given handle
		 */
		private _createHandleLabelContainer(handle: SliderRange.Handle): PackageCore.Component;

		/**
		 * Creates container for mixed label of current range items
		 */
		private _createMixedHandleLabelContainer(): PackageCore.JSX.Element;

		/**
		 * Creates handle label of given handle
		 */
		private _createHandleLabel(handle: (SliderRange.Handle | null), mixed?: boolean): PackageCore.Component;

		/**
		 * Parses input into internal representation of SliderRange items
		 */
		private _parseItems(items: (SliderRange.ValuesObject | globalThis.Array<string> | globalThis.Array<number> | globalThis.Array<object>)): globalThis.Array<SliderRange.Item>;

		/**
		 * Handles change of the selected range
		 */
		private _handleSelectedRangeChanged(previousRange: globalThis.Array<SliderRange.Item>, range: globalThis.Array<SliderRange.Item>, reason: (string | symbol)): void;

		/**
		 * Handles change of one of the selected items
		 */
		private _handleSelectedItemChanged(handle: SliderRange.Handle, previousItem: SliderRange.Item, item: SliderRange.Item, reason: (string | symbol)): void;

		/**
		 * Handles movement of a handle
		 */
		private _handleHandleMoved(handle: SliderRange.Handle, position: number, reason: (string | symbol)): void;

		/**
		 * Handles mouse click or touch tap
		 */
		private _handleClick(message: object, result: object): void;

		/**
		 * Handles motion of handle
		 */
		private _handleMove(message: object): void;

		/**
		 * Handles release of handle
		 */
		private _handleRelease(): void;

		/**
		 * Moves label that mixes both start and end values
		 */
		private _setMixedHandleLabelVisibility(): void;

		/**
		 * Initializes last moved handle variable
		 */
		private _initLastMovedHandle(): void;

		/**
		 * Gets correct main axis index for placing the edge label in grid
		 */
		private _getEdgeLabelMainAxisIndex(edgeLabel: SliderRange.EdgeLabel, rowPosition: SliderRange.LabelPosition, fractionsCount: number): number;

		/**
		 * Gets correct grid cross axis index for placing label in grid
		 */
		private _getLabelCrossAxisIndex(labelPosition: SliderRange.LabelPosition): number;

		/**
		 * Gets correct main axis alignment in grid for the edge label
		 */
		private _getEdgeLabelMainAxisAlignment(edgeLabel: SliderRange.EdgeLabel): GridPanel.Justification;

		/**
		 * Gets correct cross axis alignment in grid for the edge label
		 */
		private _getEdgeLabelCrossAxisAlignment(position: SliderRange.LabelPosition): GridPanel.Alignment;

		/**
		 * Gets correct main axis cell span for the edge label in grid
		 */
		private _getEdgeLabelMainAxisCellSpan(position: SliderRange.LabelPosition): number;

		/**
		 * Gets closest item to the given position
		 */
		private _getHandleClosestItem(mousePosition: object): SliderRange.Item;

		/**
		 * Gets closet enabled handle relative to the given position
		 */
		private _getClosestHandle(position: number): (SliderRange.Handle | null);

		/**
		 * Translates mouse position to the position on track
		 */
		private _getMouseTrackPosition(message: object, isFrameworkMessage?: boolean): number;

		/**
		 * Translates mouse position to track position with respect to handles positions
		 */
		private _getBoundedMouseTrackPosition(handleInMotion: SliderRange.Handle, oppositeHandleData: SliderRange.HandleData, mousePosition: number): number;

		/**
		 * Gets item based on a provided item information
		 */
		private _getItem(item: (string | number | PackageCore.Translation | SliderRange.Item | null)): (SliderRange.Item | null);

		/**
		 * Gets item whose location is defined by the given steps from the currently selected item
		 */
		private _getItemByDistance(handle: SliderRange.Handle, distance?: number): SliderRange.Item;

		/**
		 * Gets item with a given index
		 */
		private _getItemByIndex(handle: SliderRange.Handle, index: number): SliderRange.Item;

		/**
		 * Bounds given index into range defined by possible minimum and maximum index
		 */
		private _getBoundedItemIndex(handle: SliderRange.Handle, index: number): number;

		/**
		 * Gets longest label
		 */
		private _getLongestLabelLength(): void;

		/**
		 * Gets default position of main label line
		 */
		private _getDefaultLabelPosition(): SliderRange.LabelPosition;

		/**
		 * Returns true if the SliderRange is horizontal
		 */
		private _isHorizontal(): boolean;

		/**
		 * Returns true if SliderRange is horizontal and oriented left to right
		 */
		private _isHorizontalLtr(): boolean;

		/**
		 * Returns true if SliderRange is horizontal and oriented right to left
		 */
		private _isHorizontalRtl(): boolean;

		/**
		 * Returns true if SliderRange is vertical
		 */
		private _isVertical(): boolean;

		/**
		 * Initializes the direction
		 */
		private _initDirection(): string;

		static Event: SliderRange.EventTypes;

	}

	export namespace SliderRange {
		type Range = [SliderRange.Item, SliderRange.Item];

		interface Item {
			index: number;

			value: number;

			label: (string | number | PackageCore.Translation | PackageCore.ImageMetadata | PackageCore.Component);

			labelDisabled: boolean;

			position: number;

			ariaValueText: (string | number | PackageCore.Translation);

		}

		interface HandleData {
			element: HTMLElement;

			label: PackageCore.Component;

			item: SliderRange.Item;

			closestItem: SliderRange.Item;

			currentPosition: number;

			enabled: boolean;

		}

		interface ValuesObject {
			start: number;

			end: number;

			startRoot?: number;

			step?: number;

			labelStep?: number;

			labels?: (globalThis.Array<number> | globalThis.Array<string> | globalThis.Array<PackageCore.Translation> | globalThis.Array<PackageCore.ImageMetadata> | globalThis.Array<PackageCore.Component>);

			firstLabel?: (number | string | PackageCore.Translation | PackageCore.ImageMetadata | PackageCore.Component | null);

			lastLabel?: (number | string | PackageCore.Translation | PackageCore.ImageMetadata | PackageCore.Component | null);

		}

		interface Options extends PackageCore.Component.Options {
			selectedRange?: globalThis.Array<(string | number | SliderRange.Item)>;

			items?: (SliderRange.ValuesObject | globalThis.Array<any>);

			labelPosition?: SliderRange.LabelPosition;

			firstLabelPosition?: SliderRange.LabelPosition;

			lastLabelPosition?: SliderRange.LabelPosition;

			firstLabelVisible?: boolean;

			lastLabelVisible?: boolean;

			handleLabelVisible?: boolean;

			edgeLabelAlignment?: SliderRange.EdgeLabelAlignment;

			orientation?: SliderRange.Orientation;

			handleDisplayMember?: SliderRange.DisplayMember;

			labelDisplayMember?: SliderRange.DisplayMember;

			startHandleEnabled?: boolean;

			endHandleEnabled?: boolean;

			startHandlePresent?: boolean;

			endHandlePresent?: boolean;

			showSnapLines?: boolean;

			stickyDragging?: boolean;

			trackColor?: (string | PackageCore.Color);

			trackBackgroundCheckerboard?: boolean;

			editable?: boolean;

			readOnly?: boolean;

			bigStep?: number;

			decimalPrecision?: number;

			autoValue?: boolean;

			onRangeChanged?: SliderRange.RangeChangedCallback;

		}

		type RangeChangedCallback = (args: SliderRange.RangeChangedArgs, sender: SliderRange) => void;

		interface RangeChangedArgs {
			range: SliderRange.Range;

			previousRange: SliderRange.Range;

			reason: (string | symbol);

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			SELECTED_ITEM_CHANGED: string;

			SELECTED_RANGE_CHANGED: string;

			HANDLE_MOVED: string;

		}

		export import Orientation = Self.SliderRangeEnums.Orientation;

		enum Handle {
			START,
			END,
		}

		enum LabelPosition {
			BOTTOM,
			TOP,
			TRACK_ALIGNED,
		}

		enum EdgeLabelAlignment {
			DEFAULT,
			TRACK_END,
		}

		enum EdgeLabel {
			FIRST,
			LAST,
		}

		enum DisplayMember {
			LABEL,
			VALUE,
		}

		enum DefaultEndItem {
			LAST,
			FIRST,
		}

		enum Reason {
			ITEM_SELECTED,
			CALL,
			HANDLE_MOVED,
		}

	}

	/**
	 * Slider range control handler
	 */
	export class SliderRangeControlHandler implements PackageCore.MessageHandler {
		/**
		 * Constructs SliderRangeControlHandler
		 */
		constructor(options?: object);

		/**
		 * Attaches handler
		 */
		attach(): void;

		/**
		 * Detaches handler
		 */
		detach(): void;

		/**
		 * Processes message
		 */
		processMessage(next: PackageCore.RoutedMessage.Handler, message: PackageCore.RoutedMessage, result: PackageCore.RoutedMessage.Result): void;

	}

	export namespace SliderRangeControlHandler {
	}

	export namespace SliderRangeEnums {
		enum Orientation {
			VERTICAL,
			HORIZONTAL,
		}

	}

	/**
	 * Slider range hande
	 */
	class SliderRangeHandle extends PackageCore.Component {
		constructor(options?: SliderRangeHandle.Options);

	}

	namespace SliderRangeHandle {
		interface Options extends PackageCore.Component.Options {
			description: string;

			pressed: boolean;

			readOnly: boolean;

		}

	}

	/**
	 * Slider range track
	 */
	class SliderRangeTrack extends PackageCore.Component {
		constructor(options?: SliderRangeTrack.Options);

		/**
		 * Returns true if SliderRangeTrack is horizontal and oriented left to right
		 */
		private _isHorizontalLtr(): boolean;

		/**
		 * Returns true if SliderRangeTrack is horizontal and oriented right to left
		 */
		private _isHorizontalRtl(): boolean;

		/**
		 * Creates track snap lines element
		 */
		private _createSnaplineElements(): PackageCore.JSX.Element;

		/**
		 * Creates track base element
		 */
		private _createBaseElement(): PackageCore.JSX.Element;

		/**
		 * Creates track fill element
		 */
		private _createFillElement(): PackageCore.JSX.Element;

	}

	namespace SliderRangeTrack {
		interface Options extends PackageCore.Component.Options {
			color: (PackageCore.Color | string);

			endHandle: SliderRangeHandle;

			startHandle: SliderRangeHandle;

			snapLinesCount: number;

			snapLinesVisible: boolean;

			orientation: SliderRangeTrack.Orientation;

			checkerBoard: boolean;

		}

		export import Orientation = Self.SliderRangeEnums.Orientation;

	}

	export namespace SortComparator {
		interface Property {
			propertyName: string;

			comparator: PackageCore.Comparator.Function;

			ascending: boolean;

			nullFirst: boolean;

		}

		/**
		 * Create a comparator that compares a particular property of two objects
		 */
		function ofObjectProperty(propertyName: string, comparator: PackageCore.Comparator.Function): PackageCore.Comparator.Function;

		/**
		 * Create a comparator for multiple object properties
		 */
		function ofObjectProperties(directions: globalThis.Array<SortComparator.Property>): PackageCore.Comparator.Function;

	}

	/**
	 * Split button
	 */
	export class SplitButton extends PackageCore.Component {
		/**
		 * Constructs SplitButton
		 */
		constructor(options?: SplitButton.Options);

		/**
		 * The main action
		 */
		action: Button.ActionCallback;

		/**
		 * Gets label text
		 */
		label: string;

		/**
		 * Check if the button has a text label
		 */
		hasLabel: boolean;

		/**
		 * Change button icon
		 */
		icon: (PackageCore.ImageMetadata | null);

		/**
		 * Check if the button has an icon
		 */
		hasIcon: boolean;

		/**
		 * Icon position
		 */
		iconPosition: SplitButton.IconPosition;

		/**
		 * Set size of button
		 */
		size: SplitButton.Size;

		/**
		 * Set size of button
		 */
		type: SplitButton.Type;

		/**
		 * Set size of button
		 */
		hierarchy: SplitButton.Hierarchy;

		/**
		 * Check if the menu is opened
		 */
		menuOpened: boolean;

		/**
		 * Gets menu
		 */
		menu: (globalThis.Array<any> | Menu);

		/**
		 * Gets hover menu opening behaviour
		 */
		openOnHover: boolean;

		/**
		 * True if thu button is toggled
		 */
		toggled: boolean;

		/**
		 * Sets label text
		 */
		setLabel(label: string): void;

		/**
		 * Sets icon
		 */
		setIcon(icon: object): void;

		/**
		 * Icon position
		 */
		setIconPosition(position: Button.IconPosition): void;

		/**
		 * Set size of button
		 */
		setSize(size: Button.Size): void;

		/**
		 * Get/Set size of button
		 */
		setType(type: Button.Size): void;

		/**
		 * Set hierarchy of button
		 */
		setHierarchy(hierarchy: Button.Hierarchy): void;

		/**
		 * Sets menu
		 */
		setMenu(menu: (globalThis.Array<any> | Menu)): void;

		/**
		 * Opens button menu
		 */
		openMenu(args?: object): void;

		/**
		 * Closes opened button menu
		 */
		closeMenu(args?: object): void;

		/**
		 * Invokes main button click
		 */
		click(): void;

		static Event: SplitButton.EventTypes;

	}

	export namespace SplitButton {
		interface Options extends PackageCore.Component.Options {
			action?: Button.ActionCallback;

			hierarchy?: SplitButton.Hierarchy;

			icon?: Image.Source;

			iconPosition?: SplitButton.IconPosition;

			label?: (null | string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

			menu: (globalThis.Array<any> | Menu);

			size?: SplitButton.Size;

			type?: SplitButton.Type;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			ACTION: string;

			MENU_OPENED: string;

			MENU_CLOSED: string;

		}

		export import Size = Self.Button.Size;

		export import IconPosition = Self.Button.IconPosition;

		export import Type = Self.Button.Type;

		export import Hierarchy = Self.Button.Hierarchy;

		export import VisualStyle = Self.Button.VisualStyle;

	}

	/**
	 * Split Panel splits the available space into resizable sections. Each section contains a single component.
	 */
	export class SplitPanel extends PackageCore.Component {
		/**
		 * Constructs SplitPanel
		 */
		constructor(options?: SplitPanel.Options);

		/**
		 * Array of items
		 */
		items: globalThis.Array<SplitPanelItem>;

		/**
		 * JSX children
		 */
		children: PackageCore.VDom.Children;

		/**
		 * List of panel components
		 */
		components: globalThis.Array<PackageCore.Component>;

		/**
		 * Split panel orientation
		 */
		orientation: SplitPanel.Orientation;

		/**
		 * Get the number of items in the container
		 */
		length: number;

		/**
		 * Check if the panel is empty
		 */
		empty: boolean;

		/**
		 * Panel decorator
		 */
		decorator: (PackageCore.Decorator | null);

		/**
		 * Add item
		 */
		add(component: SplitPanel.ItemConfiguration): SplitPanel;

		/**
		 * Remove item
		 */
		remove(component: (PackageCore.Component | number)): SplitPanel;

		/**
		 * Remove all items
		 */
		clear(): SplitPanel;

		/**
		 * Set orientation
		 */
		setOrientation(orientation: SplitPanel.Orientation): void;

		/**
		 * Sets panel decorator
		 */
		setDecorator(decorator: (PackageCore.Decorator | null)): void;

		/**
		 * Gets the SplitPanelItem for a given component
		 */
		itemForComponent(component: PackageCore.Component): SplitPanelItem;

		/**
		 * Gets the index of a contained component
		 */
		indexForComponent(component: PackageCore.Component): (number | null);

		/**
		 * Horizontal SplitPanel JSX component
		 */
		static Horizontal(props: SplitPanel.Options): PackageCore.JSX.Element;

		/**
		 * Vertical SplitPanel JSX component
		 */
		static Vertical(props: SplitPanel.Options): PackageCore.JSX.Element;

		/**
		 * SplitPanel item JSX component
		 */
		static Item(props?: SplitPanel.JsxItemProps): PackageCore.JSX.Element;

		static Event: SplitPanel.EventTypes;

	}

	export namespace SplitPanel {
		interface Options extends PackageCore.Component.Options {
			items?: globalThis.Array<SplitPanel.ItemConfiguration>;

			orientation?: SplitPanel.Orientation;

			decorator?: PackageCore.Decorator;

			element?: SplitPanel.Element;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			ITEM_ADDED: string;

			ITEM_REMOVED: string;

			ITEM_RESIZE_STARTED: string;

			ITEM_RESIZE_FINISHED: string;

			ITEM_RESIZED: string;

		}

		interface BaseItemProps {
			value?: any;

			collapse?: SplitPanel.ItemCollapse;

			handleStyle?: SplitPanel.HandleStyle;

			maxSize?: (string | number);

			minSize?: (string | number);

			resizable?: boolean;

			size?: (SplitPanelItem.SizeOptions | string | number);

		}

		interface ItemProps extends SplitPanel.BaseItemProps {
		}

		interface JsxItemProps extends SplitPanel.BaseItemProps {
			key?: any;

		}

		interface StructuredItemConfiguration {
			component: PackageCore.Component;

			options?: SplitPanel.ItemProps;

		}

		interface FlatItemConfiguration extends SplitPanel.ItemProps {
			component: PackageCore.Component;

		}

		type ItemConfiguration = (PackageCore.Component | SplitPanel.StructuredItemConfiguration | SplitPanel.FlatItemConfiguration);

		export import Orientation = Self.SplitPanelItem.Orientation;

		export import ItemSize = Self.SplitPanelItem.Size;

		export import HandleStyle = Self.SplitPanelItem.HandleStyle;

		export import ItemCollapse = Self.SplitPanelItem.Collapse;

		export import Element = PackageCore.Html.Element.Section;

	}

	export class SplitPanelItem extends PackageCore.Component {
		/**
		 * Constructs SplitPanelItem
		 */
		constructor(options?: SplitPanelItem.Options);

		/**
		 * The associated component
		 */
		component: PackageCore.Component;

		/**
		 * JSX children
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Item value
		 */
		value: any;

		/**
		 * Item size
		 */
		size: SplitPanel.ItemSize;

		/**
		 * Minimum item size
		 */
		minSize: (string | number);

		/**
		 * Maximum item size
		 */
		maxSize: (string | number);

		/**
		 * Resize handle style
		 */
		handleStyle: SplitPanel.HandleStyle;

		/**
		 * Direction to collapse when adjacent resize handle is clicked
		 */
		collapse: SplitPanel.ItemCollapse;

		/**
		 * True if the item is collapsed
		 */
		collapsed: boolean;

		/**
		 * True if user can resize the item
		 */
		resizable: boolean;

		/**
		 * Effective resizability
		 */
		effectiveResizable: boolean;

		/**
		 * Collapse item
		 */
		setCollapsed(value: boolean): void;

		static Event: SplitPanelItem.EventTypes;

	}

	export namespace SplitPanelItem {
		interface Options extends PackageCore.Component.Options {
			collapse?: SplitPanel.ItemCollapse;

			component: PackageCore.Component;

			value?: any;

			handleStyle?: SplitPanel.HandleStyle;

			maxSize?: (string | number);

			minSize?: (string | number);

			resizable?: boolean;

			size?: (SplitPanelItem.SizeOptions | string | number);

		}

		interface SizeOptions {
			grow: number;

			shrink: number;

			basis: (number | string);

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			RESIZE_STARTED: string;

			RESIZE_UPDATE: string;

			RESIZE_FINISHED: string;

		}

		enum Orientation {
			HORIZONTAL,
			VERTICAL,
		}

		enum Size {
			AUTO_SIZE,
			INITIAL_SIZE,
			FRACTION_SIZE,
			CONTENT_SIZE,
		}

		enum HandleStyle {
			GRAB_BEFORE,
			GRAB_AFTER,
			STRIP,
			TRANSPARENT,
		}

		enum Collapse {
			NONE,
			START,
			END,
		}

	}

	/**
	 * StackPanel stacks child components horizontally or vertically. StackPanel can grow (limited by maximal size) or can wrap its content in multiple rows/columns. Stack panel does not resize child components, it always lets the sizing up to the child component.
	 */
	export class StackPanel extends PackageCore.Component {
		/**
		 * Constructs StackPanel
		 */
		constructor(options?: StackPanel.Options);

		/**
		 * Array of items in layout order
		 */
		items: globalThis.Array<StackPanelItem>;

		/**
		 * Returns the list of components in the order they appear on the screen
		 */
		components: globalThis.Array<PackageCore.Component>;

		/**
		 * Alias for components property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Get the number of items in the container
		 */
		length: number;

		/**
		 * Returns true if the StackPanel is empty
		 */
		empty: boolean;

		/**
		 * Stack panel orientation
		 */
		orientation: StackPanel.Orientation;

		/**
		 * Enable/disable stack panel wrapping
		 */
		wrap: (boolean | StackPanel.Wrap);

		/**
		 * Justification behavior in the main axis
		 */
		justification: StackPanel.Justification;

		/**
		 * Alignment behavior in the cross axis
		 */
		alignment: StackPanel.Alignment;

		/**
		 * Alignment of wrapped rows / columns
		 */
		wrappedContentAlignment: StackPanel.WrappedContentAlignment;

		/**
		 * Space around content
		 */
		outerGap: (StackPanel.GapSize | StackPanel.GapSizeObject);

		/**
		 * Space around content
		 */
		itemGap: StackPanel.GapSize;

		/**
		 * Space between wrapped items
		 */
		wrapGap: StackPanel.GapSize;

		/**
		 * Panel decorator
		 */
		decorator: (PackageCore.Decorator | null);

		/**
		 * Root element type
		 */
		element: StackPanel.Element;

		/**
		 * Default item options
		 */
		defaultItemOptions: StackPanel.ItemProps;

		/**
		 * Adds items
		 */
		add(components: (StackPanel.ItemConfiguration | globalThis.Array<StackPanel.ItemConfiguration>)): StackPanel;

		/**
		 * Removes items
		 */
		remove(componentOrIndex: (PackageCore.Component | number | globalThis.Array<(PackageCore.Component | number)>)): StackPanel;

		/**
		 * Moves item to a different index
		 */
		move(args: {component: (PackageCore.Component | number); index: number; reason?: string}): StackPanel;

		/**
		 * Removes all components
		 */
		clear(): StackPanel;

		/**
		 * Replaces one component with another
		 */
		replace(currentComponentOrIndex: (PackageCore.Component | number), newComponent: PackageCore.Component): void;

		/**
		 * Checks if component is contained in the StackPanel
		 */
		has(component: PackageCore.Component): boolean;

		/**
		 * Gets item at a specific index
		 */
		itemAtIndex(index: number): StackPanelItem;

		/**
		 * Gets the StackPanelItem for a given component
		 */
		itemForComponent(component: PackageCore.Component): StackPanelItem;

		/**
		 * Gets the index of a contained component
		 */
		indexForComponent(component: PackageCore.Component): (number | null);

		/**
		 * Sets orientation
		 */
		setOrientation(value: StackPanel.Orientation): void;

		/**
		 * Toggles wrapping
		 */
		setWrap(value: (boolean | StackPanel.Wrap)): void;

		/**
		 * Sets content justification
		 */
		setJustification(value: StackPanel.Justification): void;

		/**
		 * Sets content alignment
		 */
		setAlignment(value: StackPanel.Alignment): void;

		/**
		 * Sets wrapped content alignment
		 */
		setWrappedContentAlignment(value: StackPanel.WrappedContentAlignment): void;

		/**
		 * Sets space around content
		 */
		setOuterGap(value: StackPanel.GapSize): void;

		/**
		 * Sets space between items
		 */
		setItemGap(value: StackPanel.GapSize): void;

		/**
		 * Sets panel decorator
		 */
		setDecorator(decorator: (PackageCore.Decorator | null)): void;

		/**
		 * Horizontal StackPanel factory method
		 */
		static horizontal(items?: (object | globalThis.Array<PackageCore.Component> | globalThis.Array<StackPanelItem.Options>)): StackPanel;

		/**
		 * Horizontal StackPanel for use in VDom/JSX
		 */
		static Horizontal(props: StackPanel.Options): PackageCore.JSX.Element;

		/**
		 * Horizontal reverse StackPanel for use in VDom/JSX
		 */
		static HorizontalReverse(props: StackPanel.Options): PackageCore.JSX.Element;

		/**
		 * Vertical StackPanel factory method
		 */
		static vertical(items?: (object | globalThis.Array<PackageCore.Component> | globalThis.Array<StackPanelItem.Options>)): StackPanel;

		/**
		 * Vertical StackPanel for use in VDom/JSX
		 */
		static Vertical(props: StackPanel.Options): PackageCore.JSX.Element;

		/**
		 * Vertical reverse StackPanel for use in VDom/JSX
		 */
		static VerticalReverse(props: StackPanel.Options): PackageCore.JSX.Element;

		/**
		 * Create horizontal StackPanel with two items and justification SPACE_BETWEEN
		 */
		static horizontalSplit(start: StackPanel.ItemConfiguration, end: StackPanel.ItemConfiguration, options?: StackPanel.Options): void;

		/**
		 * Create horizontal StackPanel with two items and justification SPACE_BETWEEN
		 */
		static HorizontalSplit(props: StackPanel.Options): PackageCore.JSX.Element;

		/**
		 * Create vertical StackPanel with two items and justification SPACE_BETWEEN
		 */
		static verticalSplit(start: StackPanel.ItemConfiguration, end: StackPanel.ItemConfiguration, options?: StackPanel.Options): void;

		/**
		 * Create vertical StackPanel with two items and justification SPACE_BETWEEN
		 */
		static VerticalSplit(props: StackPanel.Options): PackageCore.JSX.Element;

		static getStyles(): void;

		static Event: StackPanel.EventTypes;

		/**
		 * StackPanel item JSX component
		 */
		static Item(props?: StackPanel.JsxItemProps): PackageCore.JSX.Element;

	}

	export namespace StackPanel {
		interface Options extends PackageCore.Component.Options {
			alignment?: StackPanel.Alignment;

			decorator?: PackageCore.Decorator;

			defaultItemOptions?: StackPanel.ItemProps;

			itemGap?: StackPanel.GapSize;

			wrapGap?: StackPanel.GapSize;

			items?: (StackPanel.ItemConfiguration | globalThis.Array<StackPanel.ItemConfiguration>);

			justification?: StackPanel.Justification;

			orientation?: StackPanel.Orientation;

			outerGap?: (StackPanel.GapSize | StackPanel.GapSizeObject);

			wrap?: boolean;

			element?: StackPanel.Element;

			wrappedContentAlignment?: StackPanel.WrappedContentAlignment;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			ITEM_ADDED: string;

			ITEM_REMOVED: string;

			ITEM_MOVED: string;

		}

		interface BaseItemProps {
			grow?: number;

			shrink?: number;

			basis?: string;

			selfAlignment?: StackPanelItem.SelfAlignment;

		}

		interface ItemProps extends StackPanel.BaseItemProps {
			index?: number;

		}

		interface JsxItemProps extends StackPanel.BaseItemProps {
			key?: any;

		}

		interface StructuredItemConfiguration {
			component: PackageCore.Component;

			options?: StackPanel.ItemProps;

		}

		interface FlatItemConfiguration extends StackPanel.ItemProps {
			component: PackageCore.Component;

		}

		interface GapSizeObject {
			top?: StackPanel.GapSize;

			bottom?: StackPanel.GapSize;

			start?: StackPanel.GapSize;

			end?: StackPanel.GapSize;

			horizontal?: StackPanel.GapSize;

			vertical?: StackPanel.GapSize;

		}

		type ItemConfiguration = (PackageCore.Component | StackPanel.StructuredItemConfiguration | StackPanel.FlatItemConfiguration);

		/**
		 * Stack panel orientation
		 */
		enum Orientation {
			HORIZONTAL,
			HORIZONTAL_REVERSE,
			VERTICAL,
			VERTICAL_REVERSE,
		}

		/**
		 * Item alignment in the main axis
		 */
		enum Justification {
			START,
			END,
			CENTER,
			SPACE_AROUND,
			SPACE_BETWEEN,
			SPACE_EVENLY,
		}

		/**
		 * Item alignment in the cross axis
		 */
		enum Alignment {
			NORMAL,
			START,
			END,
			CENTER,
			STRETCH,
			BASELINE,
		}

		/**
		 * Item wrapping mode
		 */
		enum Wrap {
			NO_WRAP,
			WRAP,
			WRAP_REVERSE,
		}

		export import Element = PackageCore.Html.Element.Section;

		export import SelfAlignment = Self.StackPanelItem.SelfAlignment;

		/**
		 * Item alignment in the cross axis
		 */
		enum WrappedContentAlignment {
			START,
			END,
			CENTER,
			STRETCH,
			SPACE_AROUND,
			SPACE_BETWEEN,
		}

		export import GapSize = Self.GapSize;

		enum VisualStyle {
			BLOCK,
			INLINE,
			PLAIN,
		}

		export import ItemOptions = Self.StackPanelItemLayout;

		export import Decorator = PackageCore.Decorator;

	}

	/**
	 * StackPanel item
	 */
	export class StackPanelItem {
		/**
		 * Constructs StackPanelItem
		 */
		constructor(options?: StackPanelItem.Options);

		/**
		 * The associated component
		 */
		component: PackageCore.Component;

		/**
		 * Item alignment
		 */
		selfAlignment: StackPanelItem.SelfAlignment;

		/**
		 * Grow factor
		 */
		grow: number;

		/**
		 * Shrink factor
		 */
		shrink: number;

		/**
		 * Flex basis
		 */
		basis: string;

		/**
		 * Item index
		 */
		index: number;

		/**
		 * Set item alignment
		 */
		setSelfAlignment(value: StackPanelItem.SelfAlignment): void;

		/**
		 * Set grow factor
		 */
		setGrow(value: number): void;

		/**
		 * Set shrink factor
		 */
		setShrink(value: number): void;

		/**
		 * Set flex basis
		 */
		setBasis(value: string): void;

	}

	export namespace StackPanelItem {
		interface Options {
			component: PackageCore.Component;

			grow?: number;

			shrink?: number;

			basis?: string;

			selfAlignment?: StackPanelItem.SelfAlignment;

			index?: number;

		}

		enum SelfAlignment {
			START,
			END,
			CENTER,
			STRETCH,
			AUTO,
		}

	}

	namespace StackPanelItemLayout {
		const FILL_SPACE: StackPanel.ItemProps;

		const EQUAL_SIZE: StackPanel.ItemProps;

		const KEEP_SIZE: StackPanel.ItemProps;

		function FRACTION_SIZE(fraction: number): StackPanel.ItemProps;

	}

	/**
	 * Helper functions to create standardized windows
	 */
	namespace StandardWindow {
	}

	export namespace StaticDataListViewFactory {
		/**
		 * Returns a datasource containing all items (pagination is done by the ListPresenter).
		 */
		type DataProvider = () => PackageCore.DataSource;

		/**
		 * The FilterHandler callback should be used in cases where there's data source, which doesn't support filtering or filtering functionality has some limits. Typically, this is case for the TreeDataSource, where the data source can be infinite and child accessor is not a public property.
		 */
		type FilterHandler = (dataSource: PackageCore.DataSource, predicate: (item: any) => boolean, currentState: any, oldState: any) => PackageCore.DataSource;

		interface Options extends ListView.Options {
			parentContext?: PackageCore.Context;

			dataProvider: StaticDataListViewFactory.DataProvider;

			filterHandler?: StaticDataListViewFactory.FilterHandler;

		}

		/**
		 * Create ListView instance for client side data provider
		 */
		function createView(ListView: any, options: StaticDataListViewFactory.Options): ListView;

	}

	/**
	 * Static container for list items
	 */
	class StaticListView extends PackageCore.Component {
		/**
		 * Constructs StaticListView
		 */
		constructor();

		/**
		 * Enable/disable sticky group headers
		 */
		stickyGroupHeaders: boolean;

		/**
		 * Name of dataItem property to be used as automationId for groups
		 */
		groupAutomationIdMember: (string | null);

		/**
		 * Scrolls to given item
		 */
		scrollTo(item: object): void;

		static Event: StaticListView.EventTypes;

	}

	namespace StaticListView {
		interface EventTypes extends PackageCore.Component.EventTypes {
			SCROLL_TO_END: string;

		}

	}

	/**
	 * Static container for tree view items
	 */
	class StaticTreeContainer extends PackageCore.Component {
		/**
		 * Constructs StaticTreeContainer
		 */
		constructor();

	}

	namespace StaticTreeContainer {
	}

	/**
	 * Stepper component
	 */
	export class Stepper extends PackageCore.Component {
		constructor(options?: Stepper.Options);

		/**
		 * Alias for items property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Stepper items
		 */
		items: globalThis.Array<object>;

		/**
		 * Index of currently selected step
		 */
		selectedStepIndex: (number | null);

		/**
		 * Stepper item orientation
		 */
		orientation: Stepper.Orientation;

		/**
		 * Item label position
		 */
		labelPosition: Stepper.LabelPosition;

		/**
		 * Item description position
		 */
		descriptionPosition: Stepper.DescriptionPosition;

		/**
		 * Separator size
		 */
		separatorSize: Stepper.SeparatorSize;

		/**
		 * Item label generator
		 */
		labelGenerator: (index: number, options: object) => (string | number | PackageCore.Translation | PackageCore.JSX.Element | PackageCore.Component);

		/**
		 * Item description generator
		 */
		descriptionGenerator: (index: number, options: object) => (string | number | PackageCore.Translation | PackageCore.JSX.Element | PackageCore.Component);

		/**
		 * Default item options
		 */
		defaultItemOptions: object;

		/**
		 * Index of currently selected step
		 * @deprecated 
		 */
		currentStep: (StepperItem | null);

		/**
		 * Flag if items stretch to fit given space
		 * @deprecated 
		 */
		stretch: boolean;

		/**
		 * Flag if any of the items is active
		 * @deprecated 
		 */
		activated: boolean;

		/**
		 * Selection changed callback
		 */
		onSelectionChanged: (Stepper.SelectionChangedCallback | null);

		/**
		 * Sets items
		 */
		setItems(items: globalThis.Array<object>, activeStep?: number): void;

		/**
		 * Sets current selected step
		 */
		setSelectedStepIndex(index: number, reason: (string | symbol)): void;

		/**
		 * Sets the separator size to stretch/default size
		 * @deprecated 
		 */
		setStretch(value: boolean): void;

		/**
		 * Horizontal Stepper for use in VDom/JSX
		 */
		static Horizontal(props: Stepper.Options): PackageCore.JSX.Element;

		/**
		 * Vertical Stepper for use in VDom/JSX
		 */
		static Vertical(props: Stepper.Options): PackageCore.JSX.Element;

		/**
		 * Stepper.Item
		 */
		static Item: StepperItem;

		static Event: Stepper.EventTypes;

		/**
		 * Default label generator
		 */
		static defaultLabelGenerator(index: number, props: object): (PackageCore.JSX.Element | string);

		/**
		 * Default label generator
		 */
		static defaultDescriptionGenerator(index: number, props: object): PackageCore.Translation;

	}

	export namespace Stepper {
		interface Options extends PackageCore.Component.Options {
			orientation?: Stepper.Orientation;

			descriptionPosition?: Stepper.DescriptionPosition;

			separatorSize?: Stepper.SeparatorSize;

			selectedStepIndex: (number | null);

			labelGenerator?: (index: number, options: object) => ((number | string | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element));

			descriptionGenerator?: (index: number, options: object) => ((number | string | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element));

			defaultItemOptions?: object;

			onSelectionChanged?: Stepper.SelectionChangedCallback;

		}

		type SelectionChangedCallback = (args: Stepper.SelectionChangedArgs, sender: Stepper) => void;

		interface SelectionChangedArgs {
			stepIndex: number;

			previousStepIndex: number;

			reason: Stepper.Reason;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			SELECTED_STEP_INDEX_CHANGED: symbol;

			STEP_ACTIVATED: string;

			STEP_DEACTIVATED: string;

		}

		export import Orientation = Self.StepperItem.Orientation;

		export import LabelPosition = Self.StepperItem.LabelPosition;

		export import DescriptionPosition = Self.StepperItem.DescriptionPosition;

		export import SeparatorSize = Self.StepperItem.SeparatorSize;

		export import ItemType = Self.StepperItem.Type;

		enum Reason {
			CALL,
		}

		enum I18N {
			STEP,
		}

	}

	/**
	 * StepperItem component
	 */
	export class StepperItem extends PackageCore.Component {
		constructor(options?: StepperItem.Options);

		/**
		 * Item label
		 */
		label: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Old item label
		 * @deprecated 
		 */
		name: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Item description
		 */
		description: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Item message
		 * @deprecated 
		 */
		message: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Alias for description property that is used by virtual DOM and JSX
		 */
		children: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

		/**
		 * Item orientation
		 */
		orientation: StepperItem.Orientation;

		/**
		 * Item label position
		 */
		labelPosition: StepperItem.LabelPosition;

		/**
		 * Item description position
		 */
		descriptionPosition: StepperItem.DescriptionPosition;

		/**
		 * Item separator size
		 */
		separatorSize: StepperItem.SeparatorSize;

		/**
		 * Item type
		 */
		type: StepperItem.Type;

		/**
		 * Flag if item has start separator
		 */
		separatorStart: boolean;

		/**
		 * Flag if item has end separator
		 */
		separatorEnd: boolean;

		/**
		 * Flag marking if the item is selected
		 */
		selected: boolean;

		/**
		 * Alias for flag marking if the item is selected
		 * @deprecated 
		 */
		activated: boolean;

		/**
		 * Flag marking if the item is optional
		 */
		optional: boolean;

		/**
		 * Callback that determines if the step can be activated
		 */
		onActivate: (item: StepperItem, index: number) => boolean;

		/**
		 * Callback that determines if the step can be deactivated
		 */
		onDeactivate: (item: StepperItem, index: number) => boolean;

		/**
		 * Numerical item index
		 */
		index: number;

		/**
		 * Numerical item value (equals index + 1)
		 * @deprecated 
		 */
		ordinal: number;

		static Event: StepperItem.EventTypes;

	}

	export namespace StepperItem {
		interface Options extends PackageCore.Component.Options {
			label?: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

			message?: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

			orientation?: StepperItem.Orientation;

			descriptionPosition?: StepperItem.DescriptionPosition;

			separatorSize?: StepperItem.SeparatorSize;

			type?: StepperItem.Type;

			separatorStart?: boolean;

			separatorEnd?: boolean;

			selected?: boolean;

			optional?: boolean;

			onActivate?: (item: StepperItem, index: number) => boolean;

			onDeactivate?: (item: StepperItem, index: number) => boolean;

			index: number;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			STEP_ACTIVATED: symbol;

			STEP_DEACTIVATED: symbol;

		}

		enum Reason {
			CALL,
			ENTER,
			CLICK,
		}

		enum Orientation {
			VERTICAL,
			HORIZONTAL,
		}

		enum DescriptionPosition {
			TOP,
			BOTTOM,
			START,
			END,
		}

		/**
		 * @deprecated 
		 */
		enum LabelPosition {
			TOP,
			BOTTOM,
			START,
			END,
		}

		enum Type {
			DEFAULT,
			NEUTRAL,
			PRIMARY,
			INFO,
			SUCCESS,
			WARNING,
			ERROR,
		}

		enum SeparatorSize {
			NONE,
			XS,
			S,
			M,
			L,
			XL,
			STRETCH,
		}

	}

	/**
	 * Helper for loading UIF Studio components
	 */
	export namespace Studio {
		interface Project {
			components: object;

		}

		/**
		 * Construct a component from a UIF Studio project
		 */
		function Component(props: {project: Studio.Project; component: string; bundles?: globalThis.Array<any>}): (props?: object) => PackageCore.Component;

	}

	/**
	 * Summary box component
	 */
	export class SummaryBox extends PackageCore.Component {
		constructor(options?: SummaryBox.Options);

		/**
		 * Summary box title
		 */
		title: (string | number | PackageCore.Translation);

		/**
		 * Summary box is collapsed
		 */
		collapsed: boolean;

		/**
		 * Summary box is collapsible
		 */
		collapsible: boolean;

		/**
		 * Summary box currency
		 */
		currency: (string | number | PackageCore.Translation | null);

		/**
		 * Alias for items property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * SummaryBox item JSX component
		 */
		static Item(props?: SummaryBoxItem.Options): PackageCore.JSX.Element;

		/**
		 * SummaryBox total JSX component
		 */
		static Total(props?: SummaryBoxTotal.Options): PackageCore.JSX.Element;

	}

	export namespace SummaryBox {
		interface Options extends PackageCore.Component.Options {
			collapsed?: boolean;

			collapsible?: boolean;

			currency?: (string | number | PackageCore.Translation);

			title: (string | number | PackageCore.Translation);

		}

		export import Color = Self.SummaryBoxItem.Color;

	}

	export function SummaryBoxItem(options?: SummaryBoxItem.Options): void;

	export namespace SummaryBoxItem {
		interface Options {
			label: (string | number | PackageCore.Translation);

			color?: SummaryBoxItem.Color;

			icon?: Image.Source;

			value: (string | number | PackageCore.Translation);

		}

		enum Color {
			NEUTRAL,
			INFO,
			SUCCESS,
			WARNING,
			ERROR,
		}

	}

	export function SummaryBoxTotal(options?: SummaryBoxTotal.Options): void;

	export namespace SummaryBoxTotal {
		interface Options {
			label: (string | number | PackageCore.Translation);

			value: (string | number | PackageCore.Translation);

		}

	}

	/**
	 * Simple simple clickable component with a toggleable internal boolean state
	 */
	export class Switch extends PackageCore.Component {
		/**
		 * Constructs Switch
		 */
		constructor(options?: Switch.Options);

		/**
		 * Current value (state)
		 */
		value: boolean;

		/**
		 * Icon displayed when the value is true
		 */
		iconOn: PackageCore.ImageMetadata;

		/**
		 * Icon displayed when the value is false
		 */
		iconOff: PackageCore.ImageMetadata;

		/**
		 * States if the Switch is in read-only state
		 */
		readOnly: boolean;

		/**
		 * Toggle action
		 */
		action: (Switch.ActionCallback | null);

		/**
		 * Get/set the label text
		 */
		label: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element | null);

		/**
		 * Get/set the label position
		 */
		labelPosition: Switch.LabelPosition;

		/**
		 * True if clicking the label should toggle the switch
		 */
		clickableLabel: boolean;

		/**
		 * True if the switch label is empty
		 */
		emptyLabel: boolean;

		/**
		 * This is the id of the input element. Can be used in Label component.
		 */
		inputId: string;

		/**
		 * Returns attributes of the input element
		 */
		inputAttributes: PackageCore.HtmlAttributeList;

		/**
		 * Sets the switch value
		 */
		setValue(value: boolean, options?: {reason?: (string | symbol)}): void;

		/**
		 * Toggles the switch value
		 */
		toggle(options?: object): void;

		static Event: Switch.EventTypes;

	}

	export namespace Switch {
		interface Options extends PackageCore.Component.Options {
			iconOff?: PackageCore.ImageMetadata;

			iconOn?: PackageCore.ImageMetadata;

			readOnly?: boolean;

			value?: boolean;

			action?: Switch.ActionCallback;

			clickableLabel?: boolean;

			label?: (string | number | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

			labelPosition?: Switch.LabelPosition;

		}

		type ActionCallback = (args: Switch.ActionArgs, sender: Switch) => void;

		interface ActionArgs {
			value: boolean;

			previousValue: boolean;

			reason: string;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			TOGGLED: string;

		}

		enum Reason {
			SETTER,
			CLICK,
			KEY_PRESS,
		}

		enum LabelPosition {
			LEFT,
			RIGHT,
			ABOVE,
			BELOW,
		}

		enum VisualStyle {
			STANDALONE,
			EMBEDDED,
		}

	}

	/**
	 * System header
	 */
	class SystemHeader extends PackageCore.Component {
		constructor(options?: SystemHeader.Options);

		/**
		 * Logos to display
		 */
		logos: globalThis.Array<PackageCore.JSX.Element>;

		/**
		 * Enable separator line under logo
		 */
		withSeparator: boolean;

	}

	namespace SystemHeader {
		interface Options extends PackageCore.Component.Options {
			logos?: globalThis.Array<PackageCore.JSX.Element>;

			withSeparator?: boolean;

		}

	}

	/**
	 * System search
	 */
	class SystemSearch {
		/**
		 * Add new item that will be part of the page search
		 */
		addPageSearchItem(item: SearchableItem, options: SearchableItemOptions): void;

		/**
		 * Add new items that will be part of the page search
		 */
		addPageSearchItems(items: globalThis.Array<SearchableItem>, options: SearchableItemOptions): void;

		/**
		 * Remove item form the page search
		 */
		removePageSearchItem(itemId: string): void;

	}

	namespace SystemSearch {
		interface Options {
			searchTermValidator?: () => boolean;

			showResultsDelay?: number;

			globalSearch?: object;

			pageSearch?: object;

		}

	}

	/**
	 * Base class for layout headers
	 */
	export class Tab extends PackageCore.Component {
		/**
		 * Constructor
		 */
		constructor(options?: Tab.Options);

		/**
		 * Header label
		 */
		label: (string | PackageCore.Translation);

		/**
		 * Editor of label
		 */
		labelEditor: (InlineEditor | null);

		/**
		 * Get/set allow label editing
		 */
		allowLabelEditing: boolean;

		/**
		 * Icon of header
		 */
		icon: object;

		/**
		 * Gets context controls
		 */
		contextControls: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

		/**
		 * Sets context controls
		 */
		actionControls: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

		/**
		 * The associated value
		 */
		value: any;

		/**
		 * Flag whether header is selected
		 */
		selected: boolean;

		/**
		 * Default selected. This can be used to set the default value of selected prop in virtual DOM and JSX.
		 */
		defaultSelected: boolean;

		/**
		 * Flag whether tab can be closed
		 */
		closable: boolean;

		/**
		 * Get access key
		 */
		accessKey: string;

		/**
		 * Access shortcut
		 */
		accessShortcut: PackageCore.KeyShortcut;

		/**
		 * Content id
		 */
		contentId: string;

		/**
		 * Editor options
		 */
		editorOptions: InlineEditor.Options;

		/**
		 * Flag marking an item will be dropped before this item
		 */
		dropBefore: boolean;

		/**
		 * Flag marking an item will be dropped after this item
		 */
		dropAfter: boolean;

		/**
		 * Sets label
		 */
		setLabel(label: string, reason?: string): void;

		/**
		 * Sets icon
		 */
		setIcon(icon: (PackageCore.ImageMetadata | null)): void;

		/**
		 * Mark Tab as selected
		 */
		setSelected(selected: boolean, reason?: any): void;

		/**
		 * Set access key
		 */
		setAccessKey(key: string): void;

		/**
		 * Make the Tab closeable
		 */
		setClosable(closable: boolean): void;

		static Event: Tab.EventTypes;

	}

	export namespace Tab {
		interface Options extends PackageCore.Component.Options {
			value?: any;

			icon?: Image.Source;

			label: (string | PackageCore.Translation);

			contextControls?: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

			actionControls?: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

			selected?: boolean;

			defaultSelected?: boolean;

			closable?: boolean;

			accessKey?: string;

			allowLabelEditing?: boolean;

			editorOptions?: InlineEditor.Options;

			hierarchy?: Tab.Hierarchy;

			position?: Tab.Position;

			stripePosition?: Tab.StripePosition;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			LABEL_CHANGED: string;

			LABEL_EDITING_STARTED: string;

			LABEL_EDITING_FINISHED: string;

			SELECTED: string;

			CLOSE: string;

		}

		export import VisualStyle = Self.TabPanelOptions.VisualStyle;

		export import Hierarchy = Self.TabPanelOptions.Hierarchy;

		export import Position = Self.TabPanelOptions.TabPosition;

		export import StripePosition = Self.TabPanelOptions.TabStripePosition;

		export import Reason = Self.TabPanelOptions.Reason;

	}

	class TabListDragSource {
		/**
		 * Constructs TabListDragSource
		 */
		constructor();

	}

	namespace TabListDragSource {
	}

	class TabListDragTarget {
		/**
		 * Constructs TabListDragTarget
		 */
		constructor(tabList: (ScrollTabList));

	}

	namespace TabListDragTarget {
	}

	/**
	 * TabPanel is a container that has multiple panes, but shows only one pane at a time.  There are a set of tabs corresponding to each pane, where each tab has the label of the pane, and optionally a close button.
	 */
	export class TabPanel extends PackageCore.Component {
		/**
		 * Constructs TabPanel
		 */
		constructor(options?: TabPanel.Options);

		/**
		 * Array of items in layout order
		 */
		items: globalThis.Array<TabPanelItem>;

		/**
		 * Returns the list of components in the order they appear on the screen
		 */
		components: globalThis.Array<PackageCore.Component>;

		/**
		 * Root element type
		 */
		element: TabPanel.Element;

		/**
		 * Alias for components property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Get the number of items in the container
		 */
		length: number;

		/**
		 * Returns true if the container is empty
		 */
		empty: boolean;

		/**
		 * Position of tab list
		 */
		tabPosition: TabPanel.TabPosition;

		/**
		 * Position of tab's color stripe
		 */
		tabStripePosition: TabPanel.TabStripePosition;

		/**
		 * Position of tab list
		 */
		tabJustification: TabPanel.TabPosition;

		/**
		 * True if tabs in tabpanel can be reordered using drag
		 */
		tabReorder: boolean;

		/**
		 * Get/Set hierarchy of TabPanel
		 */
		hierarchy: TabPanel.Hierarchy;

		/**
		 * Selected value
		 */
		selectedValue: any;

		/**
		 * Selected component
		 */
		selectedComponent: PackageCore.Component;

		/**
		 * Selected item
		 */
		selectedItem: (TabPanelItem | null);

		/**
		 * Index of the currently selected component
		 */
		selectedIndex: number;

		/**
		 * Space around panel
		 */
		outerGap: (TabPanel.GapSize | TabPanel.GapSizeObject);

		/**
		 * Space around tabs
		 */
		tabsGap: (TabPanel.GapSize | TabPanel.GapSizeObject);

		/**
		 * Space around content
		 */
		contentGap: (TabPanel.GapSize | TabPanel.GapSizeObject);

		/**
		 * Panel decorator
		 */
		decorator: (PackageCore.Decorator | null);

		/**
		 * Default item options
		 */
		defaultItemOptions: TabPanel.ItemProps;

		/**
		 * Set the selected value
		 */
		setSelectedValue(value: any, args?: {reason?: string}): void;

		/**
		 * Adds items
		 */
		add(component: (TabPanel.ItemConfiguration | globalThis.Array<TabPanel.ItemConfiguration>)): TabPanel;

		/**
		 * Removes items
		 */
		remove(componentOrIndex: (PackageCore.Component | number | globalThis.Array<(PackageCore.Component | number)>)): TabPanel;

		/**
		 * Moves item at specific index
		 */
		move(args: {component: (PackageCore.Component | number); index: number; reason?: string}): TabPanel;

		/**
		 * Removes all components
		 */
		clear(): TabPanel;

		/**
		 * Replaces one component with another
		 */
		replace(currentComponent: (PackageCore.Component | number), newComponent: PackageCore.Component): TabPanel;

		/**
		 * Checks if component is contained in the container
		 */
		has(component: PackageCore.Component): boolean;

		/**
		 * Gets the TabPanelItem for a given component
		 */
		itemForComponent(component: PackageCore.Component): (TabPanelItem | null);

		/**
		 * Gets item at a specific index
		 */
		itemAtIndex(index: number): (TabPanelItem | null);

		/**
		 * Selects provided component
		 */
		select(component: (PackageCore.Component | number), reason?: string): void;

		/**
		 * Returns true is given child is selected
		 */
		isSelected(component: PackageCore.Component): boolean;

		/**
		 * Select first tab
		 */
		selectFirst(reason?: string): void;

		/**
		 * Select first tab
		 */
		selectLast(reason?: string): void;

		/**
		 * Select the next child
		 */
		selectNext(reason?: string): void;

		/**
		 * Select the previous child
		 */
		selectPrevious(reason?: string): void;

		/**
		 * Set space around panel
		 */
		setOuterGap(value: TabPanel.GapSize): void;

		/**
		 * Set space around tabs
		 */
		setTabsGap(value: TabPanel.GapSize): void;

		/**
		 * Set space around content
		 */
		setContentGap(value: TabPanel.GapSize): void;

		/**
		 * Set panel decorator
		 */
		setDecorator(decorator: (PackageCore.Decorator | null)): void;

		/**
		 * Gets tab assigned to component
		 */
		getTab(component: PackageCore.Component): (Tab | null);

		/**
		 * Default tab label updater
		 */
		static TabLabelUpdater(args: object): void;

		/**
		 * TabPanel item JSX component
		 */
		static Item(props: TabPanel.JsxItemProps): PackageCore.JSX.Element;

		static Event: TabPanel.EventTypes;

	}

	export namespace TabPanel {
		interface BaseItemProps {
			value?: any;

			icon?: Image.Source;

			label?: (string | PackageCore.Translation);

			contextControls?: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

			actionControls?: globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)>;

			closable?: boolean;

			accessKey?: string;

			allowLabelEditing?: boolean;

			editorOptions?: InlineEditor.Options;

		}

		interface ItemProps extends TabPanel.BaseItemProps {
			selected?: boolean;

		}

		interface JsxItemProps extends TabPanel.BaseItemProps {
			key?: any;

			ref?: PackageCore.VDomRef;

		}

		interface GapSizeObject {
			top?: TabPanel.GapSize;

			bottom?: TabPanel.GapSize;

			start?: TabPanel.GapSize;

			end?: TabPanel.GapSize;

			horizontal?: TabPanel.GapSize;

			vertical?: TabPanel.GapSize;

		}

		interface Options extends PackageCore.Component.Options {
			hierarchy?: TabPanel.Hierarchy;

			items?: (TabPanel.ItemConfiguration | globalThis.Array<TabPanel.ItemConfiguration>);

			selectedValue?: any;

			onBeforeTabClose?: (tab: Tab) => boolean;

			tabJustification?: TabPanel.TabJustification;

			tabPosition?: TabPanel.TabPosition;

			tabStripePosition?: TabPanel.TabStripePosition;

			tabReorder?: boolean;

			outerGap?: (TabPanel.GapSize | TabPanel.GapSizeObject);

			tabsGap?: (TabPanel.GapSize | TabPanel.GapSizeObject);

			contentGap?: (TabPanel.GapSize | TabPanel.GapSizeObject);

			defaultItemOptions?: TabPanel.ItemProps;

			tabListOptions?: ScrollTabList.Options;

			decorator?: PackageCore.Decorator;

			element?: TabPanel.Element;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			ITEM_ADDED: string;

			ITEM_REMOVED: string;

			ITEM_MOVED: string;

			ITEM_SELECTED: string;

			TAB_SELECTED: string;

			TAB_CLOSED: string;

			TAB_REORDER: string;

			TAB_LABEL_EDITING_STARTED: string;

			TAB_LABEL_EDITING_FINISHED: string;

			TAB_LABEL_CHANGED: string;

		}

		interface StructuredItemConfiguration {
			component: PackageCore.Component;

			options?: TabPanel.ItemProps;

		}

		interface FlatItemConfiguration extends TabPanel.ItemProps {
			component: PackageCore.Component;

		}

		type ItemConfiguration = (PackageCore.Component | TabPanel.StructuredItemConfiguration | TabPanel.FlatItemConfiguration);

		export import TabPosition = Self.TabPanelOptions.TabPosition;

		export import TabStripePosition = Self.TabPanelOptions.TabStripePosition;

		export import TabJustification = Self.TabPanelOptions.TabJustification;

		export import TabOverflow = Self.TabPanelOptions.TabOverflow;

		export import Hierarchy = Self.TabPanelOptions.Hierarchy;

		export import GapSize = Self.GapSize;

		export import Decorator = PackageCore.Decorator;

		enum ContentUpdateReason {
			ITEM_ADDED,
			ITEM_REMOVED,
			ITEM_MOVED,
			ITEM_SELECTED,
			SELECTED_VALUE_CHANGED,
			TAB_LIST_POSITION_CHANGED,
		}

		export import Reason = Self.TabPanelOptions.Reason;

		export import Element = PackageCore.Html.Element.Section;

	}

	/**
	 * Tab panel item
	 */
	export class TabPanelItem {
		/**
		 * Constructs TabPanelItem
		 */
		constructor(options: object);

		/**
		 * Gets item component
		 */
		component: PackageCore.Component;

		/**
		 * Gets item tab button
		 */
		tab: Tab;

		/**
		 * Gets selected state of item
		 */
		selected: boolean;

		/**
		 * Gets closable of item
		 */
		closable: boolean;

		/**
		 * Gets tab icon
		 */
		icon: Image.Source;

		/**
		 * Gets tab label
		 */
		label: (string | PackageCore.Translation);

		/**
		 * Gets tab context controls
		 */
		contextControls: globalThis.Array<PackageCore.Component>;

		/**
		 * Gets tab action controls
		 */
		actionControls: globalThis.Array<PackageCore.Component>;

		/**
		 * Gets tab access shortcut
		 */
		accessShortcut: PackageCore.KeyShortcut;

		/**
		 * Sets selected state of item
		 */
		setSelected(value: boolean): void;

		/**
		 * Sets closable of item
		 */
		setClosable(value: boolean): void;

		/**
		 * Sets tab icon
		 */
		setIcon(icon: Image.Source, reason: string): void;

		/**
		 * Sets tab label
		 */
		setLabel(label: (string | PackageCore.Translation)): void;

	}

	export namespace TabPanelItem {
	}

	namespace TabPanelOptions {
		/**
		 * Tab hierarchy
		 */
		enum Hierarchy {
			PRIMARY,
			SECONDARY,
		}

		/**
		 * Position of tabs
		 */
		enum TabPosition {
			TOP,
			BOTTOM,
			LEFT,
			RIGHT,
		}

		/**
		 * Position of tabs color stripe
		 */
		enum TabStripePosition {
			START,
			END,
		}

		/**
		 * Justification of tabs
		 */
		enum TabJustification {
			START,
			STRETCH,
			END,
		}

		/**
		 * Tab overflow strategy
		 */
		enum TabOverflow {
			SCROLL,
			POPUP,
		}

		/**
		 * Tab panel visual styles
		 */
		enum VisualStyle {
			STANDALONE,
			LEGACY,
		}

		/**
		 * Reason of change
		 */
		enum Reason {
			CALL,
			CLICK,
			ACCESS_KEY,
			KEY_DOWN,
			ITEM_ADDED,
			ITEM_REMOVED,
			DRAG,
			LABEL_SYNC,
		}

	}

	/**
	 * Table component - renders proper HTML table
	 */
	export class Table extends PackageCore.Component {
		/**
		 * Constructs Table
		 */
		constructor(options?: Table.Options);

		/**
		 * Alias for table content that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Table caption
		 */
		caption: (string | null);

		/**
		 * Table header
		 */
		header: (globalThis.Array<any> | null);

		/**
		 * Table body
		 */
		body: globalThis.Array<globalThis.Array<any>>;

		/**
		 * Table footer
		 */
		footer: (globalThis.Array<any> | null);

		/**
		 * Renders table caption
		 */
		private renderTableCaption(): PackageCore.JSX.Element;

		/**
		 * Renders table header
		 */
		private renderTableHeader(): PackageCore.JSX.Element;

		/**
		 * Renders table body
		 */
		private renderTableBody(): PackageCore.JSX.Element;

		/**
		 * Renders table footer
		 */
		private renderTableFooter(): PackageCore.JSX.Element;

		/**
		 * Renders body cell
		 */
		private renderCell(cellOptions: (string | number | PackageCore.Translation | PackageCore.Component | object), cellType: symbol): PackageCore.JSX.Element;

		/**
		 * Renders  table
		 */
		private renderTable(): globalThis.Array<PackageCore.JSX.Element>;

		/**
		 * Normalizes content for DOM
		 */
		private normalizeContent(content: any): globalThis.Array<(PackageCore.Component | string)>;

		/**
		 * Header functional component for use in VDom/JSX
		 */
		static Header(args: {classList?: (string | globalThis.Array<string> | PackageCore.Style | globalThis.Array<PackageCore.Style>); rootStyle?: object; rootAttributes?: object; children?: PackageCore.VDom.Children}): PackageCore.JSX.Element;

		/**
		 * Body functional component for use in VDom/JSX
		 */
		static Body(args: {classList?: (string | globalThis.Array<string> | PackageCore.Style | globalThis.Array<PackageCore.Style>); rootStyle?: object; rootAttributes?: object; children?: PackageCore.VDom.Children}): PackageCore.JSX.Element;

		/**
		 * Footer functional component for use in VDom/JSX
		 */
		static Footer(args: {classList?: (string | globalThis.Array<string> | PackageCore.Style | globalThis.Array<PackageCore.Style>); rootStyle?: object; rootAttributes?: object; children?: PackageCore.VDom.Children}): PackageCore.JSX.Element;

		/**
		 * Row functional component for use in VDom/JSX
		 */
		static Row(args: {classList?: (string | globalThis.Array<string> | PackageCore.Style | globalThis.Array<PackageCore.Style>); rootStyle?: object; rootAttributes?: object; children?: PackageCore.VDom.Children}): PackageCore.JSX.Element;

		/**
		 * HeaderCell functional component for use in VDom/JSX
		 */
		static HeaderCell(args: {classList?: (string | globalThis.Array<string> | PackageCore.Style | globalThis.Array<PackageCore.Style>); rootStyle?: object; rootAttributes?: object; children?: PackageCore.VDom.Children}): PackageCore.JSX.Element;

		/**
		 * Cell functional component for use in VDom/JSX
		 */
		static Cell(args: {classList?: (string | globalThis.Array<string> | PackageCore.Style | globalThis.Array<PackageCore.Style>); rootStyle?: object; rootAttributes?: object; children?: PackageCore.VDom.Children}): PackageCore.JSX.Element;

		/**
		 * Caption functional component for use in VDom/JSX
		 */
		static Caption(args: {classList?: (string | globalThis.Array<string> | PackageCore.Style | globalThis.Array<PackageCore.Style>); rootStyle?: object; rootAttributes?: object; children?: PackageCore.VDom.Children}): PackageCore.JSX.Element;

	}

	export namespace Table {
		interface Options extends PackageCore.Component.Options {
			body?: (globalThis.Array<globalThis.Array<any>> | null);

			caption?: (string | Text | null);

			footer?: (globalThis.Array<any> | null);

			header?: (globalThis.Array<any> | null);

		}

	}

	/**
	 * Templated cell
	 */
	export class TemplatedCell extends GridCell {
		/**
		 * Constructs TemplatedCell
		 */
		constructor(options: TemplatedCell.Options);

	}

	export namespace TemplatedCell {
		interface Options extends GridCell.Options {
		}

	}

	/**
	 * Templated column
	 */
	export class TemplatedColumn extends GridColumn {
		/**
		 * Constructs TemplatedColumn
		 */
		constructor(options?: TemplatedColumn.Options);

		/**
		 * Content provider function
		 */
		content: (TemplatedColumn.ContentCallback | null);

		/**
		 * Provider of value for copy&paste
		 */
		copyValueProvider: (TemplatedColumn.CopyValueProvider | null);

	}

	export namespace TemplatedColumn {
		interface Options extends GridColumn.Options {
			content: TemplatedColumn.ContentCallback;

			copyValueProvider?: TemplatedColumn.CopyValueProvider;

		}

		type ContentCallback = (args: TemplatedColumn.ContentArgs) => (PackageCore.Component | PackageCore.JSX.Element);

		interface ContentArgs {
			cell: TemplatedCell;

			context: any;

		}

		type CopyValueProvider = (cell: TemplatedCell) => (string | Element);

		export import Cell = Self.TemplatedCell;

	}

	/**
	 * Text component - creates a block of text enclosed in span tag
	 */
	export class Text extends PackageCore.Component {
		/**
		 * Constructs Text
		 */
		constructor(options?: (Text.Options | string | number | PackageCore.Translation));

		/**
		 * Text content
		 */
		text: (string | number | PackageCore.Translation);

		/**
		 * Alias for text property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Text type
		 */
		type: Text.Type;

		/**
		 * Text size
		 */
		size: (Text.Size | null);

		/**
		 * Text weight
		 */
		weight: (Text.Weight | null);

		/**
		 * Text color
		 */
		color: (Text.Color | null);

		/**
		 * Font style
		 */
		fontStyle: (Text.FontStyle | null);

		/**
		 * Text decoration
		 */
		decoration: (Text.Decoration | null);

		/**
		 * Component decorator
		 */
		decorator: (PackageCore.Decorator | null);

		/**
		 * State of wrapping
		 */
		wrap: (boolean | number);

		/**
		 * State of whitespace
		 */
		whitespace: boolean;

		/**
		 * Gets ellipsis helper
		 */
		ellipsisHelper: EllipsisTooltip;

		/**
		 * Sets text content
		 */
		setText(text: (string | number | PackageCore.Translation)): void;

		/**
		 * Sets text type
		 */
		setType(type: Text.Type): void;

		/**
		 * Set wrapping
		 */
		setWrap(value: (boolean | number)): void;

		/**
		 * Set whitespace value
		 */
		setWhitespace(value: boolean): void;

		/**
		 * Set text decorator
		 */
		setDecorator(decorator: (PackageCore.Decorator | null)): void;

	}

	export namespace Text {
		interface KeyboardOptions {
			inverse?: boolean;

		}

		interface Options extends PackageCore.Component.Options {
			decorator?: PackageCore.Decorator;

			text?: (string | number | PackageCore.Translation);

			type?: Text.Type;

			color?: Text.Color;

			size?: Text.Size;

			weight?: Text.Weight;

			fontStyle?: Text.FontStyle;

			decoration?: Text.Decoration;

			whitespace?: boolean;

			wrap?: (boolean | number);

		}

		enum Size {
			XXS,
			XS,
			S,
			M,
			L,
			XL,
			XXL,
		}

		enum Weight {
			NORMAL,
			SEMI_BOLD,
			BOLD,
		}

		enum Color {
			PRIMARY,
			SECONDARY,
		}

		enum Type {
			DEFAULT,
			STRONG,
			WEAK,
		}

		enum FontStyle {
			NORMAL,
			ITALIC,
		}

		enum Decoration {
			NONE,
			UNDERLINE,
		}

	}

	/**
	 * A TextArea component, typically used for retrieving user's multi-line input.
	 */
	export class TextArea extends PackageCore.Component implements PackageCore.InputComponent {
		/**
		 * Constructs TextArea
		 */
		constructor(options?: TextArea.Options);

		/**
		 * Gets actual string value. Converts number value to string.
		 */
		text: string;

		/**
		 * Gets the default text value. This value is used only once when creating the text area.
		 */
		defaultText: (string | number);

		/**
		 * Gets name.
		 */
		name: string;

		/**
		 * Last accepted text
		 */
		acceptedText: string;

		/**
		 * Returns the formatted text, if there is a formatter
		 */
		formattedText: string;

		/**
		 * Gets placeholder string.
		 */
		placeholder: (string | PackageCore.Translation);

		/**
		 * Gets maximal allowed text length. If text length exceeds new max value then it will be trimmed. Negative value clears the maxLength constraint
		 */
		maxLength: number;

		/**
		 * Max length indicator
		 */
		maxLengthIndicator: boolean;

		/**
		 * Returns true if the displayed text is empty
		 */
		empty: boolean;

		/**
		 * Returns true if the text area is mandatory
		 */
		mandatory: boolean;

		/**
		 * Gets current selection
		 */
		selection: TextArea.Selection;

		/**
		 * Gets current caret position
		 */
		caretPosition: number;

		/**
		 * True if the component has length restriction
		 */
		hasMaxLength: boolean;

		/**
		 * Reflects the underlying element's autocomplete attribute
		 */
		autoComplete: (TextArea.AutoComplete | string);

		/**
		 * Text alignment
		 */
		textAlignment: TextArea.TextAlignment;

		/**
		 * Globally unique input id
		 */
		inputId: string;

		/**
		 * Returns root attributes of the input element
		 */
		inputAttributes: PackageCore.HtmlAttributeList;

		/**
		 * Gets rows of the textarea.
		 */
		rowCount: number;

		/**
		 * Gets columns of the textarea.
		 */
		columnCount: number;

		/**
		 * Gets resizability of the textarea.
		 */
		resizable: boolean;

		/**
		 * Text formatter
		 */
		formatter: (TextArea.FormatterCallback | null);

		/**
		 * Text validator
		 */
		textValidator: (TextArea.TextValidatorCallback | null);

		/**
		 * Key validator
		 */
		keyValidator: (TextArea.KeyValidatorCallback | null);

		/**
		 * Size of the component
		 */
		size: TextArea.Size;

		/**
		 * Text changed callback
		 */
		onTextChanged: (TextArea.TextChangedCallback | null);

		/**
		 * Text accepted callback
		 */
		onTextAccepted: (TextArea.TextAcceptedCallback | null);

		/**
		 * Set text
		 */
		setText(text: (string | number), options?: {reason?: string; accept?: boolean}): boolean;

		/**
		 * Set name
		 */
		setName(name: string): void;

		/**
		 * Sets selection
		 */
		setSelection(options: {start: number; end: number; direction?: TextArea.SelectionDirection; reason?: string}): boolean;

		/**
		 * Set caret position
		 */
		setCaretPosition(position: number): void;

		/**
		 * Set max length of the input
		 */
		setMaxLength(maxLength: number): boolean;

		/**
		 * Enable/disable max length indicator
		 */
		setMaxLengthIndicator(value: boolean): void;

		/**
		 * Set the mandatory flag
		 */
		setMandatory(mandatory: boolean): void;

		/**
		 * Set the placeholder string
		 */
		setPlaceholder(placeholder: (string | PackageCore.Translation)): void;

		/**
		 * Sets row count
		 */
		setRowCount(rowCount: number): void;

		/**
		 * Sets column count
		 */
		setColumnCount(columnCount: number): void;

		/**
		 * Sets text alignment
		 */
		setTextAlignment(alignment: TextArea.TextAlignment): void;

		/**
		 * Set the auto complete value
		 */
		setAutoComplete(value: string): void;

		/**
		 * Sets resizable
		 */
		setResizable(resizable: boolean): void;

		/**
		 * Select the whole text
		 */
		selectAll(): void;

		/**
		 * Promote current text to accepted text
		 */
		acceptChanges(options: {reason?: string}): void;

		static Event: TextArea.EventTypes;

	}

	export namespace TextArea {
		interface Options extends PackageCore.Component.Options {
			acceptInvalidValue?: boolean;

			autoComplete?: string;

			columnCount?: number;

			formatter?: TextArea.FormatterCallback;

			keyValidator?: TextArea.KeyValidatorCallback;

			maxLength?: number;

			maxLengthIndicator?: boolean;

			placeholder?: (string | PackageCore.Translation);

			resizable?: boolean;

			resizeDirection?: TextArea.ResizeDirection;

			rowCount?: number;

			text?: (string | number);

			defaultText?: (string | number);

			textAlignment?: TextArea.TextAlignment;

			textValidator?: TextArea.TextValidatorCallback;

			mandatory?: boolean;

			size?: TextArea.Size;

			onTextChanged?: TextArea.TextChangedCallback;

			onTextAccepted?: TextArea.TextAcceptedCallback;

		}

		type TextChangedCallback = (args: TextArea.TextChangedArgs, sender: TextArea) => void;

		interface TextChangedArgs {
			text: string;

			previousText: string;

			reason: TextArea.TextChangeReason;

		}

		type TextAcceptedCallback = (args: TextArea.TextAcceptedArgs, sender: TextArea) => void;

		interface TextAcceptedArgs {
			text: string;

			previousText: string;

			reason: TextArea.TextAcceptedReason;

		}

		type TextValidatorCallback = (args: {text: string}) => boolean;

		type KeyValidatorCallback = (args: {keyCode: number; charCode: number; char: string; text: string; selection: TextArea.Selection}) => boolean;

		interface Selection {
			start: number;

			end: number;

		}

		type FormatterCallback = (args: {text: string; valid: boolean}) => string;

		interface EventTypes extends PackageCore.Component.EventTypes {
			TEXT_CHANGED: string;

			TEXT_ACCEPTED: string;

			SELECTION_CHANGED: string;

			CARET_POSITION_CHANGED: string;

			AREA_RESIZED: string;

		}

		enum VisualStyle {
			DEFAULT,
			EMBEDDED,
		}

		enum AutoComplete {
			ON,
			OFF,
		}

		enum TextAlignment {
			LEFT,
			RIGHT,
			CENTER,
		}

		enum TextChangeReason {
			INPUT,
			MAX_LENGTH,
		}

		enum TextAcceptedReason {
			FOCUS_OUT,
			ENTER,
			CALL,
		}

		enum SelectionChangeReason {
			SELECT_ALL,
			TEXT_CHANGED,
			REFRESH,
		}

		enum ResizeDirection {
			BOTH,
			HORIZONTAL,
			VERTICAL,
		}

		enum SelectionDirection {
			FORWARD,
			BACKWARD,
		}

		export import Size = Self.InputSize;

	}

	/**
	 * Text area cell
	 */
	export class TextAreaCell extends GridCell {
		/**
		 * Constructs TextAreaCell
		 */
		constructor();

		/**
		 * True to allow text area resizing
		 */
		resizableEditor: boolean;

		/**
		 * True if popup editing is enabled
		 */
		popupEdit: boolean;

		/**
		 * Initial height of the popup window
		 */
		popupHeight: number;

		/**
		 * Formatter function
		 */
		formatter: (((args: {cell: TextAreaCell; text: string}) => string) | null);

		/**
		 * Wrap text
		 */
		wrap: boolean;

		/**
		 * Id of the popup overlay
		 */
		overlayGuid: string;

		/**
		 * TextArea reference
		 */
		textArea: (TextArea | null);

		/**
		 * TextArea options
		 */
		widgetOptions: (TextArea.Options | GridCell.WidgetOptionsCallback<TextArea.Options>);

	}

	export namespace TextAreaCell {
	}

	/**
	 * Text area column
	 */
	export class TextAreaColumn extends GridColumn {
		/**
		 * Constructs TextAreaColumn
		 */
		constructor(options?: TextAreaColumn.Options);

		/**
		 * True to allow text area resizing
		 */
		resizableEditor: boolean;

		/**
		 * True if popup editing is enabled
		 */
		popupEdit: boolean;

		/**
		 * Initial height of the popup window
		 */
		popupHeight: number;

		/**
		 * Formatter function
		 */
		formatter: (TextAreaColumn.FormatterCallback | null);

		/**
		 * Wrap text
		 */
		wrap: boolean;

		/**
		 * TextArea options
		 */
		widgetOptions: (TextArea.Options | GridColumn.WidgetOptionsCallback<TextArea.Options> | null);

	}

	export namespace TextAreaColumn {
		interface Options extends GridColumn.Options {
			resizableEditor?: boolean;

			popupEdit?: boolean;

			popupHeight?: number;

			formatter?: TextAreaColumn.FormatterCallback;

			wrap?: boolean;

			widgetOptions?: (TextArea.Options | GridColumn.WidgetOptionsCallback<TextArea.Options>);

		}

		type FormatterCallback = (args: TextAreaColumn.FormatterArgs) => string;

		interface FormatterArgs {
			cell: TextAreaCell;

			text: string;

		}

		export import Cell = Self.TextAreaCell;

	}

	/**
	 * Text box component
	 */
	export class TextBox extends PackageCore.Component implements PackageCore.InputComponent {
		/**
		 * Constructs TextBox
		 */
		constructor(options?: TextBox.Options);

		/**
		 * Gets actual string value. Converts number value to string.
		 */
		text: string;

		/**
		 * Gets the default text value. This value is used only once when creating the text box.
		 */
		defaultText: (string | number);

		/**
		 * Gets text box name
		 */
		name: string;

		/**
		 * Last accepted text
		 */
		acceptedText: string;

		/**
		 * Returns the formatted text, if there is a formatter
		 */
		formattedText: string;

		/**
		 * Gets placeholder string.
		 */
		placeholder: (string | PackageCore.Translation);

		/**
		 * Gets maximal allowed text length. If text length exceeds new max value then it will be trimmed. Negative value clears the maxLength constraint
		 */
		maxLength: number;

		/**
		 * Max length indicator
		 */
		maxLengthIndicator: boolean;

		/**
		 * Returns true if the displayed text is empty
		 */
		empty: boolean;

		/**
		 * Returns true if the input is mandatory
		 */
		mandatory: boolean;

		/**
		 * Gets current selection
		 */
		selection: TextBox.Selection;

		/**
		 * Gets current caret position
		 */
		caretPosition: number;

		/**
		 * True if the component has length restriction
		 */
		hasMaxLength: boolean;

		/**
		 * Reflects the underlying element's autocomplete attribute
		 */
		autoComplete: (TextBox.AutoComplete | string);

		/**
		 * Text alignment
		 */
		textAlignment: TextBox.TextAlignment;

		/**
		 * Show clear button
		 */
		clearButton: boolean;

		/**
		 * Gets inputSize of the input.
		 */
		inputSize: number;

		/**
		 * Get/set input type
		 */
		type: TextBox.Type;

		/**
		 * Internal input component
		 */
		input: PackageCore.Component;

		/**
		 * Globally unique input id
		 */
		inputId: string;

		/**
		 * Input attributes
		 */
		inputAttributes: PackageCore.HtmlAttributeList;

		/**
		 * Text formatter
		 */
		formatter: (TextBox.FormatterCallback | null);

		/**
		 * Text validator
		 */
		textValidator: (TextBox.TextValidatorCallback | null);

		/**
		 * Icon
		 */
		icon: (PackageCore.ImageMetadata | PackageCore.Component | PackageCore.JSX.Element | null);

		/**
		 * Icon alignment
		 */
		iconAlignment: TextBox.IconAlignment;

		/**
		 * Icon action
		 */
		iconAction: (((args: object) => void) | null);

		/**
		 * Key validator
		 */
		keyValidator: (TextBox.KeyValidatorCallback | null);

		/**
		 * Show tooltip on text overflow
		 */
		overflowTooltip: boolean;

		/**
		 * Value to add or subtract from numeric input by spinner controls
		 */
		spinner: (number | object | null);

		/**
		 * Confirmation callback that handles the press of the ENTER key
		 */
		confirm: (TextBox.ConfirmCallback | null);

		/**
		 * Size of the component
		 */
		size: TextBox.Size;

		/**
		 * Returns true if the text overflows the box
		 */
		overflowsHorizontally: (boolean | null);

		/**
		 * Text changed callback
		 */
		onTextChanged: (TextBox.TextChangedCallback | null);

		/**
		 * Text accepted callback
		 */
		onTextAccepted: (TextBox.TextAcceptedCallback | null);

		/**
		 * Set text
		 */
		setText(text: (string | number), options?: {reason?: string; accept?: boolean}): boolean;

		/**
		 * Set name
		 */
		setName(name: string): void;

		/**
		 * Clear text in input
		 */
		clear(reason?: string): void;

		/**
		 * Sets selection
		 */
		setSelection(options: {start: number; end: number; direction?: TextBox.SelectionDirection; reason?: string}): boolean;

		/**
		 * Set caret position
		 */
		setCaretPosition(position: number): void;

		/**
		 * Set max length of the input
		 */
		setMaxLength(maxLength: number): void;

		/**
		 * Enable/disable max length indicator
		 */
		setMaxLengthIndicator(value: boolean): void;

		/**
		 * Set the mandatory flag
		 */
		setMandatory(mandatory: boolean): void;

		/**
		 * Set the placeholder string
		 */
		setPlaceholder(placeholder: (string | PackageCore.Translation)): void;

		/**
		 * Set the size of the input
		 */
		setInputSize(size: number): void;

		/**
		 * Set the text alignment
		 */
		setTextAlignment(alignment: TextBox.TextAlignment): void;

		/**
		 * Set the type of the input
		 */
		setType(type: TextBox.Type): void;

		/**
		 * Set the auto complete value
		 */
		setAutoComplete(value: (string | TextBox.AutoComplete)): void;

		/**
		 * Enable/disable clear button
		 */
		setClearButton(value: boolean): void;

		/**
		 * Set the confirmation callback
		 */
		setConfirm(confirm: (TextBox.ConfirmCallback | null)): void;

		/**
		 * Set spinner value
		 */
		setSpinner(spinner: (number | object | null)): void;

		/**
		 * Select the whole text
		 */
		selectAll(): boolean;

		/**
		 * Promote current text to accepted text
		 */
		acceptChanges(options: {reason?: string}): void;

		/**
		 * Sets icon alignment
		 */
		setIconAlignment(value: TextBox.IconAlignment): void;

		/**
		 * Sets icon
		 */
		setIcon(value: (PackageCore.ImageMetadata | PackageCore.Component | HTMLElement)): void;

		/**
		 * Helper method for creating search text box
		 */
		static createSearchBox(options: TextBox.Options): TextBox;

		/**
		 * JSX component that renders a search text box
		 */
		static Search(props: TextBox.Options): PackageCore.JSX.Element;

		/**
		 * Helper method for creating login text box
		 */
		static createLoginBox(options: TextBox.Options): TextBox;

		/**
		 * JSX component that renders a login text box
		 */
		static Login(props: TextBox.Options): PackageCore.JSX.Element;

		/**
		 * Helper method for creating password text box
		 */
		static createPasswordBox(options: TextBox.Options): TextBox;

		/**
		 * JSX component that renders a password text box
		 */
		static Password(props: TextBox.Options): PackageCore.JSX.Element;

		static Event: TextBox.EventTypes;

	}

	export namespace TextBox {
		interface Options extends PackageCore.Component.Options {
			acceptInvalidValue?: boolean;

			autoComplete?: string;

			ariaLabel?: string;

			clearButton?: boolean;

			formatter?: TextBox.FormatterCallback;

			icon?: (PackageCore.ImageMetadata | PackageCore.Component | PackageCore.JSX.Element);

			iconAction?: (args: object) => void;

			iconAlignment?: TextBox.IconAlignment;

			inputSize?: number;

			inputAttributes?: object;

			keyValidator?: TextBox.KeyValidatorCallback;

			maxLength?: number;

			maxLengthIndicator?: boolean;

			mandatory?: boolean;

			name?: string;

			overflowTooltip?: boolean;

			placeholder?: (string | PackageCore.Translation);

			text?: (string | number);

			defaultText?: (string | number);

			textAlignment?: TextBox.TextAlignment;

			textValidator?: TextBox.TextValidatorCallback;

			confirm?: TextBox.ConfirmCallback;

			type?: TextBox.Type;

			spinner?: (number | object);

			size?: TextBox.Size;

			onTextChanged?: TextBox.TextChangedCallback;

			onTextAccepted?: TextBox.TextAcceptedCallback;

		}

		type TextChangedCallback = (args: TextBox.TextChangedArgs, sender: TextBox) => void;

		interface TextChangedArgs {
			text: string;

			previousText: string;

			reason: TextBox.TextChangeReason;

		}

		type TextAcceptedCallback = (args: TextBox.TextAcceptedArgs, sender: TextBox) => void;

		interface TextAcceptedArgs {
			text: string;

			previousText: string;

			reason: TextBox.TextAcceptedReason;

		}

		type TextValidatorCallback = (args: {text: string}) => boolean;

		type KeyValidatorCallback = (args: {keyCode: number; charCode: number; char: string; text: string; selection: TextBox.Selection}) => boolean;

		type FormatterCallback = (args: {text: string; valid: boolean}) => string;

		type ConfirmCallback = (args: {text: string}) => boolean;

		interface Selection {
			start: number;

			end: number;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			TEXT_CHANGED: string;

			TEXT_ACCEPTED: string;

			SELECTION_CHANGED: string;

			CARET_POSITION_CHANGED: string;

		}

		enum VisualStyle {
			DEFAULT,
			EMBEDDED,
			SYSTEM_HEADER,
		}

		enum Reason {
			CLEAR,
		}

		enum AutoComplete {
			ON,
			OFF,
		}

		enum TextAlignment {
			LEFT,
			RIGHT,
			CENTER,
		}

		enum TextChangeReason {
			INPUT,
			MAX_LENGTH,
		}

		enum TextAcceptedReason {
			FOCUS_OUT,
			ENTER,
			CALL,
		}

		enum SelectionChangeReason {
			SELECT_ALL,
			TEXT_CHANGED,
			REFRESH,
		}

		enum IconAlignment {
			START,
			END,
		}

		enum Type {
			TEXT,
			NUMBER,
			PASSWORD,
			FILE,
			EMAIL,
			URL,
		}

		enum SelectionDirection {
			FORWARD,
			BACKWARD,
		}

		export import Size = Self.InputSize;

	}

	/**
	 * Text box cell
	 */
	export class TextBoxCell extends GridCell {
		/**
		 * Constructs TextBoxCell
		 */
		constructor();

		/**
		 * Text alignment
		 */
		textAlignment: TextBox.TextAlignment;

		/**
		 * Input type
		 */
		inputType: TextBox.Type;

		/**
		 * Formatter function
		 */
		formatter: (((args: {cell: TextAreaCell; text: string}) => string) | null);

		/**
		 * True if wrapping is enabled
		 */
		wrap: boolean;

		/**
		 * TextBox reference
		 */
		textBox: (TextBox | null);

		/**
		 * TextBox options
		 */
		widgetOptions: (TextBox.Options | GridCell.WidgetOptionsCallback<TextBox.Options>);

	}

	export namespace TextBoxCell {
	}

	/**
	 * Text box column
	 */
	export class TextBoxColumn extends GridColumn {
		/**
		 * Constructs TextBoxColumn
		 */
		constructor(options?: TextBoxColumn.Options);

		/**
		 * Text alignment
		 */
		textAlignment: TextBox.TextAlignment;

		/**
		 * Input type
		 */
		inputType: TextBox.Type;

		/**
		 * Formatter function
		 */
		formatter: (TextBoxColumn.FormatterCallback | null);

		/**
		 * True if wrapping is enabled
		 */
		wrap: boolean;

		/**
		 * TextBox options
		 */
		widgetOptions: (TextBox.Options | GridColumn.WidgetOptionsCallback<TextBox.Options> | null);

	}

	export namespace TextBoxColumn {
		interface Options extends GridColumn.Options {
			textAlignment?: TextBox.TextAlignment;

			inputType?: TextBox.Type;

			formatter?: TextBoxColumn.FormatterCallback;

			wrap?: boolean;

			widgetOptions?: (TextBox.Options | GridColumn.WidgetOptionsCallback<TextBox.Options>);

		}

		type FormatterCallback = (args: TextBoxColumn.FormatterArgs) => string;

		interface FormatterArgs {
			cell: TextBoxCell;

			text: string;

		}

		export import Cell = Self.TextBoxCell;

	}

	/**
	 * TextBox picker
	 */
	export class TextBoxPicker extends Picker {
		/**
		 * Constructor
		 */
		constructor(options?: TextBoxPicker.Options);

	}

	export namespace TextBoxPicker {
		interface Options extends PackageCore.Component.Options {
			textBoxOptions: TextBox.Options;

		}

	}

	/**
	 * Text selection range
	 */
	class TextSelection {
		/**
		 * Constructor
		 */
		constructor(start: number, end: number, direction?: TextSelection.Direction);

	}

	namespace TextSelection {
		enum Direction {
			FORWARD,
			BACKWARD,
		}

	}

	/**
	 * Text styling
	 */
	namespace TextStyle {
		/**
		 * Get dynamic styles corresponding to wrapping and whitespace options
		 */
		function styles(css: object, wrap: (boolean | number), whitespace: boolean): globalThis.Array<PackageCore.Style>;

	}

	/**
	 * Theme provider component
	 */
	export function ThemeRoot(props: {theme: PackageCore.Theme; children?: PackageCore.VDom.Children}): PackageCore.JSX.Element;

	/**
	 * Theme element decorator
	 */
	function ThemeRootContent(props: {children?: PackageCore.VDom.Children}): PackageCore.JSX.Element;

	/**
	 * Time picker component
	 */
	export class TimePicker extends PackageCore.Component implements PackageCore.InputComponent {
		/**
		 * Constructs TimePicker
		 */
		constructor(options?: TimePicker.Options);

		/**
		 * Gets the selected time
		 */
		time: (PackageCore.Time | null);

		/**
		 * Returns true if the input is empty
		 */
		empty: boolean;

		/**
		 * Returns true if the input is mandatory
		 */
		mandatory: boolean;

		/**
		 * Gets the TimePicker format
		 */
		format: (string | null);

		/**
		 * Gets Time formatter
		 */
		formatter: (TimePicker.FormatterCallback | null);

		/**
		 * Gets Time parser
		 */
		parser: (TimePicker.ParserCallback | null);

		/**
		 * Gets the first allowed time
		 */
		startTime: (PackageCore.Time | null);

		/**
		 * Gets the last allowed time
		 */
		endTime: (PackageCore.Time | null);

		/**
		 * Gets the text displayed in the TimePicker's input. This property is accessible only in text mode.
		 */
		inputText: string;

		/**
		 * Gets id of the input element. Can be used in Label component.
		 */
		inputId: string;

		/**
		 * Returns attributes of the input element
		 */
		inputAttributes: PackageCore.HtmlAttributeList;

		/**
		 * Gets/Sets allow user input.
		 */
		allowUserInput: boolean;

		/**
		 * Returns true if the time DropDown is opened
		 */
		timePickerOpened: boolean;

		/**
		 * Icon position
		 */
		iconPosition: TimePicker.IconPosition;

		/**
		 * Placeholder
		 */
		placeholder: (string | null);

		/**
		 * Size of the component
		 */
		size: TimePicker.Size;

		/**
		 * Time changed callback
		 */
		onTimeChanged: (TimePicker.TimeChangedCallback | null);

		/**
		 * Forces conversion of the input string to a time value and fires time changed event
		 */
		acceptChanges(): void;

		/**
		 * Sets the time value
		 */
		setTime(time: (PackageCore.Time | null), options?: {reason?: string; updateInputText?: string}): void;

		/**
		 * Sets the input text
		 */
		setInputText(text: string, options?: {reason?: string; acceptChanges?: boolean}): void;

		/**
		 * Sets the format string
		 */
		setFormat(format: string): void;

		/**
		 * Sets formatting function
		 */
		setFormatter(formatter: (((time: (PackageCore.Time | null)) => string) | null)): void;

		/**
		 * Sets parser function
		 */
		setParser(parser: (((text: string) => (PackageCore.Time | null)) | null)): void;

		/**
		 * Sets start time (the first allowed time)
		 */
		setStartTime(time: (PackageCore.Time | null)): void;

		/**
		 * Sets end time (the last allowed time)
		 */
		setEndTime(time: (PackageCore.Time | null)): void;

		/**
		 * Opens the time picker
		 */
		openTimePicker(): boolean;

		/**
		 * Closes the time picker
		 */
		closeTimePicker(): boolean;

		/**
		 * Toggles the time picker
		 */
		toggleTimePicker(): void;

		/**
		 * Selects the whole text
		 */
		selectAll(): void;

		static Event: TimePicker.EventTypes;

	}

	export namespace TimePicker {
		interface Options extends PackageCore.Component.Options {
			allowEmptyValue?: boolean;

			validator?: TimePicker.ValidatorCallback;

			endTime?: PackageCore.Time;

			format?: string;

			formatter?: TimePicker.FormatterCallback;

			iconPosition?: TimePicker.IconPosition;

			parser?: TimePicker.ParserCallback;

			placeholder?: string;

			startTime?: PackageCore.Time;

			time?: PackageCore.Time;

			timeline?: object;

			mandatory?: boolean;

			allowUserInput?: boolean;

			picker?: object;

			size?: TimePicker.Size;

			onTimeChanged?: TimePicker.TimeChangedCallback;

		}

		type TimeChangedCallback = (args: TimePicker.TimeChangedArgs, sender: TimePicker) => void;

		interface TimeChangedArgs {
			time: (PackageCore.Time | null);

			previousTime: (PackageCore.Time | null);

			reason: TimePicker.Reason;

		}

		type ValidatorCallback = (args: {empty: boolean; inputText: string; time: (PackageCore.Time | null)}) => void;

		type FormatterCallback = (time: (PackageCore.Time | null)) => string;

		type ParserCallback = (text: string) => (PackageCore.Time | null);

		interface EventTypes extends PackageCore.Component.EventTypes {
			TIME_CHANGED: string;

			INPUT_TEXT_CHANGED: string;

			INPUT_TEXT_ACCEPTED: string;

		}

		enum IconPosition {
			START,
			END,
		}

		enum Reason {
			AFTER,
			BEFORE,
			CLEAR,
			EMPTY,
			ENTER,
			INVALID_INPUT,
			PICKER_SELECTION_CHANGED,
			TEXT_CHANGED,
			TIME_CHANGED,
			TIME_FORMATTED,
		}

		export import Size = Self.InputSize;

	}

	/**
	 * Time picker cell
	 */
	export class TimePickerCell extends GridCell {
		/**
		 * Constructs TimePickerCell
		 */
		constructor();

		/**
		 * Time format
		 */
		format: string;

		/**
		 * Formatter function
		 */
		formatter: (time: (PackageCore.Time | null)) => string;

		/**
		 * Parser function
		 */
		parser: (text: string) => (PackageCore.Time | null);

		/**
		 * TimePicker reference
		 */
		timePicker: (TimePicker | null);

		/**
		 * Toggle binding to time vs inputText
		 */
		bindToText: boolean;

		/**
		 * TimePicker options
		 */
		widgetOptions: (TimePicker.Options | GridCell.WidgetOptionsCallback<TimePicker.Options>);

	}

	export namespace TimePickerCell {
	}

	/**
	 * Time picker column
	 */
	export class TimePickerColumn extends GridColumn {
		/**
		 * Constructs TimePickerColumn
		 */
		constructor(options?: TimePickerColumn.Options);

		/**
		 * Time format
		 */
		format: (string | null);

		/**
		 * Formatter function
		 */
		formatter: (TimePicker.FormatterCallback | null);

		/**
		 * Parser function
		 */
		parser: (TimePicker.ParserCallback | null);

		/**
		 * Toggle binding to time vs inputText
		 */
		bindToText: boolean;

		/**
		 * TimePicker options
		 */
		widgetOptions: (TimePicker.Options | GridColumn.WidgetOptionsCallback<TimePicker.Options> | null);

		/**
		 * Default comparator function
		 */
		static defaultComparator(cell: TimePickerCell, oldValue: (PackageCore.Time | string), newValue: (PackageCore.Time | string)): boolean;

	}

	export namespace TimePickerColumn {
		interface Options extends GridColumn.Options {
			format?: string;

			formatter?: TimePicker.FormatterCallback;

			parser?: TimePicker.ParserCallback;

			bindToText?: boolean;

			widgetOptions?: (TimePicker.Options | GridColumn.WidgetOptionsCallback<TimePicker.Options>);

		}

		export import Cell = Self.TimePickerCell;

	}

	/**
	 * Time range component
	 */
	export class TimeRange extends PackageCore.Component {
		/**
		 * Constructs TimeRange
		 */
		constructor(options?: TimeRange.Options);

		/**
		 * Start TimePicker
		 */
		start: (TimePicker | null);

		/**
		 * Returns the virtual DOM ref to the start time picker
		 */
		startRef: PackageCore.VDomRef;

		/**
		 * End TimePicker
		 */
		end: (TimePicker | null);

		/**
		 * Returns the virtual DOM ref to the end time picker
		 */
		endRef: PackageCore.VDomRef;

		/**
		 * Time range
		 */
		range: TimeRange.Range;

		/**
		 * Range start time
		 */
		rangeStart: (PackageCore.Time | null);

		/**
		 * Range end time
		 */
		rangeEnd: (PackageCore.Time | null);

		/**
		 * Common options for both TimePickers
		 */
		inputOptions: TimePicker.Options;

		/**
		 * Specific start TimePicker options
		 */
		startOptions: TimePicker.Options;

		/**
		 * Specific end TimePicker options
		 */
		endOptions: TimePicker.Options;

		/**
		 * Date changed callback
		 */
		onRangeChanged: (TimeRange.RangeChangedCallback | null);

		/**
		 * Set time range.
		 */
		setRange(value: TimeRange.Range, options?: {reason?: string}): void;

		/**
		 * Set start time
		 */
		setRangeStart(startTime: (PackageCore.Time | null), options?: {reason?: string}): void;

		/**
		 * Set end time
		 */
		setRangeEnd(endTime: (PackageCore.Time | null), options?: {reason?: string}): void;

		/**
		 * Compare time ranges for equality
		 */
		static rangeEquals(left: (TimeRange.Range | null), right: (TimeRange.Range | null)): boolean;

		static Event: TimeRange.EventTypes;

	}

	export namespace TimeRange {
		interface Options extends PackageCore.Component.Options {
			defaultInterval?: (((time: PackageCore.Time) => PackageCore.Time) | null);

			endOptions?: TimePicker.Options;

			inputOptions?: TimePicker.Options;

			range?: TimeRange.Range;

			startOptions?: TimePicker.Options;

			startRef?: PackageCore.VDomRef;

			endRef?: PackageCore.VDomRef;

			onRangeChanged?: TimeRange.RangeChangedCallback;

		}

		interface Range {
			startTime: (PackageCore.Time | null);

			endTime: (PackageCore.Time | null);

		}

		type RangeChangedCallback = (args: TimeRange.RangeChangedArgs, sender: TimeRange) => void;

		interface RangeChangedArgs {
			range: (TimeRange.Range | null);

			previousRange: (TimeRange.Range | null);

			reason: TimeRange.Reason;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			RANGE_CHANGED: string;

		}

		enum I18N {
			TO,
		}

		enum Reason {
			TIME_CHANGED,
			INTERVAL,
		}

		/**
		 * @deprecated Not used internally anymore 
		 */
		enum TimePart {
			START,
			END,
		}

	}

	/**
	 * A picker containing a TimeRange component.
	 */
	export class TimeRangePicker extends Picker {
		/**
		 * Handles change of selection
		 */
		private _handleSelectionChanged(args: {currentRange: object; oldRange: object}, reason: string): void;

	}

	export namespace TimeRangePicker {
	}

	/**
	 * A picker containing a TimePicker component.
	 */
	export class TimeSelectorPicker extends Picker {
		/**
		 * Handles change of selection
		 */
		private _handleSelectionChanged(args: TimePicker.TimeChangedArgs): void;

	}

	export namespace TimeSelectorPicker {
	}

	/**
	 * ToggleGroup is a component that groups several Buttons together
	 */
	export class ToggleGroup extends PackageCore.Component {
		/**
		 * Constructor
		 */
		constructor(options?: ToggleGroup.Options);

		/**
		 * Button definitions
		 */
		buttons: globalThis.Array<ToggleGroup.Button>;

		/**
		 * Alias for buttons property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Values of toggled buttons from their definitions
		 */
		selectedValues: globalThis.Array<any>;

		/**
		 * Visual type of group buttons
		 */
		type: ToggleGroup.Type;

		/**
		 * Toggle strategy for the group
		 */
		toggleStrategy: ToggleGroup.ToggleStrategy;

		/**
		 * Layout of buttons
		 */
		layout: ToggleGroup.Layout;

		/**
		 * Options shared between all buttons
		 */
		defaultButtonOptions: ToggleGroup.Button;

		/**
		 * Selection changed callback
		 */
		onSelectionChanged: (ToggleGroup.SelectionChangedCallback | null);

		/**
		 * Selects toggled buttons per given button values
		 */
		select(values: globalThis.Array<any>, options?: {triggerIndex?: (number | null); triggerValue?: any; triggerButton?: (Button | null); reason?: (string | symbol)}): void;

		/**
		 * Parses JSX children into object definition
		 */
		private parseChildren(children: PackageCore.VDom.Children): globalThis.Array<ToggleGroup.Button>;

		/**
		 * Creates buttons
		 */
		private createButtons(): globalThis.Array<PackageCore.JSX.Element>;

		/**
		 * Handles click on a button
		 */
		private handleButtonClick(triggerValue: any, triggerIndex: number): void;

		/**
		 * Checks number of toggled buttons and validity of this state
		 */
		private checkNumberOfSelectedValues(selectedValuesCount: number): void;

		/**
		 * Focuses button on given index
		 */
		private focusButton(index: number): void;

		/**
		 * Focuses the nearest possible button on the right side from the currently focused one
		 */
		private focusNextButton(): boolean;

		/**
		 * Focuses the nearest possible button on the left side from the currently focused one
		 */
		private focusPreviousButton(): boolean;

		/**
		 * Focuses the first possible button from the start
		 */
		private focusFirstButton(): boolean;

		/**
		 * Focuses the first possible button from the end
		 */
		private focusLastButton(): boolean;

		/**
		 * Focuses button that came out of the search query
		 */
		private focusQueryButton(query: PackageCore.Array.FindResult): boolean;

		/**
		 * Creates a single selection toggle group
		 */
		static singleSelection(toggleGroupOptions: ToggleGroup.Options): ToggleGroup;

		/**
		 * Single selection JSX component
		 */
		static SingleSelection(props: ToggleGroup.Options): PackageCore.JSX.Element;

		/**
		 * Creates a collection of toggle buttons
		 */
		static multiSelection(toggleGroupOptions: ToggleGroup.Options): ToggleGroup;

		/**
		 * Multi selection JSX component
		 */
		static MultiSelection(props: ToggleGroup.Options): PackageCore.JSX.Element;

		static Event: ToggleGroup.EventTypes;

		/**
		 * Placeholder for ToggleGroup JSX child
		 */
		static Item(props: ToggleGroup.Button): PackageCore.JSX.Element;

	}

	export namespace ToggleGroup {
		interface Button {
			action?: (args: Button.ActionArgs) => void;

			icon?: Image.Source;

			iconPosition?: Button.IconPosition;

			label?: (string | PackageCore.Translation);

			size?: Button.Size;

			value: any;

			badge: (boolean | string | number | Button.BadgeDefinition);

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			SELECTION_CHANGED: string;

		}

		interface ButtonObject {
			button: Button;

			value: any;

		}

		interface Options extends PackageCore.Component.Options {
			buttons: globalThis.Array<ToggleGroup.Button>;

			defaultButtonOptions?: ToggleGroup.Button;

			layout?: ToggleGroup.Layout;

			selectedValues: (string | globalThis.Array<string>);

			toggleStrategy?: ToggleGroup.ToggleStrategy;

			type?: ToggleGroup.Type;

			onSelectionChanged?: ToggleGroup.SelectionChangedCallback;

		}

		type SelectionChangedCallback = (args: ToggleGroup.SelectionChangedArgs, sender: ToggleGroup) => void;

		interface SelectionChangedArgs {
			triggerIndex: (number | null);

			triggerValue: any;

			triggerButton: (Button | null);

			selectedValues: globalThis.Array<any>;

			previousSelectedValues: globalThis.Array<any>;

			reason: ToggleGroup.Reason;

		}

		enum Layout {
			COMPACT,
			LOOSE,
		}

		enum ToggleStrategy {
			ZERO_TO_ONE,
			ALWAYS_ONE,
			ONE_TO_MANY,
			ZERO_TO_MANY,
		}

		enum Type {
			DEFAULT,
			GHOST,
		}

		enum Reason {
			CALL,
			UPDATE,
			USER_SELECTION,
		}

	}

	/**
	 * Toggle picker
	 */
	export class TogglePicker extends Picker {
		/**
		 * Constructor
		 */
		constructor(options: object);

		/**
		 * Activates picker
		 */
		open(args?: object): void;

	}

	export namespace TogglePicker {
	}

	/**
	 * Toolbar component.
	 */
	export class ToolBar extends PackageCore.Component {
		/**
		 * Constructs ToolBar
		 */
		constructor(options?: ToolBar.Options);

		/**
		 * Gets toolbar content
		 */
		components: globalThis.Array<PackageCore.Component>;

		/**
		 * Alias for components property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Gets focusable toolbar content
		 */
		focusableItems: globalThis.Array<PackageCore.Component>;

		/**
		 * Gets toolbar orientation
		 */
		orientation: ToolBar.Orientation;

		/**
		 * Enable wrapping
		 */
		wrap: boolean;

		/**
		 * Add item to toolbar content
		 */
		add(components: (PackageCore.Component | globalThis.Array<PackageCore.Component>), options?: {index?: number; reason?: string}): ToolBar;

		/**
		 * Removes items
		 */
		remove(componentOrIndex: (PackageCore.Component | number)): ToolBar;

		/**
		 * Remove all items
		 */
		clear(): ToolBar;

		/**
		 * Checks if component is contained in the ToolBar
		 */
		has(component: PackageCore.Component): boolean;

		/**
		 * Sets toolbar orientation
		 */
		setOrientation(orientation: ToolBar.Orientation): void;

		/**
		 * Selects first selectable item in toolbar
		 */
		selectFirstItem(): boolean;

		/**
		 * Selects last selectable item in toolbar
		 */
		selectLastItem(): boolean;

		/**
		 * Selects item after currently selected
		 */
		selectNextItem(): boolean;

		/**
		 * Selects item before currently selected
		 */
		selectPreviousItem(): boolean;

		/**
		 * Selects item
		 */
		selectItem(item: PackageCore.Component): void;

		/**
		 * Horizontal toolbar
		 */
		static Horizontal(props: ToolBar.Options): PackageCore.JSX.Element;

		/**
		 * Vertical toolbar
		 */
		static Vertical(props: ToolBar.Options): PackageCore.JSX.Element;

		static Event: ToolBar.EventTypes;

	}

	export namespace ToolBar {
		interface Options extends PackageCore.Component.Options {
			items?: globalThis.Array<PackageCore.Component>;

			orientation?: ToolBar.Orientation;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			ITEM_ADDED: string;

			ITEM_REMOVED: string;

		}

		enum VisualStyle {
			SMALL,
			MEDIUM,
			LARGE,
			XLARGE,
			PLAIN,
		}

		export import Orientation = Self.ToolBarConstant.Orientation;

		export import Reason = Self.ToolBarConstant.Reason;

		export import Group = Self.ToolBarGroup;

	}

	namespace ToolBarConstant {
		enum Reason {
			CALL,
		}

		enum Orientation {
			VERTICAL,
			HORIZONTAL,
		}

	}

	/**
	 * Toolbar component.
	 */
	export class ToolBarGroup extends PackageCore.Component {
		/**
		 * Constructs ToolBarGroup
		 */
		constructor(options?: ToolBarGroup.Options);

		/**
		 * Gets toolbar group content
		 */
		components: globalThis.Array<PackageCore.Component>;

		/**
		 * Alias for components property that is used by virtual DOM and JSX
		 */
		children: PackageCore.VDom.Children;

		/**
		 * Gets focusable toolbar group content
		 */
		focusableItems: globalThis.Array<PackageCore.Component>;

		/**
		 * Add item to toolbar group content
		 */
		add(components: (PackageCore.Component | globalThis.Array<PackageCore.Component>), options?: {index?: number; reason?: string}): ToolBarGroup;

		/**
		 * Remove item from toolbar group content
		 */
		remove(componentOrIndex: (PackageCore.Component | number)): ToolBarGroup;

		/**
		 * Remove all items
		 */
		clear(): ToolBarGroup;

		/**
		 * Create ToolBarGroup function
		 */
		static create(): ToolBarGroup;

		static Event: ToolBarGroup.EventTypes;

	}

	export namespace ToolBarGroup {
		interface Options extends PackageCore.Component.Options {
			items?: globalThis.Array<PackageCore.Component>;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			ITEM_ADDED: string;

			ITEM_REMOVED: string;

		}

	}

	/**
	 * Tooltip
	 */
	export class Tooltip implements PackageCore.EventSource {
		/**
		 * Register event listener. The function can be used with either an eventName and a listener or using just a single object argument where keys are event names and values are listeners to attach to them.
		 */
		on(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Remove listener from a particular event. You can also remove listeners from multiple events by using a single object argument where keys are event names and values listeners to remove.
		 */
		off(eventName: (PackageCore.EventSource.EventName | globalThis.Array<PackageCore.EventSource.EventName> | PackageCore.EventSource.ListenerMap), listener?: PackageCore.EventSource.Listener): void;

		/**
		 * Fire an event
		 */
		protected _fireEvent(eventName: PackageCore.EventSource.EventName, args?: any): void;

		/**
		 * Dispose all event listeners
		 */
		protected _disposeEvents(): void;

		/**
		 * Register event listener
		 */
		private _addEventListener(eventName: PackageCore.EventSource.EventName, listener: PackageCore.EventSource.Listener): PackageCore.EventSource.Handle;

		/**
		 * Check if event is deprecated
		 */
		protected _checkDeprecatedEvent(eventName: PackageCore.EventSource.EventName): void;

		/**
		 * Constructs Tooltip
		 */
		constructor(options?: (string | PackageCore.JSX.Element | Tooltip.Options));

		/**
		 * Gets the content of the tooltip
		 */
		content: (PackageCore.Component | string | PackageCore.Translation | PackageCore.JSX.Element | null);

		/**
		 * Gets the content gap of tooltip
		 */
		contentGap: (Tooltip.GapSize | Tooltip.GapSizeObject);

		/**
		 * Gets the tooltip position options
		 */
		position: PackageCore.PositionHelper.Options;

		/**
		 * Returns true if the tooltip is currently opened
		 */
		opened: boolean;

		/**
		 * Returns true if the tooltip is currently opening
		 */
		opening: boolean;

		/**
		 * Returns true if the tooltip is currently closing
		 */
		closing: boolean;

		/**
		 * Tooltip status
		 */
		status: PackageCore.Component.Status;

		/**
		 * Attaches the tooltip and its open strategy to a component
		 */
		attachTo(component: PackageCore.Component): void;

		/**
		 * Detaches the tooltip from a component
		 */
		detach(): void;

		/**
		 * Sets the tooltip content
		 */
		setContent(content: (PackageCore.Component | string | PackageCore.Translation | PackageCore.JSX.Element | null)): void;

		/**
		 * Processes browser events
		 */
		processMessage(next: PackageCore.RoutedMessage.Handler, message: PackageCore.RoutedMessage, result: PackageCore.RoutedMessage.Result): void;

		/**
		 * Opens the tooltip
		 */
		open(options?: PackageCore.PositionHelper.Options & {component?: PackageCore.Component; reason?: string}): void;

		/**
		 * Closes the tooltip
		 */
		close(options?: {reason?: string}): void;

		/**
		 * Destroys the tooltip
		 */
		dispose(): void;

		private _detachCloseTimer(): void;

		/**
		 * Creates a tooltip and displays it. The tooltip will close based on the close strategy.
		 */
		static show(options: Tooltip.Options): void;

		/**
		 * Default tooltip alignment
		 */
		static defaultAlignment: globalThis.Array<PackageCore.PositionHelper.Alignment>;

		static Event: Tooltip.EventTypes;

	}

	export namespace Tooltip {
		interface Options extends PackageCore.Component.Options {
			closeStrategy?: (window: Window) => PackageCore.RoutedMessage.Filter;

			closeTimeout?: number;

			component?: PackageCore.Component;

			content: (PackageCore.Component | string | PackageCore.Translation | PackageCore.JSX.Element | null);

			contentGap?: (Tooltip.GapSize | Tooltip.GapSizeObject);

			openOnOwnerDisabled?: boolean;

			openStrategy?: (args: object) => boolean;

			position?: (PackageCore.PositionHelper.Options | (() => PackageCore.PositionHelper.Options));

			status?: PackageCore.Component.Status;

			visualStyle?: string;

			on?: PackageCore.EventSource.ListenerMap;

		}

		interface GapSizeObject {
			top?: Tooltip.GapSize;

			bottom?: Tooltip.GapSize;

			start?: Tooltip.GapSize;

			end?: Tooltip.GapSize;

			horizontal?: Tooltip.GapSize;

			vertical?: Tooltip.GapSize;

		}

		interface EventTypes {
			OPENING: string;

			OPENED: string;

			CLOSING: string;

			CLOSED: string;

		}

		/**
		 * Positioning options
		 */
		enum Position {
			toCursor,
			toTarget,
			toCursorOrTarget,
		}

		export import OpenReason = Self.TooltipOpenReason;

		export import OpenStrategy = Self.TooltipOpenStrategy;

		export import CloseStrategy = Self.WindowCloseStrategy;

		enum VisualStyle {
			TOOLTIP,
			POPUP,
		}

		export import GapSize = Self.Popover.GapSize;

	}

	/**
	 * Tooltip open reasons
	 */
	export enum TooltipOpenReason {
		CALL,
		FOCUS_IN,
		MOUSE_IN,
		MOUSE_MOVE,
	}

	/**
	 * Tooltip open strategies
	 */
	export namespace TooltipOpenStrategy {
	}

	/**
	 * Tree rendering
	 */
	class Tree extends PackageCore.Component {
		/**
		 * Constructs Tree
		 */
		constructor(options?: Tree.Options);

		/**
		 * True if the tree node is expandable
		 */
		expandable: boolean;

		/**
		 * True if the tree node is expanded
		 */
		expanded: boolean;

		/**
		 * True if the tree node is collapsible
		 */
		collapsible: boolean;

		/**
		 * Show/hide tree lines
		 */
		showTreeLines: boolean;

		/**
		 * Node level
		 */
		level: number;

		/**
		 * Hierarchy spacing
		 */
		spacing: Tree.HierarchySpacing;

		/**
		 * Hierarchy
		 */
		hierarchy: globalThis.Array<any>;

		static Event: Tree.EventTypes;

	}

	namespace Tree {
		interface Options extends PackageCore.Component.Options {
		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			EXPANDED: string;

		}

		export import HierarchySpacing = Self.TreeConstant.HierarchySpacing;

	}

	/**
	 * Tree cell
	 */
	export class TreeCell extends GridCell {
		/**
		 * Constructs TreeCell
		 */
		constructor();

		/**
		 * True if the cell displays a hierarchy
		 */
		withHierarchy: boolean;

		/**
		 * True if the cell displays tree lines
		 */
		showTreeLines: boolean;

		/**
		 * True if the hierarchy is expanded
		 */
		hierarchyExpanded: boolean;

		/**
		 * True if there is a detail row for this row
		 */
		hasDetailRow: boolean;

		/**
		 * True if the associated detail row is shown
		 */
		detailExpanded: boolean;

		/**
		 * Update hierarchy expanded state
		 */
		updateHierarchyExpand(): void;

		/**
		 * Update detail expanded state
		 */
		updateDetailExpand(): void;

		/**
		 * Default cell renderer
		 */
		static defaultRenderer(): Text;

	}

	export namespace TreeCell {
	}

	/**
	 * Child counter for tree view component
	 */
	class TreeChildCounter extends PackageCore.Component {
		/**
		 * Constructs TreeChildCounter
		 */
		constructor(options?: TreeChildCounter.Options);

		/**
		 * Child counter format
		 */
		format: TreeChildCounter.Format;

		/**
		 * True if the counter should be shown for empty items
		 */
		showEmpty: boolean;

		/**
		 * Number of visible children
		 */
		visibleCount: number;

		/**
		 * Child count
		 */
		totalCount: number;

	}

	namespace TreeChildCounter {
		interface Options extends PackageCore.Component.Options {
		}

		enum VisualStyle {
			DEFAULT,
		}

		enum Format {
			COUNT_ONLY,
			TOTAL_ONLY,
			COUNT_AND_TOTAL,
			FRACTION,
		}

	}

	/**
	 * Tree column
	 */
	export class TreeColumn extends GridColumn {
		/**
		 * Constructs TreeColumn
		 */
		constructor(options: TreeColumn.Options);

		/**
		 * Show/hide tree lines
		 */
		showTreeLines: boolean;

		/**
		 * Show hierarchy
		 */
		withHierarchy: boolean;

		/**
		 * Content provider callback
		 */
		content: (((args: {cell: TreeCell}) => PackageCore.JSX.Element) | null);

		/**
		 * Handle row expansion
		 */
		handleExpanded(value: boolean): void;

	}

	export namespace TreeColumn {
		interface Options extends GridColumn.Options {
			showTreeLines?: boolean;

			withHierarch?: boolean;

			autoWidth?: boolean;

			content?: TreeColumn.ContentCallback;

		}

		type ContentCallback = (args: TreeColumn.ContentArgs) => (PackageCore.Component | PackageCore.JSX.Element);

		interface ContentArgs {
			cell: TreeCell;

		}

		export import Cell = Self.TreeCell;

	}

	namespace TreeConstant {
		enum HierarchySpacing {
			COMPACT,
			DEFAULT,
		}

		enum SelectionMode {
			INDEPENDENT,
			GROUP,
		}

		enum DropPosition {
			BEFORE,
			AFTER,
			INSIDE,
		}

		enum Reason {
			CURSOR_SET,
			SELECT,
			UNSELECT,
			MULTI_SELECT_DISABLED,
			SELECTABLE_DISABLED,
			DATA_LOADED,
			DATA_REMOVED,
			DATA_MOVED,
			DATA_RESET,
			DATA_BIND,
			DATA_UNBIND,
			CLICK,
			KEY_DOWN,
			CHECK_UPDATE,
		}

	}

	export namespace TreeDataExchange {
		/**
		 * Build a TreeView drag source based on supplied options
		 */
		function dragSource(options: object): PackageCore.DataExchange.DragSourceProvider;

		/**
		 * Build a TreeView drag target based on supplied options
		 */
		function dragTarget(options: object): PackageCore.DataExchange.DragTargetProvider;

	}

	/**
	 * Tree item component
	 */
	export class TreeItem extends PackageCore.Component {
		/**
		 * Constructs TreeItem
		 */
		constructor();

		/**
		 * Owning tree view
		 */
		treeView: TreeView;

		/**
		 * Parent tree item
		 */
		parentItem: TreeItem;

		/**
		 * Child items
		 */
		childItems: globalThis.Array<TreeItem>;

		/**
		 * List of visible child items
		 */
		visibleChildItems: globalThis.Array<TreeItem>;

		/**
		 * Number of child items
		 */
		childCount: number;

		/**
		 * Number of visible child items
		 */
		visibleChildCount: number;

		/**
		 * True if the item has no child items
		 */
		empty: boolean;

		/**
		 * True if the item has no visible child items
		 */
		visibleEmpty: boolean;

		/**
		 * Tree item index
		 */
		index: number;

		/**
		 * For internal use in VirtualTreeContainer only
		 */
		flatVisibleIndex: number;

		/**
		 * Item index path
		 */
		indexPath: ListBox.IndexPath;

		/**
		 * Hierarchy level
		 */
		level: number;

		/**
		 * Reference to the data store entry
		 */
		dataEntry: object;

		/**
		 * Get reference to the associated data item
		 */
		dataItem: any;

		/**
		 * True if this item is bound to data
		 */
		dataBound: boolean;

		/**
		 * True if child items have been loaded
		 */
		loaded: boolean;

		/**
		 * True if child items are currently being loaded
		 */
		loading: boolean;

		/**
		 * Change item height. This property is used only in virtualization mode.
		 */
		height: number;

		/**
		 * Property for storing custom data on the tree item
		 */
		userData: object;

		/**
		 * Can be use to store data that are valid only while the component is rendered. The object is automatically reset when component is erased.
		 */
		renderData: (object | null);

		/**
		 * Get the bound text
		 */
		label: string;

		/**
		 * True if item is selectable
		 */
		selectable: boolean;

		/**
		 * True if item is selectable and the tree view is selectable
		 */
		effectiveSelectable: boolean;

		/**
		 * True if the item is draggable
		 */
		draggable: boolean;

		/**
		 * True if the item is draggable and dragging is enabled on the tree view
		 */
		effectiveDraggable: boolean;

		/**
		 * True if the item is selected
		 */
		selected: boolean;

		/**
		 * True if the item and all its parent items are visible
		 */
		effectiveVisible: boolean;

		/**
		 * True if the item is filtered due to a filter being set on the tree view
		 */
		filtered: boolean;

		/**
		 * True if the item is expanded
		 */
		expanded: boolean;

		/**
		 * Returns true if item can be expanded
		 */
		expandable: boolean;

		/**
		 * Set to false to disable collapsing
		 */
		collapsible: boolean;

		/**
		 * True if the item is in a virtualized tree view
		 */
		virtualization: boolean;

		/**
		 * Returns the content component if rendered
		 */
		content: (PackageCore.Component | null);

		/**
		 * Content provider
		 */
		contentProvider: (item: TreeItem, renderData: object) => PackageCore.JSX.Element;

		/**
		 * Get the total number of child items (recursively)
		 */
		totalChildCount: number;

		/**
		 * Get the total number of visible child items (recursively)
		 */
		totalVisibleChildCount: number;

		/**
		 * Child counter component
		 */
		childCounter: (object | null);

		/**
		 * Action controls for the item
		 */
		actionControls: (PackageCore.Component | PackageCore.JSX.Element | globalThis.Array<(PackageCore.Component | PackageCore.JSX.Element)> | null);

		/**
		 * Value of the selection check box
		 */
		checkValue: (boolean | null);

		/**
		 * Shows a drop indicator on the item
		 */
		dropIndicator: TreeItem.DropPosition;

		/**
		 * Add child items. For internal use only.
		 */
		addItems(items: globalThis.Array<TreeItem>, options: {index: number; reason?: string}): void;

		/**
		 * Remove child items. For internal use only.
		 */
		removeItems(index: number, count: number, options: {reason?: string}): void;

		/**
		 * Bind tree item to data item. For internal use only.
		 */
		bind(entry: PackageCore.DataStoreEntry): void;

		/**
		 * Unbind tree item from data item. For internal use only.
		 */
		unbind(): void;

		/**
		 * Load child items
		 */
		load(): globalThis.Promise<any>;

		/**
		 * Loads all child items recursively
		 */
		loadAll(): globalThis.Promise<any>;

		/**
		 * Expand this item
		 */
		expand(): void;

		/**
		 * Expands all child items recursively
		 */
		expandAll(): globalThis.Promise<any>;

		/**
		 * Expand all parents so that this item becomes visible
		 */
		expandParents(): void;

		/**
		 * Collapse this item
		 */
		collapse(): void;

		/**
		 * Collapse self and all child items
		 */
		collapseAll(): void;

		/**
		 * Collapse all parent items
		 */
		collapseParents(): void;

		/**
		 * Refresh the content of the item
		 */
		refresh(): void;

		/**
		 * Check if this item contains another item
		 */
		containsItem(item: TreeItem): boolean;

		/**
		 * Finds the parent item containing both items
		 */
		getCommonParent(item: TreeItem): void;

		/**
		 * Enable/disable selection of this item
		 */
		setSelectable(value: boolean, options?: {reason?: string}): void;

		/**
		 * Mark this item as selected
		 */
		setSelected(value: boolean, options?: {reason?: string}): void;

		/**
		 * Mark this item as cursor
		 */
		setCursor(value: boolean): void;

		/**
		 * Toggle cursor visibility
		 */
		setCursorVisible(value: boolean): void;

		/**
		 * Expand/collapse this item
		 */
		setExpanded(value: boolean, options?: {reason?: string}): void;

		/**
		 * Enable/disable collapsing of this item
		 */
		setCollapsible(value: boolean): void;

		/**
		 * Enable/disable dragging of this item
		 */
		setDraggable(value: boolean, options?: {reason?: string}): void;

		/**
		 * Change item height. For virtualized tree views only.
		 */
		setHeight(value: number, options?: {reason?: string}): void;

		/**
		 * Set child counter component
		 */
		setChildCounter(counter: (PackageCore.Component | null)): void;

		/**
		 * Set action controls
		 */
		setActionControls(controls: (PackageCore.Component | globalThis.Array<PackageCore.Component> | null)): void;

		/**
		 * Set drop indicator position
		 */
		setDropIndicator(value: TreeItem.DropPosition): void;

		/**
		 * Visit items in this subtree
		 */
		visit(callback: (item: TreeItem) => boolean, self?: boolean): void;

		/**
		 * Visit visible items in this subtree
		 */
		visitVisible(callback: (item: TreeItem) => (boolean | null), self?: boolean): void;

		/**
		 * Sets information about position in the virtual container. For internal use only.
		 */
		setupVirtualPosition(): void;

		/**
		 * Count child items matching a predicate
		 */
		countMatchingItems(visible: boolean, predicate?: (item: TreeItem) => boolean): number;

		/**
		 * Find the first item in a subtree matching the predicate
		 */
		getFirstItem(onlyVisible?: boolean, predicate?: (item: TreeItem) => boolean): (TreeItem | null);

		/**
		 * Find the last item in a subtree matching the predicate
		 */
		getLastItem(onlyVisible?: boolean, predicate?: (item: TreeItem) => boolean): (TreeItem | null);

		/**
		 * Find the next item in a subtree matching the predicate
		 */
		getNextItem(from?: TreeItem, onlyVisible?: boolean, predicate?: (item: TreeItem) => boolean): (TreeItem | null);

		/**
		 * Find the previous item in a subtree matching the predicate
		 */
		getPreviousItem(from?: TreeItem, onlyVisible?: boolean, predicate?: (item: TreeItem) => boolean): (TreeItem | null);

		/**
		 * Default TreeItem content
		 */
		static defaultContent(item: TreeItem): PackageCore.JSX.Element;

		static Event: TreeItem.EventTypes;

	}

	export namespace TreeItem {
		interface Options extends PackageCore.Component.Options {
			treeView: TreeView;

			parentItem: TreeItem;

			index: number;

			level: number;

			dataEntry?: PackageCore.DataStoreEntry;

			height: number;

			content: (item: TreeItem, renderData: object) => PackageCore.JSX.Element;

			childCounter?: TreeChildCounter.Options;

			selected?: boolean;

			expanded?: boolean;

			collapsible?: boolean;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			SELECTED: string;

			SELECTABLE_CHANGED: string;

			EFFECTIVE_SELECTABLE_CHANGED: string;

			DRAGGABLE_CHANGED: string;

			EFFECTIVE_DRAGGABLE_CHANGED: string;

			VISIBLE_CHANGED: string;

			EFFECTIVE_VISIBLE_CHANGED: string;

			HEIGHT_CHANGED: string;

			ITEMS_ADDED: string;

			ITEMS_REMOVED: string;

			EXPANDED: string;

			LOADING_STARTED: string;

			LOADING_FINISHED: string;

			VISIBLE_CHILDREN_CHANGED: string;

		}

		enum VisualStyle {
			DEFAULT,
		}

		export import DropPosition = Self.TreeConstant.DropPosition;

	}

	/**
	 * Data widget for displaying and selecting from hierarchical data
	 */
	export class TreeView extends DataSourceComponent {
		/**
		 * Constructs TreeView
		 */
		constructor(options?: TreeView.Options);

		/**
		 * Gets the list of selected items
		 */
		selectedItems: globalThis.Array<any>;

		/**
		 * Returns the list of currently selected tree items
		 */
		selectedTreeItems: globalThis.Array<TreeItem>;

		/**
		 * Gets the list of selected items
		 */
		selectedIndexPaths: globalThis.Array<TreeView.IndexPath>;

		/**
		 * Checks/Sets whether selection is allowed
		 */
		selectable: boolean;

		/**
		 * Enables/Disables drag & drop of list items
		 */
		draggable: boolean;

		/**
		 * Enable/disable selection of multiple items
		 */
		multiSelect: boolean;

		/**
		 * Items below the locked level are not collapsible
		 */
		lockedLevels: number;

		/**
		 * Gets display member
		 */
		displayMember: (DataSourceComponent.DisplayMemberCallback | string);

		/**
		 * Gets the cursor item
		 */
		cursorItem: TreeItem;

		/**
		 * Gets the cursor visibility
		 */
		cursorVisibility: TreeView.CursorVisibility;

		/**
		 * Gets hte initial cursor position
		 */
		initialCursorPosition: TreeView.InitialCursorPosition;

		/**
		 * Allows/Disables selection move along with cursor move
		 */
		moveSelectionWithCursor: boolean;

		/**
		 * Root item of the item tree. This item is not visible anywhere and should not be manipulated but you can use it as a sentinel in traversal methods.
		 */
		rootItem: TreeItem;

		/**
		 * Gets a list of top level tree items
		 */
		items: globalThis.Array<TreeItem>;

		/**
		 * Flat list of visible top level tree items
		 */
		visibleItems: globalThis.Array<TreeItem>;

		/**
		 * Returns true if the tree view does not contain any items
		 */
		empty: boolean;

		/**
		 * Returns true if the tree view does not contain any visible items
		 */
		visibleEmpty: boolean;

		/**
		 * Gets placeholder text that is shown when list box is empty
		 */
		placeholder: (string | PackageCore.Translation | PackageCore.Component);

		/**
		 * Toggle container virtualization
		 */
		virtualization: boolean;

		/**
		 * True if tree lines are enabled
		 */
		showTreeLines: boolean;

		/**
		 * True if item loaders are enabled
		 */
		showItemLoaders: boolean;

		/**
		 * If enabled clicking a non-selectable item expands it
		 */
		clickToExpand: boolean;

		/**
		 * If enabled clicking an item selects/unselects it. Otherwise it just moves cursor there.
		 */
		clickToSelect: boolean;

		/**
		 * True if compact hierarchy mode is enabled
		 */
		hierarchySpacing: TreeView.HierarchySpacing;

		/**
		 * Get the total number of items in the tree view
		 */
		totalItemCount: number;

		/**
		 * Get the total number of visible items in the tree view
		 */
		totalVisibleItemCount: number;

		/**
		 * Gets/sets the preload strategy
		 */
		preload: TreeView.Preload;

		/**
		 * True if selection checks are enabled
		 */
		withChecks: boolean;

		/**
		 * Show border around the tree view
		 */
		withBorder: boolean;

		/**
		 * Selection mode
		 */
		selectionMode: TreeView.SelectionMode;

		/**
		 * Item content
		 */
		itemContent: (((item: TreeItem, renderData: object) => (PackageCore.Component | PackageCore.JSX.Element)) | null);

		/**
		 * Selection changed callback
		 */
		onSelectionChanged: (TreeView.SelectionChangedCallback | null);

		/**
		 * Select items
		 */
		select(options: {items?: globalThis.Array<any>; treeItems?: globalThis.Array<TreeItem>; indexPaths?: globalThis.Array<any>; predicate?: (item: TreeItem) => boolean; append?: boolean; reason?: string}): boolean;

		/**
		 * Unselect items
		 */
		unselect(options: {items?: globalThis.Array<any>; treeItems?: globalThis.Array<TreeItem>; indexPaths?: globalThis.Array<any>; predicate?: (item: TreeItem) => boolean; reason?: string}): boolean;

		/**
		 * Selects all selectable items
		 */
		selectAll(options?: {reason?: string}): boolean;

		/**
		 * Selects all visible selectable items
		 */
		selectAllVisible(options?: {reason?: string}): boolean;

		/**
		 * Unselect all items
		 */
		unselectAll(options?: {reason?: string}): boolean;

		/**
		 * Select item in group selection mode
		 */
		selectGroup(root: TreeItem, reason?: string): void;

		/**
		 * Unselect item in group selection mode
		 */
		unselectGroup(root: TreeItem, reason?: string): void;

		/**
		 * Toggles item selection in group selection mode
		 */
		toggleGroup(item: TreeItem, reason?: string): void;

		/**
		 * Toggles item selection in multi select in independent selection mode
		 */
		toggleItem(item: TreeItem, reason?: string): void;

		/**
		 * Set filtering predicate. All items not matching the predicate will be hidden.
		 */
		filter(predicate: (item: TreeItem) => boolean): void;

		/**
		 * Returns tree item at given index path
		 */
		itemAtIndexPath(indexPath: TreeView.IndexPath): (TreeItem | null);

		/**
		 * Gets tree item containing given HTML element
		 */
		itemForElement(element: Element): (TreeItem | null);

		/**
		 * Finds tree item associated with a given data item
		 */
		itemForDataItem(dataItem: any): (TreeItem | null);

		/**
		 * Scroll to item
		 */
		scrollTo(args: {treeItem?: TreeItem; item?: any; indexPath?: TreeView.IndexPath; reason?: string}): void;

		/**
		 * Scroll to current selection
		 */
		scrollToSelection(): void;

		/**
		 * Enable/disable item selection
		 */
		setSelectable(value: boolean): void;

		/**
		 * Enable/disable item dragging
		 */
		setDraggable(value: boolean): void;

		/**
		 * Enable/disable multi select
		 */
		setMultiSelect(value: boolean): void;

		/**
		 * Toggle virtualization
		 */
		setVirtualization(value: boolean): void;

		/**
		 * Sets over which item the cursor will appear
		 */
		setCursorItem(item: (TreeItem | null), options?: {reason?: string}): void;

		/**
		 * Sets cursor visibility
		 */
		setCursorVisibility(cursorVisibility: TreeView.CursorVisibility): void;

		/**
		 * If enabled cursor is updated when selection changes and vice versa
		 */
		setMoveSelectionWithCursor(value: boolean): void;

		/**
		 * Set placeholder
		 */
		setPlaceholder(value: (string | PackageCore.Translation | PackageCore.Component)): void;

		/**
		 * Set preload strategy
		 */
		setPreload(value: TreeView.Preload): void;

		/**
		 * Toggle item loaders
		 */
		setShowItemLoaders(value: boolean): void;

		/**
		 * Find first item matching the predicate
		 */
		getFirstItem(onlyVisible?: boolean, predicate?: (item: TreeItem) => boolean): (TreeItem | null);

		/**
		 * Find last item matching the predicate
		 */
		getLastItem(onlyVisible?: boolean, predicate?: (item: TreeItem) => boolean): (TreeItem | null);

		/**
		 * Find next item matching the predicate starting on a particular item
		 */
		getNextItem(from: TreeItem, onlyVisible?: boolean, predicate?: (item: TreeItem) => boolean): (TreeItem | null);

		/**
		 * Find previous item matching the predicate starting on a particular item
		 */
		getPreviousItem(from: TreeItem, onlyVisible?: boolean, predicate?: (item: TreeItem) => boolean): (TreeItem | null);

		/**
		 * Visit all tree items
		 */
		visit(callback: (item: TreeItem) => boolean): void;

		/**
		 * Visit visible tree items
		 */
		visitVisible(callback: (item: TreeItem) => boolean): void;

		/**
		 * Count child items matching a predicate
		 */
		countMatchingItems(visible: boolean, predicate?: (item: TreeItem) => boolean): number;

		/**
		 * Expand all items
		 */
		expandAll(): globalThis.Promise<any>;

		/**
		 * Expand items on a path, on each level selector function is used to select the item to expand
		 */
		expandPath(selector: (level: number, items: globalThis.Array<TreeItem>) => TreeItem): globalThis.Promise<any>;

		/**
		 * Expands all parents of a given data item
		 */
		expandPathToDataItem(dataItem: any): globalThis.Promise<any>;

		/**
		 * Expand all items on an index path
		 */
		expandIndexPath(indexPath: TreeView.IndexPath): globalThis.Promise<any>;

		/**
		 * Collapse all items
		 */
		collapseAll(): void;

		/**
		 * Collapse items on a path, on each level selector function is used to select the item to collapse
		 */
		collapsePath(selector: (level: number, items: globalThis.Array<TreeItem>) => TreeItem): void;

		/**
		 * Collapse items at index path
		 */
		collapseIndexPath(indexPath: TreeView.IndexPath): void;

		/**
		 * Load all items
		 */
		loadAll(): globalThis.Promise<any>;

		/**
		 * Load items on a path, on each level selector function is used to select the item to load
		 */
		loadPath(selector: (level: number, items: globalThis.Array<TreeItem>) => TreeItem): globalThis.Promise<any>;

		/**
		 * Load items at index path
		 */
		loadIndexPath(indexPath: TreeView.IndexPath): globalThis.Promise<any>;

		/**
		 * Create default item content
		 */
		static defaultItemContent(): PackageCore.JSX.Element;

		static Event: TreeView.EventTypes;

	}

	export namespace TreeView {
		type IndexPath = globalThis.Array<number>;

		interface Options extends DataSourceComponent.Options {
			childCounter?: (boolean | object | ((dataItem: any) => TreeChildCounter.Options));

			clickToExpand?: boolean;

			clickToSelect?: boolean;

			cursorVisibility?: TreeView.CursorVisibility;

			customizeItem?: TreeView.CustomizeItemCallback;

			displayMember?: (string | DataSourceComponent.DisplayMemberCallback);

			draggable?: boolean;

			hierarchySpacing?: TreeView.HierarchySpacing;

			initialCursorPosition?: TreeView.InitialCursorPosition;

			itemContent?: (item: TreeItem, renderData: object) => (PackageCore.Component | PackageCore.JSX.Element);

			itemDragSource?: PackageCore.DataExchange.DragSourceProvider;

			itemHeight?: number;

			itemLoader?: object;

			itemReorder?: boolean;

			keepSelection?: boolean;

			lockedLevels?: number;

			moveSelectionWithCursor?: boolean;

			multiSelect?: boolean;

			placeholder?: (string | PackageCore.Translation | PackageCore.Component);

			preload?: TreeView.Preload;

			selectable?: boolean;

			selectedItems?: globalThis.Array<any>;

			selectionMode?: TreeView.SelectionMode;

			showItemLoaders?: boolean;

			showTreeLines?: boolean;

			stickyGroupHeaders?: boolean;

			virtualization?: boolean;

			withChecks?: boolean;

			expanded?: boolean;

			onSelectionChanged?: TreeView.SelectionChangedCallback;

		}

		type SelectionChangedCallback = (args: TreeView.SelectionChangedArgs, sender: TreeView) => void;

		type CustomizeItemCallback = (item: TreeItem) => void;

		interface SelectionChangedArgs {
			items: globalThis.Array<any>;

			previousItems: globalThis.Array<any>;

			addedItems: globalThis.Array<any>;

			removedItems: globalThis.Array<any>;

			reason: TreeView.Reason;

		}

		interface EventTypes extends DataSourceComponent.EventTypes {
			SELECTION_CHANGED: string;

			CURSOR_MOVED: string;

			ITEMS_ADDED: string;

			ITEMS_REMOVED: string;

			ITEM_EXPANDED: string;

			ITEM_LOADING_STARTED: string;

			ITEM_LOADING_FINISHED: string;

		}

		enum VisualStyle {
			DEFAULT,
			EMBEDDED,
		}

		export import DataExchange = Self.TreeDataExchange;

		export import Item = Self.TreeItem;

		export import ItemVisualStyle = Self.TreeItem.VisualStyle;

		enum Reason {
		}

		enum InitialCursorPosition {
			NONE,
			FIRST,
			FIRST_SELECTED,
		}

		enum CursorVisibility {
			FOCUS,
			ALWAYS,
		}

		enum Preload {
			NONE,
			VISIBLE,
			ALL,
		}

		export import HierarchySpacing = Self.TreeConstant.HierarchySpacing;

		export import SelectionMode = Self.TreeConstant.SelectionMode;

		export import CounterFormat = Self.TreeChildCounter.Format;

	}

	export namespace TwoLinesResponsiveStrategy {
		/**
		 * Creates a toolbar panel
		 */
		function createToolbarPanel(itemSelection: ListPresenterConstant.ItemSelection, startPanel: StackPanel, actionPanel: StackPanel, viewingTools: StackPanel, toolbarPanelOptions: object): {toolbar: StackPanel; endPanel: StackPanel};

		/**
		 * Applies one-line responsive strategy
		 */
		function apply(options: {itemSelection: ListPresenterConstant.ItemSelection; searchBox: TextBox; searchBoxButton: Button; viewingTools: StackPanel; selectionPanel: StackPanel; sidePanel: StackPanel; startPanel: StackPanel; endPanel: StackPanel; viewWidth: number; filterPanel: PackageCore.Presenter; actionPanel: PackageCore.Presenter; updateSearchBoxVisibility: (visible: boolean) => void; hideAllFilters: () => void; filtersPosition: ListView.FiltersPosition}): void;

		/**
		 * Resets the toolbar settings to a default state
		 */
		function reset(itemSelection: ListPresenterConstant.ItemSelection, endPanel: StackPanel, viewingTools: StackPanel, selectionPanel: StackPanel): void;

	}

	/**
	 * UIF Studio UIF bundle
	 */
	namespace UifBundle {
	}

	/**
	 * Virtualized container for list items
	 */
	class VirtualListView extends PackageCore.Component {
		/**
		 * Constructs VirtualListView
		 */
		constructor();

		/**
		 * Enable/disable sticky group headers
		 */
		stickyGroupHeaders: boolean;

		/**
		 * Scrolls to given item
		 */
		scrollTo(item: object): void;

		static Event: VirtualListView.EventTypes;

	}

	namespace VirtualListView {
		interface EventTypes extends PackageCore.Component.EventTypes {
			SCROLL_TO_END: string;

		}

	}

	/**
	 * Virtualized container for tree items
	 */
	class VirtualTreeContainer extends PackageCore.Component {
		/**
		 * Constructs VirtualTreeContainer
		 */
		constructor();

	}

	namespace VirtualTreeContainer {
	}

	/**
	 * Generic Window class. You should probably use Popover or Modal.
	 */
	export abstract class Window extends PackageCore.Component implements PackageCore.Portal {
		/**
		 * Constructs Window
		 */
		protected constructor(options: Window.Options);

		/**
		 * Gets current content of the window
		 */
		content: (string | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element | null);

		/**
		 * Content padding
		 */
		contentPadding: boolean;

		/**
		 * Content gap
		 */
		contentGap: (Window.GapSize | Window.GapSizeObject);

		/**
		 * Buttons
		 */
		buttons: (globalThis.Array<Button> | PackageCore.Component | null);

		/**
		 * Button justification
		 */
		buttonsJustification: Window.ButtonsJustification;

		/**
		 * Icon
		 */
		icon: (Image.Source | null);

		/**
		 * Label
		 */
		label: (string | PackageCore.Translation | PackageCore.Component | null);

		/**
		 * Footer content
		 */
		footerContent: (string | PackageCore.Translation | PackageCore.Component | null);

		/**
		 * Parent window
		 */
		parentWindow: (Window | null);

		/**
		 * Window owner
		 */
		owner: (PackageCore.Component | PackageCore.VDomRef | null);

		/**
		 * List of child windows
		 */
		childWindows: globalThis.Array<Window>;

		/**
		 * Depth in the window hierarchy
		 */
		level: number;

		/**
		 * Window layer (for resolving visibility order)
		 */
		layer: number;

		/**
		 * True if the window is opened
		 */
		opened: boolean;

		/**
		 * True if the window is opening
		 */
		opening: boolean;

		/**
		 * True if the window is closing
		 */
		closing: boolean;

		/**
		 * True if the window is modal
		 */
		modal: boolean;

		/**
		 * Window state
		 */
		state: Window.State;

		/**
		 * Toggle resizability
		 */
		resizable: boolean;

		/**
		 * Opens window on the page
		 */
		open(options?: Window.OpenArgs): void;

		/**
		 * Closes window. Content will be detached and window will be removed as well.
		 */
		close(options?: object): void;

		/**
		 * Maximizes the window
		 */
		maximize(options?: {reason?: string}): void;

		/**
		 * Restores the window to the floating state
		 */
		restore(options?: {reason?: string}): void;

		/**
		 * Set window content
		 */
		setContent(content: (PackageCore.Component | string | PackageCore.Translation | PackageCore.JSX.Element | null)): void;

		/**
		 * Set window state
		 */
		setState(state: Window.State, options?: {reason?: string}): void;

		/**
		 * Resizes the window
		 */
		resize(options?: object): void;

		/**
		 * Positions window on target
		 */
		position(options?: (Window.PositionArgs | null), updateSize?: boolean): void;

		/**
		 * Sets rectangle style for root element
		 */
		private _setRootElementStyle(position: PackageCore.Rectangle): void;

		/**
		 * Returns intersection of coordinates with document
		 */
		private _alignToDocumentBody(coordinates: PackageCore.PositionHelper.FrameDescription): PackageCore.Rectangle;

		/**
		 * Get correct position options within window
		 */
		private _getPositionOptions(options: PackageCore.PositionHelper.Options, measuredSize: object): PackageCore.PositionHelper.Options;

		/**
		 * Find component's managing window
		 */
		static findManagingWindow(): void;

		/**
		 * Find component's focus handler
		 */
		static defaultFocusHandler(): void;

		static Event: Window.EventTypes;

	}

	export namespace Window {
		interface Options extends PackageCore.Component.Options {
			allowClip?: boolean;

			autoResize?: boolean;

			buttons?: (globalThis.Array<Button> | PackageCore.Component);

			buttonsJustification?: Window.ButtonsJustification;

			closeStrategy?: WindowCloseStrategy.Handler;

			content?: (string | PackageCore.Translation | PackageCore.Component | PackageCore.JSX.Element);

			contentGap?: (Window.GapSize | Window.GapSizeObject);

			footerContent?: (string | PackageCore.Translation | PackageCore.Component);

			getFocusComponent?: (body: WindowBody, focusManager: PackageCore.FocusManager) => (Element | PackageCore.Component);

			icon?: Image.Source;

			label?: (string | PackageCore.Translation | PackageCore.Component);

			modal?: boolean;

			owner: (PackageCore.Component | PackageCore.VDomRef);

			position?: Window.PositionArgs;

			resizable?: boolean;

			role?: Window.Role;

			tabbable?: boolean;

			withAnchor?: boolean;

		}

		interface OpenArgs {
			closeStrategy?: WindowCloseStrategy.Handler;

			position?: Window.PositionArgs;

			reason?: string;

		}

		interface PositionArgs {
			alignment?: (PackageCore.PositionHelper.Alignment | globalThis.Array<PackageCore.PositionHelper.Alignment>);

			alignmentOffset?: number;

			allowed?: (PackageCore.PositionHelper.Placement | globalThis.Array<PackageCore.PositionHelper.Placement>);

			allowOverlapOuterContainer?: boolean;

			outerContainer?: (HTMLElement | PackageCore.Rectangle);

			placement?: (PackageCore.PositionHelper.Placement | globalThis.Array<PackageCore.PositionHelper.Placement>);

			placementOffset?: number;

			rtl?: boolean;

			size?: PackageCore.PositionHelper.SizeOptions;

			strategy?: PackageCore.PositionHelper.Strategy;

			target?: (PackageCore.VDomRef | PackageCore.Component | Element | string | PackageCore.PositionHelper.Point | PackageCore.Rectangle);

		}

		interface GapSizeObject {
			top?: Window.GapSize;

			bottom?: Window.GapSize;

			start?: Window.GapSize;

			end?: Window.GapSize;

			horizontal?: Window.GapSize;

			vertical?: Window.GapSize;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			OPENING: string;

			OPENED: string;

			CLOSING: string;

			CLOSED: string;

			MOVED: string;

			USER_RESIZING: string;

			USER_RESIZED: string;

			STATE_CHANGED: string;

		}

		enum VisualStyle {
			FRAME,
			POPUP,
			PICKER,
			TOOLTIP,
		}

		enum State {
			FLOATING,
			MAXIMIZED,
		}

		enum Role {
			CONTEXT_MENU,
			POPOVER,
			MODAL,
			TOOLTIP,
		}

		export import CloseReason = Self.WindowCloseReason;

		export import CloseStrategy = Self.WindowCloseStrategy;

		export import ButtonsJustification = Self.WindowBody.ButtonsJustification;

		export import GapSize = Self.GapSize;

		enum defaultPopupOptions {
			autoResize,
			focusOnOpen,
			withTitleBar,
			resizable,
			closeStrategy,
			role,
			visualStyle,
		}

	}

	/**
	 * Component rendering the body of a Window
	 */
	class WindowBody extends PackageCore.Component {
		/**
		 * Constructs WindowBody
		 */
		constructor(options?: WindowBody.Options);

		/**
		 * Label
		 */
		label: (string | PackageCore.Translation | PackageCore.Component | null);

		/**
		 * Icon
		 */
		icon: (Image.Source | null);

		/**
		 * Content
		 */
		children: (string | PackageCore.Translation | PackageCore.Component);

		/**
		 * Buttons
		 */
		buttons: (globalThis.Array<Button> | PackageCore.Component);

		/**
		 * Button justification
		 */
		buttonsJustification: Window.ButtonsJustification;

		/**
		 * Footer content
		 */
		footerContent: (string | PackageCore.Translation | PackageCore.Component | null);

		/**
		 * Content padding
		 */
		contentGap: (Window.GapSize | Window.GapSizeObject);

		/**
		 * True if label is defined
		 */
		hasLabel: boolean;

		/**
		 * True if icon is defined
		 */
		hasIcon: boolean;

		/**
		 * True if there is a footer content
		 */
		hasFooter: boolean;

	}

	namespace WindowBody {
		interface Options extends PackageCore.Component.Options {
			content?: (string | PackageCore.Translation | PackageCore.Component);

			icon?: Image.Source;

			label?: (string | PackageCore.Translation | PackageCore.Component);

			buttons?: (globalThis.Array<Button> | PackageCore.Component);

			buttonsJustification?: Window.ButtonsJustification;

			footerContent?: (string | PackageCore.Translation | PackageCore.Component);

			contentGap?: (Window.GapSize | Window.GapSizeObject);

		}

		enum ButtonsJustification {
			START,
			END,
			CENTER,
		}

	}

	export enum WindowCloseReason {
		CALL,
		FOCUSED,
		FOCUS_IN,
		FOCUS_OUT,
		ACTIVATED,
		ENTER,
		ESCAPE,
		SPACE,
		KEY,
		MOUSE_MOVE,
		MOUSE_LEAVE,
		CLICK,
		TOUCH,
		SCROLL,
		PARENT_CLOSED,
		CLOSE_BUTTON,
		DISPOSED,
		ITEM_ACTION,
		TIMEOUT,
		OK_BUTTON,
		CANCEL_BUTTON,
	}

	/**
	 * Window close strategy
	 */
	export class WindowCloseStrategy {
		static DEFAULT_MOUSE_DELAY: number;

		/**
		 * Closes window when the owner looses focus
		 */
		static focusOutside(component: (PackageCore.Component | null), options: (object | null)): WindowCloseStrategy.Handler;

		/**
		 * Closes window when mouse leaves owner or window area
		 */
		static mouseOutside(component: (PackageCore.Component | null), options: (object | null)): WindowCloseStrategy.Handler;

		/**
		 * Closes window when user clicks outside owner or window area
		 */
		static clickOutside(component: (PackageCore.Component | null), options: (object | null)): WindowCloseStrategy.Handler;

		/**
		 * Closes window when use scrolls
		 */
		static scrollOutside(component: (PackageCore.Component | null), options: (object | null)): WindowCloseStrategy.Handler;

		/**
		 * Closes window if user pressed given key
		 */
		static key(key: PackageCore.KeyCode, options: (object | null)): WindowCloseStrategy.Handler;

		/**
		 * Closes window when user pressed ESC
		 */
		static escape(): WindowCloseStrategy.Handler;

		/**
		 * Window can be closed only programmatically
		 */
		static none(): WindowCloseStrategy.Handler;

		/**
		 * Closes window if any of the provided strategies is truthy
		 */
		static anyOf(strategies: globalThis.Array<WindowCloseStrategy.Handler>): WindowCloseStrategy.Handler;

		/**
		 * Creates custom close strategy
		 */
		static custom(options: object): WindowCloseStrategy.Handler;

		/**
		 * Creates default close strategy
		 */
		static default(options: object): WindowCloseStrategy.Handler;

		/**
		 * Popover's default close strategy
		 */
		static popover(component: (PackageCore.Component | null), options: (object | null)): WindowCloseStrategy.Handler;

		/**
		 * Closes window when owner component loses focus or mouse cursor leaves window that is not active
		 */
		static focusedOrOver(component: (PackageCore.Component | null), options?: object): WindowCloseStrategy.Handler;

	}

	export namespace WindowCloseStrategy {
		type Handler = (window: Window) => PackageCore.RoutedMessage.Filter;

	}

	/**
	 * Window dragger
	 */
	class WindowDragger {
		/**
		 * Constructs WindowDragger
		 */
		constructor(options?: object);

		/**
		 * Attaches dragger
		 */
		attach(): void;

		/**
		 * Detaches dragger
		 */
		detach(): void;

		/**
		 * Processes message
		 */
		processMessage(next: PackageCore.RoutedMessage.Handler, message: PackageCore.RoutedMessage, result: PackageCore.RoutedMessage.Result): void;

	}

	namespace WindowDragger {
	}

	/**
	 * Window title bar
	 */
	export class WindowTitleBar extends PackageCore.Component {
		/**
		 * Constructs WindowTitleBar
		 */
		constructor(options?: WindowTitleBar.Options);

		/**
		 * Window title
		 */
		title: (string | number | PackageCore.Translation);

		/**
		 * Show maximize button
		 */
		maximizeButton: boolean;

		/**
		 * Show close button
		 */
		closeButton: boolean;

		/**
		 * Icon
		 */
		icon: Image.Source;

		/**
		 * Make title bar draggable
		 */
		draggable: boolean;

		/**
		 * Sets the title
		 */
		setTitle(title: (string | number | PackageCore.Translation)): void;

		static Event: WindowTitleBar.EventTypes;

	}

	export namespace WindowTitleBar {
		interface Options extends PackageCore.Component.Options {
			title?: (string | number | PackageCore.Translation);

			icon?: Image.Source;

			maximizeButton?: boolean;

			closeButton?: boolean;

			draggable?: boolean;

		}

		interface EventTypes extends PackageCore.Component.EventTypes {
			ICON_CLICKED: string;

			BUTTON_CLICKED: string;

			MOVE: string;

		}

		enum VisualStyle {
			DEFAULT,
		}

		enum Button {
			MINIMIZE,
			MAXIMIZE,
			CLOSE,
		}

	}

}
