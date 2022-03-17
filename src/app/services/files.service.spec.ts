import { TestBed } from '@angular/core/testing';
import { FilesService } from './files.service';
import { FILE_LIST } from '../../assets/testing/FILE_LIST';

describe('FilesService', () => {
  let service: FilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return file list data', () => {
    expect(service.getFiles()).toEqual(FILE_LIST);
  });
});
