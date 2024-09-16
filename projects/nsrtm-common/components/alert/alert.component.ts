import { ChangeDetectionStrategy, Component, inject, TemplateRef } from '@angular/core';
import { AlertService } from './alert.service';
import { CommonModule } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'nsrtm-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  standalone: true,
  imports: [CommonModule, NgbToastModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {

  protected readonly toastService = inject(AlertService);

  
  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }

  geticon(clas: string | undefined) {
    if (clas != undefined)
      switch (clas.split(' ')[0]) {
        case 'bg-alert-success':
          return 'icon-check-circle';
        case 'bg-alert-warning':
          return 'icon-alert-triangle';
        case 'bg-alert-info':
          return 'icon-info';
        default:
          return 'icon-slash';
      }
    return '';
  }

  getTitulo(clas: string) {
    switch (clas.split(' ')[0]) {
      case 'bg-alert-success':
        return 'Mensaje de confirmación';
      case 'bg-alert-warning':
        return 'Mensaje de alerta';
      case 'bg-alert-info':
        return 'Mensaje informativo';
      default:
        return 'Mensaje fallido';
    }
  }
}
