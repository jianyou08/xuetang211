
    document.addEventListener("DOMContentLoaded", function() {  
        const contentDiv = document.getElementById("content");  
        const jsonUrl = "data.json"; // JSON文件路径，假设与HTML文件在同一目录下  
        let itemsPerRow = 4; // 默认每行显示4个数据项  
  
        // 检查浏览器宽度并调整每行显示的数据项数量  
        if (window.innerWidth <= 767) {  
            itemsPerRow = 2; // 在小屏幕设备（如手机）上每行显示1个数据项  
        }

        console.log("itemsPerRow="+itemsPerRow)
  
        // 加载JSON数据并动态创建表格  
        fetch(jsonUrl)  
            .then(response => response.json())  
            .then(data => {  
                if (data.length > 0) {  
                    const table = document.createElement("table"); 
                    table.className = "itemsTable"
                    const thead = document.createElement("thead");  
                    const tbody = document.createElement("tbody");  

                    const tr = document.createElement("tr");
                    for (let k = 0; k < itemsPerRow; k++, k++) {
                        const th = document.createElement("th");
                        th.style = "width: " + 100 / itemsPerRow + "%;";
                        tr.appendChild(th);
                    }
                    thead.appendChild(tr);
                    table.appendChild(thead);

                    for (let i = 0; i < data.length;) {
                        let imgRow = document.createElement("tr");  
                        tbody.appendChild(imgRow);  
                        for (let j = 0; j < itemsPerRow && i < data.length; j++, i++) {
                            item = data[i];
                            const td = document.createElement("td");

                            let itemDiv = document.createElement("div");   
                            let imgDiv = document.createElement("div"); 
                            const img = document.createElement("img");  
                            img.src = item.img;  
                            img.alt = item.title;  
                            imgDiv.appendChild(img);
                            itemDiv.appendChild(imgDiv)

                            const descDiv = document.createElement("div");  
                            descDiv.textContent = item.title;
                            if(item.desc) {
                                descDiv.textContent = item.title + '：' + item.desc;
                            }     
                            itemDiv.appendChild(descDiv);

                            td.appendChild(itemDiv)

                            imgRow.appendChild(td); 

                            
                        }
                        // let imgRow = document.createElement("tr");  
                        // let descRow = document.createElement("tr"); 
                        // tbody.appendChild(imgRow);  
                        // tbody.appendChild(descRow);  
                        // for (let j = 0; j < itemsPerRow && i < data.length; j++, i++) {
                        //     item = data[i];
                        //     const tdImg = document.createElement("td");  
                        //     const img = document.createElement("img");  
                        //     img.src = item.img;  
                        //     img.alt = item.title;  
                        //     tdImg.appendChild(img);  
                        //     imgRow.appendChild(tdImg); 

                        //     const tdDesc = document.createElement("td");  
                        //     tdDesc.textContent = item.desc;  
                        //     descRow.appendChild(tdDesc);   
                        // }
                    }
  
                    table.appendChild(tbody);  
                    contentDiv.appendChild(table);  
                } else {  
                    contentDiv.textContent = "没有数据可显示";  
                }  
            })  
            .catch(error => {  
                console.error("加载JSON数据时出错:", error);  
                contentDiv.textContent = "加载数据时出错";  
            });  
    });  