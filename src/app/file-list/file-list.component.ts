import { Component, OnInit } from '@angular/core';
import { File } from '../classes/file';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  files: File[] = [];

  constructor(private filesService: FilesService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.files = this.filesService.getFiles()
  }

  checkAllCheckBox(ev: any) {
    this.files.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.files.every(x => x.checked);
  }

}
