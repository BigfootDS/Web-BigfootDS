export function isTargetEnvironment(targetEnvironment){
	return (process.env.NODE_ENV === targetEnvironment) ? true: false;
}

export function isDev () {
    return isTargetEnvironment("development");
}

export function isTest () {
    return isTargetEnvironment("test");
}

export function isProd () {
    return isTargetEnvironment("production");
}

