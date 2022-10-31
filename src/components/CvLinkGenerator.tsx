// generate  Cv Link url and return it
export function generateLinkCsv(name: string, language: string, summary: boolean, logo: string) {
    const isEnglish: boolean = language === "EN";
    const url = `https://europe-west3-cv-generator-342414.cloudfunctions.net/cv-generator-func?ENG=${isEnglish}&MS=${summary}&THEME=${logo}&PERSON=${name}&AUTH=uRHKfVAt5arP485D`;
    return url;
}
