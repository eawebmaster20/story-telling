import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../../services/dataService/data.service';

@Component({
  selector: 'app-preview-modal',
  standalone: true,
  imports: [],
  templateUrl: './preview-modal.component.html',
  styleUrl: './preview-modal.component.scss',
})
export class PreviewModalComponent {
  @Output() closePreviewModal = new EventEmitter<void>();

  constructor(public storyData: DataService) {
    this.closePreviewModalHandler = this.closePreviewModalHandler.bind(this);
  }

  closePreviewModalHandler(): void {
    this.closePreviewModal.emit();
  }
}
