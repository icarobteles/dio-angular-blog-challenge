import { Pipe, type PipeTransform } from "@angular/core";

@Pipe({
  name: "searchParam",
  standalone: true
})
export class SearchParamPipe implements PipeTransform {
  transform(value: string): string {
    const lowercasedValue = value.trim().toLowerCase();
    return encodeURIComponent(lowercasedValue.replace(/ /g, "-"));
  }
}
