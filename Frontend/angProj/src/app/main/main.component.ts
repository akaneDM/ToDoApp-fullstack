import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  list: any[] = [];
  newText: string = '';
  lightMode = false;
  currentFilter: 'all' | 'active' | 'completed' = 'all';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    if (this.currentFilter === 'active') {
      this.apiService.getActiveItems().subscribe(data => this.list = data);
    } else if (this.currentFilter === 'completed') {
      this.apiService.getCompletedItems().subscribe(data => this.list = data);
    } else {
      this.apiService.getItems().subscribe(data => this.list = data);
    }
  }

  addTodo() {
    if (!this.newText.trim()) return;

    const itemToSend = {
      text: this.newText,
      isCompleted: false
    };

    this.apiService.addNewItem(itemToSend).subscribe({
      next: (createdItem) => {
        if (this.currentFilter !== 'completed') {
          this.list.push(createdItem);
        }
        this.newText = '';
      },
      error: (err) => console.error('Error adding item:', err)
    });
  }

  setFilter(filter: 'all' | 'active' | 'completed') {
    this.currentFilter = filter;
    this.loadData();
  }

  toggleActive(id: number) {
    this.apiService.updateItemStatus(id).subscribe({
      next: (updatedItem) => {
        if (this.currentFilter !== 'all') {
          this.list = this.list.filter(item => item.id !== id);
        } else {
          const index = this.list.findIndex(item => item.id === id);
          if (index !== -1) {
            this.list[index] = updatedItem;
          }
        }
      },
      error: (err) => console.error('Error updating status:', err)
    });
  }

  deleteItem(id: number) {
    this.apiService.deleteItem(id).subscribe({
      
      next: () => {
        this.list = this.list.filter(item => item.id !== id);
      }
    });
  }

  get listSize() {
    return this.list.filter(item => !item.isCompleted).length;
  }

  clearCompleted() {
    const completedItems = this.list.filter(item => item.isCompleted);
    completedItems.forEach(item => {
      this.deleteItem(item.id);
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.currentFilter === 'all') {
      moveItemInArray(this.list, event.previousIndex, event.currentIndex);
    }
  }

  toggleTheme() {
    this.lightMode = !this.lightMode;
    document.documentElement.classList.toggle('light-mode');
  }
}