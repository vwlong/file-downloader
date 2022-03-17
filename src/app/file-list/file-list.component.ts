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
  selectedList: File[];
  selectAll: boolean;
  numberSelected: number = 0;

  constructor(private filesService: FilesService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.files = this.filesService.getFiles();
  }

  checkUncheckAll(): void {
    for (var i = 0; i < this.files.length; i++) {
      this.files[i].selected = this.selectAll;
    }
    this.getSelectedFiles();
  }

  // Check if all files are selected
  isAllSelected(): void {
    this.selectAll = this.files.every((file: File) => {
      return file.selected;
    })
    this.getSelectedFiles();
  }

  // Get files selected and number of files selected
  getSelectedFiles(): void {
    this.selectedList = [];
    for (var i = 0; i < this.files.length; i++) {
      if (this.files[i].selected)
        this.selectedList.push(this.files[i]);
    }
    this.numberSelected = this.selectedList.length;
  }

  // Show path and device of files selected to download
  downloadFiles(): void {
    if (this.numberSelected == 0) {
      alert("No files selected.");
    }
    else {
      let displayFiles = "";
      this.selectedList.forEach(file => {
        if (file.status != "available") {
          displayFiles += "File '" + file.name + "' is not available for download. \n\n";
        } else {
          displayFiles += "File: " + file.name + ", Path: " + file.path + ", Device: " + file.device + "\n\n";
        }
      });
      alert(displayFiles);
    }
  }
}
