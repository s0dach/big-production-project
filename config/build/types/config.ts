
export type BuildMode = 'production' | 'development'
export type BuildPaths = {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface buildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}