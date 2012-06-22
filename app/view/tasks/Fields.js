/*
 * File: app/view/tasks/Fields.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SimpleTasks.view.tasks.Fields', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.tasksfields',

    requires: [
        'SimpleTasks.view.override.tasks.Fields'
    ],

    border: false,
    margin: '0 0 5',
    layout: {
        align: 'stretch',
        type: 'hbox'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'datefield',
                    margin: '0 15 0 0',
                    width: 185,
                    name: 'due',
                    fieldLabel: 'Due Date',
                    labelWidth: 80
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Label',
                    flex: 1
                }
            ]
        });

        me.callParent(arguments);
    }

});