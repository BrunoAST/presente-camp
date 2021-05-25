import {useEffect, useState} from 'react';

const useReportSignUpProgress = (modelData: any, entries: string[]) => {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        function updateProgress(): void {
            let definedEntries = 0;
            for(const key in modelData) {
                console.log(modelData)
                if (modelData[key] != undefined){
                    definedEntries++;
                }
            }

            setProgress(((definedEntries * entries.length)/100) * 100);
        }

        updateProgress();
    }, [modelData]);

    return {progress};
};

export default useReportSignUpProgress;
