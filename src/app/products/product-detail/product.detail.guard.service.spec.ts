/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Product.detail.guardService } from './product.detail.guard.service';

describe('Service: Product.detail.guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Product.detail.guardService]
    });
  });

  it('should ...', inject([Product.detail.guardService], (service: Product.detail.guardService) => {
    expect(service).toBeTruthy();
  }));
});
