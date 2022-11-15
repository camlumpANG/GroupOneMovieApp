import { Result } from "./result";

export interface Movies {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

