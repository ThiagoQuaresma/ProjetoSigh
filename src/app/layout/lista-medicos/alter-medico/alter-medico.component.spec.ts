import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AlterMedicoComponent } from './alter-medico.component'
import { AlterMedicoModule } from './alter-medico.module'

describe('FormComponent', () => {
  let component: AlterMedicoComponent
  let fixture: ComponentFixture<AlterMedicoComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          AlterMedicoModule,
          BrowserAnimationsModule,
          RouterTestingModule,
         ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
