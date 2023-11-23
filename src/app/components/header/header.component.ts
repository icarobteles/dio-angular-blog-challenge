import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject
} from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { SearchParamPipe } from "../../pipes";

/**
 * Componente responsável pelo cabeçalho da aplicação.
 */
@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterModule, SearchParamPipe],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() onSearchEvent = new EventEmitter<string>();
  private router = inject(Router);

  /**
   * Armazena tópicos de pesquisa principais para serem exibidos no menu de navegação.
   * @protected
   */
  protected mainTopics: string[] = ["UI Design", "Front-end", "Back-end"];

  /**
   * Armazena a última pesquisa realizada.
   * @private
   */
  private latestSearch: string = "";

  /**
   * Manipula o clique no ícone de pesquisa.
   * @param icon - O elemento do ícone clicado.
   */
  onSearchIconClick(icon: HTMLElement): void {
    const input = icon.nextElementSibling as HTMLInputElement;
    const event = new Event("search");
    input.dispatchEvent(event);
  }

  /**
   * Manipula o evento de pesquisa no input.
   * @param event - O evento de input associado à pesquisa.
   */
  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.value !== this.latestSearch) {
      this.latestSearch = inputElement.value;
      // TODO: Desenvolver a lógica da pesquisa
      this.onSearchEvent.emit(inputElement.value);
    }
    inputElement.value = "";
  }
}
