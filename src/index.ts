// enum LogLevel {
//     ERROR, WARN, INFO, DEBUG
// }

// type LogLevelStrings = keyof typeof LogLevel;
// let logType: string = typeof LogLevel;

// function printImportant(key: LogLevelStrings, message: string){
//     const num = LogLevel[key];
//     if (num <= LogLevel[key]){
//         console.log('Log Level Key is',key);
//         console.log('Log Level Value is',num);
//         console.log('Log Level Message is',message);
//     }
// }

// printImportant('ERROR','This is a message');