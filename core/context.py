from dashboard.models import Program, Department

programs = Program.active_objects.all()
departments = Department.active_objects.all()

def data(request):
    return {
        'programs_menu': programs,
        'departments_menu': departments
    }