export const streamText = (
    text: string,
    onUpdate: (value: string) => void,
    speed = 15,
    signal?: AbortSignal
): Promise<void> => {

    return new Promise((resolve) => {

        let index = 0;

        const interval = setInterval(() => {

            if (signal?.aborted) {
                clearInterval(interval);
                resolve();
                return;
            }

            index++;

            onUpdate(text.slice(0, index));

            if (index >= text.length) {

                clearInterval(interval);

                resolve();
            }

        }, speed);

    });

};
