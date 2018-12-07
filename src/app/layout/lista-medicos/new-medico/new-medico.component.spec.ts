import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NewMedicoComponent } from './new-medico.component'
import { NewMedicoModule } from './new-medico.module'

describe('FormComponent', () => {
  let component: NewMedicoComponent
  let fixture: ComponentFixture<NewMedicoComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          NewMedicoModule,
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
