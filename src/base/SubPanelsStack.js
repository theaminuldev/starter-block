class SubPanelsStack {
    constructor(parent) {
        this.parent = parent;
        // console.log(parent);
    }

    getId() {
        // Implement your logic here
    }

    getTitle() {
        // Implement your logic here
    }

    getPanelId(PanelBaseId) {
        // Implement your logic here
        return PanelBaseId;
    }

    addPanel(id, args, options = {}) {
        // console.log(id);
        // console.log(args);
        return this.parent.addPanel(this.getPanelId(id), args, options);

    }

    updatePanel(id, args, options = {}) {
        this.parent.updatePanel(this.getPanelId(id), args, options);
    }

    removePanel(id) {
        this.parent.removePanel(this.getPanelId(id));
    }

    addGroupPanel(groupName, args, options = {}) {
        args.name = this.getPanelId(args.name);
        this.parent.addGroupPanel(groupName, args, options);
    }

    addResponsivePanel(id, args, options = {}) {
        this.parent.addResponsivePanel(this.getPanelId(id), args, options);
    }

    updateResponsivePanel(id, args) {
        this.parent.updateResponsivePanel(this.getPanelId(id), args);
    }

    removeResponsivePanel(id) {
        this.parent.removeResponsivePanel(this.getPanelId(id));
    }

    startPanelsSection(id, args = {}) {
        this.parent.startPanelsSection(this.getPanelId(id), args);
    }

    endPanelsSection() {
        this.parent.endPanelsSection();
    }

    startPanelsTabs(id) {
        this.parent.startPanelsTabs(this.getPanelId(id));
    }

    startPanelsTab(id, args) {
        this.parent.startPanelsTab(this.getPanelId(id), args);
    }

    endPanelsTab() {
        this.parent.endPanelsTab();
    }

    endPanelsTabs() {
        this.parent.endPanelsTabs();
    }
    
}

export default SubPanelsStack;