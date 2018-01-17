export const APP_HAS_ERRORED = 'APP_HAS_ERRORED';
export const APP_IS_LOADING = 'APP_IS_LOADING';
export const APP_IS_READY = 'APP_IS_READY';

export function appHasErrored(bool) {
    return {
        type: APP_HAS_ERRORED,
        hasErrored: bool
    };
}

export function appIsLoading(bool) {
    return {
        type: APP_IS_LOADING,
        isLoading: bool
    };
}

export function appIsReady(bool) {
    return {
        type: APP_IS_READY,
        isReady: bool
    };
}